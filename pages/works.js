import { Container, Heading, SimpleGrid, Divider } from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { WorkGridItem } from '../components/grid-item'

import Digibeeek from '../public/images/projects/digibeek.png'
import KRS from '../public/images/projects/krs.png'
import Caviar from '../public/images/projects/caviar.png'
import Cuti from '../public/images/projects/cutix.png'
import Pegawai from '../public/images/projects/pegawai.png'
import Face from '../public/images/projects/facedet.png'
import LinkItem from 'next/link'

const Works = () => (
  <Layout title="Project">
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
            a simple gadget online shop
          </WorkGridItem>
        </Section>
        <Section delay={0.1}>
        <WorkGridItem
            id="krs"
            title="Course Registration Application"
            thumbnail={KRS}
          >
            a course registration application with login and admin features
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
        <Section delay={0.1}>
        <WorkGridItem
            id="cuti"
            title="Official Leave Application Website"
            thumbnail={Cuti}
          >
            an Official Leave Application Website
          </WorkGridItem>
        </Section>
        <Section delay={0.1}>
          <WorkGridItem
              id="caviar"
              title="CAVIAR App"
              thumbnail={Caviar}
            >
              a Crosswalk Assistance App for the Visually Impaired Peoples
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

export default Works
export { getServerSideProps } from '../components/chakra'
