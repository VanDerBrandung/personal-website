import Image from 'next/image'
import {Container} from '@/components/Container'
import {
  GitHubIcon,
  GitlabIcon,
  InstagramIcon,
  LinkedInIcon,
  TwitterIcon,
} from '@/components/SocialIcons'
import { SocialLink } from '@/components/Icons'

export default function Home() {
  return (
    <>
      <Container className="mt-9">
        <div className="max-w-2xl">
          <h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
            Software developer, founder, and tech enthusiast.
          </h1>
          <p className="mt-6 text-base text-zinc-600 dark:text-zinc-400">
            I’m Luis, a software developer and tech enthusiast based in Germany - Karlsruhe. 
            I’m one of the lead developers at OneCalendar, where we strive to build software that empowers the
            digitalisation of businesses.
          </p>
          <div className="mt-6 flex gap-6">
            <SocialLink
              href="https://www.instagram.com/vanderbrandung/"
              aria-label="Follow on Instagram"
              icon={InstagramIcon}
            />
            <SocialLink
              href="https://www.linkedin.com/in/luis-schmitt-465a7116b/"
              aria-label="Follow on LinkedIn"
              icon={LinkedInIcon}
            />
            <SocialLink
              href="https://github.com/VanDerBrandung"
              aria-label="Follow on GitHub"
              icon={GitHubIcon}
            />
              <SocialLink
              href="https://gitlab.com/luisschmitt01"
              aria-label="Follow on Gitlab"
              icon={GitlabIcon}
            />
          </div>
        </div>
      </Container>
      {/* <Photos /> */}
      {/* <Container className="mt-24 md:mt-28">
        <div className="mx-auto grid max-w-xl grid-cols-1 gap-y-20 lg:max-w-none lg:grid-cols-2">
          <div className="flex flex-col gap-16">
            {articles.map((article) => (
              <Article key={article.slug} article={article} />
            ))}
          </div>
          <div className="space-y-10 lg:pl-16 xl:pl-24">
            <Newsletter />
            <Resume />
          </div>
        </div>
      </Container> */}
    </>
  )
}
