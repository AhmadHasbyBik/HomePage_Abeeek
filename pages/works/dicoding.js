import NextLink from 'next/link'
import {
  Link,
  Container,
  Heading,
  Box,
  SimpleGrid,
  Button,
  List,
  ListItem,
  useColorModeValue,
  chakra,
  Icon,
  Text
} from '@chakra-ui/react'
import { ChevronRightIcon, EmailIcon } from '@chakra-ui/icons'
import Layout from '../../components/layouts/article'
import { Title, Meta, WorkImage } from '../../components/workcourse'
import P from '../../components/paragraph'


const dicoding = () => (
  <Layout title="Dicoding">
    <Container>
      <Title>
        Dicoding
      </Title>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Owner</Meta>
          <span>Narenda Wicaksono & Kevin Kurniawan</span>
        </ListItem>
        <ListItem>
          <Meta>Industry</Meta>
          <span>Education</span>
        </ListItem>
        <ListItem>
          <Meta>Launched</Meta>
          <span>January 5, 2015 (8 years ago)</span>
        </ListItem>
      </List>
      <WorkImage src="/images/projects/dicoding.png" alt="dicodiiing" />
      <P>
      Dicoding is an online learning platform that provides various courses and programs related to technology, such as web development, mobile development, data science, 
      cloud computing, artificial intelligence, and others. The platform offers both free and paid courses, and provides participants with access to expert instructors, online resources, practical assignments, and certification upon completion.
      Dicoding's mission is to empower people with the knowledge and skills they need to succeed in the technology industry, and to help close the digital skills gap in Indonesia and beyond. The platform has partnered 
      with various tech companies and organizations to offer industry-recognized certifications, and has a community of more than 1 million learners and developers from across the world.</P>  
      <Box align="center" my={4}>
          <Button
            as={NextLink}
            href="https://www.dicoding.com/users/abikahmad/academies"
            rightIcon={<ChevronRightIcon />}
            colorScheme="purple"
          >
            His Certificate Course
          </Button>
        </Box>

    </Container>
  </Layout>
)

export default dicoding
export { getServerSideProps } from '../../components/chakra'