export const getDashboardStats = (examData, provinces, urlParams) => {
    let totalExams = 0;

    provinces.forEach(province => {
        const years = Object.keys(examData[province] || {});
        years.forEach(year => {
            const examSet = examData[province][year];
            if (examSet) {
                if (urlParams?.type && urlParams?.grade) {
                    if (examSet.type === urlParams.type && examSet.grade === urlParams.grade) {
                        totalExams += (examSet.soExams?.length || 0) +
                            (examSet.phongExams?.length || 0) +
                            (examSet.chuyenExams?.length || 0) +
                            (examSet.truongExams?.length || 0);
                    }
                } else {
                    totalExams += (examSet.soExams?.length || 0) +
                        (examSet.phongExams?.length || 0) +
                        (examSet.chuyenExams?.length || 0) +
                        (examSet.truongExams?.length || 0);
                }
            }
        });
    });

    return { totalExams };
};

export const getRecommendedExams = (examTypeConfigs) => {
    const userProgress = {
        phong: 60,
        so: 40,
        truong: 20,
        chuyen: 10
    };

    const recommendations = [];

    if (userProgress.phong < 80) {
        recommendations.push({
            type: 'phong',
            title: 'Đề Phòng GD&ĐT Nam Định',
            subtitle: 'Nâng cao kỹ năng cơ bản',
            difficulty: 'Dễ',
            priority: 'Cao',
            reason: 'Bạn mới hoàn thành 60% đề Phòng. Hãy luyện thêm để vững vàng kiến thức cơ bản.',
            estimatedTime: '90 phút',
            topics: ['Hàm số', 'Phương trình', 'Hình học'],
            bgGradient: examTypeConfigs.phong.bgGradient,
            icon: (
                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3z" />
                </svg>
            )
        });
    }

    if (userProgress.so < 70) {
        recommendations.push({
            type: 'so',
            title: 'Đề Sở GD&ĐT Nam Định',
            subtitle: 'Rèn luyện tư duy logic',
            difficulty: 'Trung bình',
            priority: 'Trung bình',
            reason: 'Bạn đã có nền tảng tốt. Đây là bước tiếp theo để nâng cao khả năng.',
            estimatedTime: '120 phút',
            topics: ['Tích phân', 'Logarit', 'Số phức'],
            bgGradient: examTypeConfigs.so.bgGradient,
            icon: (
                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4z" />
                </svg>
            )
        });
    }

    if (userProgress.phong > 70 && userProgress.so > 50) {
        recommendations.push({
            type: 'truong',
            title: 'Đề Trường THPT Nam Định',
            subtitle: 'Thử thách bản thân',
            difficulty: 'Khó',
            priority: 'Thấp',
            reason: 'Bạn đã sẵn sàng cho thử thách mới. Đề trường sẽ giúp bạn làm quen với dạng khó.',
            estimatedTime: '150 phút',
            topics: ['Bài toán tối ưu', 'Hình học không gian', 'Lượng giác'],
            bgGradient: examTypeConfigs.truong.bgGradient,
            icon: (
                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10.75 2.75a.75.75 0 00-1.5 0v8.614L6.295 8.235a.75.75 0 10-1.09 1.03L10 14.75l4.795-5.485a.75.75 0 10-1.09-1.03l-2.955 3.129V2.75z" />
                </svg>
            )
        });
    }

    return recommendations;
};

export const getTrendingExams = () => {
    return [
        {
            title: 'Đề Sở Nam Định 2025-2026',
            type: 'so',
            students: 1234,
            avgScore: 7.5,
            difficulty: 'Trung bình',
            isNew: true
        },
        {
            title: 'Đề Phòng Hà Nội GK1-2024',
            type: 'phong',
            students: 856,
            avgScore: 8.2,
            difficulty: 'Dễ',
            isHot: true
        },
        {
            title: 'Đề Chuyên Lê Hồng Phong',
            type: 'chuyen',
            students: 432,
            avgScore: 6.1,
            difficulty: 'Rất khó',
            isChallenge: true
        },
        {
            title: 'Đề Trường THPT Phan Bội Châu',
            type: 'truong',
            students: 789,
            avgScore: 6.8,
            difficulty: 'Khó',
            isNew: true,
            isHot: true
        }
    ];
};