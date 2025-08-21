import { Smartphone, Cpu, Recycle, BarChart3 } from 'lucide-react'

export default function Features() {
  const features = [
    {
      icon: <Smartphone className="text-vss-orange" size={48} />,
      title: "App VSS Thông Minh",
      description: "Đặt lịch, thanh toán, theo dõi xe máy của bạn mọi lúc mọi nơi"
    },
    {
      icon: <Cpu className="text-vss-orange" size={48} />,
      title: "IoT & AI Technology",
      description: "Trạm tự động với công nghệ IoT, AI dự đoán và bảo trì chủ động"
    },
    {
      icon: <Recycle className="text-vss-orange" size={48} />,
      title: "Thu Gom Nhớt Thải",
      description: "100% nhớt thải được thu gom và tái chế, đóng góp cho môi trường"
    },
    {
      icon: <BarChart3 className="text-vss-orange" size={48} />,
      title: "Dashboard Quản Lý",
      description: "Theo dõi real-time, báo cáo chi tiết cho đối tác và người dùng"
    }
  ]

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Tại Sao Chọn VSS?
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Hệ sinh thái hoàn chỉnh từ dịch vụ đến công nghệ, 
            từ người dùng đến đối tác
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) =>
@"
export default function Stats() {
  const stats = [
    { number: "30+", label: "Trạm Hoạt Động", color: "text-vss-blue" },
    { number: "50K+", label: "Lượt Dịch Vụ", color: "text-vss-green" },
    { number: "100%", label: "Thu Gom Nhớt Thải", color: "text-vss-orange" },
    { number: "24/7", label: "Hỗ Trợ", color: "text-purple-600" }
  ]

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className={	ext-4xl md:text-5xl font-bold mb-2 }>
                {stat.number}
              </div>
              <div className="text-gray-600 font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
