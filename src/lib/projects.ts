import glob from 'fast-glob'
import { StaticImageData } from 'next/image'

interface Project {
  title: string
  description: string
  author: string
  date: string
  logo: StaticImageData
}

export interface ProjectWithSlug extends Project {
  slug: string
}

async function importProject(
  projectFilename: string
): Promise<ProjectWithSlug> {
  let { project } = (await import(
    `../app/[lng]/projects/${projectFilename}`
  )) as {
    default: React.ComponentType
    project: Project
  }

  return {
    slug: projectFilename.replace(/(\/page)?\.mdx$/, ''),
    ...project,
  }
}

export async function getAllProjects() {
  let articleFilenames = await glob('*/page.mdx', {
    cwd: './src/app/[lng]/projects',
  })

  let projects = await Promise.all(articleFilenames.map(importProject))

  return projects.sort((a, z) => +new Date(z.date) - +new Date(a.date))
}
