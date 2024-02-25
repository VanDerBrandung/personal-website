export function TechTags({ techList }: { techList: string[] }) {
  return (
    <div className='-m-1 flex flex-wrap gap-1'>
      {techList.map((tech) => (
        <span
          key={tech}
          className='inline-flex items-center rounded-full bg-indigo-100 px-1.5 py-0.5 text-xs font-medium text-indigo-700 dark:border dark:border-indigo-400 dark:bg-transparent dark:text-indigo-400'
        >
          {tech}
        </span>
      ))}
    </div>
  )
}
