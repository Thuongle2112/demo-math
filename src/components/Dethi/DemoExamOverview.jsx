// import { examData, getProvinces, getAllExamSetsByProvince } from '../../data/examData';

// function ExamOverview({ examSets, onExamClick, onProvinceChange, selectedProvince = 'Nam Định', urlParams }) {
//     // Get all provinces for the province explorer section
//     const provinces = getProvinces();

//     // Get display title based on URL params
//     const getDisplayTitle = () => {
//         if (urlParams?.type && urlParams?.grade) {
//             const typeLabels = {
//                 'giuaky1': 'Kiểm tra giữa kỳ 1',
//                 'cuoiky1': 'Thi cuối kỳ 1',
//                 'giuaky2': 'Kiểm tra giữa kỳ 2',
//                 'cuoiky2': 'Thi cuối kỳ 2',
//                 'tuyensinh': 'Tuyển sinh lớp 10',
//                 'totnghiep': 'Tốt nghiệp THPT'
//             };

//             return `Bộ đề ${typeLabels[urlParams.type] || 'thi thử'} lớp ${urlParams.grade} - ${selectedProvince}`;
//         }

//         return `Bộ đề thi thử theo tỉnh ${selectedProvince}`;
//     };

//     // Create province cards data from examData
//     const provinceCards = provinces.map(province => {
//         const years = Object.keys(examData[province]);
//         const totalSets = years.length;

//         // Count total exams based on URL params or default
//         let totalSoExams = 0;
//         let totalPhongExams = 0;
//         let totalChuyenExams = 0;

//         years.forEach(year => {
//             const examSet = examData[province][year];

//             // If we have URL params, only count matching exam sets
//             if (urlParams?.type && urlParams?.grade) {
//                 if (examSet.type === urlParams.type && examSet.grade === urlParams.grade) {
//                     totalSoExams += examSet.soExams?.length || 0;
//                     totalPhongExams += examSet.phongExams?.length || 0;
//                     totalChuyenExams += examSet.chuyenExams?.length || 0;
//                 }
//             } else {
//                 // Default: count all exams
//                 totalSoExams += examSet.soExams?.length || 0;
//                 totalPhongExams += examSet.phongExams?.length || 0;
//                 totalChuyenExams += examSet.chuyenExams?.length || 0;
//             }
//         });

//         return {
//             name: province.toUpperCase(),
//             province: province,
//             code: province.toUpperCase(),
//             totalSets: totalSets,
//             totalSoExams: totalSoExams,
//             totalPhongExams: totalPhongExams,
//             totalChuyenExams: totalChuyenExams,
//             years: years,
//             bgColor: province === selectedProvince ? 'bg-orange-100' : 'bg-blue-100',
//             textColor: province === selectedProvince ? 'text-orange-600' : 'text-blue-600'
//         };
//     });

//     const handleProvinceClick = (provinceCard) => {
//         // Call parent function to change province and update examSets
//         onProvinceChange(provinceCard.province);
//     };

//     return (
//         <div className="space-y-8">
//             {/* URL Params Info Banner */}
//             {urlParams?.type && urlParams?.grade && (
//                 <div className="bg-gradient-to-r from-orange-50 to-orange-100 border border-orange-200 rounded-xl p-4">
//                     <div className="flex items-center gap-3">
//                         <svg className="w-6 h-6 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
//                         </svg>
//                         <div>
//                             <p className="text-orange-800 font-medium">Đang hiển thị kết quả được lọc</p>
//                             <p className="text-orange-600 text-sm">
//                                 Loại: {urlParams.type}, Lớp: {urlParams.grade}
//                             </p>
//                         </div>
//                     </div>
//                 </div>
//             )}

//             {/* Main Exam Sets */}
//             <div>
//                 <h1 className="text-2xl font-bold text-gray-900 mb-8">
//                     {getDisplayTitle()}
//                 </h1>

