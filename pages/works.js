import { Container, Heading, SimpleGrid, Divider } from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { WorkGridItem } from '../components/grid-item'

import Digibeeek from '../public/images/works/digibeek.png'
import KRS from '../public/images/works/krs.png'
import Auth from '../public/images/works/auth.png'
import Netflix from '../public/images/works/netflix.png'
import Pegawai from '../public/images/works/pegawai.png'
import Face from '../public/images/works/facedet.png'
import LinkItem from 'next/link'

const Works = () => (
  <Layout title="Works">
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
            A simple gadget online shop build with Laravel
          </WorkGridItem>
        </Section>
        <Section>
          <WorkGridItem
              id="auth"
              title="Authentication Credentials"
              thumbnail={Auth}
            >
              A login website with Google account or Github account, build with Nextjs
            </WorkGridItem>
        </Section>

        <Section delay={0.1}>
        <WorkGridItem
            id="krs"
            title="Pengisian KRS"
            thumbnail={KRS}
          >
            A course registration application, you can login as Admin and login as Student, build with Codeigniter 4
          </WorkGridItem>
        </Section>
        <Section delay={0.1}>
        <WorkGridItem
            id="netflix"
            title="Netflix Page"
            thumbnail={Netflix}
          >
            A FrontEnd website build with materialUI and Nextjs
          </WorkGridItem>
        </Section>
        <Section delay={0.1}>
        <WorkGridItem
            id="pegawai"
            title="Data Pegawai"
            thumbnail={Pegawai}
          >
            A CRUD website build with Laravel
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
            A face detection with Cascade algorithm and bounding box
          </WorkGridItem>
        </Section>
      </SimpleGrid>

    </Container>
  </Layout>
)

export default Works
export { getServerSideProps } from '../components/chakra'
