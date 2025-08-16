import { createFileRoute } from '@tanstack/react-router'
import logo from '../logo.svg'
import { useTranslation } from 'react-i18next'

export const Route = createFileRoute('/')({
  component: App,
})

function App() {
  const {t} = useTranslation()
  return (
    <div>
      {/* Header */}
      {/* Hero Section */}
      {/* Content Header */}
      {/* Content Body */}
      {/*  */}
    </div>
  )
}
