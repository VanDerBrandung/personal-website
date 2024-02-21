import {
  HiOutlineComputerDesktop,
  HiOutlineCpuChip,
  HiOutlineServerStack,
} from 'react-icons/hi2'
import { useTranslation } from '../app/i18n'
import { motion } from 'framer-motion'

export default async function Skillset({ lng }: { lng: string }) {
  const { t } = await useTranslation(lng)

  const cards = [
    {
      name: t('skillset.card1.name'),
      description: t('skillset.card1.description'),
      icon: HiOutlineComputerDesktop,
    },
    {
      name: t('skillset.card2.name'),
      description: t('skillset.card2.description'),
      icon: HiOutlineCpuChip,
    },
    {
      name: t('skillset.card3.name'),
      description: t('skillset.card3.description'),
      icon: HiOutlineServerStack,
    },
  ]

  return (
    <div className='relative isolate py-12'>
      <div className='mx-auto max-w-7xl'>
        <div className='mx-auto max-w-2xl lg:mx-0'>
          <h2 className='text-3xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl'>
            {t('skillset.header')}{' '}
          </h2>
          <p className='text-md mt-6 leading-8 text-zinc-600 dark:text-zinc-400'>
            {t('skillset.mainText')}{' '}
          </p>
        </div>

        <div className='mx-auto mt-8 grid max-w-2xl grid-cols-1 gap-6 sm:mt-12 lg:mx-0 lg:max-w-none lg:grid-cols-3 lg:gap-8'>
          {cards.map((card) => (
            <div
              key={card.name}
              className='dark:hover:shadow-lg-lg flex transform gap-x-4 rounded-2xl border border-zinc-100 p-6 transition duration-500 ease-in-out hover:scale-105 hover:border-indigo-300 hover:shadow-lg dark:border-zinc-700/40 dark:hover:border-indigo-400'
              // whileHover={{ scale: 1.05 }}
              // whileTap={{ scale: 0.95 }}
            >
              <card.icon
                className='h-7 w-5 flex-none text-indigo-500'
                aria-hidden='true'
              />
              <div className='text-base leading-7'>
                <h3 className='font-semibold text-zinc-800 dark:text-zinc-100'>
                  {card.name}
                </h3>
                <p className='mt-2 text-zinc-600 dark:text-zinc-400'>
                  {card.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
