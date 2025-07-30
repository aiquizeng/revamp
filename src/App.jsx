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
      <Route path="/admin-login" element={<Login />} />
      <Route path="/admin-dashboard" element={
        <ProtectedRoute>
          <AdminDashboard />
        </ProtectedRoute>
      } />
      <Route path="/*" element={
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<Services />} />
            <Route path="/about" element={<About />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </Layout>
      } />
    </Routes>
  )
}

export default App