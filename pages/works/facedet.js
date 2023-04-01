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
    <Layout title="Face Detection">
      <Container>
        <Title>
          Face Detection<Badge>Artificial intelegence</Badge>
        </Title>
        <P>
        Face detection with cascade and bounding box is a powerful technique that can be used to detect and locate faces in live capture photos in real-time.
        </P>
        <P>
        In this application, the cascade classifier is used to detect faces in each frame of a live capture photo. The classifier is trained on a large dataset of positive and negative examples to learn the features of a face. Once trained, the classifier can detect faces in real-time by analyzing each frame of the live capture photo.
        </P>
        <P>
        To visualize the detected faces, bounding boxes are drawn around each detected face. The bounding box is a rectangular box that encloses the detected face and highlights its location and size in the live capture photo.
        </P>
        <P>
        This application is useful for various applications, such as photo booths, social media filters, and security systems. By using face detection with cascade and bounding box in live capture photos, it is possible to provide fast and accurate face detection in real-time.
        </P>
        <List ml={4} my={4}>
          <ListItem>
            <Meta>Platform</Meta>
            <span>Windows/macOS/Linux/iOS/Android</span>
          </ListItem>
          <ListItem>
            <Meta>Github</Meta>
            <Link href="https://github.com/AhmadHasbyBik/Face_Detection.Python">
              Face Detection{' '}
              <ExternalLinkIcon mx="2px" />
            </Link>
          </ListItem>
          <ListItem>
            <Meta>Stack</Meta>
            <span>Python, JavaScript</span>
          </ListItem>
        </List>
  
        <WorkImage src="/images/projects/facedet.png" alt="facedet" />
      </Container>
    </Layout>
  )
  
  export default Work
  export { getServerSideProps } from '../../components/chakra'