import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from '@/components/Layout'
import Dashboard from '@/pages/Dashboard'
import NewProcurement from '@/pages/NewProcurement'
import RFQInbox from '@/pages/RFQInbox'
import SupplierComparison from '@/pages/SupplierComparison'
import VendorExplorer from '@/pages/VendorExplorer'
import Projects from '@/pages/Projects'
import Approvals from '@/pages/Approvals'
import WhatsAppHub from '@/pages/WhatsAppHub'
import Analytics from '@/pages/Analytics'

export default function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/new" element={<NewProcurement />} />
          <Route path="/rfq-inbox" element={<RFQInbox />} />
          <Route path="/compare/:id" element={<SupplierComparison />} />
          <Route path="/vendors" element={<VendorExplorer />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/approvals" element={<Approvals />} />
          <Route path="/whatsapp" element={<WhatsAppHub />} />
          <Route path="/analytics" element={<Analytics />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  )
}