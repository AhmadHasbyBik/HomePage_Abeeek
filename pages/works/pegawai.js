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
    <Layout title="Staff Data">
      <Container>
        <Title>
          Staff Data<Badge>CRUD</Badge>
        </Title>
        <P>
        With this web application, you can easily manage all of your employee data, from basic information such as names and contact details, to more detailed information.
        </P>
        <P>
        The web application also includes powerful reporting capabilities, allowing you to generate custom reports based on the employee data you have stored. These reports can be exported in various formats, such as PDF or Excel, making it easy to share with other team members or management.
        </P>
        <List ml={4} my={4}>
          <ListItem>
            <Meta>Platform</Meta>
            <span>Windows/macOS/Linux/iOS/Android</span>
          </ListItem>
          <ListItem>
            <Meta>Github</Meta>
            <Link href="https://github.com/AhmadHasbyBik/CRUD_Login.Laravel">
              Staff Data{' '}
              <ExternalLinkIcon mx="2px" />
            </Link>
          </ListItem>
          <ListItem>
            <Meta>Stack</Meta>
            <span>Laravel, PHP, MySQL</span>
          </ListItem>
        </List>
  
        <WorkImage src="/images/projects/pegawai1.png" alt="pegawai" />
        <WorkImage src="/images/projects/pegawai2.png" alt="pegawai" />
        <WorkImage src="/images/projects/pegawai.png" alt="pegawai" />
      </Container>
    </Layout>
  )
  
  export default Work
  export { getServerSideProps } from '../../components/chakra'