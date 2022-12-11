import { client } from '../../apollo'
import {
  getProjectBySlug,
  getProjectSlugs,
} from '../../apollo/queries/projects'
import { ProjectDetails } from '../../components/templates/ProjectDetails'

export default function Project({ project }) {
  console.log('Current projects: ', project)
  return <ProjectDetails project={project} />
}

export const getStaticProps = async ({ params }) => {
  const slug = params?.slug

  const response = await client.query({
    query: getProjectBySlug,
    variables: { slug },
  })

  if (!response.data.project) {
    return {
      notFound: true,
    }
  }

  return {
    props: {
      project: response.data.project,
    },
    revalidate: 60 * 60, // Cache response for 1 hour (60 seconds * 60 minutes)
  }
}

export const getStaticPaths = async () => {
  const response = await client.query({
    query: getProjectSlugs,
  })

  const paths = response.data.projects.map((project) => ({
    params: {
      slug: project.slug,
    },
  }))

  return {
    paths,
    fallback: false,
  }
}
