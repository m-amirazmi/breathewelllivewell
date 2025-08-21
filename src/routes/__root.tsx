import { Outlet, createRootRoute } from '@tanstack/react-router'

import Footer from '@/components/Footer'
import Header from '../components/Header'

export const Route = createRootRoute({
  component: () => (
    <div className="flex flex-col min-h-screen">
      <Header />
      <Outlet />
      <Footer />
    </div>
  ),
})
