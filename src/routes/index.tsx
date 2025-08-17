import { createFileRoute } from '@tanstack/react-router'
import Announcements from '@/components/Announcements'
import HeroBanner from '@/components/HeroBanner'
import Tentative from '@/components/Tentative'
import Sponsors from '@/components/Sponsors'

export const Route = createFileRoute('/')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <main>
      <HeroBanner />
      <Tentative />
      <Sponsors />
      <Announcements />
    </main>
  )
}
