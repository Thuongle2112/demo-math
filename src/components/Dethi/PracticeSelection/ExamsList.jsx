import ExamCard from './ExamCard';

function ExamsList({ sortedExams, examTypeInfo, activeProvince, selectedYear, examType, onExamClick, onVideoClick }) {
    if (sortedExams.length === 0) {
        return (
            <div className="bg-white rounded-xl p-12 shadow-sm border border-gray-200 text-center">
                <div className="text-gray-400 mb-4">
                    <svg className="w-16 h-16 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                </div>
                <p className="text-gray-500 text-lg">
                    Chưa có {examTypeInfo.title.toLowerCase()} cho {activeProvince} năm {selectedYear}
                </p>
                <p className="text-gray-400 text-sm mt-2">Thử chọn tỉnh hoặc năm khác</p>
            </div>
        );
    }

    return (
        <div className="space-y-4">
            {sortedExams.map((exam) => (
                <ExamCard
                    key={exam.id}
                    exam={exam}
                    selectedYear={selectedYear}
                    examTypeInfo={examTypeInfo}
                    activeProvince={activeProvince}
                    examType={examType}
                    onExamClick={onExamClick}
                    onVideoClick={onVideoClick}
                />
            ))}
        </div>
    );
}

export default ExamsList;