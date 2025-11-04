function StudyPlan() {
    const features = [
        {
            icon: (
                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                </svg>
            ),
            title: "Phương pháp học tập cá nhân hóa",
            description: "Xác định điểm mạnh, khắc phục điểm yếu và tăng tốc thành công với lộ trình học tập phù hợp."
        },
        {
            icon: (
                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M4 4a2 2 0 012-2h8a2 2 0 012 2v12a1 1 0 110 2h-3a1 1 0 01-1-1v-6a1 1 0 00-1-1H9a1 1 0 00-1 1v6a1 1 0 01-1 1H4a1 1 0 110-2V4z" clipRule="evenodd" />
                </svg>
            ),
            title: "Bài tập tối ưu hóa",
            description: "Gia tăp kỹ thi thực tế và tăng tốc độ tiến bộ qua các bài học tập trung vào từng kỹ năng."
        },
        {
            icon: (
                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                </svg>
            ),
            title: "Hỗ trợ không giới hạn",
            description: "Đội ngũ Slearn đồng hành cùng học viên và phụ huynh với tư vấn chuyên sâu và khó tài nguyên miễn phí, trả phí đa dạng."
        }
    ];

    return (
        <section className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 lg:px-8">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    {/* Left Image */}
                    <div className="relative">
                        <div className="relative z-10">
                            <img
                                src="/svg/promotion.svg"
                                alt="Học sinh thành công"
                                className="w-full h-auto"
                            />
                        </div>
                    </div>

                    {/* Right Content */}
                    <div className="space-y-8">
                        <div>
                            <h2 className="text-3xl lg:text-5xl font-bold text-gray-900 mb-4">
                                Rút ngắn hành trình <span className="text-orange-500">TOÁN</span><br />
                                mơ ước trong <span className="text-orange-500">6 tháng</span>
                            </h2>
                        </div>

                        <div className="space-y-8">
                            {features.map((feature, index) => (
                                <div key={index} className="flex gap-6">
                                    <div className="flex-shrink-0">
                                        <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center text-white">
                                            {feature.icon}
                                        </div>
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold text-gray-900 mb-3">
                                            {feature.title}
                                        </h3>
                                        <p className="text-gray-600 leading-relaxed">
                                            {feature.description}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className="pt-6">
                            <button className="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-8 py-4 rounded-lg text-lg transition-all duration-300 hover:shadow-lg cursor-pointer">
                                Bắt đầu học ngay
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default StudyPlan;