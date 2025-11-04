// import { useState, useEffect } from 'react';
// import { useLocation } from 'react-router-dom';
// // import PracticeExam from '../components/Dethi/PracticeExam';
// import ExamOverview from '../components/Dethi/ExamOverview';
// import PracticeSelection from '../components/Dethi/PracticeSelection';
// import ExamTypeSelection from '../components/Dethi/ExamTypeSelection';
// import BookResources from '../components/Dethi/BookResources/BookResources';
// import { getDefaultExamSets, getAllExamSetsByProvince } from '../data/examData';

// function OnThi10THPT() {
//     const location = useLocation();
//     const [selectedProvince, setSelectedProvince] = useState('Nam Định');
//     const [activeView, setActiveView] = useState('overview');
//     const [selectedExam, setSelectedExam] = useState(null);
//     const [selectedExamType, setSelectedExamType] = useState(null);

//     // URL params state
//     const [urlParams, setUrlParams] = useState({
//         type: null,
//         grade: null
//     });

//     // Parse URL parameters on component mount and location change
//     useEffect(() => {
//         const searchParams = new URLSearchParams(location.search);
//         const type = searchParams.get('type');
//         const grade = searchParams.get('grade');

//         setUrlParams({
//             type: type,
//             grade: grade ? parseInt(grade) : null
//         });

//         // Auto-navigate based on URL params
//         if (type && grade) {
//             // If we have URL params, show filtered overview
//             setActiveView('overview');
//             // Auto-set exam type if coming from menu
//             if (type !== 'tuyensinh' && type !== 'totnghiep') {
//                 setSelectedExamType(type);
//             }
//         }
//     }, [location.search]);

//     // Get exam sets based on selected province and URL params
//     const getFilteredExamSets = () => {
//         const allExamSets = getAllExamSetsByProvince(selectedProvince);

//         // If we have URL params, filter by type and grade
//         if (urlParams.type && urlParams.grade) {
//             return allExamSets.filter(examSet =>
//                 examSet.type === urlParams.type && examSet.grade === urlParams.grade
//             );
//         }

//         return allExamSets;
//     };

//     const examSets = getFilteredExamSets();

//     const handleExamClick = (exam) => {
//         setActiveView('examTypeSelection');
//     }

//     const handleExamTypeSelect = (examType) => {
//         setSelectedExamType(examType);
//         setActiveView('practiceSelection');
//     };

//     const handleProvinceChange = (province) => {
//         setSelectedProvince(province);
//         // Reset selected exam when changing province
//         setSelectedExam(null);
//         setSelectedExamType(null);
//     };

//     const handleNavCardClick = (cardType) => {
//         if (cardType === 'overview') {
//             setActiveView('overview');
//         } else if (cardType === 'practice') {
//             setActiveView('examTypeSelection');
//         } else if (cardType === 'books') {
//             setActiveView('bookResources');
//         }
//         setSelectedExam(null);
//     };

//     // Get page title based on URL params
//     const getPageTitle = () => {
//         if (urlParams.type && urlParams.grade) {
//             const typeLabels = {
//                 'giuaky1': 'Thi thử giữa kỳ 1',
//                 'cuoiky1': 'Thi thử cuối kỳ 1',
//                 'giuaky2': 'Thi thử giữa kỳ 2',
//                 'cuoiky2': 'Thi thử cuối kỳ 2',
//                 'tuyensinh': 'Ôn Thi Vào Lớp 10',
//                 'totnghiep': 'Thi thử Tốt nghiệp THPT'
//             };

//             return `${typeLabels[urlParams.type] || 'Thi thử'} - Lớp ${urlParams.grade}`;
//         }

//         return 'Ôn Thi Vào Lớp 10';
//     };

//     // Get page description based on URL params  
//     const getPageDescription = () => {
//         if (urlParams.type && urlParams.grade) {
//             const typeDescriptions = {
//                 'giuaky1': 'Luyện tập với đề kiểm tra giữa học kỳ 1',
//                 'cuoiky1': 'Luyện tập với đề thi cuối học kỳ 1',
//                 'giuaky2': 'Luyện tập với đề kiểm tra giữa học kỳ 2',
//                 'cuoiky2': 'Luyện tập với đề thi cuối học kỳ 2',
//                 'tuyensinh': 'Luyện tập với bộ đề chuẩn từ các tỉnh thành',
//                 'totnghiep': 'Luyện tập với đề thi tốt nghiệp THPT'
//             };

//             return `${typeDescriptions[urlParams.type] || 'Luyện tập'} lớp ${urlParams.grade}`;
//         }

//         return 'Luyện tập với bộ đề chuẩn từ các tỉnh thành';
//     };

