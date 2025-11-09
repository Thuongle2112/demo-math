export const HEADER_MENU_CONFIG = {
    aboutSlearn: {
        label: 'Về Slearn',
        items: [
            { label: 'Giới thiệu chung', href: '#' },
            { label: 'Phương pháp đào tạo', href: '#' },
            { label: 'Đội ngũ giảng viên', href: '#' },
            { label: 'Chương trình', href: '#' },
            { label: 'Sự kiện', href: '#' },
            { label: 'Hệ thống cơ sở', href: '#' },
            { label: 'Chính sách', href: '#' }
        ]
    },
    practice: {
        label: 'Ôn tập',
        items: [
            { label: 'Lớp 6', path: '/on-thi/books?grade=6' },
            { label: 'Lớp 7', path: '/on-thi/books?grade=7' },
            { label: 'Lớp 8', path: '/on-thi/books?grade=8' },
            { label: 'Lớp 9', path: '/on-thi/books?grade=9' },
            { label: 'Lớp 10', path: '/on-thi/books?grade=10' },
            { label: 'Lớp 11', path: '/on-thi/books?grade=11' },
            { label: 'Lớp 12', path: '/on-thi/books?grade=12' }
        ]
    },
    exams: {
        label: 'Thi thử',
        items: [
            {
                label: 'Thi thử giữa kỳ 1',
                type: 'giuaky1',
                grades: [6, 7, 8, 9, 10, 11, 12]
            },
            {
                label: 'Thi thử cuối kỳ 1',
                type: 'cuoiky1',
                grades: [6, 7, 8, 9, 10, 11, 12]
            },
            {
                label: 'Thi thử giữa kỳ 2',
                type: 'giuaky2',
                grades: [6, 7, 8, 9, 10, 11, 12]
            },
            {
                label: 'Thi thử cuối kỳ 2',
                type: 'cuoiky2',
                grades: [6, 7, 8, 9, 10, 11, 12]
            },
            {
                label: 'Thi thử vào 10',
                path: '/on-thi?type=tuyensinh&grade=9'
            },
            {
                label: 'Thi thử Tốt nghiệp THPT',
                path: '/on-thi?type=totnghiep&grade=12'
            }
        ]
    }
};

export const USER_MENU_ITEMS = [
    {
        label: 'Bảng điều khiển',
        href: '#',
        iconPath: 'M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z'
    },
    {
        label: 'Profile',
        href: '#',
        iconPath: 'M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z'
    },
    {
        label: 'Lịch sử Test',
        href: '#',
        iconPath: 'M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z'
    },
    {
        label: 'Bài test của tôi',
        href: '#',
        iconPath: 'M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z'
    },
    {
        label: 'Khóa học của tôi',
        href: '#',
        iconPath: 'M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253'
    }
];