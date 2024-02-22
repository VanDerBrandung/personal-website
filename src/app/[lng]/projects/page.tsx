import { type Metadata } from 'next'
import Image from 'next/image'
import { Card } from '@/components/Card'
import { SimpleLayout } from '@/components/SimpleLayout'
import onecalendar from '@/images/logos/onecalendar.png'
import osmvalidation from '@/images/logos/osmvalidation.png'
import { useTranslation } from '@/app/i18n'
import { FadeIn, FadeInStagger } from '@/components/FadeIn'
import { getAllProjects } from '@/lib/projects'

export const metadata: Metadata = {
  title: 'Projects',
  description: 'All the things I have worked on over the last couple years.',
}

export default async function Projects({
  params: { lng },
}: {
  params: { lng: string }
}) {
  const { t } = await useTranslation(lng)

  let projects = await getAllProjects()
  return (
    <SimpleLayout title={t('projects.title')} intro={t('projects.intro')}>
      <FadeInStagger>
        <ul
          role='list'
          className='grid grid-cols-1 gap-x-12 gap-y-16 sm:grid-cols-2 lg:grid-cols-3'
        >
          {projects.map((project) => (
            <Card as='li' key={project.title}>
              <FadeIn>
                <div className='relative z-10 flex h-12 w-12 items-center justify-center rounded-full bg-white shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0'>
                  <Image
                    src={project.logo}
                    alt=''
                    className='h-8 w-8'
                    unoptimized
                  />
                </div>
                <h2 className='mt-6 text-base font-semibold text-zinc-800 dark:text-zinc-100'>
                  <Card.Link href={'/' + lng + '/projects/' + project.slug}>
                    {project.title}
                  </Card.Link>
                </h2>
                <Card.Description>{project.description}</Card.Description>
              </FadeIn>
            </Card>
          ))}
        </ul>
      </FadeInStagger>
    </SimpleLayout>
  )
}
