function ProgressHeader({ examTypeInfo, progressPercentage, completedExams, totalExams }) {
    return (
        <div className="bg-gradient-to-br from-orange-200 to-orange-100 rounded-xl p-6 shadow-sm">
            <div className="flex justify-between items-center gap-6">
                {/* Left */}
                <div className="flex items-start gap-4 flex-1">
                    <div>
                        <h3 className="text-xl font-bold text-gray-900">{examTypeInfo.title}</h3>
                        <p className="text-sm text-gray-600">{examTypeInfo.description}</p>
                        <div className="text-sm text-gray-500">{examTypeInfo.additionalInfo}</div>
                    </div>
                </div>

                {/* Right - Progress */}
                <div className="flex flex-col items-end w-64">
                    <div className="w-full h-3 bg-gray-200 rounded-full overflow-hidden mb-2">
                        <div
                            className="h-3 bg-orange-500 rounded-full transition-all duration-700 ease-out"
                            style={{ width: `${progressPercentage}%` }}
                        />
                    </div>
                    <div className="flex justify-between w-full text-sm">
                        <span className="text-orange-600 font-semibold">{progressPercentage}%</span>
                        <span className="text-gray-600">
                            <span className="font-semibold text-orange-600">{completedExams}</span> / {totalExams}
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProgressHeader;