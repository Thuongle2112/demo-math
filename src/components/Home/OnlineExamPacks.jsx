import { useState } from 'react';
import { getProvinces, getExamSetByProvinceAndYear } from '../../data/examData';

function OnlineExamPacks() {
    const [activeProvince, setActiveProvince] = useState('Nam Định');

    // Lấy danh sách tỉnh từ examData
    const provinces = getProvinces()

    const currentExamSet = getExamSetByProvinceAndYear(activeProvince, '2025-2026');

    const mathPack = currentExamSet ? {
        id: currentExamSet.id,
        subject: 'TOÁN',
        title: currentExamSet.title,
        province: currentExamSet.province,
        year: currentExamSet.year,
        description: 'Cấu trúc bộ đề:',
        features: [
            `Bám sát cấu trúc minh họa của Sở Giáo dục và Đào tạo ${currentExamSet.province};`,
            'Bao gồm đáp án, lời giải chi tiết và video phân tích, chữa đề;',
            'Định vị từng câu theo mạch kiến thức, nội dung ôn luyện, năng lực, mức độ, khung điểm.'
        ],
        bgColor: 'bg-orange-100',
        textColor: 'text-orange-600',
        iconBg: 'bg-orange-200',
        totalExams: (currentExamSet.easyExams?.length || 0) + (currentExamSet.hardExams?.length || 0),
        easyExams: currentExamSet.easyExams?.length || 0,
        hardExams: currentExamSet.hardExams?.length || 0,
        available: ((currentExamSet.easyExams?.length || 0) + (currentExamSet.hardExams?.length || 0)) > 0
    } : null;

    return (
        <section className="py-16 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
                        TRẢI NGHIỆM GÓI ĐỀ TRỰC TUYẾN
                    </h2>

                    {/* Province Tabs */}
                    <div className="flex justify-center gap-4 mb-12">
                        {provinces.map((province) => (
                            <button
                                key={province}
                                onClick={() => setActiveProvince(province)}
                                className={`px-8 py-3 rounded-full font-medium text-lg border transition-all ${activeProvince === province
                                    ? 'bg-orange-400 text-gray-900 shadow-lg'
                                    : 'bg-white text-gray-600 hover:bg-gray-100'
                                    }`}
                            >
                                {province}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Math Exam Pack */}
                <div className="max-w-5xl mx-auto">
                    {mathPack ? (
                        <div className={`${mathPack.bgColor} rounded-2xl p-8 flex items-center justify-between gap-8`}>
                            <div className="flex-1">
                                {/* Content */}
                                <div>
                                    <h3 className="text-xl font-bold text-gray-900 mb-3">
                                        {mathPack.title}
                                    </h3>
                                    <p className="font-medium text-gray-700 mb-2">{mathPack.description}</p>
                                    <ul className="space-y-1 text-gray-600 mb-4">
                                        {mathPack.features.map((feature, index) => (
                                            <li key={index} className="flex items-start">
                                                <span className="text-gray-400 mr-2">•</span>
                                                <span>{feature}</span>
                                            </li>
                                        ))}
                                    </ul>

                                    {/* Exam Statistics */}
                                    {mathPack.available ? (
                                        <div className="flex items-center gap-6 text-sm text-gray-600">
                                            <span className="flex items-center gap-1">
                                                <div className="w-3 h-3 rounded-full bg-green-500"></div>
                                                {mathPack.easyExams} đề cơ bản
                                            </span>
                                            <span className="flex items-center gap-1">
                                                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                                                {mathPack.hardExams} đề nâng cao
                                            </span>
                                            <span className="font-medium text-gray-800">
                                                Tổng: {mathPack.totalExams} đề
                                            </span>
                                        </div>
                                    ) : (
                                        <div className="text-sm text-gray-500 italic">
                                            Chưa có dữ liệu đề thi cho năm 2025-2026
                                        </div>
                                    )}
                                </div>
                            </div>

                            {/* Action Buttons */}
                            <div className="flex flex-col gap-3 min-w-[200px]">
                                <button
                                    className={`font-bold py-3 px-6 rounded-xl transition-colors ${mathPack.available
                                        ? 'bg-orange-400 hover:bg-orange-500 text-gray-900'
                                        : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                                        }`}
                                    disabled={!mathPack.available}
                                >
                                    XEM ĐỀ THI MẪU
                                </button>
                                <button
                                    className={`font-medium py-3 px-6 rounded-xl transition-colors ${mathPack.available
                                        ? 'bg-white border-2 border-gray-300 hover:border-gray-400 text-gray-700'
                                        : 'bg-gray-100 border-2 border-gray-200 text-gray-400 cursor-not-allowed'
                                        }`}
                                    disabled={!mathPack.available}
                                >
                                    DEMO VIDEO CHỮA ĐỀ
                                </button>
                            </div>
                        </div>
                    ) : (
                        <div className="bg-white rounded-2xl p-8 border-2 border-dashed border-gray-300 text-center">
                            <div className="text-gray-400 mb-4">
                                <svg className="w-16 h-16 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                                </svg>
                            </div>
                            <p className="text-gray-500 text-lg">Chưa có dữ liệu đề thi cho tỉnh {activeProvince}</p>
                            <p className="text-gray-400 text-sm mt-2">Vui lòng chọn tỉnh khác hoặc quay lại sau</p>
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
}

export default OnlineExamPacks;