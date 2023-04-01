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
  <Layout title="Authentication">
    <Container>
      <Title>
        Authentication <Badge>Google and Github</Badge>
      </Title>
      <P>
      When a user wanted to sign up or log in to a website or application that used these authentication methods, they would be prompted to choose either their Google or GitHub account to log in. Once they selected their preferred option, they would be redirected to the authentication page of that platform.
      </P>
      <P>
      For Google and Github authentication, the user would be asked to provide their Google and Github credentials, such as their email address and password. They would then be asked to authorize the application or website to access certain information from their Google or Github account, such as their name and email address. Once the user authorized access, they would be redirected back to the application or website, and they would be logged in.
      </P>
      <P>
      Both Google and GitHub authentication methods provided a secure and easy way for users to log in to websites and applications without having to create a new account or remember a new set of credentials. This made it convenient for users to access multiple applications and websites without having to manage multiple login credentials.
      </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Platform</Meta>
          <span>Windows/macOS/Linux/iOS/Android</span>
        </ListItem>
        <ListItem>
          <Meta>Github</Meta>
          <Link href="https://github.com/AhmadHasbyBik/Auth_Credentials.NextJS">
            Authentication Credentials{' '}
            <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>NextJS, JavaScript, MongoDB Atlas</span>
        </ListItem>
      </List>

      <WorkImage src="/images/projects/auth.png" alt="auth" />
      <WorkImage src="/images/projects/auth1.png" alt="auth" />
      <WorkImage src="/images/projects/auth2.png" alt="auth" />
      <WorkImage src="/images/projects/auth3.png" alt="auth" />
    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'