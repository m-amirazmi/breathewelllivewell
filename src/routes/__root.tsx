import { Outlet, createRootRoute } from '@tanstack/react-router'

import Header from '../components/Header'
import Footer from '@/components/Footer'

export const Route = createRootRoute({
  component: () => (
    <div className="flex flex-col min-h-screen">
      <Header />
      <Outlet />
      <Footer />
    </div>
  ),
})
