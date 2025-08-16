import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute(
  '/program-kami/forum-breathe-well-live-well/',
)({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/program-kami/forum-breathe-well-live-well/"!</div>
}
