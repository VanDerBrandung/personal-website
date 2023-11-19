import { type Metadata } from 'next'
import Image from 'next/image'
import { Card } from '@/components/Card'
import { SimpleLayout } from '@/components/SimpleLayout'
import onecalendar from '@/images/logos/onecalendar.png'
import osmvalidation from '@/images/logos/osmvalidation.png'
import { HiLink } from 'react-icons/hi2'
import { useTranslation } from '@/app/i18n'
import { FadeIn, FadeInStagger } from '@/components/FadeIn'

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

  const projects = [
    {
      name: 'OneCalendar',
      description: t('projects.onecalendar.description'),
      link: { href: 'http://one-calendar.de', label: 'one-calendar' },
      logo: onecalendar,
    },
    {
      name: 'OSM Validation',
      description: t('projects.osmvalidation.description'),
      // link: { href: 'http://one-calendar.de', label: 'osm-validation' },
      logo: osmvalidation,
    },
  ]
  return (
    <SimpleLayout title={t('projects.title')} intro={t('projects.intro')}>
      <FadeInStagger>
        <ul
          role='list'
          className='grid grid-cols-1 gap-x-12 gap-y-16 sm:grid-cols-2 lg:grid-cols-3'
        >
          {projects.map((project) => (
            <Card as='li' key={project.name}>
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
                  <Card.Link href={project.link?.href}>
                    {project.name}
                  </Card.Link>
                </h2>
                <Card.Description>{project.description}</Card.Description>
                {project.link && (
                  <p className='relative z-10 mt-6 flex text-sm font-medium text-zinc-400 transition group-hover:text-teal-500 dark:text-zinc-200'>
                    <HiLink className='h-6 w-6 flex-none' />
                    <span className='ml-2'>{project.link?.label}</span>
                  </p>
                )}
              </FadeIn>
            </Card>
          ))}
        </ul>
      </FadeInStagger>
    </SimpleLayout>
  )
}
