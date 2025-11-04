import { useState, useRef, useEffect } from 'react';
import { examData, getProvinces, getAllExamSetsByProvince } from '../../data/examData';

function ExamOverview({ examSets, onExamClick, onProvinceChange, selectedProvince = 'Nam Định', urlParams, onExamTypeSelect }) {
    const scrollRef = useRef(null);
    const [showLeftArrow, setShowLeftArrow] = useState(false);
    const [showRightArrow, setShowRightArrow] = useState(true);
    const provinces = getProvinces();

    // Calculate simple stats
    const getDashboardStats = () => {
        let totalExams = 0;

        provinces.forEach(province => {
            const years = Object.keys(examData[province] || {});
            years.forEach(year => {
                const examSet = examData[province][year];
                if (examSet) {
                    if (urlParams?.type && urlParams?.grade) {
                        if (examSet.type === urlParams.type && examSet.grade === urlParams.grade) {
                            totalExams += (examSet.soExams?.length || 0) +
                                (examSet.phongExams?.length || 0) +
                                (examSet.chuyenExams?.length || 0) +
                                (examSet.truongExams?.length || 0);
                        }
                    } else {
                        totalExams += (examSet.soExams?.length || 0) +
                            (examSet.phongExams?.length || 0) +
                            (examSet.chuyenExams?.length || 0) +
                            (examSet.truongExams?.length || 0);
                    }
                }
            });
        });

        return { totalExams };
    };

    const stats = getDashboardStats();

    // Generate recommended exams based on difficulty progression
    const getRecommendedExams = () => {
        const recommendations = [];

        // Mock user progress (in real app, this would come from user data)
        const userProgress = {
            phong: 60, // 60% completed
            so: 40,    // 40% completed
            truong: 20, // 20% completed
            chuyen: 10  // 10% completed
        };

        // Recommendation logic
        if (userProgress.phong < 80) {
            recommendations.push({
                type: 'phong',
                title: 'Đề Phòng GD&ĐT Nam Định',
                subtitle: 'Nâng cao kỹ năng cơ bản',
                difficulty: 'Dễ',
                priority: 'Thấp',
                reason: 'Bạn mới hoàn thành 60% đề Phòng. Hãy luyện thêm để vững vàng kiến thức cơ bản.',
                estimatedTime: '90 phút',
                topics: ['Hàm số', 'Phương trình', 'Hình học'],
                icon: (
                    <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3z" />
                    </svg>
                )
            });
        }

        if (userProgress.so < 70) {
            recommendations.push({
                type: 'so',
                title: 'Đề Sở GD&ĐT Nam Định',
                subtitle: 'Rèn luyện tư duy logic',
                difficulty: 'Trung bình',
                priority: 'Trung bình',
                reason: 'Bạn đã có nền tảng tốt. Đây là bước tiếp theo để nâng cao khả năng.',
                estimatedTime: '120 phút',
                topics: ['Tích phân', 'Logarit', 'Số phức'],
                icon: (
                    <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4z" />
                    </svg>
                )
            });
        }

        if (userProgress.phong > 70 && userProgress.so > 50) {
            recommendations.push({
                type: 'truong',
                title: 'Đề Trường THPT Nam Định',
                subtitle: 'Thử thách bản thân',
                difficulty: 'Khó',
                priority: 'Thấp',
                reason: 'Bạn đã sẵn sàng cho thử thách mới. Đề trường sẽ giúp bạn làm quen với dạng khó.',
                estimatedTime: '150 phút',
                topics: ['Bài toán tối ưu', 'Hình học không gian', 'Lượng giác'],
                icon: (
                    <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M10.75 2.75a.75.75 0 00-1.5 0v8.614L6.295 8.235a.75.75 0 10-1.09 1.03L10 14.75l4.795-5.485a.75.75 0 10-1.09-1.03l-2.955 3.129V2.75z" />
                    </svg>
                )
            });
        }

        if (userProgress.so > 70 && userProgress.truong > 40) {
            recommendations.push({
                type: 'chuyen',
                title: 'Đề Trường Chuyên Nam Định',
                subtitle: 'Chinh phục đỉnh cao',
                difficulty: 'Rất khó',
                priority: 'Thấp',
                reason: 'Bạn đã đạt trình độ cao. Đây là cơ hội để thử sức với các bài toán Olympic.',
                color: 'purple',
                bgGradient: 'from-purple-400 to-purple-600',
                estimatedTime: '180 phút',
                topics: ['Bài toán chứng minh', 'Hình học tổng hợp', 'Số học'],
                icon: (
                    <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03z" />
                    </svg>
                )
            });
        }

        return recommendations.slice(0, 3); // Return top 3 recommendations
    };

    const recommendations = getRecommendedExams();

    // Get trending exams (mock data)
    const getTrendingExams = () => {
        return [
            {
                title: 'Đề Sở Nam Định 2025-2026',
                type: 'so',
                students: 1234,
                avgScore: 7.5,
                difficulty: 'Trung bình',
                isNew: true
            },
            {
                title: 'Đề Phòng Hà Nội GK1-2024',
                type: 'phong',
                students: 856,
                avgScore: 8.2,
                difficulty: 'Dễ',
                isHot: true
            },
            {
                title: 'Đề Chuyên Lê Hồng Phong',
                type: 'chuyen',
                students: 432,
                avgScore: 6.1,
                difficulty: 'Rất khó',
                isChallenge: true
            },
            {
                title: 'Đề Trường THPT Phan Bội Châu',
                type: 'truong',
                students: 789,
                avgScore: 6.8,
                difficulty: 'Khó',
                isNew: true,
                isHot: true
            }
        ];
    };

    const trendingExams = getTrendingExams();

    // Scroll functions
    const scroll = (direction) => {
        const container = scrollRef.current;
        if (!container) return;

        const scrollAmount = 320; // Width of one card + gap
        const newScrollLeft = direction === 'left'
            ? container.scrollLeft - scrollAmount
            : container.scrollLeft + scrollAmount;

        container.scrollTo({
            left: newScrollLeft,
            behavior: 'smooth'
        });
    };

    const handleScroll = () => {
        const container = scrollRef.current;
        if (!container) return;

        setShowLeftArrow(container.scrollLeft > 0);
        setShowRightArrow(
            container.scrollLeft < container.scrollWidth - container.clientWidth - 10
        );
    };

    // Check initial scroll state
    useEffect(() => {
        const container = scrollRef.current;
        if (container && trendingExams.length > 0) {
            setTimeout(() => {
                handleScroll();
            }, 100);
        }
    }, [trendingExams]);

    const getDisplayTitle = () => {
        if (urlParams?.type && urlParams?.grade) {
            const typeLabels = {
                'giuaky1': 'Kiểm tra giữa kỳ 1',
                'cuoiky1': 'Thi cuối kỳ 1',
                'giuaky2': 'Kiểm tra giữa kỳ 2',
                'cuoiky2': 'Thi cuối kỳ 2',
                'tuyensinh': 'Tuyển sinh lớp 10',
                'totnghiep': 'Tốt nghiệp THPT'
            };
            return `Đề xuất ${typeLabels[urlParams.type] || 'thi thử'} lớp ${urlParams.grade}`;
        }
        return 'Đề xuất dành cho bạn';
    };

    // Handle navigation - giống như ExamTypeSelection
    const handleNavigateWithExamType = (examType) => {
        if (onExamTypeSelect) {
            onExamTypeSelect(examType); // Gọi giống như ExamTypeSelection
        }
    };

    return (
        <div className="space-y-8">
            {/* URL Params Info Banner */}
            {/* {urlParams?.type && urlParams?.grade && (
                <div className="bg-gradient-to-r from-orange-50 to-orange-100 border border-orange-200 rounded-xl p-4">
                    <div className="flex items-center gap-3">
                        <svg className="w-6 h-6 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <div>
                            <p className="text-orange-800 font-medium">Đang hiển thị đề xuất được lọc</p>
                            <p className="text-orange-600 text-sm">
                                Loại: {urlParams.type}, Lớp: {urlParams.grade}
                            </p>
                        </div>
                    </div>
                </div>
            )} */}

            {/* Page Header */}
            <div className="text-center">
                <h1 className="text-4xl font-bold text-gray-900 mb-4">
                    {getDisplayTitle()}
                </h1>
                <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                    Hệ thống AI thông minh phân tích tiến độ học tập và đề xuất những bộ đề phù hợp nhất để bạn nâng cao kỹ năng một cách hiệu quả
                </p>
                <div className="mt-4 inline-flex items-center gap-2 bg-blue-50 text-blue-700 px-4 py-2 rounded-full text-sm">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" />
                    </svg>
                    Tổng cộng {stats.totalExams} đề thi chất lượng cao
                </div>
            </div>

            {/* Main Recommendations */}
            <div>
                <div className="flex items-center gap-3 mb-6">
                    <div className="w-10 h-10 bg-gradient-to-r from-orange-400 to-orange-600 rounded-xl flex items-center justify-center">
                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                        </svg>
                    </div>
                    <div>
                        <h2 className="text-2xl font-bold text-gray-900">Đề xuất cho bạn</h2>
                        <p className="text-gray-600">Dựa trên phân tích tiến độ học tập của bạn</p>
                    </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                    {recommendations.map((rec, index) => (
                        <div
                            key={index}
                            className={`relative bg-gradient-to-br from-orange-300 to-orange-400 rounded-2xl p-6 text-white shadow-xl hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300 cursor-pointer`}
                            onClick={() => handleNavigateWithExamType(rec.type)}
                        >
                            {/* Priority Badge */}
                            <div className={`absolute top-4 right-4 px-3 py-1 rounded-full text-xs font-semibold ${rec.priority === 'Cao' ? 'bg-red-500/90' :
                                rec.priority === 'Trung bình' ? 'bg-yellow-500/90' : 'bg-green-500/90'
                                }`}>
                                {rec.priority}
                            </div>

                            {/* Icon */}
                            <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center mb-4">
                                {rec.icon}
                            </div>

                            {/* Content */}
                            <div className="space-y-3">
                                <div>
                                    <h3 className="text-xl font-bold mb-1">{rec.title}</h3>
                                    <p className="text-white/80 text-sm">{rec.subtitle}</p>
                                </div>

                                <div className="text-sm text-white/90">
                                    <p className="mb-2">{rec.reason}</p>
                                </div>

                                {/* Tags */}
                                <div className="flex flex-wrap gap-2">
                                    <span className="bg-white/20 px-2 py-1 rounded text-xs">{rec.difficulty}</span>
                                    <span className="bg-white/20 px-2 py-1 rounded text-xs">{rec.estimatedTime}</span>
                                </div>

                                {/* Topics */}
                                <div>
                                    <p className="text-xs text-white/70 mb-2">Chủ đề chính:</p>
                                    <div className="flex flex-wrap gap-1">
                                        {rec.topics.map((topic, idx) => (
                                            <span key={idx} className="bg-white/10 px-2 py-1 rounded-full text-xs">
                                                {topic}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                {/* CTA Button */}
                                <button
                                    onClick={(e) => {
                                        e.stopPropagation();
                                        handleNavigateWithExamType(rec.type);
                                    }}
                                    className="w-full bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-lg py-3 mt-4 font-semibold transition-colors"
                                >
                                    Bắt đầu luyện tập →
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Trending Exams */}
            <div>
                <div className="flex items-center gap-3 mb-6">
                    <div className="w-10 h-10 bg-gradient-to-r from-red-400 to-red-600 rounded-xl flex items-center justify-center">
                        <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03z" />
                        </svg>
                    </div>
                    <div>
                        <h2 className="text-2xl font-bold text-gray-900">Đề thi thịnh hành</h2>
                        <p className="text-gray-600">Những bộ đề được luyện tập nhiều nhất</p>
                    </div>
                </div>


                {/* Horizontal Scroll Container */}
                <div className="relative">
                    {/* Left Arrow */}
                    {showLeftArrow && (
                        <button
                            onClick={() => scroll('left')}
                            className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white text-gray-600 rounded-full p-3 z-10 transition-all duration-200 shadow-lg"
                            aria-label="Scroll left"
                        >
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                            </svg>
                        </button>
                    )}

                    {/* Right Arrow */}
                    {showRightArrow && (
                        <button
                            onClick={() => scroll('right')}
                            className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white text-gray-600 rounded-full p-3 z-10 transition-all duration-200 shadow-lg"
                            aria-label="Scroll right"
                        >
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                        </button>
                    )}

                    {/* Scrollable Container - Thêm padding top/bottom để có space cho hover effect */}
                    <div
                        ref={scrollRef}
                        onScroll={handleScroll}
                        className="flex overflow-x-auto gap-6 py-4 scrollbar-hide"
                        style={{
                            scrollbarWidth: 'none',
                            msOverflowStyle: 'none',
                            scrollBehavior: 'smooth'
                        }}
                    >
                        {trendingExams.map((exam, index) => (
                            <div
                                key={index}
                                className="flex-shrink-0 w-80"
                            >
                                <div
                                    className="bg-white rounded-xl p-6 shadow-sm border border-gray-200 hover:shadow-lg hover:-translate-y-2 transition-all duration-300 cursor-pointer group h-full"
                                    onClick={() => handleNavigateWithExamType(exam.type)}
                                >
                                    {/* Badges */}
                                    <div className="flex items-center gap-2 mb-4">
                                        {exam.isNew && (
                                            <span className="bg-green-100 text-green-700 px-2 py-1 rounded-full text-xs font-semibold">
                                                ✨ Mới
                                            </span>
                                        )}
                                        {exam.isHot && (
                                            <span className="bg-red-100 text-red-700 px-2 py-1 rounded-full text-xs font-semibold">
                                                🔥 Hot
                                            </span>
                                        )}
                                        {exam.isChallenge && (
                                            <span className="bg-purple-100 text-purple-700 px-2 py-1 rounded-full text-xs font-semibold">
                                                ⚡ Thử thách
                                            </span>
                                        )}
                                    </div>

                                    <h3 className="font-bold text-gray-900 text-lg mb-2 group-hover:text-orange-600 transition-colors">
                                        {exam.title}
                                    </h3>

                                    <div className="space-y-2 text-sm text-gray-600">
                                        <div className="flex justify-between">
                                            <span>Học sinh tham gia:</span>
                                            <span className="font-semibold">{exam.students.toLocaleString()}</span>
                                        </div>
                                        <div className="flex justify-between">
                                            <span>Điểm trung bình:</span>
                                            <span className="font-semibold">{exam.avgScore}/10</span>
                                        </div>
                                        <div className="flex justify-between">
                                            <span>Độ khó:</span>
                                            <span className={`font-semibold ${exam.difficulty === 'Dễ' ? 'text-green-600' :
                                                exam.difficulty === 'Trung bình' ? 'text-yellow-600' :
                                                    exam.difficulty === 'Khó' ? 'text-orange-600' : 'text-red-600'
                                                }`}>
                                                {exam.difficulty}
                                            </span>
                                        </div>
                                    </div>

                                    <button
                                        onClick={(e) => {
                                            e.stopPropagation();
                                            handleNavigateWithExamType(exam.type);
                                        }}
                                        className="w-full mt-4 bg-gray-100 group-hover:bg-orange-100 group-hover:text-orange-600 text-gray-700 py-2 rounded-lg font-medium transition-colors"
                                    >
                                        Tham gia ngay
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Gradient fade on right */}
                    <div className="absolute right-0 top-4 bottom-4 w-8 bg-gradient-to-l from-white via-white/50 to-transparent pointer-events-none"></div>
                </div>
            </div>
            {/* Quick Start CTA */}
            <div className="bg-gradient-to-r from-orange-400 to-orange-300 rounded-2xl p-8 text-white text-center">
                <h3 className="text-3xl font-bold mb-4">Sẵn sàng bắt đầu?</h3>
                <p className="text-white text-lg mb-6 max-w-2xl mx-auto">
                    Đừng chờ đợi! Hãy bắt đầu hành trình học tập của bạn ngay hôm nay với những bộ đề được cá nhân hóa.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
                    <button
                        onClick={() => onExamClick('examTypeSelection')}
                        className="bg-orange-500 text-white px-8 py-3 rounded-lg font-bold hover:bg-white hover:text-orange-500 cursor-pointer transition-colors shadow-lg"
                    >
                        Luyện đề ngay →
                    </button>
                    <text className="self-center px-8 py-3 rounded-lg font-bold border text-orange-500">
                        Miễn phí 100%
                    </text>
                </div>
            </div>
        </div>
    );
}

export default ExamOverview;