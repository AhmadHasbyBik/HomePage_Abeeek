import { Box, Container, Heading, SimpleGrid, Divider } from '@chakra-ui/react'
import Layout from '../../components/layouts/article'
import Section from '../../components/section'
import { WorkGridItem } from '../../components/grid-item'
import Head from "next/head";
import Board from "../../components/board";
import { Title, Meta } from '../../components/game'

const tictactoe = () => (
    <Layout title="Tic Tac Toe">
      <Container maxW="min-content">
        <Title>
        Tic Tac Toe
        </Title>

        <SimpleGrid>
            <Board/>
        </SimpleGrid>
      </Container>
  </Layout>
)

export default tictactoe