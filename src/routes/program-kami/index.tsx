import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/program-kami/')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/program-kami/"!</div>
}
