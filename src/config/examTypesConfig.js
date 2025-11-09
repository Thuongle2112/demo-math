export const EXAM_TYPES = [
    {
        id: 'truong',
        title: 'Luyện đề Trường',
        description: 'Đề thi từ các trường THPT',
        iconPath: 'M10.75 2.75a.75.75 0 00-1.5 0v8.614L6.295 8.235a.75.75 0 10-1.09 1.03L10 14.75l4.795-5.485a.75.75 0 10-1.09-1.03l-2.955 3.129V2.75z M3.5 12.75a.75.75 0 00-1.5 0v2.5A2.75 2.75 0 004.75 18h10.5A2.75 2.75 0 0018 15.25v-2.5a.75.75 0 00-1.5 0v2.5c0 .69-.56 1.25-1.25 1.25H4.75c-.69 0-1.25-.56-1.25-1.25v-2.5z',
        color: 'orange',
        bgGradient: 'from-orange-400 to-orange-600',
        borderColor: 'border-orange-200',
        hoverBorder: 'border-orange-500',
        ringColor: 'ring-orange-200'
    },
    {
        id: 'phong',
        title: 'Luyện đề Phòng',
        description: 'Đề thi từ các phòng giáo dục và đào tạo',
        iconPath: 'M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z',
        color: 'green',
        bgGradient: 'from-green-400 to-green-600',
        borderColor: 'border-green-200',
        hoverBorder: 'border-green-500',
        ringColor: 'ring-green-200'
    },
    {
        id: 'so',
        title: 'Luyện đề Sở',
        description: 'Đề thi từ sở giáo dục và đào tạo',
        iconPath: 'M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z',
        fillRule: 'evenodd',
        clipRule: 'evenodd',
        color: 'blue',
        bgGradient: 'from-blue-400 to-blue-600',
        borderColor: 'border-blue-200',
        hoverBorder: 'border-blue-500',
        ringColor: 'ring-blue-200'
    },
    {
        id: 'chuyen',
        title: 'Luyện đề Chuyên',
        description: 'Đề thi từ các trường THPT chuyên',
        iconPath: 'M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z',
        fillRule: 'evenodd',
        clipRule: 'evenodd',
        color: 'purple',
        bgGradient: 'from-purple-400 to-purple-600',
        borderColor: 'border-purple-200',
        hoverBorder: 'border-purple-500',
        ringColor: 'ring-purple-200'
    }
];

export const EXAM_TYPE_LABELS = {
    'giuaky1': 'Kiểm tra giữa kỳ 1',
    'cuoiky1': 'Thi cuối kỳ 1',
    'giuaky2': 'Kiểm tra giữa kỳ 2',
    'cuoiky2': 'Thi cuối kỳ 2',
    'tuyensinh': 'Tuyển sinh lớp 10',
    'totnghiep': 'Tốt nghiệp THPT'
};

export const EXAM_FEATURES = [
    { icon: '✓', text: 'Chấm điểm tự động' },
    { icon: '✓', text: 'Đáp án chi tiết' },
    { icon: '✓', text: 'Video hướng dẫn' }
];

export const PRACTICE_TIP = {
    title: '💡 Gợi ý luyện tập',
    description: 'Bắt đầu với đề Trường để làm quen, sau đó chuyển sang đề Phòng để nâng cao, tiếp tục với đề Sở để rèn luyện thêm, cuối cùng thử sức với đề Chuyên để đạt điểm cao nhất!'
};