//                 <div className="space-y-6">
//                     {examSets.length > 0 ? (
//                         examSets.map((exam) => (
//                             <div key={exam.id} className="bg-white rounded-xl p-8 shadow-sm border border-gray-200 hover:shadow-md transition-shadow">
//                                 <div className="flex items-center justify-between">
//                                     <div className="flex items-center gap-6">
//                                         <div className="w-16 h-16 bg-gradient-to-br from-orange-100 to-orange-200 rounded-xl flex items-center justify-center flex-shrink-0">
//                                             <svg className="w-8 h-8 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                                                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
//                                             </svg>
//                                         </div>
//                                         <div className="flex-1">
//                                             <h3 className="text-xl font-bold text-gray-900 mb-2">
//                                                 {exam.title}
//                                             </h3>
//                                             <div className="flex items-center gap-4 text-sm text-gray-500">
//                                                 <span className="flex items-center gap-1">
//                                                     <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
//                                                         <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
//                                                     </svg>
//                                                     Cập nhật mới nhất
//                                                 </span>
//                                                 <span className="flex items-center gap-1">
//                                                     <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
//                                                         <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
//                                                     </svg>
//                                                     Đầy đủ đáp án
//                                                 </span>
//                                                 <span className="flex items-center gap-1">
//                                                     <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
//                                                         <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z" clipRule="evenodd" />
//                                                     </svg>
//                                                     Video hướng dẫn giải chi tiết
//                                                 </span>
//                                             </div>
//                                             <div className="mt-2 text-sm text-gray-600">
//                                                 <span className="font-medium">{exam.province}</span> •
//                                                 <span className="ml-1">Năm {exam.year}</span> •
//                                                 <span className="ml-1">
//                                                     {exam.soExams?.length || 0} đề Sở, {exam.phongExams?.length || 0} đề Phòng, {exam.chuyenExams?.length || 0} đề Chuyên
//                                                 </span>
//                                                 {exam.type && exam.grade && (
//                                                     <>
//                                                         <span className="ml-1">•</span>
//                                                         <span className="ml-1 bg-blue-100 text-blue-600 px-2 py-1 rounded text-xs font-medium">
//                                                             {exam.type} - Lớp {exam.grade}
//                                                         </span>
//                                                     </>
//                                                 )}
//                                             </div>
//                                         </div>
//                                     </div>
//                                     <div className="flex items-center gap-3">
//                                         <button
//                                             onClick={() => onExamClick(exam)}
//                                             className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-xl font-semibold transition-all duration-200 hover:scale-105 shadow-lg hover:shadow-xl"
//                                         >
//                                             Xem thêm
//                                         </button>
//                                     </div>
//                                 </div>
//                             </div>
//                         ))
//                     ) : (
//                         <div className="bg-white rounded-xl p-12 shadow-sm border border-gray-200 text-center">
//                             <div className="text-gray-400 mb-4">
//                                 <svg className="w-16 h-16 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
//                                 </svg>
//                             </div>
//                             <p className="text-gray-500 text-lg">
//                                 {urlParams?.type && urlParams?.grade
//                                     ? `Không tìm thấy đề thi ${urlParams.type} lớp ${urlParams.grade}`
//                                     : 'Không tìm thấy đề thi'
//                                 }
//                             </p>
//                             <p className="text-gray-400 text-sm mt-2">
//                                 {urlParams?.type && urlParams?.grade
//                                     ? 'Thử chọn tỉnh khác hoặc thay đổi bộ lọc'
//                                     : 'Thử thay đổi bộ lọc hoặc chọn tỉnh khác'
//                                 }
//                             </p>
//                         </div>
//                     )}
//                 </div>
//             </div>

//             {/* Province Explorer Grid */}
//             <div>
//                 <h2 className="text-2xl font-bold text-gray-900 mb-6">
//                     Khám phá bộ đề của các địa phương
//                     {urlParams?.type && urlParams?.grade && (
//                         <span className="text-sm font-normal text-gray-500 ml-2">
//                             (Đã lọc theo {urlParams.type} - Lớp {urlParams.grade})
//                         </span>
//                     )}
//                 </h2>

//                 <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//                     {provinceCards.map((province, index) => (
//                         <div
//                             key={index}
//                             className={`bg-white rounded-2xl p-6 shadow-sm border transition-all cursor-pointer group ${province.province === selectedProvince
//                                 ? 'border-orange-300 ring-2 ring-orange-100 shadow-md'
//                                 : 'border-gray-200 hover:shadow-md'
//                                 }`}
//                             onClick={() => handleProvinceClick(province)}
//                         >
//                             <div className="flex items-start justify-between">
//                                 <div className="flex items-start gap-4">
//                                     <div className={`${province.bgColor} rounded-xl p-4 text-center min-w-[80px]`}>
//                                         <div className={`${province.textColor} font-bold text-sm leading-tight`}>
//                                             {province.code}
//                                         </div>
//                                     </div>
//                                     <div className="flex-1">
//                                         <h3 className="font-bold text-gray-900 text-lg mb-3">
//                                             BỘ ĐỀ {province.name}
//                                         </h3>
//                                         <div className="mt-1 text-xs text-gray-500">
//                                             <div className="flex items-center gap-4">
//                                                 <span>{province.totalSets} bộ đề</span>
//                                                 <span>{province.totalSoExams} đề Sở</span>
//                                                 <span>{province.totalPhongExams} đề Phòng</span>
//                                                 <span>{province.totalChuyenExams} đề Chuyên</span>
//                                             </div>
//                                             <div className="mt-1">
//                                                 Năm: {province.years.join(', ').replace(/-\d{4}/g, '')}
//                                             </div>
//                                             {urlParams?.type && urlParams?.grade && (
//                                                 <div className="mt-1 text-blue-600">
//                                                     Có {(province.totalSoExams + province.totalPhongExams + province.totalChuyenExams)} đề phù hợp
//                                                 </div>
//                                             )}
//                                         </div>
//                                     </div>
//                                 </div>
//                                 <div className="flex flex-col items-center gap-2">
//                                     <svg className={`w-8 h-8 transition-colors ${province.province === selectedProvince
//                                         ? 'text-orange-500'
//                                         : 'text-gray-400 group-hover:text-orange-500'
//                                         }`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
//                                     </svg>
//                                     <button className={`font-medium text-sm group-hover:underline ${province.province === selectedProvince
//                                         ? 'text-orange-600'
//                                         : 'text-blue-500 hover:text-blue-600'
//                                         }`}>
//                                         {province.province === selectedProvince ? 'Đang xem' : 'Xem thêm'}
//                                     </button>
//                                 </div>
//                             </div>
//                         </div>
//                     ))}
//                 </div>
//             </div>
//         </div>
//     );
// }

// export default ExamOverview;
