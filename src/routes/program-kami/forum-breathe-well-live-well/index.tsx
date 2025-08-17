import { createFileRoute } from '@tanstack/react-router'
import ForumPanelist from '@/components/ForumPanelist'

export const Route = createFileRoute(
  '/program-kami/forum-breathe-well-live-well/',
)({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <main>
      <ForumPanelist />
    </main>
  )
}
