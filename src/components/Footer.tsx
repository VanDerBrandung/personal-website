import Link from 'next/link'
import { ContainerInner, ContainerOuter } from '@/components/Container'
import { useTranslation } from '../app/i18n'
import { Trans } from 'react-i18next/TransWithoutContext'
import clsx from 'clsx'

function NavLink({
  href,
  children,
}: {
  href: string
  children: React.ReactNode
}) {
  return (
    <Link
      href={href}
      className='transition hover:text-indigo-500 dark:hover:text-indigo-400'
    >
      {children}
    </Link>
  )
}

export async function Footer({
  lng,
  navitems,
}: {
  lng: string
  navitems: { href: string; text: string }[]
}) {
  const { t } = await useTranslation(lng)

  return (
    <footer className='mt-32 flex-none'>
      <ContainerOuter>
        <div className='border-t border-zinc-100 pb-16 pt-10 dark:border-zinc-700/40'>
          <ContainerInner>
            <div className='flex flex-col items-center justify-between gap-6 sm:flex-row'>
              <div className='flex flex-wrap justify-center gap-x-6 gap-y-1 text-sm font-medium text-zinc-800 dark:text-zinc-200'>
                {navitems.map(({ href, text }) => (
                  <NavLink key={href} href={href}>
                    {text}
                  </NavLink>
                ))}
              </div>
              <div className='flex gap-2'>
                <Trans t={t}></Trans>

                <p
                  className={clsx(
                    lng === 'de'
                      ? 'font-bold text-indigo-500 dark:text-indigo-400'
                      : 'text-zinc-800 dark:text-zinc-200',
                    'text-sm font-medium '
                  )}
                >
                  <Link href={`/de`}>Deutsch</Link>
                </p>
                <p
                  className={clsx(
                    lng === 'en'
                      ? 'dark:text--indigo-400 font-bold text-indigo-500'
                      : 'text-zinc-800 dark:text-zinc-200',
                    'text-sm font-medium '
                  )}
                >
                  <Link href={`/en`}>English</Link>
                </p>
              </div>
              <p className='text-sm text-zinc-400 dark:text-zinc-500'>
                &copy; {new Date().getFullYear()} Luis Schmitt. All rights
                reserved.
              </p>
            </div>
          </ContainerInner>
        </div>
      </ContainerOuter>
    </footer>
  )
}
