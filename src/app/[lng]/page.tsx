import { Container } from '@/components/Container'
import {
  GitHubIcon,
  GitlabIcon,
  InstagramIcon,
  LinkedInIcon,
} from '@/components/SocialIcons'
import { SocialLink } from '@/components/Icons'
import { GridPattern } from '@/components/GridPattern'
import { FadeIn, FadeInStagger } from '@/components/FadeIn'
import { Photos } from '@/components/Photos'
import { Resume } from '@/components/Resume'
import Skillset from '@/components/Skillset'
import TechStack from '@/components/TechStack'
import AnimatedText from '@/components/AnimatedText'
import { useTranslation } from '../i18n'

const socials = [
  {
    link: 'https://www.instagram.com/luis._schmitt/',
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

export default async function Home({
  params: { lng },
}: {
  params: { lng: string }
}) {
  const { t } = await useTranslation(lng)

  return (
    <>
      <Container className='overflow-b-hidden py-9'>
        <FadeIn>
          <GridPattern
            className='absolute inset-x-0 -top-56 -z-10 h-[1100px] w-full fill-neutral-50 stroke-neutral-950/5 [mask-image:linear-gradient(to_bottom,transparent,white,transparent)]'
            interactive
          />
        </FadeIn>
        <div className='z-10 max-w-2xl'>
          <FadeIn>
            <h1 className='text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl'>
              <AnimatedText text={t('home.title')} />
            </h1>
            <p className='mt-6 text-base text-zinc-600 dark:text-zinc-400'>
              {t('home.text')}{' '}
            </p>
          </FadeIn>
          <FadeInStagger>
            <div className='mt-6 flex gap-6'>
              {socials.map(({ link, ariaLabel, icon: Icon }) => (
                <FadeIn key={link}>
                  <SocialLink
                    key={link}
                    href={link}
                    aria-label={ariaLabel}
                    icon={Icon}
                  />
                </FadeIn>
              ))}
            </div>
          </FadeInStagger>
        </div>
      </Container>
      <Container>
        <TechStack lng={lng} />
        <Skillset lng={lng} />
      </Container>

      <Photos />
      <Container className='mt-24 md:mt-28'>
        {/* <div className='mx-auto grid max-w-xl grid-cols-1 gap-y-20 lg:max-w-none lg:grid-cols-2'> */}
        <div className='mx-auto grid max-w-xl grid-cols-1 gap-y-20'>
          <div className='flex flex-col gap-16'>
            {/* {articles.map((article) => (
              <Article key={article.slug} article={article} />
            ))} */}
          </div>
          <div className='space-y-10'>
            <FadeIn>
              <Resume lng={lng} />
            </FadeIn>
          </div>
        </div>
      </Container>
    </>
  )
}
