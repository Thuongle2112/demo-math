import { useState, useEffect, useRef } from 'react';
import { useLocation, useMatch, useNavigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../hooks/hooks';
import { setActiveView, setUrlParams, setSelectedExamType, setSelectedExam, setSelectedProvince, resetSelection } from '../store/onThiSlice';
import ExamOverview from '../components/Dethi/ExamOverview';
import PracticeSelection from '../components/Dethi/PracticeSelection';
import ExamTypeSelection from '../components/Dethi/ExamTypeSelection';
import BookResources from '../components/Dethi/BookResources/BookResources';
import NavCard from '../components/Dethi/NavCard';
import { getAllExamSetsByProvince } from '../data/examData';
import { NAV_CARDS_CONFIG, getActiveViews } from '../config/navCardsConfig';


function OnThi10THPT() {
    const location = useLocation();
    const navigate = useNavigate();
    const matchOverview = useMatch({ path: '/on-thi', end: true });
    const matchBooks = useMatch({ path: '/on-thi/books/*', end: true });
    const matchPractice = useMatch({ path: '/on-thi/practice', end: true });
    const matchExamType = useMatch({ path: '/on-thi/exam-type', end: true });

    const dispatch = useAppDispatch();
    const { activeView, selectedProvince, selectedExamType, urlParams } = useAppSelector(s => s.onThi);

    const isInitialLoadRef = useRef(true);

    useEffect(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }, [activeView]);

    useEffect(() => {
        if (matchBooks) {
            dispatch(setActiveView('bookResources'));
        } else if (matchPractice) {
            dispatch(setActiveView('practiceSelection'));
        } else if (matchExamType) {
            dispatch(setActiveView('examTypeSelection'));
        } else if (matchOverview) {
            dispatch(setActiveView('overview'));
        }

    }, [matchBooks, matchPractice, matchExamType, matchOverview, urlParams, dispatch, navigate]);

    // useEffect(() => {
    //     const searchParams = new URLSearchParams(location.search);
    //     const type = searchParams.get('type');
    //     const grade = searchParams.get('grade');

    //     const parsed = { type: type || null, grade: grade ? parseInt(grade, 10) : null };
    //     dispatch(setUrlParams(parsed));

    //     if (parsed.type && parsed.grade && location.search) {
    //         dispatch(setSelectedExamType(parsed.type));
    //         navigate('/on-thi/practice');
    //     }
    // }, [location.search, dispatch, navigate]);

    useEffect(() => {
        const searchParams = new URLSearchParams(location.search);
        const type = searchParams.get('type');
        const grade = searchParams.get('grade');


        const parsed = { type: type || null, grade: grade ? parseInt(grade, 10) : null };
        dispatch(setUrlParams(parsed));

        // ✅ Set exam type nếu có query params (để filter trong overview)
        if (parsed.type) {
            dispatch(setSelectedExamType(parsed.type));
        }

        // ✅ Mark that initial load is complete
        isInitialLoadRef.current = false;
    }, [location.search, dispatch]);

    // Get exam sets based on selected province and URL params
    const getFilteredExamSets = () => {
        const allExamSets = getAllExamSetsByProvince(selectedProvince);

        // If we have URL params, filter by type and grade
        if (urlParams.type && urlParams.grade) {
            return allExamSets.filter(examSet =>
                examSet.type === urlParams.type && examSet.grade === urlParams.grade
            );
        }

        return allExamSets;
    };

    const examSets = getFilteredExamSets();

    // const handleExamClick = (exam) => {
    //     setActiveView('examTypeSelection');
    // }
    const handleExamClick = (exam) => {
        dispatch(setSelectedExam(exam));
        dispatch(setActiveView('examTypeSelection'));
        navigate('/on-thi/exam-type');
    };

    const handleExamTypeSelect = (examType) => {
        dispatch(setSelectedExamType(examType));
        dispatch(setActiveView('practiceSelection'));
        navigate('/on-thi/practice');
    };

    const handleProvinceChange = (province) => {
        dispatch(setSelectedProvince(province));
        dispatch(resetSelection());
    };

    // const handleNavCardClick = (cardType) => {
    //     if (cardType === 'overview') {
    //         setActiveView('overview');
    //     } else if (cardType === 'practice') {
    //         setActiveView('examTypeSelection');
    //     } else if (cardType === 'books') {
    //         setActiveView('bookResources');
    //     }
    //     setSelectedExam(null);
    // };

    const handleNavCardClick = (cardId) => {
        const navigationMap = {
            overview: () => {
                navigate('/on-thi', { replace: true });
                dispatch(resetToOverview());
            },
            practice: () => {
                navigate('/on-thi/exam-type');
            },
            books: () => {
                navigate('/on-thi/books');
                dispatch(resetSelection());
            },
            progress: () => {
                // TODO: Implement progress view
                console.log('Progress view coming soon!');
            }
        };

        navigationMap[cardId]?.();
    };

    // Get page title based on URL params
    const getPageTitle = () => {
        if (urlParams.type && urlParams.grade) {
            const typeLabels = {
                'giuaky1': 'Thi thử giữa kỳ 1',
                'cuoiky1': 'Thi thử cuối kỳ 1',
                'giuaky2': 'Thi thử giữa kỳ 2',
                'cuoiky2': 'Thi thử cuối kỳ 2',
                'tuyensinh': 'Ôn Thi Vào Lớp 10',
                'totnghiep': 'Thi thử Tốt nghiệp THPT'
            };

            return `${typeLabels[urlParams.type] || 'Thi thử'} - Lớp ${urlParams.grade}`;
        }

        return 'Ôn Thi Vào Lớp 10';
    };

    // Get page description based on URL params  
    const getPageDescription = () => {
        if (urlParams.type && urlParams.grade) {
            const typeDescriptions = {
                'giuaky1': 'Luyện tập với đề kiểm tra giữa học kỳ 1',
                'cuoiky1': 'Luyện tập với đề thi cuối học kỳ 1',
                'giuaky2': 'Luyện tập với đề kiểm tra giữa học kỳ 2',
                'cuoiky2': 'Luyện tập với đề thi cuối học kỳ 2',
                'tuyensinh': 'Luyện tập với bộ đề chuẩn từ các tỉnh thành',
                'totnghiep': 'Luyện tập với đề thi tốt nghiệp THPT'
            };

            return `${typeDescriptions[urlParams.type] || 'Luyện tập'} lớp ${urlParams.grade}`;
        }

        return 'Luyện tập với bộ đề chuẩn từ các tỉnh thành';
    };

    const renderMainContent = () => {
        switch (activeView) {
            case 'overview':
                return (
                    <ExamOverview
                        examSets={examSets}
                        onExamClick={handleExamClick}
                        onProvinceChange={handleProvinceChange}
                        selectedProvince={selectedProvince}
                        urlParams={urlParams}
                        onExamTypeSelect={handleExamTypeSelect}
                    />
                );
            case 'examTypeSelection':
                return (
                    <ExamTypeSelection
                        onExamTypeSelect={handleExamTypeSelect}
                        selectedProvince={selectedProvince}
                        urlParams={urlParams}
                    />
                );
            case 'practiceSelection':
                return (
                    <PracticeSelection
                        onExamClick={handleExamClick}
                        selectedProvince={selectedProvince}
                        examType={selectedExamType}
                        urlParams={urlParams}
                    />
                );
            case 'bookResources':
                return <BookResources urlParams={urlParams} />;
            default:
                return null;
        }
    };

    return (
        <div className="min-h-screen">
            {/* Hero Section */}
            <div className="bg-orange-300 text-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                    <div className="text-center">
                        <h1 className="text-4xl font-bold mb-4">{getPageTitle()}</h1>
                        <p className="text-xl text-gray-100 mb-8">{getPageDescription()}</p>
                    </div>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8">
                {/* Mobile: Horizontal scrollable tabs */}
                <div className="md:hidden mb-8">
                    <div className="flex overflow-x-auto gap-3 pb-4 snap-x snap-mandatory scrollbar-hide">
                        {NAV_CARDS_CONFIG.map((card) => (
                            <NavCard
                                key={card.id}
                                id={card.id}
                                iconPath={card.iconPath}
                                fillRule={card.fillRule}
                                clipRule={card.clipRule}
                                title={card.title}
                                description={card.getDescription(urlParams)}
                                color={card.color}
                                isActive={getActiveViews(card.id).includes(activeView)}
                                onClick={() => handleNavCardClick(card.id)}
                                variant="mobile"
                                badge={card.badge}
                            />
                        ))}
                    </div>
                </div>

                {/* Desktop: Grid layout */}
                <div className="hidden md:grid md:grid-cols-4 gap-6 mb-12">
                    {NAV_CARDS_CONFIG.map((card) => (
                        <NavCard
                            key={card.id}
                            id={card.id}
                            iconPath={card.iconPath}
                            fillRule={card.fillRule}
                            clipRule={card.clipRule}
                            title={card.title}
                            description={
                                card.getFullDescription
                                    ? card.getFullDescription()
                                    : card.getDescription(urlParams)
                            }
                            color={card.color}
                            isActive={getActiveViews(card.id).includes(activeView)}
                            onClick={() => handleNavCardClick(card.id)}
                            variant="desktop"
                            badge={card.badge}
                        />
                    ))}
                </div>

                {/* Main Content */}
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
                    {renderMainContent()}
                </div>
            </div>
        </div>
    );
}

export default OnThi10THPT;