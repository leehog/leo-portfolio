import { slideInLeft } from '../../animations/slideInLeft'
import { Button, Container, Text } from '@nextui-org/react'
import { motion } from 'framer-motion'

export const LandingScreen = () => {
  const scrollToContent = () => {
    window.scrollTo({
      top: 300,
      behavior: 'smooth',
    })
  }
  return (
    <Container fluid css={{ minHeight: '500px' }}>
      <motion.div variants={slideInLeft} animate='in' initial='out' exit='out'>
        <Text
          size={'$9xl'}
          weight={'bold'}
          css={{
            lineHeight: '$sm',
            textGradient: '45deg, $blue600 -20%, $pink600 50%',
            marginTop: 100,
          }}
        >
          Leo Gisselberg
        </Text>
      </motion.div>
      <motion.div
        variants={{ ...slideInLeft, delay: 1.5 }}
        animate='in'
        initial='out'
        exit='out'
      >
        <Text
          size={'$6xl'}
          weight={'bold'}
          css={{
            textGradient: '45deg, $yellow600 -20%, $red600 100%',
          }}
        >
          Software Engineer
        </Text>
        <Text
          weight={'bold'}
          size={'$xl'}
          css={{
            maxWidth: 500,
          }}
        >
          Get to know me:
        </Text>
        <Text css={{ maxWidth: 500 }} size={'$xl'}>
          Im a software engineer, mostly focused on the frontend side but
          anything Javascript related is a task for me. I have been working
          extensively with React & javascript for the past 6 years in various
          sizes & types of companies. On my free time you can find me at the
          local climbing gym or in the mountains free-skiing during the winter ⛷
        </Text>
        <Button
          auto
          color='secondary'
          rounded
          flat
          onClick={scrollToContent}
          css={{ marginTop: '$4' }}
        >
          What can I offer?
        </Button>
      </motion.div>
    </Container>
  )
}
