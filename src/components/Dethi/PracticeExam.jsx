// import { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { getExamSetByProvinceAndYear } from '../../data/examData';

// function PracticeExam({ selectedExam }) {
//     const [activeExamType, setActiveExamType] = useState('so'); // 'so', 'phong', 'chuyen'
//     const navigate = useNavigate();

//     // Use selectedExam if provided, otherwise default to Nam Định 2025-2026
//     const examSet = selectedExam || getExamSetByProvinceAndYear('Nam Định', '2025-2026');

//     // Get exams based on exam type
//     const soExams = examSet?.soExams || [];
//     const phongExams = examSet?.phongExams || [];
//     const chuyenExams = examSet?.chuyenExams || [];
    
//     const getCurrentExams = () => {
//         switch (activeExamType) {
//             case 'so':
//                 return soExams;
//             case 'phong':
//                 return phongExams;
//             case 'chuyen':
//                 return chuyenExams;
//             default:
//                 return [];
//         }
//     };

//     const currentExams = getCurrentExams();

//     // Calculate progress based on current exam set
//     const totalExams = soExams.length + phongExams.length + chuyenExams.length;
//     const completedExams = 0; // This could be dynamic based on user progress
//     const progressPercentage = totalExams > 0 ? Math.round((completedExams / totalExams) * 100) : 0;

//     const handleStartExam = (exam) => {
//         navigate('/exam-taking', {
//             state: {
//                 examData: exam,
//                 examSet: examSet,
//                 examType: activeExamType,
//                 province: examSet?.province,
//                 year: examSet?.year
//             }
//         });
//     };

//     const getExamTypeInfo = (type) => {
//         switch (type) {
//             case 'so':
//                 return {
//                     title: 'Đề Sở',
//                     description: 'Đề thi từ Sở GD&ĐT',
//                     color: 'green',
//                     bgColor: 'bg-green-500',
//                     bgColorLight: 'bg-green-100',
//                     textColor: 'text-green-700'
//                 };
//             case 'phong':
//                 return {
//                     title: 'Đề Phòng',
//                     description: 'Đề thi từ Phòng GD&ĐT',
//                     color: 'blue',
//                     bgColor: 'bg-blue-500',
//                     bgColorLight: 'bg-blue-100',
//                     textColor: 'text-blue-700'
//                 };
//             case 'chuyen':
//                 return {
//                     title: 'Đề Chuyên',
//                     description: 'Đề thi từ trường chuyên',
//                     color: 'purple',
//                     bgColor: 'bg-purple-500',
//                     bgColorLight: 'bg-purple-100',
//                     textColor: 'text-purple-700'
//                 };
//             default:
//                 return {
//                     title: 'Đề thi',
//                     description: 'Đề thi luyện tập',
//                     color: 'gray',
//                     bgColor: 'bg-gray-500',
//                     bgColorLight: 'bg-gray-100',
//                     textColor: 'text-gray-700'
//                 };
//         }
//     };

//     const activeTypeInfo = getExamTypeInfo(activeExamType);

//     return (
//         <div className="flex gap-8">
//             <div className="flex-1">
//                 {/* Header */}
//                 <div className="bg-gradient-to-r from-yellow-100 to-orange-100 rounded-2xl p-6 mb-8">
//                     <div className="flex items-start justify-between gap-6">
//                         <div className="flex-1">
//                             <h1 className="text-2xl font-bold text-gray-900 mb-2">
//                                 {examSet?.title || 'Bộ đề luyện thi tuyển sinh vào lớp 10'}
//                             </h1>
//                             <div className="text-sm text-gray-600 space-y-1">
//                                 <p><strong>Cấu trúc bộ đề:</strong></p>
//                                 <ul className="list-disc list-inside space-y-1 ml-4">
//                                     <li>Bám sát cấu trúc minh họa của Sở GD&ĐT {examSet?.province || 'Nam Định'};</li>
//                                     <li>Bao gồm đáp án, lời giải chi tiết, hướng dẫn chấm và khung điểm;</li>
//                                     <li>Mô tả đề theo dạng thức câu hỏi, nội dung ôn luyện, mức độ.</li>
//                                 </ul>
//                                 <div className="mt-3 text-sm flex gap-4">
//                                     <span><span className="font-medium">Tỉnh:</span> {examSet?.province || 'Nam Định'}</span>
//                                     <span><span className="font-medium">Năm:</span> {examSet?.year || '2025-2026'}</span>
//                                     <span><span className="font-medium">Tổng:</span> {totalExams} đề</span>
//                                 </div>
//                                 <div className="mt-2 text-sm flex gap-4">
//                                     <span className="text-green-600">Sở: {soExams.length} đề</span>
//                                     <span className="text-blue-600">Phòng: {phongExams.length} đề</span>
//                                     <span className="text-purple-600">Chuyên: {chuyenExams.length} đề</span>
//                                 </div>
//                             </div>
//                         </div>

