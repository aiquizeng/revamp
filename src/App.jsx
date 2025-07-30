import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import ProtectedRoute from './components/ProtectedRoute'
import Home from './pages/Home'
import Services from './pages/Services'
import About from './pages/About'
import Portfolio from './pages/Portfolio'
import Contact from './pages/Contact'
import Login from './pages/Login'
import AdminDashboard from './pages/AdminDashboard'

function App() {
  return (
    <Routes>
      {/* Admin routes without layout */}
      <Route path="/admin-login" element={<Login />} />
      <Route path="/admin-dashboard" element={
        <ProtectedRoute>
          <AdminDashboard />
        </ProtectedRoute>
      } />
      
      {/* Main site routes with layout */}
      <Route path="/" element={
        <Layout>
          <Home />
        </Layout>
      } />
      <Route path="/services" element={
        <Layout>
          <Services />
        </Layout>
      } />
      <Route path="/about" element={
        <Layout>
          <About />
        </Layout>
      } />
      <Route path="/portfolio" element={
        <Layout>
          <Portfolio />
        </Layout>
      } />
      <Route path="/contact" element={
        <Layout>
          <Contact />
        </Layout>
      } />
    </Routes>
  )
}

export default App