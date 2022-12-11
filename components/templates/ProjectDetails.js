import { Image, Text } from '@nextui-org/react'
import Head from 'next/head'
import ReactMarkdown from 'react-markdown'

export const ProjectDetails = ({ project }) => {
  return (
    <div>
      <Head>
        <title>Leo portfolio - {project.title}</title>
        <meta name='description' content={project.title} />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Text h1>{project.title}</Text>
      <Image
        src={project.mainImage.url}
        width={500}
        height={500}
        layout={'responsive'}
      />
      <ReactMarkdown>{project.content}</ReactMarkdown>
    </div>
  )
}