//     const renderMainContent = () => {
//         switch (activeView) {
//             case 'overview':
//                 return (
//                     <ExamOverview
//                         examSets={examSets}
//                         onExamClick={handleExamClick}
//                         onProvinceChange={handleProvinceChange}
//                         selectedProvince={selectedProvince}
//                         urlParams={urlParams}
//                         onExamTypeSelect={handleExamTypeSelect}
//                     />
//                 );
//             case 'examTypeSelection':
//                 return (
//                     <ExamTypeSelection
//                         onExamTypeSelect={handleExamTypeSelect}
//                         selectedProvince={selectedProvince}
//                         urlParams={urlParams}
//                     />
//                 );
//             case 'practiceSelection':
//                 return (
//                     <PracticeSelection
//                         onExamClick={handleExamClick}
//                         selectedProvince={selectedProvince}
//                         examType={selectedExamType}
//                         urlParams={urlParams}
//                     />
//                 );
//             // case 'examDetail':
//             //     return <PracticeExam selectedExam={selectedExam} />;
//             case 'bookResources':
//                 return (
//                     <BookResources urlParams={urlParams} />
//                 );
//             default:
//                 return null;
//         }
//     };

//     return (
//         <div className="min-h-screen">
//             {/* Hero Section */}
//             <div className="bg-orange-300 text-white">
//                 <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
//                     <div className="text-center">
//                         <h1 className="text-4xl font-bold mb-4">{getPageTitle()}</h1>
//                         <p className="text-xl text-gray-100 mb-8">{getPageDescription()}</p>
//                     </div>
//                 </div>
//             </div>

//             {/* Navigation Cards */}
//             <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8">
//                 <div className="grid md:grid-cols-4 gap-6 mb-12">
//                     <div
//                         onClick={() => handleNavCardClick('overview')}
//                         className={`bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow cursor-pointer border ${activeView === 'overview' ? 'border-orange-500 ring-2 ring-orange-200' : 'border-orange-200'
//                             }`}
//                     >
//                         <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
//                             <svg className="w-6 h-6 text-orange-600" fill="currentColor" viewBox="0 0 20 20">
//                                 <path d="M2 11a1 1 0 011-1h2a1 1 0 011 1v5a1 1 0 01-1 1H3a1 1 0 01-1-1v-5zM8 7a1 1 0 011-1h2a1 1 0 011 1v9a1 1 0 01-1 1H9a1 1 0 01-1-1V7zM14 4a1 1 0 011-1h2a1 1 0 011 1v12a1 1 0 01-1 1h-2a1 1 0 01-1-1V4z" />
//                             </svg>
//                         </div>
//                         <h3 className="font-bold text-gray-900 mb-2">Tổng quan</h3>
//                         <p className="text-sm text-gray-600">
//                             Đề xuất và tổng quan đề thi
//                         </p>
//                     </div>

//                     <div
//                         onClick={() => handleNavCardClick('practice')}
//                         className={`bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow cursor-pointer border ${activeView === 'examTypeSelection' || activeView === 'practiceSelection'
//                             ? 'border-blue-500 ring-2 ring-blue-200'
//                             : 'border-gray-200'
//                             }`}
//                     >
//                         <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
//                             <svg className="w-6 h-6 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
//                                 <path fillRule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 6a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm1 3a1 1 0 100 2h6a1 1 0 100-2H7z" clipRule="evenodd" />
//                             </svg>
//                         </div>
//                         <h3 className="font-bold text-gray-900 mb-2">Luyện đề</h3>
//                         <p className="text-sm text-gray-600">
//                             {urlParams.type && urlParams.grade
//                                 ? `Luyện đề theo bộ lọc`
//                                 : 'Bộ đề luyện tập'
//                             }
//                         </p>
//                     </div>

//                     <div
//                         onClick={() => handleNavCardClick('books')}
//                         className={`bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow cursor-pointer border ${activeView === 'bookResources' ? 'border-green-500 ring-2 ring-green-200' : 'border-gray-200'
//                             }`}
//                     >
//                         <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
//                             <svg className="w-6 h-6 text-green-600" fill="currentColor" viewBox="0 0 20 20">
//                                 <path d="M9 4.804A7.968 7.968 0 005.5 4c-1.255 0-2.443.29-3.5.804v10A7.969 7.969 0 015.5 14c1.669 0 3.218.51 4.5 1.385A7.962 7.962 0 0114.5 14c1.255 0 2.443.29 3.5.804v-10A7.968 7.968 0 0014.5 4c-1.255 0-2.443.29-3.5.804V12a1 1 0 11-2 0V4.804z" />
//                             </svg>
//                         </div>
//                         <h3 className="font-bold text-gray-900 mb-2">Tài nguyên Sách</h3>
//                         <p className="text-sm text-gray-600">Tài liệu học tập</p>
//                     </div>

//                     <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow cursor-pointer border border-gray-200">
//                         <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
//                             <svg className="w-6 h-6 text-purple-600" fill="currentColor" viewBox="0 0 20 20">
//                                 <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z" clipRule="evenodd" />
//                             </svg>
//                         </div>
//                         <h3 className="font-bold text-gray-900 mb-2">Tiến trình ôn luyện</h3>
//                         <p className="text-sm text-gray-600">Theo dõi tiến độ <span className="bg-pink-100 text-pink-600 text-xs px-2 py-1 rounded-full ml-1">NEW</span></p>
//                     </div>
//                 </div>

//                 {/* Main Content */}
//                 <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
//                     {renderMainContent()}
//                 </div>
//             </div>
//         </div>
//     );
// }

// export default OnThi10THPT;