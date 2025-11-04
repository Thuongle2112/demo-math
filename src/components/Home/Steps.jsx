function Steps() {
    const steps = [
        {
            step: "Bước 1",
            icon: (
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1" />
                </svg>
            ),
            title: "Đăng ký tài khoản miễn phí bằng Email hoặc số điện thoại."
        },
        {
            step: "Bước 2",
            icon: (
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
            ),
            title: "Chọn bài thi phù hợp: Bài thi đầy đủ (4 kỹ năng) hoặc Bài thi ngắn (theo nhu cầu)."
        },
        {
            step: "Bước 3",
            icon: (
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
            ),
            title: "Nhận kết quả và phản hồi chuyên gia trong 24-48 giờ."
        },
        {
            step: "Bước 4",
            icon: (
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
            ),
            title: "Lộ trình học tập cá nhân hóa sẽ được xây dựng ngay sau khi hoàn thành bài thi."
        }
    ];

    return (
        <section className="py-20 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl lg:text-5xl font-bold text-gray-900 mb-4">
                        Tham gia dễ<br />
                        dàng, cải thiện<br />
                        nhanh chóng!
                    </h2>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {steps.map((step, index) => (
                        <div key={index} className="relative">
                            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 text-center h-full">
                                <div className="mb-6">
                                    <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center text-white mx-auto mb-4">
                                        {step.icon}
                                    </div>
                                    <h3 className="text-xl font-bold text-gray-900 mb-4">
                                        {step.step}
                                    </h3>
                                </div>
                                <p className="text-gray-600 leading-relaxed">
                                    {step.title}
                                </p>
                            </div>
                            
                            {/* Connector Line */}
                            {index < steps.length - 1 && (
                                <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-orange-300 transform -translate-y-1/2"></div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Steps;