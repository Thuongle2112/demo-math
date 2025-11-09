import { useState } from 'react';
import PropTypes from 'prop-types';
import ExamTypeCard from './ExamTypeSelection/ExamTypeCard';
import { EXAM_TYPES, EXAM_TYPE_LABELS, PRACTICE_TIP } from '../../config/examTypesConfig';

function ExamTypeSelection({ onExamTypeSelect, selectedProvince, urlParams }) {
    const [hoveredCard, setHoveredCard] = useState(null);

    const getPageTitle = () => {
        if (urlParams?.type && urlParams?.grade) {
            return `Chọn loại đề ${EXAM_TYPE_LABELS[urlParams.type] || 'thi thử'} lớp ${urlParams.grade}`;
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
        <div className="max-w-7xl mx-auto px-4">
            {/* Filter Info Banner */}
            {urlParams?.type && urlParams?.grade && (
                <div className="bg-gradient-to-r from-blue-50 to-blue-100 border border-blue-200 rounded-xl p-4 mb-8">
                    <div className="flex items-center gap-3">
                        <svg className="w-6 h-6 text-blue-600 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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

            {/* Header */}
            <div className="text-center mb-8 md:mb-12">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                    {getPageTitle()}
                </h2>
                <p className="text-base md:text-lg text-gray-600">
                    {getPageDescription()}
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-8 md:mb-12">
                {EXAM_TYPES.map((type) => (
                    <ExamTypeCard
                        key={type.id}
                        type={type}
                        isHovered={hoveredCard === type.id}
                        onHover={() => setHoveredCard(type.id)}
                        onLeave={() => setHoveredCard(null)}
                        onClick={() => onExamTypeSelect(type.id)}
                    />
                ))}
            </div>

            {/* Practice Tip */}
            <div className="bg-orange-100 rounded-xl p-4 md:p-6">
                <h4 className="font-semibold text-gray-900 mb-2 text-sm md:text-base">
                    {PRACTICE_TIP.title}
                </h4>
                <p className="text-gray-600 text-xs md:text-sm leading-relaxed">
                    {PRACTICE_TIP.description}
                </p>
            </div>
        </div>
    );
}

ExamTypeSelection.propTypes = {
    onExamTypeSelect: PropTypes.func.isRequired,
    selectedProvince: PropTypes.string,
    urlParams: PropTypes.shape({
        type: PropTypes.string,
        grade: PropTypes.string
    })
};

export default ExamTypeSelection;