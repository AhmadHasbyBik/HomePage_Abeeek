import { Container, Heading, SimpleGrid, Divider, Button, Box } from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { WorkGridItem } from '../components/grid-item'
import {SiGooglecloud} from 'react-icons/si'
import { ChevronRightIcon, EmailIcon } from '@chakra-ui/icons'
import { IoCodeSlash } from 'react-icons/io5'

import NextLink from 'next/link'

const Courses = () => (
  <Layout title="Courses Sertificates">
    <Container>
      <Heading as="h3" fontSize={20} mb={4}>
      Courses Sertificates
      </Heading>

      <SimpleGrid columns={[1, 1, 2]} gap={6}>
        <Section>
        <Box align="center" my={4}>
          <Button
            as={NextLink}
            href="https://www.cloudskillsboost.google/public_profiles/02b8fd9f-178c-4566-9e53-a505afc52838"
            rightIcon={<ChevronRightIcon />}
            colorScheme="pink"
          >
            <SiGooglecloud/>
            &nbsp;GoogleSkillBoost
          </Button>
        </Box>
        </Section>

        <Section>
        <Box align="center" my={4}>
          <Button
            as={NextLink}
            href="https://www.dicoding.com/users/abikahmad/academies"
            rightIcon={<ChevronRightIcon />}
            colorScheme="purple"
          >
            <IoCodeSlash />
            &nbsp;Dicoding
          </Button>
        </Box>
        </Section>
        
      </SimpleGrid>
    </Container>
  </Layout>
)

export default Courses
export { getServerSideProps } from '../components/chakra'
