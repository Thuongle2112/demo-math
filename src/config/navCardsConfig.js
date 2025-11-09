export const NAV_CARDS_CONFIG = [
    {
        id: 'overview',
        title: 'Tổng quan',
        getDescription: (urlParams) =>
            urlParams?.type && urlParams?.grade
                ? 'Đề xuất và tổng quan'
                : 'Đề xuất và tổng quan đề thi',
        color: 'orange',
        iconPath: "M2 11a1 1 0 011-1h2a1 1 0 011 1v5a1 1 0 01-1 1H3a1 1 0 01-1-1v-5zM8 7a1 1 0 011-1h2a1 1 0 011 1v9a1 1 0 01-1 1H9a1 1 0 01-1-1V7zM14 4a1 1 0 011-1h2a1 1 0 011 1v12a1 1 0 01-1 1h-2a1 1 0 01-1-1V4z"
    },
    {
        id: 'practice',
        title: 'Luyện đề',
        getDescription: (urlParams) =>
            urlParams?.type && urlParams?.grade
                ? 'Theo bộ lọc'
                : 'Bộ đề luyện tập',
        color: 'blue',
        iconPath: "M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 6a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm1 3a1 1 0 100 2h6a1 1 0 100-2H7z",
        fillRule: "evenodd",
        clipRule: "evenodd"
    },
    {
        id: 'books',
        title: 'Tài nguyên',
        getDescription: () => 'Tài liệu học tập',
        getFullDescription: () => 'Tài nguyên Sách - Tài liệu học tập',
        color: 'green',
        iconPath: "M9 4.804A7.968 7.968 0 005.5 4c-1.255 0-2.443.29-3.5.804v10A7.969 7.969 0 015.5 14c1.669 0 3.218.51 4.5 1.385A7.962 7.962 0 0114.5 14c1.255 0 2.443.29 3.5.804v-10A7.968 7.968 0 0014.5 4c-1.255 0-2.443.29-3.5.804V12a1 1 0 11-2 0V4.804z"
    },
    {
        id: 'progress',
        title: 'Tiến trình',
        getDescription: () => 'Theo dõi',
        getFullDescription: () => 'Tiến trình ôn luyện - Theo dõi tiến độ',
        color: 'purple',
        badge: 'NEW',
        iconPath: "M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z",
        fillRule: "evenodd",
        clipRule: "evenodd"
    }
];

// Helper function to get active state
export const getActiveViews = (cardId) => {
    const activeViewsMap = {
        overview: ['overview'],
        practice: ['examTypeSelection', 'practiceSelection'],
        books: ['bookResources'],
        progress: ['progress']
    };
    return activeViewsMap[cardId] || [];
};