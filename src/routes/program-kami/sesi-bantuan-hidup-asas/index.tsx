import { createFileRoute } from '@tanstack/react-router'
import BLSVideos from '@/components/BLSVideos'

export const Route = createFileRoute('/program-kami/sesi-bantuan-hidup-asas/')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <main>
      <BLSVideos />
    </main>
  )
}
