import { useState } from 'react';

function ExamTypeSelection({ onExamTypeSelect, selectedProvince, urlParams }) {
    const [hoveredCard, setHoveredCard] = useState(null);

    const examTypes = [
        {
            id: 'truong',
            title: 'Luyện đề Trường',
            description: 'Đề thi từ các trường THPT',
            icon: (
                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10.75 2.75a.75.75 0 00-1.5 0v8.614L6.295 8.235a.75.75 0 10-1.09 1.03L10 14.75l4.795-5.485a.75.75 0 10-1.09-1.03l-2.955 3.129V2.75z" />
                    <path d="M3.5 12.75a.75.75 0 00-1.5 0v2.5A2.75 2.75 0 004.75 18h10.5A2.75 2.75 0 0018 15.25v-2.5a.75.75 0 00-1.5 0v2.5c0 .69-.56 1.25-1.25 1.25H4.75c-.69 0-1.25-.56-1.25-1.25v-2.5z" />
                </svg>
            ),
            color: 'orange',
            bgGradient: 'from-orange-400 to-orange-600',
            borderColor: 'border-orange-200',
            hoverBorder: 'border-orange-500',
            ringColor: 'ring-orange-200',
        },
        {
            id: 'phong',
            title: 'Luyện đề Phòng',
            description: 'Đề thi từ các phòng giáo dục và đào tạo',
            icon: (
                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z" />
                </svg>
            ),
            color: 'green',
            bgGradient: 'from-green-400 to-green-600',
            borderColor: 'border-green-200',
            hoverBorder: 'border-green-500',
            ringColor: 'ring-green-200',
        },
        {
            id: 'so',
            title: 'Luyện đề Sở',
            description: 'Đề thi từ sở giáo dục và đào tạo',
            icon: (
                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                </svg>
            ),
            color: 'blue',
            bgGradient: 'from-blue-400 to-blue-600',
            borderColor: 'border-blue-200',
            hoverBorder: 'border-blue-500',
            ringColor: 'ring-blue-200',
        },
        {
            id: 'chuyen',
            title: 'Luyện đề Chuyên',
            description: 'Đề thi từ các trường THPT chuyên',
            icon: (
                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z" clipRule="evenodd" />
                </svg>
            ),
            color: 'purple',
            bgGradient: 'from-purple-400 to-purple-600',
            borderColor: 'border-purple-200',
            hoverBorder: 'border-purple-500',
            ringColor: 'ring-purple-200',
        }
    ];

    // Get page title based on URL params
    const getPageTitle = () => {
        if (urlParams?.type && urlParams?.grade) {
            const typeLabels = {
                'giuaky1': 'Kiểm tra giữa kỳ 1',
                'cuoiky1': 'Thi cuối kỳ 1',
                'giuaky2': 'Kiểm tra giữa kỳ 2',
                'cuoiky2': 'Thi cuối kỳ 2',
                'tuyensinh': 'Tuyển sinh lớp 10',
                'totnghiep': 'Tốt nghiệp THPT'
            };

            return `Chọn loại đề ${typeLabels[urlParams.type] || 'thi thử'} lớp ${urlParams.grade}`;
        }

        return 'Chọn loại đề thi';
    };

    const getPageDescription = () => {
        if (urlParams?.type && urlParams?.grade) {
            return `Lựa chọn loại đề thi ${urlParams.type} lớp ${urlParams.grade} phù hợp với mục tiêu ôn luyện của bạn`;
        }

        return 'Lựa chọn loại đề thi phù hợp với mục tiêu ôn luyện của bạn';
    };

    return (
        <div className="max-w-6xl mx-auto">
            {/* URL Params Info Banner */}
            {urlParams?.type && urlParams?.grade && (
                <div className="bg-gradient-to-r from-blue-50 to-blue-100 border border-blue-200 rounded-xl p-4 mb-8">
                    <div className="flex items-center gap-3">
                        <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <div>
                            <p className="text-blue-800 font-medium">Đã lọc theo loại đề và lớp học</p>
                            <p className="text-blue-600 text-sm">
                                {urlParams.type} - Lớp {urlParams.grade} - {selectedProvince}
                            </p>
                        </div>
                    </div>
                </div>
            )}

            <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">
                    {getPageTitle()}
                </h2>
                <p className="text-lg text-gray-600">
                    {getPageDescription()}
                </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {examTypes.map((type) => (
                    <div
                        key={type.id}
                        onMouseEnter={() => setHoveredCard(type.id)}
                        onMouseLeave={() => setHoveredCard(null)}
                        onClick={() => onExamTypeSelect(type.id)}
                        className={`relative bg-white rounded-2xl p-6 shadow-lg cursor-pointer transition-all duration-300 border-2 flex flex-col h-80 ${hoveredCard === type.id
                            ? `${type.hoverBorder} ring-4 ${type.ringColor} transform -translate-y-2 shadow-2xl`
                            : `${type.borderColor} hover:shadow-xl`
                            }`}
                    >
                        {/* Header với icon - fixed height */}
                        <div className="flex items-start mb-4 h-12">
                            <div className={`w-12 h-12 bg-gradient-to-br ${type.bgGradient} rounded-xl flex items-center justify-center text-white shadow-lg flex-shrink-0`}>
                                {type.icon}
                            </div>
                        </div>

                        {/* Content - flex-grow để chiếm không gian còn lại */}
                        <div className="flex-grow flex flex-col">
                            {/* Title và Description */}
                            <div className="mb-4">
                                <h3 className="text-lg font-bold text-gray-900 mb-2 h-6 flex items-center">
                                    {type.title}
                                </h3>
                                <p className="text-gray-600 text-sm leading-relaxed h-10 flex items-start">
                                    {type.description}
                                </p>
                            </div>

                            {/* Features - fixed height */}
                            <div className="space-y-2 mt-2 mb-6 h-12 flex flex-col justify-center">
                                <div className="flex items-center text-xs text-gray-500">
                                    <svg className="w-3 h-3 mr-2 text-green-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                    </svg>
                                    Chấm điểm tự động
                                </div>
                                <div className="flex items-center text-xs text-gray-500">
                                    <svg className="w-3 h-3 mr-2 text-green-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                    </svg>
                                    Đáp án chi tiết
                                </div>
                                <div className="flex items-center text-xs text-gray-500">
                                    <svg className="w-3 h-3 mr-2 text-green-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                    </svg>
                                    Video hướng dẫn
                                </div>
                            </div>
                        </div>

                        {/* Call to Action - fixed position at bottom */}
                        <div className="mt-auto">
                            <div className={`w-full py-3 px-3 bg-gradient-to-r ${type.bgGradient} text-white rounded-lg font-medium text-center text-sm transition-all duration-300 ${hoveredCard === type.id ? 'shadow-lg transform scale-105' : ''
                                }`}>
                                Bắt đầu luyện tập
                            </div>
                        </div>

                        {/* Hover effect overlay */}
                        {hoveredCard === type.id && (
                            <div className="absolute inset-0 bg-gradient-to-r from-white/5 to-white/10 rounded-2xl pointer-events-none" />
                        )}
                    </div>
                ))}
            </div>

            {/* Bottom info */}
            <div className="mt-12 text-center">
                <div className="bg-orange-100 rounded-xl p-6">
                    <h4 className="font-semibold text-gray-900 mb-2">💡 Gợi ý luyện tập</h4>
                    <p className="text-gray-600 text-sm">
                        Bắt đầu với <strong className="text-orange-600">đề Trường</strong> để làm quen,
                        sau đó chuyển sang <strong className="text-green-600">đề Phòng</strong> để nâng cao,
                        tiếp tục với <strong className="text-blue-600">đề Sở</strong>  để rèn luyện thêm,
                        cuối cùng thử sức với <strong className="text-purple-600">đề Chuyên</strong> để đạt điểm cao nhất!
                    </p>
                </div>
            </div>
        </div>
    );
}

export default ExamTypeSelection;