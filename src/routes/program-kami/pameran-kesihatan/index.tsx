import { createFileRoute } from '@tanstack/react-router'
import PameranKesihatanPosters from '@/components/PameranKesihatanPosters'
import PameranKesihatanFlipbook from '@/components/PameranKesihatanFlipbook'

export const Route = createFileRoute('/program-kami/pameran-kesihatan/')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <main>
      <PameranKesihatanPosters />
      <PameranKesihatanFlipbook />
    </main>
  )
}
