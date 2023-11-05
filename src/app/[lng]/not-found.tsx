import { Button } from '@/components/Button'
import { Container } from '@/components/Container'
import { useTranslation } from '../i18n'

export default async function NotFound({
  params: { lng },
}: {
  params: { lng: string }
}) {
  const { t } = await useTranslation(lng)

  return (
    <Container className="flex h-full items-center pt-16 sm:pt-32">
      <div className="flex flex-col items-center">
        <p className="text-base font-semibold text-zinc-400 dark:text-zinc-500">
          404
        </p>
        <h1 className="mt-4 text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
          {t('notFound')}
        </h1>
        <p className="mt-4 text-base text-zinc-600 dark:text-zinc-400">
        {t('notFound.mainText')}
        </p>
        <Button href={`/${lng}`} variant="secondary" className="mt-4">
        {t('notFound.goBackText')}
        </Button>
      </div>
    </Container>
  )
}
