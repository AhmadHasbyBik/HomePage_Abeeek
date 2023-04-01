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
    <Layout title="Course Regisration Application">
      <Container>
        <Title>
        Course Regisration Application<Badge>University</Badge>
        </Title>
        <P>
        The application provides a seamless experience for students and administrators, with separate login portals for both.
        Students can register and create their profiles by providing their personal information and academic details. After logging in, they can view available courses, select the ones they want to enroll in, and register for them. The application also allows students to drop or modify their courses as needed.
        </P>
        <P>
        On the other hand, the administrator login portal provides access to a secure admin panel where administrators can manage the course registration process. They can manage student profiles, course schedules, and other settings from the admin panel.
        </P>
        <P>
        The admin panel also allows administrators to manage course registration deadlines and generate reports on student enrollment, dropouts, and other relevant statistics. The application offers a comprehensive dashboard that provides real-time updates on student registration and other key metrics.
        </P>
        <List ml={4} my={4}>
          <ListItem>
            <Meta>Platform</Meta>
            <span>Windows/macOS/Linux/iOS/Android</span>
          </ListItem>
          <ListItem>
            <Meta>Github</Meta>
            <Link href="https://github.com/AhmadHasbyBik/Aplikasi_Pengisian_KRS.CI4">
            Course Regisration Application{' '}
              <ExternalLinkIcon mx="2px" />
            </Link>
          </ListItem>
          <ListItem>
            <Meta>Stack</Meta>
            <span>Codeigniter 4, PHP, MySQL</span>
          </ListItem>
        </List>
  
        <WorkImage src="/images/projects/krs1.png" alt="krs" />
        <WorkImage src="/images/projects/krs.png" alt="krs" />
        <WorkImage src="/images/projects/krs2.png" alt="krs" />
        <WorkImage src="/images/projects/krs3.png" alt="krs" />
      </Container>
    </Layout>
  )
  
  export default Work
  export { getServerSideProps } from '../../components/chakra'