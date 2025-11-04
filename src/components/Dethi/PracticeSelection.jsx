import { useState, useEffect } from 'react';
import { examData, getProvinces, getYearsByProvince } from '../../data/examData';
import FilterControls from './PracticeSelection/FilterControls';
import ProgressHeader from './PracticeSelection/ProgressHeader';
import ExamsList from './PracticeSelection/ExamsList';
import VideoModal from './PracticeSelection/VideoModal';

function PracticeSelection({ onExamClick, selectedProvince = 'Nam Định', examType: initialExamType = 'so', urlParams }) {
    const [activeProvince, setActiveProvince] = useState(selectedProvince);
    const [selectedYear, setSelectedYear] = useState('');
    const [examType, setExamType] = useState(initialExamType);
    const [sortOption, setSortOption] = useState('newest');
    const [isProvinceDropdownOpen, setIsProvinceDropdownOpen] = useState(false);
    const [isYearDropdownOpen, setIsYearDropdownOpen] = useState(false);
    const [isExamTypeDropdownOpen, setIsExamTypeDropdownOpen] = useState(false);
    const [showVideoModal, setShowVideoModal] = useState(false);
    const [selectedVideoUrl, setSelectedVideoUrl] = useState('');

    const provinces = getProvinces();

    // Get filtered years based on URL params
    const getFilteredYears = () => {
        if (!urlParams?.type || !urlParams?.grade) {
            return getYearsByProvince(activeProvince);
        }

        // Filter years to only include exam sets that match the type and grade
        const allYears = getYearsByProvince(activeProvince);
        return allYears.filter(year => {
            const examSet = examData[activeProvince]?.[year];
            return examSet?.type === urlParams.type && examSet?.grade === urlParams.grade;
        });
    };

    const availableYears = getFilteredYears();

    // Set default year when province changes or when URL params are available
    useEffect(() => {
        if (availableYears.length > 0) {
            setSelectedYear(availableYears[0]);
        }
    }, [activeProvince, urlParams]);

    // Update exam type when initialExamType changes (từ ExamTypeSelection)
    useEffect(() => {
        setExamType(initialExamType);
    }, [initialExamType]);

    // KHÔNG cần set exam type based on URL params nữa vì đã được truyền từ ExamTypeSelection

    // Get exams for active province, year and exam type
    const getExamsForSelection = (province, year, type) => {
        if (!examData[province] || !examData[province][year]) return [];

        const examSet = examData[province][year];

        // If we have URL params, only show exams from matching exam sets
        if (urlParams?.type && urlParams?.grade) {
            if (examSet.type !== urlParams.type || examSet.grade !== urlParams.grade) {
                return [];
            }
        }

        switch (type) {
            case 'so':
                return examSet.soExams || [];
            case 'phong':
                return examSet.phongExams || [];
            case 'chuyen':
                return examSet.chuyenExams || [];
            case 'truong':
                return examSet.truongExams || [];
            default:
                return [];
        }
    };

    const currentExams = selectedYear ? getExamsForSelection(activeProvince, selectedYear, examType) : [];
    const totalExams = currentExams.length;
    const completedExams = currentExams.filter(exam => exam.isCompleted).length;
    const progressPercentage = totalExams > 0 ? Math.round((completedExams / totalExams) * 100) : 0;

    // Sort exams based on selected option
    const sortedExams = [...currentExams].sort((a, b) => {
        switch (sortOption) {
            case 'newest':
                return b.id - a.id;
            case 'oldest':
                return a.id - b.id;
            case 'name':
                return a.name.localeCompare(b.name);
            default:
                return 0;
        }
    });

    const handleProvinceSelect = (province) => {
        setActiveProvince(province);
        setIsProvinceDropdownOpen(false);
    };

    const handleYearSelect = (year) => {
        setSelectedYear(year);
        setIsYearDropdownOpen(false);
    };

    const handleExamTypeSelect = (type) => {
        setExamType(type);
        setIsExamTypeDropdownOpen(false);
    };

    const getExamTypeInfo = (type) => {
        switch (type) {
            case 'so':
                return {
                    title: 'Luyện đề Sở',
                    description: 'Đề thi từ Sở Giáo dục và Đào tạo',
                    buttonBgColor: 'bg-blue-500'
                };
            case 'phong':
                return {
                    title: 'Luyện đề Phòng',
                    description: 'Đề thi từ Phòng Giáo dục và Đào tạo',
                    buttonBgColor: 'bg-green-500'
                };
            case 'chuyen':
                return {
                    title: 'Luyện đề Chuyên',
                    description: 'Đề thi từ các trường THPT chuyên',
                    buttonBgColor: 'bg-purple-500'
                };
            case 'truong':
                return {
                    title: 'Luyện đề Trường',
                    description: 'Đề thi từ các trường THPT',
                    buttonBgColor: 'bg-orange-500'
                };
            default:
                return {
                    title: 'Luyện đề',
                    description: 'Đề thi luyện tập',
                    buttonBgColor: 'bg-gray-500'
                };
        }
    };

    const examTypeInfo = getExamTypeInfo(examType);

    const handleVideoClick = (videoUrl) => {
        setSelectedVideoUrl(videoUrl);
        setShowVideoModal(true);
    };

    const closeVideoModal = () => {
        setShowVideoModal(false);
        setSelectedVideoUrl('');
    };

    const handleExamCardClick = (exam) => {
        onExamClick({
            ...exam,
            province: activeProvince,
            year: selectedYear,
            examType: examType
        });
    };

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

            return `${typeLabels[urlParams.type] || 'Thi thử'} - Lớp ${urlParams.grade}`;
        }

        return examTypeInfo.title;
    };

    return (
        <div className="space-y-6">
            {/* URL Params Info Banner */}
            {urlParams?.type && urlParams?.grade && (
                <div className="bg-gradient-to-r from-blue-50 to-blue-100 border border-blue-200 rounded-xl p-4">
                    <div className="flex items-center gap-3">
                        <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <div>
                            <p className="text-blue-800 font-medium">{getPageTitle()}</p>
                            <p className="text-blue-600 text-sm">
                                Đang hiển thị đề thi theo bộ lọc: {urlParams.type} - Lớp {urlParams.grade} - {examTypeInfo.title}
                            </p>
                        </div>
                    </div>
                </div>
            )}

            <FilterControls
                examType={examType}
                onExamTypeSelect={handleExamTypeSelect}
                isExamTypeDropdownOpen={isExamTypeDropdownOpen}
                setIsExamTypeDropdownOpen={setIsExamTypeDropdownOpen}
                activeProvince={activeProvince}
                provinces={provinces}
                onProvinceSelect={handleProvinceSelect}
                isProvinceDropdownOpen={isProvinceDropdownOpen}
                setIsProvinceDropdownOpen={setIsProvinceDropdownOpen}
                selectedYear={selectedYear}
                availableYears={availableYears}
                onYearSelect={handleYearSelect}
                isYearDropdownOpen={isYearDropdownOpen}
                setIsYearDropdownOpen={setIsYearDropdownOpen}
                sortOption={sortOption}
                setSortOption={setSortOption}
                urlParams={urlParams}
            />

            <ProgressHeader
                examTypeInfo={examTypeInfo}
                progressPercentage={progressPercentage}
                completedExams={completedExams}
                totalExams={totalExams}
                urlParams={urlParams}
            />

            <ExamsList
                sortedExams={sortedExams}
                examTypeInfo={examTypeInfo}
                activeProvince={activeProvince}
                selectedYear={selectedYear}
                examType={examType}
                onExamClick={handleExamCardClick}
                onVideoClick={handleVideoClick}
                urlParams={urlParams}
            />

            <VideoModal
                isOpen={showVideoModal}
                videoUrl={selectedVideoUrl}
                onClose={closeVideoModal}
            />

            {/* Close dropdowns when clicking outside */}
            {(isProvinceDropdownOpen || isYearDropdownOpen || isExamTypeDropdownOpen) && (
                <div
                    className="fixed inset-0 z-40"
                    onClick={() => {
                        setIsProvinceDropdownOpen(false);
                        setIsYearDropdownOpen(false);
                        setIsExamTypeDropdownOpen(false);
                    }}
                />
            )}
        </div>
    );
}

export default PracticeSelection;