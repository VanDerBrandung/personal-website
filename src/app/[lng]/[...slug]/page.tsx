import NotFoundPage from '../not-found'

//@ts-ignore
export default function NotFound({
  params: { lng },
}: {
  params: { lng: string }
}) {
  return <NotFoundPage params={{ lng }} />
}
