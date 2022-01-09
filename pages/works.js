import { Container, Heading, SimpleGrid, Divider } from '@chakra-ui/react'
import Section from '../components/section'
import { WorkGridItem } from '../components/grid-item'
import thumbThesis from '../public/images/works/thesis-thumb.png'
import thumbWater from '../public/images/works/water-management-system-thumb.png'

const Works = () => {
    return (
        <Container>
            <Heading as="h3" fontSize={20} mb={4}>
                Works
            </Heading>

            <SimpleGrid columns = {[1,1,2]} gap={6}>
                <Section>
                    <WorkGridItem id="thesis" title="Master's Thesis" thumbnail={thumbThesis}>
                        A study and implementation of machine learning pipeline in realistic CDN-P2P video-on-demand streaming
                    </WorkGridItem>
                    <WorkGridItem id="water" title="Water Demand Management System" thumbnail={thumbWater}>
                        A water demand management system with linear regression, neural networks, and SVM models
                    </WorkGridItem>
                </Section>
            </SimpleGrid>
        </Container>
    )
}

export default Works