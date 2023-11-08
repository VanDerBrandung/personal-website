import clsx from 'clsx'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useTranslation } from '../../app/i18n'
import { NavItems } from '../NavItems'

export function NavItem({
  href,
  children,
}: {
  href: string
  children: React.ReactNode
}) {
  let isActive = usePathname() === href

  return (
    <li>
      <Link
        href={href}
        className={clsx(
          'relative block px-3 py-2 transition',
          isActive
            ? 'text-indigo-500 dark:text-indigo-400'
            : 'hover:text-indigo-500 dark:hover:text-indigo-400'
        )}
      >
        {children}
        {isActive && (
          <span className='absolute inset-x-1 -bottom-px h-px bg-gradient-to-r from-indigo-500/0 via-indigo-500/40 to-indigo-500/0 dark:from-indigo-400/0 dark:via-indigo-400/40 dark:to-indigo-400/0' />
        )}
      </Link>
    </li>
  )
}

type ExtendedNavProps = React.ComponentPropsWithoutRef<'nav'> & {
  lng: string
}

export async function DesktopNavigation(props: ExtendedNavProps) {
  const { t } = await useTranslation(props.lng)
  const navItems = await NavItems({ lng: props.lng })

  return (
    <nav {...props}>
      <ul className='flex rounded-full bg-white/90 px-3 text-sm font-medium text-zinc-800 shadow-lg shadow-zinc-800/5 ring-1 ring-zinc-900/5 backdrop-blur dark:bg-zinc-800/90 dark:text-zinc-200 dark:ring-white/10'>
        {navItems.map(({ href, text }) => (
          <NavItem key={href} href={href}>
            {text}
          </NavItem>
        ))}
      </ul>
    </nav>
  )
}