//                         {/* Progress Section */}
//                         <div className="flex flex-col items-center gap-3">
//                             <div className="text-center">
//                                 <div className="text-xs text-gray-500">Tiến độ làm bài:</div>
//                                 <div className="text-2xl font-bold text-orange-600">{completedExams} / {totalExams}</div>
//                             </div>
//                             <div className="w-16 h-16 relative">
//                                 <svg className="w-16 h-16 transform -rotate-90" viewBox="0 0 36 36">
//                                     <path
//                                         d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
//                                         fill="none"
//                                         stroke="#e5e7eb"
//                                         strokeWidth="3"
//                                     />
//                                     <path
//                                         d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
//                                         fill="none"
//                                         stroke="#f59e0b"
//                                         strokeWidth="3"
//                                         strokeDasharray={`${progressPercentage}, 100`}
//                                     />
//                                 </svg>
//                                 <div className="absolute inset-0 flex items-center justify-center">
//                                     <span className="text-sm font-bold text-orange-600">{progressPercentage}%</span>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>

//                 {/* Practice Exams List */}
//                 <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-200">
//                     <div className="flex items-center justify-between mb-6">
//                         <h2 className="text-lg font-bold text-gray-900">
//                             Gói đề Ôn thi vào 10 môn Toán - {examSet?.province || 'Nam Định'}
//                         </h2>

//                         {/* Tab Toggle Switch */}
//                         <div className="bg-gray-100 rounded-full p-1 flex">
//                             <button
//                                 onClick={() => setActiveExamType('so')}
//                                 className={`px-4 py-2 rounded-full text-sm font-medium transition-all cursor-pointer duration-200 ${activeExamType === 'so'
//                                     ? 'bg-green-500 text-white shadow-sm'
//                                     : 'text-gray-600 hover:text-gray-800'
//                                     }`}
//                             >
//                                 Sở ({soExams.length})
//                             </button>
//                             <button
//                                 onClick={() => setActiveExamType('phong')}
//                                 className={`px-4 py-2 rounded-full text-sm font-medium transition-all cursor-pointer duration-200 ${activeExamType === 'phong'
//                                     ? 'bg-blue-500 text-white shadow-sm'
//                                     : 'text-gray-600 hover:text-gray-800'
//                                     }`}
//                             >
//                                 Phòng ({phongExams.length})
//                             </button>
//                             <button
//                                 onClick={() => setActiveExamType('chuyen')}
//                                 className={`px-4 py-2 rounded-full text-sm font-medium transition-all cursor-pointer duration-200 ${activeExamType === 'chuyen'
//                                     ? 'bg-purple-500 text-white shadow-sm'
//                                     : 'text-gray-600 hover:text-gray-800'
//                                     }`}
//                             >
//                                 Chuyên ({chuyenExams.length})
//                             </button>
//                         </div>
//                     </div>

//                     {/* No exams message */}
//                     {currentExams.length === 0 ? (
//                         <div className="text-center py-12">
//                             <div className="text-gray-400 mb-4">
//                                 <svg className="w-16 h-16 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
//                                 </svg>
//                             </div>
//                             <p className="text-gray-500">Chưa có {activeTypeInfo.title.toLowerCase()} cho bộ đề này</p>
//                         </div>
//                     ) : (
//                         <div className="space-y-4">
//                             {currentExams.map((exam, index) => (
//                                 <div key={exam.id} className="flex items-center bg-white justify-between p-4 border border-gray-200 rounded-lg hover:shadow-md transition-all">
//                                     <div className="flex items-center gap-4">
//                                         <div className={`font-bold ${activeTypeInfo.textColor}`}>
//                                             {String(index + 1).padStart(2, '0')}.
//                                         </div>
//                                         <div>
//                                             <h3 className="font-medium text-gray-900">{exam.name}</h3>
//                                             <div className="flex items-center gap-4 text-sm text-gray-500 mt-1">
//                                                 <span className="flex items-center gap-1">
//                                                     <div className={`w-3 h-3 rounded-sm ${activeTypeInfo.bgColor}`}></div>
//                                                     {exam.questions} câu
//                                                 </span>
//                                                 <span className="flex items-center gap-1">
//                                                     <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
//                                                         <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
//                                                     </svg>
//                                                     {exam.time} phút
//                                                 </span>
//                                                 <span className={`text-xs px-2 py-1 rounded-full font-medium ${activeTypeInfo.bgColorLight} ${activeTypeInfo.textColor}`}>
//                                                     {activeTypeInfo.title}
//                                                 </span>
//                                             </div>
//                                         </div>
//                                     </div>
//                                     <div>
//                                         <button
//                                             onClick={() => handleStartExam(exam)}
//                                             className={`text-white px-4 py-2 rounded-lg font-medium text-sm transition-colors cursor-pointer ${activeTypeInfo.bgColor} hover:opacity-90`}
//                                         >
//                                             Làm bài
//                                         </button>
//                                     </div>
//                                 </div>
//                             ))}
//                         </div>
//                     )}
//                 </div>
//             </div>
//         </div>
//     );
// }

// export default PracticeExam;