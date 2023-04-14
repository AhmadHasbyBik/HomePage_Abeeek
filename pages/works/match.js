import { Box, Container, Heading, SimpleGrid, Divider } from '@chakra-ui/react'
import Layout from '../../components/layouts/article'
import Section from '../../components/section'
import { WorkGridItem } from '../../components/grid-item'
import Head from "next/head";
import Match from "../../components/matching";
const match = () => (
    <Layout title="Matching Objects">
      <Container maxW="min-content">
        <Heading as="h3" fontSize={20} mb={4}>
          Matching Objects
        </Heading>

        <SimpleGrid m={2} gap={6} gridGap={2}>
          <Section >
            <Match/>
          </Section>
        </SimpleGrid>
      </Container>
  </Layout>
)

export default match