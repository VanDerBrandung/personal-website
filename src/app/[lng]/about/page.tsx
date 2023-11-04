import { type Metadata } from 'next'
import Image from 'next/image'

import { Container } from '@/components/Container'
import {
  GitHubIcon,
  GitlabIcon,
  InstagramIcon,
  LinkedInIcon,
} from '@/components/SocialIcons'
import portraitImage from '@/images/photos/portrait.jpg'
import { MailIcon } from '@/components/Icons'
import { SocialLinkExtended } from '@/components/SocialLinks'
import { FadeIn, FadeInStagger } from '@/components/FadeIn'
import AnimatedText from '@/components/AnimatedText'

export const metadata: Metadata = {
  title: 'About',
  description:
    'Hey I’m Luis. I live in Karlsruhe, I love to code and work with all different kinds of tech.',
}

const socials = [
  {
    link: 'https://www.instagram.com/vanderbrandung/',
    ariaLabel: 'Follow on Instagram',
    icon: InstagramIcon,
  },
  {
    link: 'https://www.linkedin.com/in/luis-schmitt-465a7116b/',
    ariaLabel: 'Follow on LinkedIn',
    icon: LinkedInIcon,
  },
  {
    link: 'https://github.com/VanDerBrandung',
    ariaLabel: 'Follow on GitHub',
    icon: GitHubIcon,
  },
  {
    link: 'https://gitlab.com/luisschmitt01',
    ariaLabel: 'Follow on Gitlab',
    icon: GitlabIcon,
  },
]

export default function About() {
  return (
    <Container className='mt-16 sm:mt-32'>
      <div className='grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-y-12'>
        <div className='lg:pl-20'>
          <div className='max-w-xs px-2.5 lg:max-w-none'>
            <FadeIn>
              <Image
                src={portraitImage}
                alt=''
                sizes='(min-width: 1024px) 32rem, 20rem'
                className='aspect-square rotate-3 rounded-2xl bg-zinc-100 object-cover dark:bg-zinc-800'
              />
            </FadeIn>
          </div>
        </div>
        <div className='lg:order-first lg:row-span-2'>
          <h1 className='text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl'>
            <AnimatedText
              letterDelay={0.025}
              text='Hey I’m Luis. I live in Karlsruhe, I love to code and work with
            all different kinds of tech.'
            />
          </h1>
          <FadeInStagger>
            <div className='mt-6 space-y-7 text-base text-zinc-600 dark:text-zinc-400'>
              <FadeIn>
                <p>
                  As you stumbled upon this page, you probably want to know a
                  little bit more about me. So here we go:
                </p>
              </FadeIn>
              <FadeIn>
                <p>
                  As you probably noticed by now I’m in love with technology.
                  But apart from that I also enjoy different kinds of sports
                  like mountainbiking, climbing and powerlifting. I also enjoy
                  spending quality time with my friends and family.
                </p>
              </FadeIn>
              <FadeIn>
                <p>
                  My coding journey started when I was 17 years old working on
                  some very small projects in Java and C++. My business
                  informatics degree enabled me to learn a lot about different
                  areas of computer science. About that time I really fell in
                  love with web development and began to spend a huge potion of
                  me free time learning about Typescript, Node.js and React. In
                  addition I was able to gather knowledge in the field of
                  requirements engineering, data migrations and integrations
                  during my practical semesters at DIGITALL. While still working
                  at some medium sized projects with Java I mostly enjoyed
                  working on the bigger web projects with Typescript.
                </p>
              </FadeIn>
              <FadeIn>
                <p>
                  Today I’m working as a Consultant for Data Integration &
                  Migration and with my remaining time as a lead developer at
                  OneCalendar. I really enjoy both professions as they come with
                  their very own challenges and at the same time I benefit from
                  the cross-functionality.
                </p>
              </FadeIn>
            </div>
          </FadeInStagger>
        </div>
        <div className='lg:pl-20'>
          <FadeInStagger>
            <ul role='list'>
              {socials.map(({ link, ariaLabel, icon: Icon }) => (
                <FadeIn key={link}>
                  <SocialLinkExtended href={link} icon={Icon} className='mt-4'>
                    {ariaLabel}
                  </SocialLinkExtended>
                </FadeIn>
              ))}
              <FadeIn>
                <SocialLinkExtended
                  href='mailto:luisschmitt01@gmail.com'
                  icon={MailIcon}
                  className='mt-8 border-t border-zinc-100 pt-8 dark:border-zinc-700/40'
                >
                  luisschmitt01@gmail.com
                </SocialLinkExtended>
              </FadeIn>
            </ul>
          </FadeInStagger>
        </div>
      </div>
    </Container>
  )
}
