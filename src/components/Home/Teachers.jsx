import { useState, useEffect, useRef } from 'react';

function Teachers() {
    const [currentSlide, setCurrentSlide] = useState(1); // Bắt đầu từ slide thứ 1 (clone)
    const [isTransitioning, setIsTransitioning] = useState(false);
    const [isHovered, setIsHovered] = useState(false);
    const intervalRef = useRef(null);
    const slideRef = useRef(null);

    const teachers = [
        {
            name: "Thầy Duy Anh",
            image: "/images/teacher-1.jpg",
            achievements: [
                "Đại học Bách Khoa Hà Nội",
                "9+ điểm thi ĐH môn Toán 2025",
            ]
        },
        {
            name: "Cô Phạm Thảo",
            image: "/images/teacher-2.jpg",
            achievements: [
                "Học viên Ngân hàng",
                "9+ điểm thi ĐH môn Toán 2025",
                "Chuyên gia luyện thi THPT Quốc gia"
            ]
        },
        {
            name: "Thầy Văn Quang",
            image: "/images/teacher-3.jpg",
            achievements: [
                "6+ năm kinh nghiệm giảng dạy",
                "Chuyên gia luyện thi ĐHQG",
                "Tác giả nhiều cuốn sách toán nổi tiếng",
                "Giải nhất Olympic Toán toàn quốc"
            ]
        }
    ];

    // Tạo slides với clone đầu và cuối để infinite loop
    const slidesWithClones = [
        teachers[teachers.length - 1], // Clone cuối cùng
        ...teachers,
        teachers[0] // Clone đầu tiên
    ];

    const totalSlides = slidesWithClones.length;

    // Auto slide function
    const startAutoSlide = () => {
        intervalRef.current = setInterval(() => {
            nextSlide();
        }, 4000);
    };

    const stopAutoSlide = () => {
        if (intervalRef.current) {
            clearInterval(intervalRef.current);
        }
    };

    // Auto slide effect
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
        setCurrentSlide(index + 1); // +1 vì có clone ở đầu
    };

    // Handle transition end để reset position khi cần
    const handleTransitionEnd = () => {
        setIsTransitioning(false);

        if (currentSlide >= totalSlides - 1) {
            // Đến clone cuối -> jump về slide đầu thật
            setCurrentSlide(1);
        } else if (currentSlide <= 0) {
            // Đến clone đầu -> jump về slide cuối thật
            setCurrentSlide(teachers.length);
        }
    };

    // Get actual slide index for dots indicator
    const getActualSlideIndex = () => {
        if (currentSlide === 0) return teachers.length - 1;
        if (currentSlide === totalSlides - 1) return 0;
        return currentSlide - 1;
    };

    return (
        <section className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl lg:text-5xl font-bold text-gray-900 mb-4">
                        Giáo viên hạng A
                    </h2>
                    <p className="text-xl text-orange-500 font-semibold">
                        Gắn bó đồng hành - Chia sẻ tận tâm
                    </p>
                </div>

                <div
                    className="relative group"
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}
                >
                    <div className="overflow-hidden rounded-2xl">
                        <div
                            ref={slideRef}
                            className={`flex ${isTransitioning ? 'transition-transform duration-700 ease-in-out' : ''}`}
                            style={{ transform: `translateX(-${currentSlide * 100}%)` }}
                            onTransitionEnd={handleTransitionEnd}
                        >
                            {slidesWithClones.map((teacher, index) => (
                                <div key={`slide-${index}`} className="w-full flex-shrink-0">
                                    <div className="bg-gradient-to-r from-orange-400 to-orange-600 rounded-2xl p-8 flex flex-col lg:flex-row items-center gap-8 min-h-[400px]">
                                        <div className="lg:w-1/3 flex justify-center">
                                            <img
                                                src={teacher.image}
                                                alt={teacher.name}
                                                className="w-64 h-64 object-cover rounded-2xl shadow-lg"
                                            />
                                        </div>
                                        <div className="lg:w-2/3 text-white">
                                            <div className="mb-6">
                                                <h3 className="text-3xl lg:text-4xl font-bold mb-4">{teacher.name}</h3>
                                                <div className="bg-white text-orange-600 px-4 py-2 rounded-full inline-block font-bold text-lg">
                                                    Giáo viên Toán
                                                </div>
                                            </div>
                                            <ul className="space-y-4">
                                                {teacher.achievements.map((achievement, idx) => (
                                                    <li key={idx} className="flex items-start gap-4">
                                                        <div className="w-3 h-3 bg-white rounded-full mt-2 flex-shrink-0"></div>
                                                        <span className="text-base lg:text-lg leading-relaxed">{achievement}</span>
                                                    </li>
                                                ))}
                                            </ul>
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
                        {teachers.map((_, index) => (
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
                            style={{ width: `${((getActualSlideIndex() + 1) / teachers.length) * 100}%` }}
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Teachers;