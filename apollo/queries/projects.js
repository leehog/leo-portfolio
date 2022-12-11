import { gql } from '@apollo/client'

export const getProjects = gql(`
query Projects {
  projects {
    title
    stage
    content
    id
    slug
    mainImage {
      url
    }
  }
}
`)

export const getHighlightedProjects = gql(`
query Projects {
  projects(where: { highlighted: true }) {
    title
    slug
    mainImage {
      url
    }
  }
}

`)

export const getProjectSlugs = gql(`
query Projects {
  projects {
    slug
  }
}
`)

export const getProjectBySlug = gql(`query Projects($slug: String!) {
  project(where: { slug: $slug }) {
    title
    id
    slug
    content
    mainImage {
      url
    }
  }
}
`)
