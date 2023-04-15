import { Box, Container, Heading, SimpleGrid, Divider } from '@chakra-ui/react'
import Layout from '../../components/layouts/article'
import Section from '../../components/section'
import { WorkGridItem } from '../../components/grid-item'
import Head from "next/head";
import Match from "../../components/matching"
import { Title, Meta } from '../../components/game'

const match = () => (
    <Layout title="Matching Objects">
      <Container maxW="min-content">
        <Title>
          Matching Objects
        </Title>

        <SimpleGrid>
          <Section >
            <Match/>
          </Section>
        </SimpleGrid>
      </Container>
  </Layout>
)

export default match