import { lazy, Suspense } from 'react'
import { Route, Routes } from 'react-router-dom'
import { PageContainer } from './layouts/PageContainer'
import { ScrollToTop } from './routes/ScrollToTop'

const HomePage = lazy(() => import('./pages/HomePage').then((module) => ({ default: module.HomePage })))
const HowItWorksPage = lazy(() => import('./pages/HowItWorksPage').then((module) => ({ default: module.HowItWorksPage })))
const ResourcesPage = lazy(() => import('./pages/ResourcesPage').then((module) => ({ default: module.ResourcesPage })))
const AboutPage = lazy(() => import('./pages/AboutPage').then((module) => ({ default: module.AboutPage })))
const ContactPage = lazy(() => import('./pages/ContactPage').then((module) => ({ default: module.ContactPage })))

function PageLoader() {
  return (
    <div aria-live="polite" className="page-loader" role="status">
      <strong>HazeLink</strong>
      <span className="page-loader-track"><i /></span>
      <small>Preparando sua experiência</small>
    </div>
  )
}

function App() {
  return (
    <PageContainer>
      <ScrollToTop />
      <Suspense fallback={<PageLoader />}>
        <Routes>
          <Route element={<HomePage />} path="/" />
          <Route element={<HowItWorksPage />} path="/como-funciona" />
          <Route element={<ResourcesPage />} path="/recursos" />
          <Route element={<ResourcesPage />} path="/beneficios" />
          <Route element={<AboutPage />} path="/sobre" />
          <Route element={<ContactPage />} path="/contato" />
        </Routes>
      </Suspense>
    </PageContainer>
  )
}

export default App
