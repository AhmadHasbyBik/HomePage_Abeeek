import { IoLogoLaravel, IoLogoHtml5, IoLogoCss3, IoLogoJavascript, IoLogoPython } from 'react-icons/io5'
import { SiBootstrap, SiC, SiCodeigniter, SiCplusplus, SiDocker, SiExpress, SiGithub, SiGooglecloud, SiMongodb, SiMysql, SiNodedotjs, SiPhp, SiPhpmyadmin, SiPostman, SiReact, SiTailwindcss, SiVisualstudiocode } from 'react-icons/si'
import { TbApi, TbBrandNextjs  } from 'react-icons/tb'
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
import Paragraph from '../components/paragraph'
import { BioSection, BioYear } from '../components/bio'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import Skills from '../components/skills'
import { GridItem } from '../components/grid-item'
import Image from 'next/image'

const ProfileImage = chakra(Image, {
  shouldForwardProp: prop => ['width', 'height', 'src', 'alt'].includes(prop)
})

const Home = () => (
  <Layout>
    <Container>
      <Box
        borderRadius="lg"
        mb={6}
        p={3}
        textAlign="center"
        bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
        css={{ backdropFilter: 'blur(10px)' }}
      >
        Assalamu&apos;alaikum, I&apos;m an Informatics Student from Gresik!
      </Box>

      <Box display={{ md: 'flex' }}>
        <Box flexGrow={1}>
          <Heading as="h2" variant="page-title">
            Ahmad Hasby Bik
          </Heading>
          <p>Software Engineer</p>
        </Box>
        <Box
          flexShrink={0}
          mt={{ base: 4, md: 0 }}
          ml={{ md: 6 }}
          textAlign="center"
        >
          <Box
            borderColor="whiteAlpha.800"
            borderWidth={2}
            borderStyle="solid"
            w="100px"
            h="100px"
            display="inline-block"
            borderRadius="full"
            overflow="hidden"
          >
            <ProfileImage
              src="/images/abik.jpeg"
              alt="Profile image"
              borderRadius="full"
              width="100"
              height="100"
            />
          </Box>
        </Box>
      </Box>

      <Section delay={0.1}>
        <Heading as="h3" variant="section-title">
          Desc
        </Heading>
        <Paragraph>
        Abik is a freelancer web developer and a student at an university based in Surabaya 
        with a passion for building creative and functional web applications. 
        He enjoys the process of transforming complex ideas into intuitive designs and solving 
        real-world problems with code. When not coding, he really loves sleeping. 
        He is also a huge football fan and supports the Manchester United FC.
        </Paragraph>
        <Box align="center" my={4}>
          <Button
            as={NextLink}
            href="/works"
            rightIcon={<ChevronRightIcon />}
            colorScheme="teal"
          >
            His Projects
          </Button>
        </Box>
      </Section>

      <Section delay={0.2}>
        <Heading as="h3" variant="section-title">
          Bio
        </Heading>
        <BioSection>
          <BioYear>2002</BioYear>
          Born in Gresik, Indonesia.
        </BioSection>
        <BioSection>
          <BioYear>2020 - Present</BioYear>
          Ungraduated Student of Informatics at UPN Veteran Jatim.
        </BioSection>
        <BioSection>
          <BioYear>2023</BioYear>
          Certified Apprentice as Cloud Computing Engineer at Bangkit Academy led by Google, Tokopedia, Gojek, & Traveloka.
        </BioSection>
      </Section>

      <Section delay={0.1}>
        <Box align="center" my={4}>
          <Button
            as={NextLink}
            href="/courses"
            rightIcon={<ChevronRightIcon />}
            colorScheme="yellow"
          >
            His Courses
          </Button>
        </Box>
      </Section>

      <Section delay={0.2}>
        <Heading as="h3" variant="section-title">
          Skills
        </Heading>
        <SimpleGrid columns={2} justifyContent="center" alignItems="center">
          <Box display="flex">
            <Icon as={IoLogoHtml5} boxSize="1.2em" mr="3" />
            <Text>HTML</Text>
          </Box>
          <Box display="flex" alignItems="center">
            <Icon as={IoLogoCss3} boxSize="1.2em" mr="3" />
            <Text>CSS</Text>
          </Box>
          <Box display="flex" alignItems="center">
            <Icon as={SiTailwindcss} boxSize="1.2em" mr="3" />
            <Text>Tailwind</Text>
          </Box>
          <Box display="flex" alignItems="center">
            <Icon as={SiBootstrap} boxSize="1.2em" mr="3" />
            <Text>Bootstrap</Text>
          </Box>
          <Box display="flex" alignItems="center">
            <Icon as={IoLogoJavascript} boxSize="1.2em" mr="3" />
            <Text>JavaScript</Text>
          </Box>
          <Box display="flex" alignItems="center">
            <Icon as={SiPhp} boxSize="1.2em" mr="3" />
            <Text>PHP</Text>
          </Box>
          <Box display="flex" alignItems="center">
            <Icon as={SiMysql} boxSize="1.2em" mr="3" />
            <Text>MySQL</Text>
          </Box>
          <Box display="flex" alignItems="center">
            <Icon as={SiMongodb} boxSize="1.2em" mr="3" />
            <Text>MongoDB Atlas</Text>
          </Box>
          <Box display="flex" alignItems="center">
            <Icon as={SiCodeigniter} boxSize="1.2em" mr="3" />
            <Text>Codeigniter</Text>
          </Box>
          <Box display="flex" alignItems="center">
            <Icon as={IoLogoLaravel} boxSize="1.2em" mr="3" />
            <Text>Laravel</Text>
          </Box>
          <Box display="flex" alignItems="center">
            <Icon as={SiNodedotjs} boxSize="1.2em" mr="3" />
            <Text>Node.js</Text>
          </Box>
          <Box display="flex" alignItems="center">
            <Icon as={TbBrandNextjs} boxSize="1.2em" mr="3" />
            <Text>Next</Text>
          </Box>
          <Box display="flex" alignItems="center">
            <Icon as={SiReact} boxSize="1.2em" mr="3" />
            <Text>React</Text>
          </Box>
          <Box display="flex" alignItems="center">
            <Icon as={SiExpress} boxSize="1.2em" mr="3" />
            <Text>Express</Text>
          </Box>
          <Box display="flex" alignItems="center">
            <Icon as={TbApi} boxSize="1.2em" mr="3" />
            <Text>API</Text>
          </Box>
          <Box display="flex" alignItems="center">
            <Icon as={IoLogoPython} boxSize="1.2em" mr="3" />
            <Text>Python</Text>
          </Box>
          <Box display="flex" alignItems="center">
            <Icon as={SiCplusplus} boxSize="1.2em" mr="3" />
            <Text>C++</Text>
          </Box>
          <Box display="flex" alignItems="center">
            <Icon as={SiC} boxSize="1.2em" mr="3" />
            <Text>C</Text>
          </Box>
          <Box display="flex" alignItems="center">
            <Icon as={SiPhpmyadmin} boxSize="1.2em" mr="3" />
            <Text>PhpMyAdmin</Text>
          </Box>
          <Box display="flex" alignItems="center">
            <Icon as={SiDocker} boxSize="1.2em" mr="3" />
            <Text>Docker</Text>
          </Box>
          <Box display="flex" alignItems="center">
            <Icon as={SiGithub} boxSize="1.2em" mr="3" />
            <Text>Github</Text>
          </Box>
          <Box display="flex" alignItems="center">
            <Icon as={SiVisualstudiocode} boxSize="1.2em" mr="3" />
            <Text>VScode</Text>
          </Box>
          <Box display="flex" alignItems="center">
            <Icon as={SiPostman} boxSize="1.2em" mr="3" />
            <Text>Postman</Text>
          </Box>
          <Box display="flex" alignItems="center">
            <Icon as={SiGooglecloud} boxSize="1.2em" mr="3" />
            <Text>Google Cloud</Text>
          </Box>
        </SimpleGrid>
      </Section>

      <Section delay={0.1}>
        <Box align="center" my={4}>
          <Button
            as={NextLink}
            href="/games"
            rightIcon={<ChevronRightIcon />}
            colorScheme="red"
          >
            Let&apos;s Play Games!
          </Button>
        </Box>
      </Section>

      
    </Container>
  </Layout>
)

export default Home
export { getServerSideProps } from '../components/chakra'
