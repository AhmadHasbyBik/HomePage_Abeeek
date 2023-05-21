import { Box, Container, Heading, SimpleGrid, Divider } from '@chakra-ui/react'
import Layout from '../../components/layouts/article'
import Section from '../../components/section'
import { WorkGridItem } from '../../components/grid-item'
import Head from "next/head";
import Snake from "../../components/snake";
import { Title, Meta } from '../../components/game'

const snake = () => (
    <Layout title="Snake">
      <Container maxW="min-content">
        <Title>
        Snake
        </Title>

        <SimpleGrid>
            <Snake/>
        </SimpleGrid>
      </Container>
  </Layout>
)

export default snake