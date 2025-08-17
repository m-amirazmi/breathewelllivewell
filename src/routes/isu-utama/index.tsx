import { createFileRoute } from '@tanstack/react-router'
import IsuUtamaHeroBanner from '@/components/IsuUtamaHeroBanner'

export const Route = createFileRoute('/isu-utama/')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <main>
      <IsuUtamaHeroBanner />
    </main>
  )
}
