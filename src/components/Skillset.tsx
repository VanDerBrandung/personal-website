import {
  HiOutlineComputerDesktop,
  HiOutlineCpuChip,
  HiOutlineServerStack,
} from 'react-icons/hi2'

const cards = [
  {
    name: 'Software Development',
    description:
      'During my time at OneCalendar I was able to solidify my knowlege as a software developer. This continuous commitment allowed me to deepen my expertise with Node.js, Typescript, React and a lot of other frameworks, languages and tools.',
    icon: HiOutlineComputerDesktop,
  },
  {
    name: 'Software Architecture',
    description:
      'I dedicated my efforts to building expertise in software architecture. This concentrated focus enabled me to develop a deep understanding of architectural principles and best practices in software design.',
    icon: HiOutlineCpuChip,
  },
  {
    name: 'Integration & Migration',
    description:
      'My time at DIGITALL allowed me to gain experience in the field of integration and migration projects. I was able to work with a variety of tools and technologies, such as MuleSoft, Talend, Salesforce and many more.',
    icon: HiOutlineServerStack,
  },
]

export default function Skillset() {
  return (
    <div className='relative isolate overflow-hidden py-12 sm:py-24'>
      <div className='mx-auto max-w-7xl'>
        <div className='mx-auto max-w-2xl lg:mx-0'>
          <h2 className='text-3xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl'>
            Skills
          </h2>
          <p className='text-md mt-6 leading-8 text-zinc-600 dark:text-zinc-400'>
            My skillset is quite extensive, encompassing Fullstack Web
            Development, Software Architecture, as well as Data Integration &
            Migration Projects. With this broad range of expertise, I’m
            well-prepared to handle a variety of projects and provide holistic
            solutions.
          </p>
        </div>
        <div className='mx-auto mt-8 grid max-w-2xl grid-cols-1 gap-6 sm:mt-12 lg:mx-0 lg:max-w-none lg:grid-cols-3 lg:gap-8'>
          {cards.map((card) => (
            <div
              key={card.name}
              className='flex gap-x-4 rounded-2xl border border-zinc-100 p-6 dark:border-zinc-700/40'
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
