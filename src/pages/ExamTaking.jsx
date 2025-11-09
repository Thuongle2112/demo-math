import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import ExamResult from './ExamResult';
import MathEditor from '../components/MathLive/MathEditor';

function ExamTaking({ examData, onSubmit, onTimeUp, onBackToPractice }) {
    const [selectedAnswers, setSelectedAnswers] = useState({});
    const [essayAnswers, setEssayAnswers] = useState({});
    const [timeLeft, setTimeLeft] = useState(90 * 60); // 90 phút = 5400 giây
    const [showSubmitConfirm, setShowSubmitConfirm] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [submittedTimeSpent, setSubmittedTimeSpent] = useState(null);
    const [score, setScore] = useState(null);
    const [showResult, setShowResult] = useState(false);
    const navigate = useNavigate();

    // Countdown timer
    useEffect(() => {
        if (isSubmitted) return;
        const timer = setInterval(() => {
            setTimeLeft(prev => {
                if (prev <= 1) {
                    clearInterval(timer);
                    onTimeUp && onTimeUp();
                    return 0;
                }
                return prev - 1;
            });
        }, 1000);

        return () => clearInterval(timer);
    }, [isSubmitted, onTimeUp]);

    // Format time display
    const formatTime = (seconds) => {
        const hours = Math.floor(seconds / 3600);
        const minutes = Math.floor((seconds % 3600) / 60);
        const secs = seconds % 60;

        if (hours > 0) {
            return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
        }
        return `${minutes.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
    };

    // Handle multiple choice answers
    const handleMultipleChoice = (questionId, answer) => {
        setSelectedAnswers(prev => ({
            ...prev,
            [questionId]: answer
        }));
    };

    // Handle essay answers
    const handleEssayAnswer = (questionId, answer) => {
        setEssayAnswers(prev => ({
            ...prev,
            [questionId]: answer
        }));
    };

    // Submit exam
    // const handleSubmit = () => {
    //     const results = {
    //         multipleChoice: selectedAnswers,
    //         essays: essayAnswers,
    //         timeSpent: (90 * 60) - timeLeft
    //     };
    //     onSubmit && onSubmit(results);
    //     setShowSubmitConfirm(false);
    //     // Có thể navigate đến trang kết quả
    //     // navigate('/exam-results');
    // };

    // Handle back navigation
    const handleGoBack = () => {
        if (window.confirm('Bạn có chắc chắn muốn thoát khỏi bài thi? Tiến trình sẽ không được lưu.')) {
            navigate(-1);
        }
    };

    // Sample exam data structure
    const sampleExam = {
        title: "Đề thi thử môn Toán - NDT0001",
        duration: 90, // minutes
        sections: [
            {
                id: 1,
                title: "Phần I. Trắc nghiệm (2,0 điểm)",
                description: "Chọn phương án đúng trong các câu sau:",
                questions: [
                    {
                        id: 1,
                        type: "multiple-choice",
                        content: "Không sử dụng máy tính. Tính giá trị của biểu thức sau:",
                        formula: "P = (2 + √7)(√7 - 2) - (√3 - 2√2)/(√2 - 1)",
                        options: [
                            { id: 'A', text: '3 - √11' },
                            { id: 'B', text: '3 + √11' },
                            { id: 'C', text: '√11 - 3' },
                            { id: 'D', text: '-3 - √11' }
                        ]
                    },
                    {
                        id: 2,
                        type: "multiple-choice",
                        content: "Rút gọn biểu thức:",
                        formula: "P = (3x - 3√x)/(√x - 1) - (x - 4)/(√x - 2) : √x - 2/√x với x > 0, x ≠ 1, x ≠ 4",
                        options: [
                            { id: 'A', text: 'x + 1 > 2x' },
                            { id: 'B', text: '2x < 3' },
                            { id: 'C', text: '2x + 1 > x + 2' },
                            { id: 'D', text: '2x + 2 < x + 4' }
                        ]
                    },
                    {
                        id: 3,
                        type: "multiple-choice",
                        content: "Đồ thị của hàm số nào sau đây đi qua điểm M(-1; -5)?",
                        options: [
                            { id: 'A', text: 'y = 2x²' },
                            { id: 'B', text: 'y = √3x²' },
                            { id: 'C', text: 'y = |√3 - 2|x²' },
                            { id: 'D', text: 'y = -5x²' }
                        ]
                    },
                    {
                        id: 4,
                        type: "multiple-choice",
                        content: "Gọi x₁, x₂ là hai nghiệm của phương trình 2x² - 2x - 1 = 0. Giá trị của biểu thức A = x₁ + x₂ là:",
                        options: [
                            { id: 'A', text: '-1/2' },
                            { id: 'B', text: '1/2' },
                            { id: 'C', text: '-1' },
                            { id: 'D', text: '1' }
                        ]
                    },
                    {
                        id: 5,
                        type: "multiple-choice",
                        content: "Một mảnh vườn hình chữ nhật có diện tích 40 m² và chu vi là 26 m. Chiều rộng của mảnh vườn đó là:",
                        options: [
                            { id: 'A', text: '6 m' },
                            { id: 'B', text: '5 m' },
                            { id: 'C', text: '7 m' },
                            { id: 'D', text: '8 m' }
                        ]
                    },
                    {
                        id: 6,
                        type: "multiple-choice",
                        content: "Rút gọn biểu thức √((3 - √11)²) ta được:",
                        options: [
                            { id: 'A', text: '3 - √11' },
                            { id: 'B', text: '3 + √11' },
                            { id: 'C', text: '√11 - 3' },
                            { id: 'D', text: '-3 - √11' }
                        ]
                    },
                    {
                        id: 7,
                        type: "multiple-choice",
                        content: "x = 2 là nghiệm của bất phương trình nào trong các bất phương trình sau?",
                        options: [
                            { id: 'A', text: 'x + 1 > 2x' },
                            { id: 'B', text: '2x < 3' },
                            { id: 'C', text: '2x + 1 > x + 2' },
                            { id: 'D', text: '2x + 2 < x + 4' }
                        ]
                    },
                    {
                        id: 8,
                        type: "multiple-choice",
                        content: "Đồ thị của hàm số nào sau đây đi qua điểm M(-1; -5)?",
                        options: [
                            { id: 'A', text: 'y = 2x²' },
                            { id: 'B', text: 'y = √3x²' },
                            { id: 'C', text: 'y = |√3 - 2|x²' },
                            { id: 'D', text: 'y = -5x²' }
                        ]
                    }
                ]
            },
            {
                id: 2,
                title: "Phần II. Tự luận (8,0 điểm)",
                questions: [
                    {
                        id: 9,
                        type: "essay",
                        title: "Bài 2 (1,5 điểm)",
                        content: "Một cổng vòm được thiết kế dạng parabol y = ax² (như hình vẽ).",
                        subQuestions: [
                            {
                                id: "9a",
                                content: "1) Biết rằng chiều cao cổng vòm (tính từ mặt đất) là 4m và chiều rộng của cổng vòm là 8m. Tìm hệ số a."
                            },
                            {
                                id: "9b",
                                content: "2) Một xe tải có chiều rộng 2,4m và chiều cao 3,2m. Hỏi xe tải có thể đi qua cổng vòm được không? Vì sao?"
                            }
                        ]
                    }
                ]
            }
        ]
    };

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

    const autoGrade = () => {
        let correct = 0;
        Object.keys(correctAnswers).forEach(qid => {
            if (selectedAnswers[qid] === correctAnswers[qid]) correct++;
        });
        return correct;
    };

    const handleSubmit = () => {
        const numCorrect = autoGrade();
        setScore(numCorrect);
        setIsSubmitted(true);
        setShowSubmitConfirm(false);
        const timeSpent = (90 * 60) - timeLeft;
        setSubmittedTimeSpent(timeSpent);
        const results = {
            multipleChoice: selectedAnswers,
            essays: essayAnswers,
            timeSpent,
            score: numCorrect
        };
        onSubmit && onSubmit(results);
    };

    const exam = examData || sampleExam;

    if (showResult) {
        return (
            <ExamResult
                exam={exam}
                userAnswers={selectedAnswers}
                essayAnswers={essayAnswers}
                score={score}
                timeSpent={submittedTimeSpent}
                onBack={() => setShowResult(false)}
            />
        );
    }

    return (
        <div className="min-h-screen bg-gray-50">
            {/* Standalone Header - No global header */}
            <header className="bg-white shadow-sm border-b sticky top-0 z-10">
                <div className="flex items-center justify-between px-6 py-4">
                    <div className="flex items-center gap-4">
                        <button
                            onClick={handleGoBack}
                            className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
                            title="Quay lại"
                        >
                            <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                            </svg>
                        </button>
                        <div className="flex items-center gap-3">
                            <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                                <svg className="w-6 h-6 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M6 2a2 2 0 00-2 2v12a2 2 0 002 2h8a2 2 0 002-2V4a2 2 0 00-2-2H6zm1 2a1 1 0 000 2h6a1 1 0 100-2H7zm6 7a1 1 0 01-1 1H8a1 1 0 01-1-1V9a1 1 0 011-1h4a1 1 0 011 1v2z" clipRule="evenodd" />
                                </svg>
                            </div>
                            <span className="font-semibold text-gray-900 text-lg">{exam.title}</span>
                        </div>
                    </div>

                    <div className="flex items-center gap-6">
                        <div className="flex items-center gap-2 text-blue-600 bg-blue-50 px-4 py-2 rounded-lg">
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            <span className="font-mono text-lg font-bold">
                                {formatTime(timeLeft)}
                            </span>
                        </div>
                        <button
                            onClick={() => setShowSubmitConfirm(true)}
                            className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-lg font-semibold transition-colors"
                        >
                            Nộp bài
                        </button>
                    </div>
                </div>
            </header>

            <div className="flex">
                {/* Main Content */}
                <main className="flex-1 p-6">
                    <div className="max-w-5xl mx-auto space-y-8">
                        {exam.sections.map((section) => (
                            <div key={section.id} className="bg-white rounded-xl shadow-sm border p-8">
                                <div className="mb-8">
                                    <h2 className="text-2xl font-bold text-gray-900 mb-3">{section.title}</h2>
                                    {section.description && (
                                        <p className="text-gray-600 text-lg">{section.description}</p>
                                    )}
                                </div>

                                <div className="space-y-8">
                                    {section.questions.map((question, qIndex) => (
                                        <div
                                            key={question.id}
                                            id={`question-${question.id}`}
                                            className="border-l-4 border-blue-200 pl-6 scroll-mt-24"
                                        >
                                            {question.type === 'multiple-choice' ? (
                                                <div>
                                                    <div className="mb-6">
                                                        <p className="font-semibold text-gray-900 mb-3 text-lg">
                                                            {question.content.startsWith('Câu') ? question.content : `Câu ${question.id}. ${question.content}`}
                                                        </p>
                                                        {question.formula && (
                                                            <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 my-4">
                                                                <div className="font-mono text-gray-800 text-lg leading-relaxed">
                                                                    {question.formula}
                                                                </div>
                                                            </div>
                                                        )}
                                                    </div>
                                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                                        {question.options.map((option) => (
                                                            <label
                                                                key={option.id}
                                                                className={`flex items-center p-4 border-2 rounded-lg cursor-pointer transition-all hover:shadow-sm ${selectedAnswers[question.id] === option.id
                                                                    ? 'border-blue-500 bg-blue-50 shadow-sm'
                                                                    : 'border-gray-200 hover:border-gray-300'
                                                                    }`}
                                                            >
                                                                <input
                                                                    type="radio"
                                                                    name={`question-${question.id}`}
                                                                    value={option.id}
                                                                    checked={selectedAnswers[question.id] === option.id}
                                                                    onChange={() => !isSubmitted && handleMultipleChoice(question.id, option.id)}
                                                                    className="w-5 h-5 text-blue-600 mr-4 flex-shrink-0"
                                                                    disabled={isSubmitted}
                                                                />
                                                                <span className="font-bold text-blue-600 mr-3 text-lg">{option.id}.</span>
                                                                <span className="text-gray-700 text-lg">{option.text}</span>
                                                            </label>
                                                        ))}
                                                    </div>
                                                    {/* Chữa đề: Hiện đáp án đúng/sai sau khi nộp bài */}
                                                    {isSubmitted && (
                                                        <div className="mt-4">
                                                            <span className={`font-semibold text-lg ${selectedAnswers[question.id] === correctAnswers[question.id] ? 'text-green-600' : 'text-red-600'}`}>
                                                                {selectedAnswers[question.id] === correctAnswers[question.id]
                                                                    ? 'Đúng'
                                                                    : 'Sai'}
                                                            </span>
                                                            <div className="text-gray-700 mt-2">
                                                                Đáp án đúng: <span className="font-bold text-blue-600">{correctAnswers[question.id]}</span>
                                                            </div>
                                                        </div>
                                                    )}
                                                </div>
                                            ) : (
                                                <div>
                                                    <div className="mb-6">
                                                        <h3 className="font-bold text-gray-900 mb-4 text-xl">{question.title}</h3>
                                                        <p className="text-gray-700 mb-6 text-lg">{question.content}</p>
                                                    </div>
                                                    {question.subQuestions ? (
                                                        <div className="space-y-6">
                                                            {question.subQuestions.map((subQ) => (
                                                                <div key={subQ.id} className="border border-gray-200 rounded-lg p-6">
                                                                    <p className="font-semibold text-gray-900 mb-4 text-lg">{subQ.content}</p>
                                                                    <MathEditor
                                                                        value={essayAnswers[subQ.id] || ''}
                                                                        onChange={(data) => !isSubmitted && handleEssayAnswer(subQ.id, data)}
                                                                        disabled={isSubmitted}
                                                                        placeholder="Nhập câu trả lời (có thể dùng công thức toán học)..."
                                                                    />
                                                                </div>
                                                            ))}
                                                        </div>
                                                    ) : (
                                                        <div className="border border-gray-200 rounded-lg p-6">
                                                            <MathEditor
                                                                value={essayAnswers[question.id] || ''}
                                                                onChange={(data) => !isSubmitted && handleEssayAnswer(question.id, data)}
                                                                disabled={isSubmitted}
                                                                placeholder="Nhập câu trả lời (có thể dùng công thức toán học)..."
                                                            />
                                                        </div>
                                                    )}
                                                </div>
                                            )}
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </main>

                {/* Sidebar - Question Navigator */}
                <aside className="w-80 bg-white border-l p-6 sticky top-20 h-fit">
                    <h3 className="font-bold text-gray-900 mb-6 text-lg">Bảng câu hỏi</h3>

                    {exam.sections.map((section) => (
                        <div key={section.id} className="mb-8">
                            <h4 className="font-semibold text-gray-700 mb-4 text-sm">{section.title}</h4>
                            <div className="grid grid-cols-6 gap-2">
                                {section.questions.map((question) => {
                                    const isAnswered = question.type === 'multiple-choice'
                                        ? selectedAnswers[question.id]
                                        : question.subQuestions
                                            ? question.subQuestions.some(sq => essayAnswers[sq.id])
                                            : essayAnswers[question.id];

                                    return (
                                        <button
                                            key={question.id}
                                            className={`w-12 h-12 rounded-lg font-semibold text-sm transition-all hover:scale-105 ${isAnswered
                                                ? 'bg-blue-500 text-white shadow-md'
                                                : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                                                }`}
                                            onClick={() => {
                                                document.getElementById(`question-${question.id}`)?.scrollIntoView({
                                                    behavior: 'smooth',
                                                    block: 'start'
                                                });
                                            }}
                                        >
                                            {question.id}
                                        </button>
                                    );
                                })}
                            </div>
                        </div>
                    ))}
                </aside>
            </div>

            {/* Submit Confirmation Modal */}
            {showSubmitConfirm && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
                    <div className="bg-white rounded-xl p-8 max-w-md w-full mx-4 shadow-2xl">
                        <h3 className="text-xl font-bold text-gray-900 mb-4">Xác nhận nộp bài</h3>
                        <p className="text-gray-600 mb-6 text-lg leading-relaxed">
                            Bạn có chắc chắn muốn nộp bài thi? Sau khi nộp bài bạn sẽ không thể chỉnh sửa.
                        </p>
                        <div className="flex gap-4 justify-end">
                            <button
                                onClick={() => setShowSubmitConfirm(false)}
                                className="px-6 py-3 text-gray-600 border border-gray-300 rounded-lg hover:bg-gray-50 font-medium"
                            >
                                Hủy
                            </button>
                            <button
                                onClick={handleSubmit}
                                className="px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 font-semibold"
                            >
                                Nộp bài
                            </button>
                        </div>
                    </div>
                </div>
            )}
            {/* Modal kết quả sau khi nộp bài */}
            {isSubmitted && (
                <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
                    <div className="bg-white rounded-xl p-8 max-w-sm w-full mx-4 shadow-2xl text-center">
                        <h3 className="text-xl font-bold text-green-700 mb-4">Chúc mừng bạn đã hoàn thành bài thi</h3>
                        <p className="text-gray-700 mb-6 text-lg">
                            Bạn đã trả lời đúng <span className="font-semibold text-blue-600">{score}</span> trên tổng số <span className="font-semibold text-blue-600">{Object.keys(correctAnswers).length}</span> câu hỏi trắc nghiệm.
                        </p>
                        <p className="text-gray-700 mb-6 text-lg">
                            Thời gian làm bài: <span className="font-semibold text-blue-600">{formatTime(submittedTimeSpent)}</span>
                        </p>
                        <button
                            onClick={() => setShowResult(true)}
                            className="px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 font-semibold w-full mb-2"
                        >
                            Xem lại bài
                        </button>
                        <button
                            onClick={onBackToPractice}
                            className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 font-medium w-full"
                        >
                            Làm bài khác
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
}

export default ExamTaking;