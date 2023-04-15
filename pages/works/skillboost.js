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
import { Title, Meta,WorkImage } from '../../components/workcourse'
import P from '../../components/paragraph'

const gcp = () => (
  <Layout title="Google Skill Boost">
    <Container>
      <Title>
        Google Skill Boost
      </Title>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Owner</Meta>
          <span>Google</span>
        </ListItem>
        <ListItem>
          <Meta>Industry</Meta>
          <span>Web service, Cloud computing</span>
        </ListItem>
        <ListItem>
          <Meta>Launched</Meta>
          <span>April 7, 2008 (15 years ago)</span>
        </ListItem>
      </List>
      <WorkImage src="/images/projects/gcp.png" alt="skillbost" />
      <P>
      Google Skill Boost is a program offered by Google to help individuals and businesses develop 
      the skills needed to succeed in the digital world. The program provides free online courses and resources to help people learn about topics such as digital marketing, data analysis, and web development.
      The program is designed to be accessible to everyone, regardless of their previous experience or education level. The courses are self-paced, meaning that students can learn at their own speed and
      on their own schedule. Additionally, the program provides certification options to help learners demonstrate their new skills to employers and colleagues.
      </P>
      
      <Box align="center" my={4}>
          <Button
            as={NextLink}
            href="https://www.cloudskillsboost.google/public_profiles/02b8fd9f-178c-4566-9e53-a505afc52838"
            rightIcon={<ChevronRightIcon />}
            colorScheme="pink"
          >
            His Certificate Course
          </Button>
        </Box>

    </Container>
  </Layout>
)

export default gcp
export { getServerSideProps } from '../../components/chakra'