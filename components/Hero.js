import { Zap, Clock, Shield, Leaf } from 'lucide-react'

export default function Hero() {
  return (
    <section className="bg-gradient-to-r from-vss-blue to-blue-600 text-white py-20">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-5xl font-bold mb-6">
          Thay Nhớt Thông Minh
          <br />
          <span className="text-vss-orange">24/7 Tự Động</span>
        </h2>
        
        <p className="text-xl mb-8 max-w-2xl mx-auto">
          Hệ sinh thái dịch vụ xe máy đầu tiên tại Việt Nam với công nghệ IoT, 
          AI và cam kết ESG bền vững
        </p>
        
        <div className="flex justify-center space-x-4 mb-12">
          <button className="btn-secondary text-lg px-8 py-3">
            Tìm Trạm Gần Nhất
          </button>
          <button className="border-2 border-white text-white px-8 py-3 rounded hover:bg-white hover:text-vss-blue transition-colors">
            Xem Demo
          </button>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
          <div className="text-center">
            <Zap className="mx-auto mb-2 text-vss-orange" size={32} />
            <h3 className="font-semibold">3 Phút</h3>
            <p className="text-sm opacity-90">Thay nhớt xong</p>
          </div>
          <div className="text-center">
            <Clock className="mx-auto mb-2 text-vss-orange" size={32} />
            <h3 className="font-semibold">24/7</h3>
            <p className="text-sm opacity-90">Hoạt động</p>
          </div>
          <div className="text-center">
            <Shield className="mx-auto mb-2 text-vss-orange" size={32} />
            <h3 className="font-semibold">100%</h3>
            <p className="text-sm opacity-90">Minh bạch</p>
          </div>
          <div className="text-center">
            <Leaf className="mx-auto mb-2 text-vss-orange" size={32} />
            <h3 className="font-semibold">ESG</h3>
            <p className="text-sm opacity-90">Bền vững</p>
          </div>
        </div>
      </div>
    </section>
  )
}
