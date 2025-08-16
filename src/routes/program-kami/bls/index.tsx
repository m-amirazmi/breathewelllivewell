import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/program-kami/bls/')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/program-kami/bls/"!</div>
}
