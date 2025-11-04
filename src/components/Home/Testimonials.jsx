import { useState, useEffect, useRef } from 'react';

function Testimonials() {
    const [currentSlide, setCurrentSlide] = useState(1);
    const [isTransitioning, setIsTransitioning] = useState(false);
    const [isHovered, setIsHovered] = useState(false);
    const intervalRef = useRef(null);

    const testimonials = [
        {
            quote: "Nhờ bài test miễn phí và chấm chữa chi tiết của ToánPro, tôi đã nhận ra những lỗi thường gặp trong bài giải và cải thiện rõ rệt chỉ sau 2 tháng!",
            name: "Nguyễn Thị Mai Anh",
            level: "Lộ trình học: 4.0 - 7.0 TOÁN",
            avatar: "/images/student-1.jpg"
        },
        {
            quote: "Điểm Toán của tôi tăng từ 6.0 lên 8.5 nhờ vào phản hồi thực tế và cách sửa lỗi cụ thể từ chuyên gia ToánPro.",
            name: "Trần Minh Khang",
            level: "Lộ trình học: 4.0 - 7.0 TOÁN",
            avatar: "/images/student-2.jpg"
        },
        {
            quote: "Nhờ có ToánPro, con em tôi đã cải thiện điểm số và tự tin hơn trong học tập. Rất cảm ơn đội ngũ giáo viên!",
            name: "Bà Phạm Thị Lan",
            level: "Phụ huynh học sinh lớp 9",
            avatar: "/images/parent-1.jpg"
        }
    ];

    // Tạo slides với clone
    const slidesWithClones = [
        testimonials[testimonials.length - 1],
        ...testimonials,
        testimonials[0]
    ];

    const totalSlides = slidesWithClones.length;

    // Auto slide
    const startAutoSlide = () => {
        intervalRef.current = setInterval(() => {
            nextSlide();
        }, 5000);
    };

    const stopAutoSlide = () => {
        if (intervalRef.current) {
            clearInterval(intervalRef.current);
        }
    };

    useEffect(() => {
        if (!isHovered) {
            startAutoSlide();
        } else {
            stopAutoSlide();
        }

        return () => stopAutoSlide();
    }, [isHovered]);

    const nextSlide = () => {
        if (isTransitioning) return;
        setIsTransitioning(true);
        setCurrentSlide(prev => prev + 1);
    };

    const prevSlide = () => {
        if (isTransitioning) return;
        setIsTransitioning(true);
        setCurrentSlide(prev => prev - 1);
    };

    const goToSlide = (index) => {
        if (isTransitioning) return;
        setIsTransitioning(true);
        setCurrentSlide(index + 1);
    };

    const handleTransitionEnd = () => {
        setIsTransitioning(false);

        if (currentSlide >= totalSlides - 1) {
            setCurrentSlide(1);
        } else if (currentSlide <= 0) {
            setCurrentSlide(testimonials.length);
        }
    };

    const getActualSlideIndex = () => {
        if (currentSlide === 0) return testimonials.length - 1;
        if (currentSlide === totalSlides - 1) return 0;
        return currentSlide - 1;
    };

    return (
        <section className="py-20 bg-orange-50">
            <div className="max-w-7xl mx-auto px-4 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl lg:text-5xl font-bold text-gray-900 mb-4">
                        Câu chuyện thành công<br />
                        từ học viên <span className="text-orange-500">Slearn</span>
                    </h2>
                </div>

                <div
                    className="relative group"
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}
                >
                    <div className="overflow-hidden">
                        <div
                            className={`flex ${isTransitioning ? 'transition-transform duration-700 ease-in-out' : ''}`}
                            style={{ transform: `translateX(-${currentSlide * 100}%)` }}
                            onTransitionEnd={handleTransitionEnd}
                        >
                            {slidesWithClones.map((testimonial, index) => (
                                <div key={`testimonial-${index}`} className="w-full flex-shrink-0 px-4">
                                    <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border-2 border-orange-200 mx-auto max-w-4xl">
                                        {/* Quote Icon */}
                                        <div className="flex justify-center mb-6">
                                            <div className="w-16 h-16 bg-orange-400 rounded-full flex items-center justify-center">
                                                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                                                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h4v10h-10z" />
                                                </svg>
                                            </div>
                                        </div>

                                        <div className="text-center">
                                            <blockquote className="text-gray-700 text-xl leading-relaxed mb-8 italic">
                                                "{testimonial.quote}"
                                            </blockquote>

                                            <div className="flex items-center justify-center gap-4">
                                                <img
                                                    src={testimonial.avatar}
                                                    alt={testimonial.name}
                                                    className="w-16 h-16 object-cover rounded-full border-2 border-orange-200"
                                                />
                                                <div className="text-left">
                                                    <h4 className="font-bold text-gray-900 text-lg">
                                                        {testimonial.name}
                                                    </h4>
                                                    <p className="text-gray-600 text-sm">
                                                        {testimonial.level}
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Navigation Buttons */}
                    <button
                        onClick={prevSlide}
                        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/90 backdrop-blur-sm rounded-full p-3 shadow-lg hover:shadow-xl hover:bg-white transition-all opacity-0 group-hover:opacity-100"
                    >
                        <svg className="w-6 h-6 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                        </svg>
                    </button>
                    <button
                        onClick={nextSlide}
                        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/90 backdrop-blur-sm rounded-full p-3 shadow-lg hover:shadow-xl hover:bg-white transition-all opacity-0 group-hover:opacity-100"
                    >
                        <svg className="w-6 h-6 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                    </button>

                    {/* Dots Indicator */}
                    <div className="flex justify-center gap-3 mt-8">
                        {testimonials.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => goToSlide(index)}
                                className={`transition-all duration-300 ${index === getActualSlideIndex()
                                        ? 'w-8 h-3 bg-orange-500 rounded-full'
                                        : 'w-3 h-3 bg-gray-300 rounded-full hover:bg-gray-400'
                                    }`}
                            />
                        ))}
                    </div>

                    {/* Progress Bar */}
                    <div className="mt-4 w-full bg-gray-200 rounded-full h-1">
                        <div
                            className="bg-orange-500 h-1 rounded-full transition-all duration-300"
                            style={{ width: `${((getActualSlideIndex() + 1) / testimonials.length) * 100}%` }}
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Testimonials;