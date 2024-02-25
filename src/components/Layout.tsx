import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import { useTranslation } from '../app/i18n'
import { NavItems } from './navigation/NavItems'

export async function Layout({
  children,
  lng,
}: {
  children: React.ReactNode
  lng: string
}) {
  const { t } = await useTranslation()
  const navitems = await NavItems({ lng: lng })

  const translations = { menuLabel: t('Navigation.menuLabel') }

  return (
    <>
      <div className='fixed inset-0 -z-20 flex justify-center sm:px-8'>
        <div className='flex w-full max-w-7xl lg:px-8'>
          <div className=' w-full bg-white ring-1 ring-zinc-100 dark:bg-zinc-900 dark:ring-zinc-300/20' />
        </div>
      </div>
      <div className='relative flex w-full flex-col'>
        <Header lng={lng} navitems={navitems} translations={translations} />
        <main className='flex-auto'>{children}</main>
        <Footer lng={lng} navitems={navitems} />
      </div>
    </>
  )
}
