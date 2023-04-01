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
    <Layout title="Netflix">
      <Container>
        <Title>
          Netflix<Badge>Front End</Badge>
        </Title>
        <P>
        Netflix is a popular streaming service that offers a wide range of movies, TV shows, and documentaries to its subscribers. The Netflix landing page is an important gateway to this world of entertainment, and with Next.js and MaterialUI, it is easy to create a visually appealing and user-friendly interface that entices visitors to sign up for a subscription.
        </P>
        <P>
        When you visit the Netflix landing page, you are greeted with a striking hero section that features a preview of some of the latest and most popular movies and TV shows. The hero section is built with MaterialUI components, such as Grid, Typography, and Button, which are responsive and easy to customize.
        </P>
        <List ml={4} my={4}>
          <ListItem>
            <Meta>Platform</Meta>
            <span>Windows/macOS/Linux/iOS/Android</span>
          </ListItem>
          <ListItem>
            <Meta>Github</Meta>
            <Link href="https://github.com/AhmadHasbyBik/Netflix_Page_FrontEnd.NextJS">
              Netflix Front End Landing Page{' '}
              <ExternalLinkIcon mx="2px" />
            </Link>
          </ListItem>
          <ListItem>
            <Meta>Stack</Meta>
            <span>NextJS, JavaScript</span>
          </ListItem>
        </List>
  
        <WorkImage src="/images/projects/netflix.png" alt="netflix" />
      </Container>
    </Layout>
  )
  
  export default Work
  export { getServerSideProps } from '../../components/chakra'