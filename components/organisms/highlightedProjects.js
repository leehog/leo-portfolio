import { popUp, popUp2 } from '../../animations/popup'
import { ProjectCard } from './projectCard'
import { Button, Container, Grid, Text } from '@nextui-org/react'
import { motion } from 'framer-motion'

export const HighlightedProjects = ({ projects }) => {
  return (
    <motion.div
      initial='offscreen'
      whileInView='onscreen'
      viewport={{ once: true, amount: 0.8 }}
    >
      <Container fluid css={{ marginTop: '$20', background: '$gradient' }}>
        <Container
          display='flex'
          direction='row'
          justify={'space-between'}
          alignItems={'center'}
        >
          <Text size={'$5xl'} weight={'bold'}>
            My projects
          </Text>
          <Button>Show All</Button>
        </Container>
        <Grid.Container gap={2}>
          {projects.map((project, index) => {
            const animation = popUp2(index + 1 * 0.05)
            return (
              <Grid xs={6} sm={2} key={project.id}>
                <motion.div variants={animation}>
                  <ProjectCard project={project} />
                </motion.div>
              </Grid>
            )
          })}
        </Grid.Container>
      </Container>
    </motion.div>
  )
}
