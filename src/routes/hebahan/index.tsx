import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/hebahan/')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/hebahan/"!</div>
}
