import { Container, Heading, SimpleGrid, Divider } from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { WorkGridItem } from '../components/grid-item'

import Digibeeek from '../public/images/projects/digibeek.png'
import KRS from '../public/images/projects/krs.png'
import Auth from '../public/images/projects/auth.png'
import Netflix from '../public/images/projects/Netflix.png'
import Pegawai from '../public/images/projects/pegawai.png'
import Face from '../public/images/projects/facedet.png'
import LinkItem from 'next/link'

const Projects = () => (
  <Layout title="Projects">
    <Container>
      <Heading as="h3" fontSize={20} mb={4}>
        Web Projects
      </Heading>

      <SimpleGrid columns={[1, 1, 2]} gap={6}>
        <Section>
          <WorkGridItem
            id="digibeeek" 
            title="Digibeeek"
            thumbnail={Digibeeek}>
            a simple gadget online shop using Laravel
          </WorkGridItem>
        </Section>
        <Section>
          <WorkGridItem
              id="auth"
              title="Authentication Credentials"
              thumbnail={Auth}
            >
              a login website with Google account or Github account using Nextjs
            </WorkGridItem>
        </Section>

        <Section delay={0.1}>
        <WorkGridItem
            id="krs"
            title="Course Registration Application"
            thumbnail={KRS}
          >
            a course registration application with login and admin features using Codeigniter 4
          </WorkGridItem>
        </Section>
        <Section delay={0.1}>
        <WorkGridItem
            id="netflix"
            title="Netflix Page"
            thumbnail={Netflix}
          >
            a Front End website using materialUI and Nextjs
          </WorkGridItem>
        </Section>
        <Section delay={0.1}>
        <WorkGridItem
            id="pegawai"
            title="Staff Data"
            thumbnail={Pegawai}
          >
            a CRUD website using Laravel
          </WorkGridItem>
        </Section>
      </SimpleGrid>

      <Section delay={0.2}>
        <Divider my={6} />

        <Heading as="h3" fontSize={20} mb={4}>
          AI Projects
        </Heading>
      </Section>

      <SimpleGrid columns={[1, 1, 2]} gap={6}>
        <Section delay={0.3}>
          <WorkGridItem id="facedet" thumbnail={Face} title="Face Detection">
            a face detection using Cascade algorithm and bounding box
          </WorkGridItem>
        </Section>
      </SimpleGrid>

    </Container>
  </Layout>
)

export default Projects
export { getServerSideProps } from '../components/chakra'
