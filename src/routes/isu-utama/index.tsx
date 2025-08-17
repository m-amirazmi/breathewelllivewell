import { createFileRoute } from '@tanstack/react-router'
import IsuUtamaHeroBanner from '@/components/IsuUtamaHeroBanner'
import IsuUtamaOjective from '@/components/IsuUtamaObjective'
import IsuUtamaPPR from '@/components/IsuUtamaPPR'

export const Route = createFileRoute('/isu-utama/')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <main>
      <IsuUtamaHeroBanner />
      <IsuUtamaOjective />
      <IsuUtamaPPR />
    </main>
  )
}
