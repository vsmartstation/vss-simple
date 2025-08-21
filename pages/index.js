import Header from '../components/Header'
import Hero from '../components/Hero'
import Features from '../components/Features'
import Stats from '../components/Stats'

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <Stats />
      <Features />
      
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-2xl font-bold mb-4">V SMART STATION</h3>
          <p className="text-gray-400 mb-4">
            Hệ sinh thái dịch vụ xe máy thông minh đầu tiên tại Việt Nam
          </p>
          <div className="flex justify-center space-x-6 text-sm">
            <a href="#" className="hover:text-vss-orange">Về chúng tôi</a>
            <a href="#" className="hover:text-vss-orange">Dịch vụ</a>
            <a href="#" className="hover:text-vss-orange">Liên hệ</a>
            <a href="#" className="hover:text-vss-orange">Tuyển dụng</a>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-800">
            <p className="text-gray-500">© 2025 V Smart Station. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
