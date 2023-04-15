import { Container, Heading, SimpleGrid, Divider, Button, Box } from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { WorkGridItem } from '../components/grid-item'
import {SiGooglecloud} from 'react-icons/si'
import { ChevronRightIcon, EmailIcon } from '@chakra-ui/icons'
import { IoCodeSlash } from 'react-icons/io5'

import gcp from '../public/images/projects/gcp.png'
import dicoding from '../public/images/projects/dicoding.png'

const Works = () => (
  <Layout title="Certificate Courses">
    <Container>
      <Heading as="h3" fontSize={20} mb={4}>
      Certificate Courses
      </Heading>

      <SimpleGrid columns={[1, 1, 2]} gap={6}>
        <Section>
          <WorkGridItem
            id="skillboost" 
            title="Google Skill Boost"
            thumbnail={gcp}>
          </WorkGridItem>
        </Section>
        <Section>
          <WorkGridItem
              id="dicoding"
              title="Dicoding"
              thumbnail={dicoding}>
            </WorkGridItem>
        </Section>
      </SimpleGrid>
    </Container>
  </Layout>
)

export default Works
export { getServerSideProps } from '../components/chakra'
