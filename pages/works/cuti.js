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
    <Layout title="Cuti">
      <Container>
        <Title>
        Official Leave Application Website<Badge>DISPAREKRAFBUDPORA Gresik</Badge>
        </Title>
        <P>
        An application for creating leave requests and official travel letters using Laravel, which is a popular PHP web development framework. The app allows users to submit leave requests and travel letters, with managers able to approve or reject them. It includes user management, notifications, history tracking, and data security measures. Developing such an application requires skilled web developers familiar with Laravel and data privacy regulations. 
        </P>
        <P>I made this website when i internship as web develper at Dinas Pariwisata dan Kebudayaan Kab. Gresik</P>
        <List ml={4} my={4}>
          <ListItem>
            <Meta>Platform</Meta>
            <span>Windows/macOS/Linux/iOS/Android</span>
          </ListItem>
          <ListItem>
            <Meta>Github</Meta>
            <Link href="https://github.com/AhmadHasbyBik/Cuti.Laravel">
            Official Leave Application Website{' '}
              <ExternalLinkIcon mx="2px" />
            </Link>
          </ListItem>
          <ListItem>
            <Meta>Stack</Meta>
            <span>Laravel, PHP, JavaScript, MySQL</span>
          </ListItem>
        </List>
  
        <WorkImage src="/images/projects/cuti.png" alt="cuti" />
        <WorkImage src="/images/projects/cuti1.png" alt="cuti" />
        <WorkImage src="/images/projects/cuti2.png" alt="cuti" />
        <WorkImage src="/images/projects/cuti3.png" alt="cuti" />
        <WorkImage src="/images/projects/cuti4.png" alt="cuti" />
        <WorkImage src="/images/projects/cuti5.png" alt="cuti" />
      </Container>
    </Layout>
  )
  
  export default Work
  export { getServerSideProps } from '../../components/chakra'