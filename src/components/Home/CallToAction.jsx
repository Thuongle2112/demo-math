function CallToAction() {
    return (
        <section className="py-20 bg-gradient-to-r from-orange-100 to-yellow-100">
            <div className="max-w-7xl mx-auto px-4 lg:px-8">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    {/* Left Content */}
                    <div className="space-y-8">
                        <h2 className="text-3xl lg:text-5xl font-bold text-gray-900 leading-tight">
                            Bắt đầu hành trình <span className="text-orange-500">TOÁN</span> với bài thi thử miễn
                            phí và công nghệ tiên tiến từ <span className="text-orange-500">Slearn</span>
                        </h2>

                        <div className="pt-6">
                            <button className="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-8 py-4 rounded-lg text-lg transition-all duration-300 hover:shadow-lg">
                                Tham gia Miễn Phí
                            </button>
                        </div>
                    </div>

                    {/* Right Image */}
                    <div className="relative">
                        <div className="relative z-10">

                            <img
                                src="/images/cta.png"
                                alt="Học sinh vui vẻ"
                                className="w-full h-auto"
                            />

                        </div>
                        {/* Decorative orange circle */}
                        <div className="absolute bottom-0 right-8 w-24 h-24 bg-orange-500 rounded-full"></div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default CallToAction;