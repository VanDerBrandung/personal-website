import { useTranslation } from '../app/i18n'

export async function NavItems({ lng }: { lng: string }) {
  const { t } = await useTranslation(lng)
  const navItems = [
    { href: `/${lng}`, text: t('NavItems.homeLabel') },
    { href: `/${lng}/about`, text: t('NavItems.aboutLabel') },
    { href: `/${lng}/projects`, text: t('NavItems.projectsLabel') },
    // { href: `/${lng}/cv`, text: t('NavItems.cvLabel') },
  ]

  return navItems
}
