import { client } from '../apollo'
import { getProjects } from '../apollo/queries/projects'
import { ProjectCard } from '../components/organisms/projectCard'
import { Container, Grid, Card, Text, Row } from '@nextui-org/react'
import { Link } from '@nextui-org/react'
import Head from 'next/head'

///// This runs first (on server side)
export async function getStaticProps() {
  const response = await client.query({
    query: getProjects,
  })

  console.log('RESPONSE (server side): ', response)

  return {
    props: {
      projects: response.data.projects,
    },
    revalidate: 60 * 60,
  }
}

export default function Projects({ projects }) {
  console.log('Projects on the client side: ', projects)

  return (
    <div>
      <Head>
        <title>Leo Gisselberg portfolio</title>
        <meta name='description' content='Leo Gisselberg portfolio & CV' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <Container css={{ marginTop: '$20' }}>
        <Grid.Container gap={2}>
          {projects.map((project) => (
            <Grid xs={6} sm={3} key={project.id}>
              <ProjectCard project={project} />
            </Grid>
          ))}
        </Grid.Container>
      </Container>
    </div>
  )
}
