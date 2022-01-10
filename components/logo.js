import Link from 'next/link'
import Image from 'next/image'
import { Text, useColorModeValue } from '@chakra-ui/react'
import styled from '@emotion/styled'
import { AnimatePresence, motion } from 'framer-motion'

const LogoBox = styled.span`
font-weight: bold;
font-size: 18px;
display: inline-flex;
align-items: center;
height: 30px;
line-height: 20px;
padding: 10px;

&:hover img {
    transform: rotate(20deg);
}
`

const Logo = () => {
    const guitarPickImg = `/images/guitar-pick-32${useColorModeValue('', '-dark')}.png`
    return (
        <Link href="/">
            <a>
                <LogoBox>
                    <AnimatePresence exitBeforeEnter initial={false}>
                        <motion.div style={{ display: 'inline-block' }}
                            key={useColorModeValue('light', 'dark')}
                            initial={{ y: -20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            exit={{ y: 20, opacity: 0 }}
                            transition={{ duration: 0.2 }}
                        >
                            <Image src={guitarPickImg} width={25} height={25} alt="logo" />
                        </motion.div>
                    </AnimatePresence>
                    <Text
                        color={useColorModeValue('gray.800', 'whiteAlpha.900')}
                        fontFamily='M PLUS Rounded 1c'
                        fontWeight="bold"
                        fontSize={16}
                        ml={1}
                        height={25}>
                        Arnon Saengarunwong
                    </Text>
                </LogoBox>
            </a>
        </Link>
    )
}

export default Logo