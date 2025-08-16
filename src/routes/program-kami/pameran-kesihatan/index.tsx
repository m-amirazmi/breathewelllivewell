import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/program-kami/pameran-kesihatan/')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/program-kami/pameran-kesihatan/"!</div>
}
