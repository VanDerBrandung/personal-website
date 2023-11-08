import java from '@/images/logos/java.svg'
import typescript from '@/images/logos/typescript.svg'
import nodejs from '@/images/logos/nodejs.svg'
import spring from '@/images/logos/spring.svg'
import react from '@/images/logos/react.svg'
import nextjs from '@/images/logos/nextjs.svg'
import mongodb from '@/images/logos/mongodb.svg'
import mysql from '@/images/logos/mysql.svg'
import postgresql from '@/images/logos/postgresql.svg'
import redis from '@/images/logos/redis.svg'
import talend from '@/images/logos/talend.svg'
import mulesoft from '@/images/logos/mulesoft.svg'
import Image from 'next/image'
import { FadeIn, FadeInStagger } from './FadeIn'
import { useTranslation } from '../app/i18n'

const images = [
  {
    src: java,
    alt: 'Java',
  },
  {
    src: typescript,
    alt: 'Typescript',
  },
  {
    src: nodejs,
    alt: 'Node.js',
  },
  {
    src: spring,
    alt: 'Spring',
  },
  {
    src: react,
    alt: 'React',
  },
  {
    src: nextjs,
    alt: 'Next.js',
  },
  {
    src: mongodb,
    alt: 'MongoDB',
  },
  {
    src: mysql,
    alt: 'MySQL',
  },
  {
    src: postgresql,
    alt: 'PostgreSQL',
  },
  {
    src: redis,
    alt: 'Redis',
  },
  {
    src: talend,
    alt: 'Talend',
  },
  {
    src: mulesoft,
    alt: 'Mulesoft',
  },
]

export default async function TechStack({ lng }: { lng: string }) {
  const { t } = await useTranslation(lng)

  return (
    <div className='py-12'>
      <div className='mx-auto max-w-7xl px-6 lg:px-8'>
        <FadeIn>
          <h2 className='text-center text-lg font-semibold leading-8 text-zinc-800 dark:text-zinc-100'>
            {t('techStack.header')}
          </h2>
        </FadeIn>
        <FadeInStagger>
          <div className='py-12'>
            <div className='mx-auto max-w-7xl px-6 lg:px-8'>
              <div className='-mx-6 grid grid-cols-2 gap-1 overflow-hidden sm:mx-0 sm:rounded-2xl md:grid-cols-5'>
                {images.map((image) => (
                  <FadeIn
                    key={image.alt}
                    className='border-1 flex items-center justify-center rounded-xl border border-zinc-100 bg-white p-4 dark:border-zinc-700 dark:bg-zinc-200'
                  >
                    <Image
                      src={image.src}
                      alt={image.alt}
                      className='w-22 h-14'
                    />
                  </FadeIn>
                ))}
              </div>
            </div>
          </div>
        </FadeInStagger>
      </div>
    </div>
  )
}
