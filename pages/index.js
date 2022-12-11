import { client } from '../apollo'
import { getHighlightedProjects } from '../apollo/queries/projects'
import { HighlightedProjects } from '../components/organisms/highlightedProjects'
import { LandingScreen } from '../components/organisms/landingScreen'
import { SkillCard } from '../components/organisms/skillCard'
import { skills } from '../constants/skills'
import { Container, Grid } from '@nextui-org/react'
import Head from 'next/head'

///// This runs first (on server side)
export async function getServerSideProps() {
  const response = await client.query({
    query: getHighlightedProjects,
  })

  console.log('RESPONSE (server side): ', response)

  return {
    props: {
      highlightedProjects: response.data.projects,
    },
  }
}

//// This will run on client side
export default function Home({ highlightedProjects }) {
  console.log('Projects on the client side: ', highlightedProjects)

  return (
    <div>
      <Head>
        <title>Leo Gisselberg portfolio</title>
        <meta name='description' content='Leo Gisselberg portfolio & CV' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <LandingScreen />
      <Container fluid>
        <Grid.Container gap={2}>
          {skills.map((skill) => (
            <Grid xs={12} sm={12} md={4} key={skill.title}>
              <SkillCard
                image={skill.image}
                title={skill.title}
                subtitle={skill.subtitle}
              />
            </Grid>
          ))}
        </Grid.Container>
      </Container>
      <HighlightedProjects projects={highlightedProjects} />
    </div>
  )
}
