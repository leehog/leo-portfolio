import { Card, Link, Row, Text } from '@nextui-org/react'

export const ProjectCard = ({ project }) => {
  return (
    <Link href={`/projects/${project.slug}`}>
      <Card isPressable>
        <Card.Body css={{ p: 0 }}>
          <Card.Image
            src={project.mainImage.url}
            objectFit='cover'
            width='100%'
            height={140}
            alt={project.title}
          />
        </Card.Body>
        <Card.Footer css={{ justifyItems: 'flex-start' }}>
          <Row wrap='wrap' justify='space-between' align='center'>
            <Text b>{project.title}</Text>
          </Row>
        </Card.Footer>
      </Card>
    </Link>
  )
}
