import { popUp } from '../../animations/popup'
import { Card, Col, Text } from '@nextui-org/react'
import { motion } from 'framer-motion'

export const SkillCard = ({ title, subtitle, image }) => {
  return (
    <motion.div
      initial='offscreen'
      whileInView='onscreen'
      viewport={{ once: true, amount: 0.8 }}
    >
      <motion.div variants={popUp}>
        <Card isHoverable css={{ mw: '400px' }}>
          <Card.Header css={{ position: 'absolute', zIndex: 1, top: 5 }}>
            <Col>
              <Text
                size={12}
                weight='bold'
                transform='uppercase'
                color='#ffffffAA'
              >
                {title}
              </Text>
              <Text h4 color='white'>
                {subtitle}
              </Text>
            </Col>
          </Card.Header>
          <Card.Image
            src={image}
            objectFit='cover'
            width='100%'
            height={340}
            alt='Card image background'
          />
        </Card>
      </motion.div>
    </motion.div>
  )
}
