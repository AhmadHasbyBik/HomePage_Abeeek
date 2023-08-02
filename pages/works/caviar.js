import {
  Container,
  Badge,
  Link,
  List,
  ListItem,
  SimpleGrid,
  UnorderedList,
  Heading,
  Center
} from '@chakra-ui/react'
import Layout from '../../components/layouts/article'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'

const Work = () => (
  <Layout title="Caviar">
    <Container>
      <Title>
        CAVIAR App <Badge>Crosswalk Assistance App for the Visually Impaired Peoples</Badge>
      </Title>
      <P>
      An app designed to assist visually impaired individuals in safely crossing roads or crosswalks. The app likely utilizes accessibility features, GPS, audio guidance, and smartphone sensors to help users navigate crosswalks more safely. 
      </P>
      <P>This is my Final Project on Bangkit Academy, my part on this app is as cloud computing path who make API for this app</P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Platform</Meta>
          <span>Windows/macOS/Linux/iOS/Android</span>
        </ListItem>
        <ListItem>
          <Meta>Github</Meta>
          <Link href="https://github.com/caviar-bangkit">
            CAVIAR App Bangkit Academy{' '}
            <ExternalLinkIcon mx="2px" />, <br></br>
          </Link>
          <Link href="hhttps://github.com/AhmadHasbyBik/CAVIAR_FE.React">
            CAVIAR Admin Bangkit Academy{' '}
            <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>Spring, Kotlin, Python, TensorFlow Lite, ReactJS, Express, JavaScript, MySQL</span>
        </ListItem>
      </List>
      <Meta>Android</Meta>
      <WorkImage src="/images/projects/caviar1.png" alt="caviar" />
      <WorkImage src="/images/projects/caviar2.png" alt="caviar" />
      <WorkImage src="/images/projects/caviar3.png" alt="caviar" />
      <WorkImage src="/images/projects/caviar4.png" alt="caviar" />
      <WorkImage src="/images/projects/caviar5.png" alt="caviar" />
      <Meta>Admin Web</Meta>
      <WorkImage src="/images/projects/caviar6.png" alt="caviar" />
      <WorkImage src="/images/projects/caviar7.png" alt="caviar" />
      <WorkImage src="/images/projects/caviar8.png" alt="caviar" />
    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'