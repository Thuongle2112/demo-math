function Hero() {
    return (
        <section className="min-h-screen flex items-center">
            <div className="max-w-7xl mx-auto px-4 lg:px-8 py-16">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    {/* Left Content */}
                    <div className="space-y-8">
                        <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 leading-tight">
                            Cán đích <span className="text-orange-500">9+ TOÁN</span> dễ
                            dàng hơn với <span className="text-orange-500">ToánPro</span>
                        </h1>

                        <p className="text-lg lg:text-xl text-gray-600 leading-relaxed">
                            Tham gia bài thi thử Toán miễn phí, nhận phản hồi từ chuyên gia và lộ
                            trình học tập cá nhân hóa phù hợp với bạn.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4">
                            <button className="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-8 py-4 rounded-lg text-lg transition-all duration-300 hover:shadow-lg cursor-pointer">
                                BẮT ĐẦU NGAY
                            </button>
                            <button className="border-2 border-orange-500 text-orange-500 hover:bg-orange-50 font-semibold px-8 py-4 rounded-lg text-lg transition-all duration-300">
                                MIỄN PHÍ 100%
                            </button>
                        </div>
                    </div>

                    {/* Right Image */}
                    <div className="relative">
                        <div className="relative z-10">
                            <img
                                src="/svg/hero-banner.svg"
                                alt="Học sinh học toán"
                                className="w-full h-auto"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Hero;