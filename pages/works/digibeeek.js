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
  <Layout title="Digibeeek">
    <Container>
      <Title>
        Digibeeek <Badge>Online Gadget Shop</Badge>
      </Title>
      <P>
      The simple gadget online shop was a one-stop-shop for all kinds of gadgets. 
      From smartphones and tablets to laptops and smartwatches, 
      they had it all. The online shop had a simple and user-friendly interface that made it easy for 
      customers to browse through their extensive collection of gadgets and find what they were looking for.
      </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Platform</Meta>
          <span>Windows/macOS/Linux/iOS/Android</span>
        </ListItem>
        <ListItem>
          <Meta>Github</Meta>
          <Link href="https://github.com/AhmadHasbyBik/E-Commerce_Handphone.Laravel">
            E-Commerce Handphone{' '}
            <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>Laravel, PHP, MySQL</span>
        </ListItem>
      </List>

      <WorkImage src="/images/projects/digibeek1.png" alt="digibeeek" />
      <WorkImage src="/images/projects/digibeek2.png" alt="digibeeek" />
      <WorkImage src="/images/projects/digibeek3.png" alt="digibeeek" />
      <WorkImage src="/images/projects/digibeek.png" alt="digibeeek" />
      <WorkImage src="/images/projects/digibeek4.png" alt="digibeeek" />
      <WorkImage src="/images/projects/digibeek5.png" alt="digibeeek" />
      <WorkImage src="/images/projects/digibeek6.png" alt="digibeeek" />
      <WorkImage src="/images/projects/digibeek7.png" alt="digibeeek" />
    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'