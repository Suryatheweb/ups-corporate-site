import { Route, Routes } from 'react-router-dom'
import Layout from './components/Layout'
import Company from './pages/Company'
import Contact from './pages/Contact'
import Home from './pages/Home'
import Message from './pages/Message'
import News from './pages/News'
import NotFound from './pages/NotFound'
import Service from './pages/Service'

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="news" element={<News />} />
        <Route path="message" element={<Message />} />
        <Route path="service" element={<Service />} />
        <Route path="company" element={<Company />} />
        <Route path="contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  )
}
