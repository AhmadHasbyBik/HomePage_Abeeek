import { useState, useEffect, useRef } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import useInterval from '@use-it/interval'
import { FaArrowAltCircleUp,FaArrowAltCircleRight,FaArrowAltCircleLeft,FaArrowAltCircleDown } from 'react-icons/fa'
import {
  Link,
  Container,
  Heading,
  Box,
  SimpleGrid,
  Button,
  List,
  ListItem,
  useColorModeValue,
  chakra,
  Icon,
  Text
} from '@chakra-ui/react'

type Apple = {
  x: number
  y: number
}

type Velocity = {
  dx: number
  dy: number
}

export default function SnakeGame() {
  // Canvas Settings
  const canvasRef = useRef<HTMLCanvasElement | null>(null)
  const canvasWidth = 500
  const canvasHeight = 380
  const canvasGridSize = 20

  // Game Settings
  const minGameSpeed = 10
  const maxGameSpeed = 15

  // Game State
  const [gameDelay, setGameDelay] = useState<number>(1000 / minGameSpeed)
  const [countDown, setCountDown] = useState<number>(4)
  const [running, setRunning] = useState(false)
  const [isLost, setIsLost] = useState(false)
  const [highscore, setHighscore] = useState(0)
  const [newHighscore, setNewHighscore] = useState(false)
  const [score, setScore] = useState(0)
  const [snake, setSnake] = useState<{
    head: { x: number; y: number }
    trail: Array<any>
  }>({
    head: { x: 12, y: 9 },
    trail: [],
  })
  const [apple, setApple] = useState<Apple>({ x: -1, y: -1 })
  const [velocity, setVelocity] = useState<Velocity>({ dx: 0, dy: 0 })
  const [previousVelocity, setPreviousVelocity] = useState<Velocity>({
    dx: 0,
    dy: 0,
  })

  const clearCanvas = (ctx: CanvasRenderingContext2D) =>
    ctx.clearRect(-1, -1, canvasWidth + 2, canvasHeight + 2)

  const generateApplePosition = (): Apple => {
    const x = Math.floor(Math.random() * (canvasWidth / canvasGridSize))
    const y = Math.floor(Math.random() * (canvasHeight / canvasGridSize))
    // Check if random position interferes with snake head or trail
    if (
      (snake.head.x === x && snake.head.y === y) ||
      snake.trail.some((snakePart) => snakePart.x === x && snakePart.y === y)
    ) {
      return generateApplePosition()
    }
    return { x, y }
  }

  // Initialise state and start countdown
  const startGame = () => {
    setGameDelay(1000 / minGameSpeed)
    setIsLost(false)
    setScore(0)
    setSnake({
      head: { x: 12, y: 9 },
      trail: [],
    })
    setApple(generateApplePosition())
    setVelocity({ dx: 0, dy: -1 })
    setRunning(true)
    setNewHighscore(false)
    setCountDown(3)
  }

  // Reset state and check for highscore
  const gameOver = () => {
    if (score > highscore) {
      setHighscore(score)
      localStorage.setItem('highscore', score.toString())
      setNewHighscore(true)
    }
    setIsLost(true)
    setRunning(false)
    setVelocity({ dx: 0, dy: 0 })
    setCountDown(4)
  }

  const fillRect = (
    ctx: CanvasRenderingContext2D,
    x: number,
    y: number,
    w: number,
    h: number
  ) => {
    ctx.fillRect(x, y, w, h)
  }

  const strokeRect = (
    ctx: CanvasRenderingContext2D,
    x: number,
    y: number,
    w: number,
    h: number
  ) => {
    ctx.strokeRect(x + 0.5, y + 0.5, w, h)
  }

  const drawSnake = (ctx: CanvasRenderingContext2D) => {
    ctx.fillStyle = '#0170F3'
    ctx.strokeStyle = '#003779'

    fillRect(
      ctx,
      snake.head.x * canvasGridSize,
      snake.head.y * canvasGridSize,
      canvasGridSize,
      canvasGridSize
    )

    strokeRect(
      ctx,
      snake.head.x * canvasGridSize,
      snake.head.y * canvasGridSize,
      canvasGridSize,
      canvasGridSize
    )

    snake.trail.forEach((snakePart) => {
      fillRect(
        ctx,
        snakePart.x * canvasGridSize,
        snakePart.y * canvasGridSize,
        canvasGridSize,
        canvasGridSize
      )

      strokeRect(
        ctx,
        snakePart.x * canvasGridSize,
        snakePart.y * canvasGridSize,
        canvasGridSize,
        canvasGridSize
      )
    })
  }

  const drawApple = (ctx: CanvasRenderingContext2D) => {
    ctx.fillStyle = '#DC3030' // '#38C172' // '#F4CA64'
    ctx.strokeStyle = '#881A1B' // '#187741' // '#8C6D1F

    if (
      apple &&
      typeof apple.x !== 'undefined' &&
      typeof apple.y !== 'undefined'
    ) {
      fillRect(
        ctx,
        apple.x * canvasGridSize,
        apple.y * canvasGridSize,
        canvasGridSize,
        canvasGridSize
      )

      strokeRect(
        ctx,
        apple.x * canvasGridSize,
        apple.y * canvasGridSize,
        canvasGridSize,
        canvasGridSize
      )
    }
  }

  // Update snake.head, snake.trail and apple positions. Check for collisions.
  const updateSnake = () => {
    // Check for collision with walls
    const nextHeadPosition = {
      x: snake.head.x + velocity.dx,
      y: snake.head.y + velocity.dy,
    }
    if (
      nextHeadPosition.x < 0 ||
      nextHeadPosition.y < 0 ||
      nextHeadPosition.x >= canvasWidth / canvasGridSize ||
      nextHeadPosition.y >= canvasHeight / canvasGridSize
    ) {
      gameOver()
    }

    // Check for collision with apple
    if (nextHeadPosition.x === apple.x && nextHeadPosition.y === apple.y) {
      setScore((prevScore) => prevScore + 1)
      setApple(generateApplePosition())
    }

    const updatedSnakeTrail = [...snake.trail, { ...snake.head }]
    // Remove trail history beyond snake trail length (score + 2)
    while (updatedSnakeTrail.length > score + 2) updatedSnakeTrail.shift()
    // Check for snake colliding with itsself
    if (
      updatedSnakeTrail.some(
        (snakePart) =>
          snakePart.x === nextHeadPosition.x &&
          snakePart.y === nextHeadPosition.y
      )
    )
      gameOver()

    // Update state
    setPreviousVelocity({ ...velocity })
    setSnake({
      head: { ...nextHeadPosition },
      trail: [...updatedSnakeTrail],
    })
  }

  // Game Hook
  useEffect(() => {
    const canvas = canvasRef?.current
    const ctx = canvas?.getContext('2d')

    if (ctx && !isLost) {
      clearCanvas(ctx)
      drawApple(ctx)
      drawSnake(ctx)
    }
  }, [snake])

  // Game Update Interval
  useInterval(
    () => {
      if (!isLost) {
        updateSnake()
      }
    },
    running && countDown === 0 ? gameDelay : null
  )

  // Countdown Interval
  useInterval(
    () => {
      setCountDown((prevCountDown) => prevCountDown - 1)
    },
    countDown > 0 && countDown < 4 ? 800 : null
  )

  // DidMount Hook for Highscore
  useEffect(() => {
    setHighscore(
      localStorage.getItem('highscore')
        ? parseInt(localStorage.getItem('highscore')!)
        : 0
    )
  }, [])

  // Score Hook: increase game speed starting at 16
  useEffect(() => {
    if (score > minGameSpeed && score <= maxGameSpeed) {
      setGameDelay(1000 / score)
    }
  }, [score])

  // Event Listener: Key Presses
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (
        [
          'FaArrowAltCircleUp',
          'FaArrowAltCircleDown',
          'FaArrowAltCircleLeft',
          'FaArrowAltCircleRight',
          'w',
          'a',
          's',
          'd',
        ].includes(e.key)
      ) {
        let velocity = { dx: 0, dy: 0 }

        switch (e.key) {
          case 'FaArrowAltCircleRight':
            velocity = { dx: 1, dy: 0 }
            break
          case 'FaArrowAltCircleLeft':
            velocity = { dx: -1, dy: 0 }
            break
          case 'FaArrowAltCircleDown':
            velocity = { dx: 0, dy: 1 }
            break
          case 'FaArrowAltCircleUp':
            velocity = { dx: 0, dy: -1 }
            break
          case 'd':
            velocity = { dx: 1, dy: 0 }
            break
          case 'a':
            velocity = { dx: -1, dy: 0 }
            break
          case 's':
            velocity = { dx: 0, dy: 1 }
            break
          case 'w':
            velocity = { dx: 0, dy: -1 }
            break
          default:
            console.error('Error with handleKeyDown')
        }
        if (
          !(
            previousVelocity.dx + velocity.dx === 0 &&
            previousVelocity.dy + velocity.dy === 0
          )
        ) {
          setVelocity(velocity)
        }
      }
    }

    document.addEventListener('keydown', handleKeyDown)
    return () => {
      document.removeEventListener('keydown', handleKeyDown)
    }
  }, [previousVelocity])

  return (
    <>
      <main>
        <canvas
          ref={canvasRef}
          width={canvasWidth + 1}
          height={canvasHeight + 1}
        />
        <section>
          <div className="score">
          <Box
            borderRadius="lg"
            mb={6}
            p={3}
            textAlign="center"
            bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
            css={{ backdropFilter: 'blur(10px)' }}
          >
            Highscore: {highscore > score ? highscore : score}<br/>
            Score: {score}
          </Box>
          </div>
          {!isLost && countDown > 0 ? (
            <Button
              onClick={startGame}
              colorScheme="teal"
            >
              {countDown === 4 ? 'Start Game' : countDown}
            </Button>
          ) : (
            <div className="controls">
             
            </div>
          )}
        </section>
        {isLost && (
          <div className="game-overlay">
            <Box
              borderRadius="lg"
              mb={6}
              p={3}
              textAlign="center"
              bg={useColorModeValue('red.500', 'red.200')}
              css={{ backdropFilter: 'blur(10px)' }}
            > 
            Game Over
            </Box>
            {!running && isLost && (
              <Button
                onClick={startGame}
                colorScheme="purple"
              >
                {countDown === 4 ? 'Restart Game' : countDown}
              </Button>
              
            )}
          </div>
        )}
      </main>
    </>
  )
}