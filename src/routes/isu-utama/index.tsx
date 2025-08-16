import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/isu-utama/')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/main-issue/"!</div>
}
