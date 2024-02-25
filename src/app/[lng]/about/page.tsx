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
import { FadeIn, FadeInStagger } from '@/components/animations/FadeIn'
import AnimatedText from '@/components/animations/AnimatedText'
import { useTranslation } from '@/app/i18n'

export const metadata: Metadata = {
  title: 'About',
  description:
    'Hey I’m Luis. I live in Karlsruhe, I love to code and work with all different kinds of tech.',
}

const socials = [
  {
    link: 'https://www.instagram.com/luis._schmitt/',
    ariaLabel: 'Instagram',
    icon: InstagramIcon,
  },
  {
    link: 'https://www.linkedin.com/in/luis-schmitt-465a7116b/',
    ariaLabel: 'LinkedIn',
    icon: LinkedInIcon,
  },
  {
    link: 'https://github.com/VanDerBrandung',
    ariaLabel: 'GitHub',
    icon: GitHubIcon,
  },
  {
    link: 'https://gitlab.com/luisschmitt01',
    ariaLabel: 'Gitlab',
    icon: GitlabIcon,
  },
]

export default async function About({
  params: { lng },
}: {
  params: { lng: string }
}) {
  const { t } = await useTranslation(lng)

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
            <AnimatedText letterDelay={0.025} text={t('about.header')} />
          </h1>
          <FadeInStagger>
            <div className='mt-6 space-y-7 text-base text-zinc-600 dark:text-zinc-400'>
              <FadeIn>
                <p>{t('about.text1')}</p>
              </FadeIn>
              <FadeIn>
                <p>{t('about.text2')}</p>
              </FadeIn>
              <FadeIn>
                <p>{t('about.text3')}</p>
              </FadeIn>
              <FadeIn>
                <p>{t('about.text4')}</p>
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
