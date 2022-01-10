import Head from 'next/head'
import dynamic from 'next/dynamic'
import NavBar from '../navbar'
import { Box, Container } from '@chakra-ui/react'
import Loader from '../3d-object-loader'

const LazyThreeD = dynamic(() => import('../voxel-dog'), {
  ssr: false,
  loading: () => <Loader />
})

const Main = ({ children, router }) => {
  return (
    <Box as="main" pb={8}>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Arnon's Homepage" />
        <meta name="author" content="Arnon Saengarunwong" />
        <link rel="shortcut icon" href="/siteico.ico" type="image/x-icon" />

        <title>Arnon S. - Homepage</title>
      </Head>

      <NavBar path={router.asPath} />

      <Container maxW="container.md" pt={14}>
        <LazyThreeD />

        {children}

      </Container>
    </Box>
  )
}

export default Main