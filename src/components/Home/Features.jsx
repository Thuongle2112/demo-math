function Features() {
    const features = [
        {
            image: "/images/feature-1.jpg",
            title: "Đề thi bám sát chuẩn cấu trúc",
            description: "Bám sát theo ma trận đặc thù với dạng thức câu hỏi và nội dung ôn luyện riêng của các tỉnh, thành phố",
            buttonText: "Khám Phá Ngay"
        },
        {
            image: "/images/feature-2.jpg",
            title: "Đáp án & lời giải chi tiết",
            description: "Đáp án được cung cấp kèm Lời giải chi tiết.",
            buttonText: "Khám Phá Ngay"
        },
        {
            image: "/images/feature-3.jpg",
            title: "Tài liệu học Miễn Phí",
            description: "Truy cập thư viện tài liệu Toán cao cấp, được biên soạn bài bản để hỗ trợ luyện thi hiệu quả.",
            buttonText: "Khám Phá Ngay"
        },
        {
            image: "/images/feature-4.jpg",
            title: "Báo cáo kết quả chi tiết",
            description: "Kết quả luyện đề được hiển thị đầy đủ cùng với hệ thống video phân tích, chữa đề chuyên sâu giúp nâng cao kĩ năng giải đề",
            buttonText: "Khám Phá Ngay"
        }
    ];

    return (
        <section className="py-20 bg-orange-50">
            <div className="max-w-7xl mx-auto px-4 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl lg:text-5xl font-bold text-gray-900 mb-4">
                        Điểm nổi bật của bài thi thử<br />
                        <span className="block mt-2 text-orange-500">TOÁN miễn phí tại Slearn</span>
                    </h2>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {features.map((feature, index) => (
                        <div
                            key={index}
                            className="from-29% via-74% to-99% bg-gradient-to-tl from-[#FCBA54] via-[#FFFFFF] to-[#F37121] relative m-1 rounded-[20px] border-transparent p-1 delay-200 duration-300 animate-in fade-in slide-in-from-bottom hover:shadow-xl transition-all"
                            style={{
                                animationDelay: `${index * 100}ms`,
                                animationFillMode: 'both'
                            }}
                        >
                            <div className="bg-white rounded-[16px] p-6 shadow-lg flex flex-col h-full">
                                <div className="mb-6">
                                    <img
                                        src={feature.image}
                                        alt={feature.title}
                                        className="w-full h-48 object-cover rounded-xl"
                                    />
                                </div>

                                <h3 className="text-xl font-bold text-gray-900 mb-4">
                                    {feature.title}
                                </h3>

                                <p className="text-gray-600 mb-6 leading-relaxed flex-grow">
                                    {feature.description}
                                </p>

                                <button className="text-orange-500 font-semibold flex items-center gap-2 hover:gap-3 transition-all duration-300 mt-auto cursor-pointer">
                                    {feature.buttonText}
                                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                    </svg>
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Features;