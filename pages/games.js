import { Container, Heading, SimpleGrid, Divider } from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { WorkGridItem } from '../components/grid-item'

import tictactoe from '../public/images/projects/tictactoe.png'
import match from '../public/images/projects/memory.png'
import LinkItem from 'next/link'

const Works = () => (
  <Layout title="Games">
    <Container>
      <Heading as="h3" fontSize={20} mb={4}>
        Games
      </Heading>

      <SimpleGrid columns={[1, 1, 2]} gap={6}>
        <Section>
          <WorkGridItem
            id="tictactoe" 
            title="Tic Tac Toe"
            thumbnail={tictactoe}>
             a two-player game typically played on a 3x3 grid
          </WorkGridItem>
        </Section>

        <Section>
          <WorkGridItem
            id="match" 
            title="Matching Objects"
            thumbnail={match}>
             a player need to remember the location of various objects
          </WorkGridItem>
        </Section>
        
      </SimpleGrid>
    </Container>
  </Layout>
)

export default Works
export { getServerSideProps } from '../components/chakra'
