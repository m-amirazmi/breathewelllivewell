import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/program-kami/sesi-bantuan-hidup-asas/')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/program-kami/sesi-bantuan-hidup-asas/"!</div>
}
