import { MapPin, Phone, User } from 'lucide-react'

export default function Header() {
  return (
    <header className="bg-vss-blue text-white shadow-lg">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-4">
            <h1 className="text-2xl font-bold">V SMART STATION</h1>
            <span className="text-sm bg-vss-orange px-2 py-1 rounded">BETA</span>
          </div>
          
          <div className="flex items-center space-x-6">
            <div className="flex items-center space-x-2">
              <MapPin size={16} />
              <span className="text-sm">30+ Trạm</span>
            </div>
            <div className="flex items-center space-x-2">
              <Phone size={16} />
              <span className="text-sm">1900-VSS</span>
            </div>
            <button className="flex items-center space-x-2 bg-vss-green px-4 py-2 rounded hover:bg-green-600 transition-colors">
              <User size={16} />
              <span>Đăng nhập</span>
            </button>
          </div>
        </div>
      </div>
    </header>
  )
}
