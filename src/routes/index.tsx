import { createFileRoute } from '@tanstack/react-router'
import Announcements from '@/components/Announcements'
import HeroBanner from '@/components/HeroBanner'
import Tentative from '@/components/Tentative'
import Sponsors from '@/components/Sponsors'
import ForumPanelist from '@/components/ForumPanelist'

export const Route = createFileRoute('/')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <main>
      <HeroBanner />
      <ForumPanelist />
      <Tentative />
      <Sponsors />
      <Announcements />
    </main>
  )
}
