import NextLink from 'next/link'
import { 
  Button,
  Container, 
  Box, 
  Heading, 
  Image, 
  useColorModeValue,
  Link
} from "@chakra-ui/react"
import Layout from '../components/layouts/article'
import Section from '../components/section'
import Paragraph from "../components/paragraph"
import { ChevronRightIcon } from "@chakra-ui/icons"
import { BioSection, BioYear } from '../components/bio'
import { AnimatePresence, motion } from "framer-motion"

const Home = () => {
  const avatarImg= `/images/arnons-avatar${useColorModeValue('', '-dark')}.png`
  return (
    <Layout>
      <Container>
        <Box borderRadius="lg" 
        bg={useColorModeValue('red.200', 'cyan.600')} 
        p={3} 
        mb={6} 
        align="center"
        >
          Under Construction!
        </Box>

        <Box display={{md:'flex'}}>
        <Box flexGrow={1}>
          <Heading as="h2" variant="page-title">
              Arnon Saengarunwong
          </Heading> 
        <p> Thirst for all kind of knowledge and experience </p>  
        </Box>
        <Box 
        flexShrink={0} 
        mt={{ base: 4, md: 0 }}
        ml={{ md: 6}}
        align="center"
        >
          <AnimatePresence exitBeforeEnter initial={false}>
            <motion.div style={{ display: 'inline-block'}}
            key={ useColorModeValue('light', 'dark')}
            initial={{ y: 20, opacity: 0}}
            animate={{ y: 0, opacity: 1}}
            exit={{ y: -20, opacity: 0}}
            transition={{ duration: 0.2}}
            >
                <Image 
                bg={useColorModeValue('#FFF5F7', '#E6FFFA')}
                borderColor={useColorModeValue('#FEB2B2', '#90CDF4')}
                borderWidth={3} 
                borderStyle="solid" 
                maxWidth="100px" 
                display="inline-block" 
                borderRadius="full" 
                src={avatarImg} 
                alt="Profile Image" 
                />
              </motion.div>
          </AnimatePresence>
        </Box>
        </Box>

      <Section delay={0.1}>
        <Heading as="h3" variant="section-title">
          Work
        </Heading>
        <Paragraph>Arnon is an assistant to a Thai regulatory commissioner based in Thailand. Currently, 
          he is working on policy-level in regulating telecom and broadcast markets and project management. 
          He has broad theoretical and practical experience in every stack from physical to application layer, developing web applications, machine learning models, 
          and overlay network research. Brief detail on his direction is to provide a fine-grained service for modern application needs.
        </Paragraph>

        <Box align="center" my={4}>
          <NextLink href="/works">
            <Button 
            rightIcon={<ChevronRightIcon />}
            bg={useColorModeValue('red.200', 'cyan.600')}>
            My Selected Projects
            </Button>
          </NextLink>
        </Box>
      </Section>
      
      <Section delay={0.2}>
        <Heading as="h3" variant="section-title">
          Bio
        </Heading>
        <BioSection>
          <BioYear>2016</BioYear>
          B.E. in Telecommunications (2nd-class honors), KMITL
        </BioSection>
        <BioSection>
          <BioYear>2018</BioYear>
          M.E. in ICT (The best thesis & academic performance), AIT
        </BioSection>
        <BioSection>
          <BioYear>2018 - present</BioYear>
          Working at NBTC
        </BioSection>
      </Section>

      <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
          What I Enjoy
        </Heading>
        <Paragraph>Learning Emerging Tech, Electric Guitars, Novels, Geopolitics</Paragraph>
      </Section>

      </Container>
    </Layout>
  )
}

export default Home