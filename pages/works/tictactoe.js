import { Box, Container, Heading, SimpleGrid, Divider } from '@chakra-ui/react'
import Layout from '../../components/layouts/article'
import Section from '../../components/section'
import { WorkGridItem } from '../../components/grid-item'
import Head from "next/head";
import Board from "../../components/board";
const tictactoe = () => (
    <Layout title="Tic Tac Toe">
      <Container maxW="min-content">
        <Heading as="h3" fontSize={20} mb={4}>
          Tic Tac Toe
        </Heading>

        <SimpleGrid m={2} gap={6} gridGap={2}>
          <Section >
            <Board/>
          </Section>
        </SimpleGrid>
      </Container>
  </Layout>
)

export default tictactoe