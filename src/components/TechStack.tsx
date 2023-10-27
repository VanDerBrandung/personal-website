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

import Image, { type ImageProps } from 'next/image'
import { FadeIn, FadeInStagger } from './FadeIn'

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
]

export default function TechStack() {
  return (
    <div className='py-12 sm:py-12'>
      <div className='mx-auto max-w-7xl px-6 lg:px-8'>
        <FadeIn>
          <h2 className='text-center text-lg font-semibold leading-8 text-zinc-800 dark:text-zinc-100'>
            Working with beloved technologies and tools
          </h2>
        </FadeIn>
        <FadeInStagger>
          <div className='absolute mt-10 grid max-w-lg items-center gap-x-10 gap-y-10 sm:max-w-xl sm:grid-cols-6 sm:gap-x-12 lg:mx-0 lg:max-w-none lg:grid-cols-10'>
            {images.map((image) => (
              <FadeIn key={image.alt}>
                <Image
                  src={image.src}
                  alt={image.alt}
                  unoptimized
                  width={500}
                  height={500}
                />
              </FadeIn>
            ))}
          </div>
        </FadeInStagger>
      </div>
    </div>
  )
}
