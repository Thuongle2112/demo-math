
function ExamResult({ exam, userAnswers, essayAnswers, score, timeSpent, onBack }) {
    // Đáp án đúng và lời giải mẫu (bổ sung nếu có)
    const correctAnswers = {
        1: 'A',
        2: 'B',
        3: 'D',
        4: 'A',
        5: 'B',
        6: 'A',
        7: 'C',
        8: 'D'

    };
    const essayKeys = {
        "9a": "0.0625",
        "9b": "có thể đi qua"
    };
    const solutions = {
        1: "Giải thích chi tiết cho câu 1...",
        2: "Giải thích chi tiết cho câu 2...",
        3: "Giải thích chi tiết cho câu 3...",
        4: "Giải thích chi tiết cho câu 4...",
        5: "Giải thích chi tiết cho câu 5...",
        6: "Giải thích chi tiết cho câu 6...",
        7: "Giải thích chi tiết cho câu 7...",
        8: "Giải thích chi tiết cho câu 8..."
    };

    const essaySolutions = {
        "9a": "Đáp án mẫu: a = 0.0625. Bạn cần giải phương trình ...",
        "9b": "Đáp án mẫu: Vật có thể đi qua điểm đó vì ..."
    };

    const formatTime = (seconds) => {
        const minutes = Math.floor(seconds / 60);
        const secs = seconds % 60;
        return `${minutes.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
    };

    const checkEssayCorrect = (qid, answer) => {
        if (!essayKeys[qid]) return null;
        if (!answer) return false;
        return answer.toLowerCase().includes(essayKeys[qid].toLowerCase());
    };

    // Tổng số câu đúng tự luận
    const essayCorrectCount = Object.keys(essayKeys).reduce((acc, qid) => {
        return acc + (checkEssayCorrect(qid, essayAnswers[qid]) ? 1 : 0);
    }, 0);

    return (
        <div className="min-h-screen bg-gray-50">
            <div className="max-w-4xl mx-auto py-10">
                <div className="bg-white rounded-xl shadow p-8 mb-8">
                    <h2 className="text-2xl font-bold text-green-700 mb-2">Kết quả bài thi</h2>
                    <div className="text-lg mb-2">
                        Số câu đúng trắc nghiệm: <span className="font-bold text-blue-600">{score?.mc ?? score}</span> / {Object.keys(correctAnswers).length}
                    </div>
                    <div className="text-lg mb-2">
                        Số câu đúng tự luận: <span className="font-bold text-blue-600">{essayCorrectCount}</span> / {Object.keys(essayKeys).length}
                    </div>
                    <div className="text-lg mb-2">
                        Thời gian làm bài: <span className="font-mono font-bold">{formatTime(timeSpent)}</span>
                    </div>
                    <button
                        className="mt-4 px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 font-semibold"
                        onClick={onBack}
                    >
                        Quay lại
                    </button>
                </div>
                {exam.sections.map(section => (
                    <div key={section.id} className="mb-10">
                        <h3 className="font-bold text-xl mb-4">{section.title}</h3>
                        {section.questions.map(question => (
                            <div key={question.id} className="mb-8 border-l-4 border-blue-200 pl-6 bg-white p-4 rounded-xl">
                                <div className="mb-2 font-semibold text-lg">
                                    {question.type === 'multiple-choice'
                                        ? `Câu ${question.id}. ${question.content}`
                                        : question.title}
                                </div>
                                {question.formula && (
                                    <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 my-2 font-mono">{question.formula}</div>
                                )}
                                {question.type === 'multiple-choice' ? (
                                    <>
                                        <div className="mb-2">
                                            Đáp án của bạn: <span className={`font-bold ${userAnswers[question.id] === correctAnswers[question.id] ? 'text-green-600' : 'text-red-600'}`}>{userAnswers[question.id] || 'Chưa chọn'}</span>
                                        </div>
                                        <div className="mb-2">
                                            Đáp án đúng: <span className="font-bold text-blue-600">{correctAnswers[question.id]}</span>
                                        </div>
                                        <div className="mb-2">
                                            {userAnswers[question.id] === correctAnswers[question.id] ? (
                                                <span className="text-green-600 font-semibold">Đúng</span>
                                            ) : (
                                                <span className="text-red-600 font-semibold">Sai</span>
                                            )}
                                        </div>
                                        <div className="mt-2 text-gray-700">
                                            <span className="font-bold">Lời giải:</span> {solutions[question.id]}
                                        </div>
                                    </>
                                ) : (
                                    <>
                                        {question.subQuestions ? question.subQuestions.map(subQ => (
                                            <div key={subQ.id} className="mb-4">
                                                <div className="font-semibold">{subQ.content}</div>
                                                <div className="bg-gray-50 border rounded p-3 mt-1 mb-1">
                                                    <span className="font-bold">Bài làm của bạn:</span>
                                                    <div>{essayAnswers[subQ.id] || <span className="italic text-gray-400">Chưa trả lời</span>}</div>
                                                </div>
                                                {/* Hiển thị kết quả đúng/sai và đáp án mẫu tự luận */}
                                                {essayKeys[subQ.id] && (
                                                    <div className="mb-2">
                                                        {checkEssayCorrect(subQ.id, essayAnswers[subQ.id]) ? (
                                                            <span className="text-green-600 font-semibold">Đúng</span>
                                                        ) : (
                                                            <span className="text-red-600 font-semibold">Sai</span>
                                                        )}
                                                        <span className="ml-2 text-gray-700">Đáp án mẫu: <span className="font-bold">{essayKeys[subQ.id]}</span></span>
                                                        <div className="mt-1 text-gray-700">{essaySolutions[subQ.id]}</div>
                                                    </div>
                                                )}
                                            </div>
                                        )) : (
                                            <div className="bg-gray-50 border rounded p-3 mt-1 mb-1">
                                                <span className="font-bold">Bài làm của bạn:</span>
                                                <div>{essayAnswers[question.id] || <span className="italic text-gray-400">Chưa trả lời</span>}</div>
                                                {/* Hiển thị kết quả đúng/sai và đáp án mẫu tự luận */}
                                                {essayKeys[question.id] && (
                                                    <div className="mb-2">
                                                        {checkEssayCorrect(question.id, essayAnswers[question.id]) ? (
                                                            <span className="text-green-600 font-semibold">Đúng</span>
                                                        ) : (
                                                            <span className="text-red-600 font-semibold">Sai</span>
                                                        )}
                                                        <span className="ml-2 text-gray-700">Đáp án mẫu: <span className="font-bold">{essayKeys[question.id]}</span></span>
                                                        <div className="mt-1 text-gray-700">{essaySolutions[question.id]}</div>
                                                    </div>
                                                )}
                                            </div>
                                        )}
                                    </>
                                )}
                            </div>
                        ))}
                    </div>
                ))}
            </div>
        </div>
    );
}

export default ExamResult;