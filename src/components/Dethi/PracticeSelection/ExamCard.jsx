import { useNavigate } from 'react-router-dom';

function ExamCard({ exam, selectedYear, examTypeInfo, activeProvince, examType, onExamClick, onVideoClick }) {
    const navigate = useNavigate();

    const handleExamClick = () => {
        onExamClick(exam);
    };

    const handleActionClick = (e) => {
        e.stopPropagation();
        navigate('/exam-taking', {
            state: {
                examData: {
                    ...exam,
                    province: activeProvince,
                    year: selectedYear,
                    examType: examType
                }
            }
        });
    };

    const handleVideoClick = (e) => {
        e.stopPropagation();
        onVideoClick(exam.solutionVideoUrl);
    };

    return (
        <div
            className={`bg-white rounded-xl p-6 shadow-sm border transition-shadow cursor-pointer ${exam.isCompleted
                    ? 'border-green-200 bg-green-50/30 hover:shadow-md'
                    : 'border-gray-200 hover:shadow-md'
                }`}
            onClick={handleExamClick}
        >
            <div className="flex items-start justify-between">
                <div className="flex items-start gap-4">
                    <div className="relative">
                        <img
                            src="/svg/toan.svg"
                            alt={exam.name}
                            className="object-fit rounded-lg flex-shrink-0"
                        />
                        {exam.isCompleted && (
                            <div className="absolute -top-2 -right-2 w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                                <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                </svg>
                            </div>
                        )}
                    </div>
                    <div className="flex-1">
                        <div className="flex items-center gap-2 mb-2">
                            <h3 className="font-bold text-gray-900 text-lg">
                                {exam.name}
                            </h3>
                        </div>

                        <div className="flex items-center gap-4 text-xs text-gray-500 mb-2">
                            <span className="flex items-center gap-1">
                                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                                </svg>
                                {selectedYear}
                            </span>
                            <span className="flex items-center gap-1">
                                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                                </svg>
                                {exam.questions} câu hỏi
                            </span>
                            <span className="flex items-center gap-1">
                                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                                </svg>
                                {exam.time} phút
                            </span>
                        </div>
                    </div>
                </div>

                <div className="flex flex-col gap-2">
                    <button
                        className={`text-white px-4 py-2 rounded-lg font-medium text-sm transition-colors cursor-pointer ${exam.isCompleted
                                ? 'bg-gray-500 hover:bg-gray-600'
                                : `${examTypeInfo.buttonBgColor} hover:opacity-90`
                            }`}
                        onClick={handleActionClick}
                    >
                        {exam.isCompleted ? 'Xem kết quả' : 'Làm bài'}
                    </button>

                    {exam.isCompleted && exam.solutionVideoUrl && (
                        <button
                            className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg font-medium text-sm transition-colors flex items-center gap-2"
                            onClick={handleVideoClick}
                        >
                            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                                <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd" />
                            </svg>
                            Xem chữa đề
                        </button>
                    )}
                </div>
            </div>
        </div>
    );
}

export default ExamCard;