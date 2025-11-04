export const examData = {
    "Nam Định": {
        "2025-2026": {
            id: "nd_2025_2026",
            title: "Bộ đề luyện thi tuyển sinh vào lớp 10 tỉnh Nam Định năm 2025 - 2026",
            province: "Nam Định",
            year: "2025-2026",
            type: "tuyensinh",
            grade: 9,
            // Đề Sở (đề cơ bản từ Sở GD&ĐT)
            soExams: [
                { id: 1, name: 'Đề tuyển sinh lớp 10 môn Toán năm 2025 – 2026 sở GD&ĐT Nam Định', questions: 15, time: 90, isCompleted: true, solutionVideoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ' },
                { id: 2, name: 'Đề thi thử tuyển sinh lớp 10 môn Toán năm 2025 – 2026 sở GD&ĐT Nam Định', questions: 15, time: 90, isCompleted: false, solutionVideoUrl: null },
                { id: 3, name: 'Đề minh hoạ thi tuyển sinh lớp 10 môn Toán năm 2025 – 2026 sở GD&ĐT Nam Định', questions: 15, time: 90, isCompleted: false, solutionVideoUrl: null },
                { id: 4, name: 'Đề tham khảo thi tuyển sinh lớp 10 môn Toán năm 2025 – 2026 sở GD&ĐT Nam Định', questions: 15, time: 90, isCompleted: false, solutionVideoUrl: null },
            ],
            // Đề Phòng (đề từ các phòng GD&ĐT cấp huyện)
            phongExams: [
                { id: 1, name: 'Đề thi thử tuyển sinh lớp 10 môn Toán năm 2025 – 2026 huyện Giao Thủy - Nam Định', questions: 16, time: 90, isCompleted: true },
                { id: 2, name: 'Đề thi thử toán vào 10 lần 1 năm 2025 – 2026 phòng GD&ĐT Trực Ninh – Nam Định', questions: 16, time: 90, isCompleted: false },
                { id: 3, name: 'Đề thi thử toán vào 10 lần 2 năm 2025 – 2026 phòng GD&ĐT Xuân Trường – Nam Định', questions: 15, time: 90, isCompleted: false },
                { id: 4, name: 'Đề thi thử toán vào 10 năm 2025 – 2026 phòng GD&ĐT Ý Yên – Nam Định', questions: 16, time: 90, isCompleted: false },
            ],
            // Đề Chuyên (đề nâng cao từ trường chuyên)
            chuyenExams: [
                { id: 1, name: 'Đề tham khảo thi tuyển sinh lớp 10 chuyên Toán năm 2025 – 2026 sở GD&ĐT Nam Định', questions: 25, time: 150, isCompleted: false },
                { id: 2, name: 'Đề thi thử chuyên Toán vào 10 năm 2025 – 2026 trường THPT chuyên Lê Hồng Phong - Nam Định', questions: 24, time: 150, isCompleted: false },
                { id: 3, name: 'Đề thi tuyển sinh lớp 10 chuyên Toán năm 2025 – 2026 sở GD&ĐT Nam Định', questions: 25, time: 180, isCompleted: false },
            ],
        },

        // Bộ đề giữa kỳ 1
        "gk1-2025-2026": {
            id: "nd_gk1_2025_2026",
            title: "Bộ đề kiểm tra giữa kỳ 1 lớp 10 tỉnh Nam Định năm 2025 - 2026",
            province: "Nam Định",
            year: "gk1-2025-2026",
            type: "giuaky1",
            grade: 9,
            truongExams: [
                { id: 1, name: 'Đề kiểm tra giữa kỳ 1 môn Toán lớp 10 năm 2025 – 2026 trường THPT Trần Hưng Đạo - Nam Định', questions: 20, time: 45, isCompleted: false },
                { id: 2, name: 'Đề kiểm tra giữa kỳ 1 môn Toán lớp 10 năm 2025 – 2026 trường THPT Nguyễn Huệ - Nam Định', questions: 18, time: 45, isCompleted: false },
                { id: 3, name: 'Đề kiểm tra giữa kỳ 1 môn Toán lớp 10 năm 2025 – 2026 trường THPT Nguyễn Đức Cảnh - Nam Định', questions: 22, time: 45, isCompleted: false },
            ],
            soExams: [
                { id: 1, name: 'Đề thi giữa kỳ 1 môn Toán lớp 10 năm 2025 – 2026 sở GD&ĐT Nam Định', questions: 20, time: 45, isCompleted: false, solutionVideoUrl: null },
                { id: 2, name: 'Đề kiểm tra giữa kỳ 1 môn Toán lớp 10 năm 2025 – 2026 sở GD&ĐT Nam Định (Đề 2)', questions: 18, time: 45, isCompleted: true, solutionVideoUrl: 'https://www.youtube.com/embed/example1' },
                { id: 3, name: 'Đề thi giữa học kỳ 1 môn Toán lớp 10 năm 2025 – 2026 sở GD&ĐT Nam Định (Đề 3)', questions: 22, time: 45, isCompleted: false, solutionVideoUrl: null },
            ],
            phongExams: [
                { id: 1, name: 'Đề thi giữa kỳ 1 môn Toán lớp 10 năm 2025 – 2026 phòng GD&ĐT Giao Thủy - Nam Định', questions: 19, time: 45, isCompleted: false },
                { id: 2, name: 'Đề kiểm tra giữa kỳ 1 môn Toán lớp 10 năm 2025 – 2026 phòng GD&ĐT Trực Ninh – Nam Định', questions: 20, time: 45, isCompleted: false },
                { id: 3, name: 'Đề thi giữa kỳ 1 môn Toán lớp 10 năm 2025 – 2026 phòng GD&ĐT Xuân Trường – Nam Định', questions: 18, time: 45, isCompleted: false },
            ],
            chuyenExams: [
                { id: 1, name: 'Đề thi giữa kỳ 1 môn Toán lớp 10 năm 2025 – 2026 trường THPT chuyên Lê Hồng Phong - Nam Định', questions: 25, time: 45, isCompleted: false },
                { id: 2, name: 'Đề kiểm tra giữa kỳ 1 môn Toán lớp 10 năm 2025 – 2026 trường THPT chuyên Lê Hồng Phong - Nam Định (Đề 2)', questions: 24, time: 45, isCompleted: false },
            ]
        },

        // Bộ đề cuối kỳ 1
        "ck1-2025-2026": {
            id: "nd_ck1_2025_2026",
            title: "Bộ đề thi cuối kỳ 1 lớp 10 tỉnh Nam Định năm 2025 - 2026",
            province: "Nam Định",
            year: "ck1-2025-2026",
            type: "cuoiky1",
            grade: 9,
            soExams: [
                { id: 1, name: 'Đề thi cuối kỳ 1 môn Toán lớp 10 năm 2025 – 2026 sở GD&ĐT Nam Định', questions: 25, time: 90, isCompleted: false, solutionVideoUrl: null },
                { id: 2, name: 'Đề thi học kỳ 1 môn Toán lớp 10 năm 2025 – 2026 sở GD&ĐT Nam Định (Đề 2)', questions: 24, time: 90, isCompleted: true, solutionVideoUrl: 'https://www.youtube.com/embed/example2' },
                { id: 3, name: 'Đề thi học kỳ 1 môn Toán lớp 10 năm 2025 – 2026 sở GD&ĐT Nam Định (Đề 3)', questions: 26, time: 90, isCompleted: false, solutionVideoUrl: null },
            ],
            phongExams: [
                { id: 1, name: 'Đề thi cuối kỳ 1 môn Toán lớp 10 năm 2025 – 2026 phòng GD&ĐT Giao Thủy - Nam Định', questions: 24, time: 90, isCompleted: false },
                { id: 2, name: 'Đề thi học kỳ 1 môn Toán lớp 10 năm 2025 – 2026 phòng GD&ĐT Trực Ninh – Nam Định', questions: 25, time: 90, isCompleted: false },
                { id: 3, name: 'Đề thi cuối kỳ 1 môn Toán lớp 10 năm 2025 – 2026 phòng GD&ĐT Xuân Trường – Nam Định', questions: 23, time: 90, isCompleted: false },
            ],
            chuyenExams: [
                { id: 1, name: 'Đề thi cuối kỳ 1 môn Toán lớp 10 năm 2025 – 2026 trường THPT chuyên Lê Hồng Phong - Nam Định', questions: 28, time: 90, isCompleted: false },
                { id: 2, name: 'Đề thi học kỳ 1 môn Toán lớp 10 năm 2025 – 2026 trường THPT chuyên Lê Hồng Phong - Nam Định (Đề 2)', questions: 27, time: 90, isCompleted: false },
            ]
        },

        // Bộ đề giữa kỳ 2
        "gk2-2025-2026": {
            id: "nd_gk2_2025_2026",
            title: "Bộ đề kiểm tra giữa kỳ 2 lớp 10 tỉnh Nam Định năm 2025 - 2026",
            province: "Nam Định",
            year: "gk2-2025-2026",
            type: "giuaky2",
            grade: 9,
            soExams: [
                { id: 1, name: 'Đề thi giữa kỳ 2 môn Toán lớp 10 năm 2025 – 2026 sở GD&ĐT Nam Định', questions: 20, time: 45, isCompleted: false, solutionVideoUrl: null },
                { id: 2, name: 'Đề kiểm tra giữa kỳ 2 môn Toán lớp 10 năm 2025 – 2026 sở GD&ĐT Nam Định (Đề 2)', questions: 18, time: 45, isCompleted: false, solutionVideoUrl: null },
                { id: 3, name: 'Đề thi giữa học kỳ 2 môn Toán lớp 10 năm 2025 – 2026 sở GD&ĐT Nam Định (Đề 3)', questions: 22, time: 45, isCompleted: true, solutionVideoUrl: 'https://www.youtube.com/embed/example3' },
            ],
            phongExams: [
                { id: 1, name: 'Đề thi giữa kỳ 2 môn Toán lớp 10 năm 2025 – 2026 phòng GD&ĐT Giao Thủy - Nam Định', questions: 19, time: 45, isCompleted: false },
                { id: 2, name: 'Đề kiểm tra giữa kỳ 2 môn Toán lớp 10 năm 2025 – 2026 phòng GD&ĐT Trực Ninh – Nam Định', questions: 20, time: 45, isCompleted: false },
                { id: 3, name: 'Đề thi giữa kỳ 2 môn Toán lớp 10 năm 2025 – 2026 phòng GD&ĐT Xuân Trường – Nam Định', questions: 18, time: 45, isCompleted: false },
            ],
            chuyenExams: [
                { id: 1, name: 'Đề thi giữa kỳ 2 môn Toán lớp 10 năm 2025 – 2026 trường THPT chuyên Lê Hồng Phong - Nam Định', questions: 25, time: 45, isCompleted: false },
                { id: 2, name: 'Đề kiểm tra giữa kỳ 2 môn Toán lớp 10 năm 2025 – 2026 trường THPT chuyên Lê Hồng Phong - Nam Định (Đề 2)', questions: 24, time: 45, isCompleted: false },
            ]
        },

        // Bộ đề cuối kỳ 2
        "ck2-2025-2026": {
            id: "nd_ck2_2025_2026",
            title: "Bộ đề thi cuối kỳ 2 lớp 10 tỉnh Nam Định năm 2025 - 2026",
            province: "Nam Định",
            year: "ck2-2025-2026",
            type: "cuoiky2",
            grade: 9,
            soExams: [
                { id: 1, name: 'Đề thi cuối kỳ 2 môn Toán lớp 10 năm 2025 – 2026 sở GD&ĐT Nam Định', questions: 25, time: 90, isCompleted: false, solutionVideoUrl: null },
                { id: 2, name: 'Đề thi học kỳ 2 môn Toán lớp 10 năm 2025 – 2026 sở GD&ĐT Nam Định (Đề 2)', questions: 24, time: 90, isCompleted: false, solutionVideoUrl: null },
                { id: 3, name: 'Đề thi cuối năm môn Toán lớp 10 năm 2025 – 2026 sở GD&ĐT Nam Định', questions: 26, time: 90, isCompleted: true, solutionVideoUrl: 'https://www.youtube.com/embed/example4' },
            ],
            phongExams: [
                { id: 1, name: 'Đề thi cuối kỳ 2 môn Toán lớp 10 năm 2025 – 2026 phòng GD&ĐT Giao Thủy - Nam Định', questions: 24, time: 90, isCompleted: false },
                { id: 2, name: 'Đề thi học kỳ 2 môn Toán lớp 10 năm 2025 – 2026 phòng GD&ĐT Trực Ninh – Nam Định', questions: 25, time: 90, isCompleted: false },
                { id: 3, name: 'Đề thi cuối năm môn Toán lớp 10 năm 2025 – 2026 phòng GD&ĐT Xuân Trường – Nam Định', questions: 28, time: 90, isCompleted: false },
            ],
            chuyenExams: [
                { id: 1, name: 'Đề thi cuối kỳ 2 môn Toán lớp 10 năm 2025 – 2026 trường THPT chuyên Lê Hồng Phong - Nam Định', questions: 28, time: 90, isCompleted: false },
                { id: 2, name: 'Đề thi học kỳ 2 môn Toán lớp 10 năm 2025 – 2026 trường THPT chuyên Lê Hồng Phong - Nam Định (Đề 2)', questions: 30, time: 90, isCompleted: false },
            ]
        },

        "2024-2025": {
            id: "nd_2024_2025",
            title: "Bộ đề luyện thi tuyển sinh vào lớp 10 tỉnh Nam Định năm 2024 - 2025",
            province: "Nam Định",
            year: "2024-2025",
            type: "tuyensinh",
            grade: 9,
            soExams: [
                { id: 1, name: 'Đề tuyển sinh lớp 10 môn Toán năm 2024 – 2025 sở GD&ĐT Nam Định', questions: 15, time: 90, isCompleted: true },
                { id: 2, name: 'Đề thi thử tuyển sinh lớp 10 môn Toán lần 1 năm 2024 – 2025 sở GD&ĐT Nam Định', questions: 15, time: 90, isCompleted: false },
                { id: 3, name: 'Đề minh hoạ thi tuyển sinh lớp 10 môn Toán năm 2024 – 2025 sở GD&ĐT Nam Định', questions: 15, time: 90, isCompleted: false },
            ],
            phongExams: [
                { id: 1, name: 'Đề thi thử tuyển sinh lớp 10 môn Toán lần 2 năm 2024 – 2025 huyện Giao Thủy - Nam Định', questions: 16, time: 90, isCompleted: false },
                { id: 2, name: 'Đề thi thử toán vào 10 năm 2024 – 2025 phòng GD&ĐT Xuân Trường – Nam Định', questions: 16, time: 90, isCompleted: false },
            ],
            chuyenExams: [
                { id: 1, name: 'Đề tham khảo thi tuyển sinh lớp 10 chuyên Toán năm 2024 – 2025 sở GD&ĐT Nam Định', questions: 25, time: 150, isCompleted: false },
                { id: 2, name: 'Đề thi chính thức chuyên Toán vào 10 năm 2024 – 2025 sở GD&ĐT Nam Định', questions: 24, time: 150, isCompleted: false },
            ]
        },
        "2023-2024": {
            id: "nd_2023_2024",
            title: "Bộ đề luyện thi tuyển sinh vào lớp 10 tỉnh Nam Định năm 2023 - 2024",
            province: "Nam Định",
            year: "2023-2024",
            type: "tuyensinh",
            grade: 9,
            soExams: [
                { id: 1, name: 'Đề tuyển sinh lớp 10 môn Toán năm 2023 – 2024 sở GD&ĐT Nam Định', questions: 15, time: 90, isCompleted: false },
                { id: 2, name: 'Đề thi thử tuyển sinh lớp 10 môn Toán năm 2023 – 2024 sở GD&ĐT Nam Định', questions: 15, time: 90, isCompleted: false },
                { id: 3, name: 'Đề minh hoạ thi tuyển sinh lớp 10 môn Toán năm 2023 – 2024 sở GD&ĐT Nam Định', questions: 15, time: 90, isCompleted: false },
            ],
            phongExams: [
                { id: 1, name: 'Đề thi thử tuyển sinh lớp 10 môn Toán năm 2023 – 2024 huyện Ý Yên - Nam Định', questions: 16, time: 90, isCompleted: false },
            ],
            chuyenExams: [
                { id: 1, name: 'Đề tham khảo thi tuyển sinh lớp 10 chuyên Toán năm 2023 – 2024 sở GD&ĐT Nam Định', questions: 25, time: 150, isCompleted: false },
            ]
        }
    },

    "Hà Nam": {
        "2025-2026": {
            id: "hn_2025_2026",
            title: "Bộ đề luyện thi tuyển sinh vào lớp 10 tỉnh Hà Nam năm 2025 - 2026",
            province: "Hà Nam",
            year: "2025-2026",
            type: "tuyensinh",
            grade: 9,
            soExams: [
                { id: 1, name: 'Đề tuyển sinh lớp 10 môn Toán năm 2025 – 2026 sở GD&ĐT Hà Nam', questions: 15, time: 90, isCompleted: false },
                { id: 2, name: 'Đề thi thử tuyển sinh lớp 10 môn Toán năm 2025 – 2026 sở GD&ĐT Hà Nam', questions: 15, time: 90, isCompleted: false },
                { id: 3, name: 'Đề minh hoạ thi tuyển sinh lớp 10 môn Toán năm 2025 – 2026 sở GD&ĐT Hà Nam', questions: 15, time: 90, isCompleted: false },
            ],
            phongExams: [
                { id: 1, name: 'Đề thi thử tuyển sinh lớp 10 môn Toán năm 2025 – 2026 huyện Duy Tiên - Hà Nam', questions: 16, time: 90, isCompleted: false },
                { id: 2, name: 'Đề thi thử toán vào 10 lần 1 năm 2025 – 2026 phòng GD&ĐT Bình Lục – Hà Nam', questions: 16, time: 90, isCompleted: false },
            ],
            chuyenExams: [
                { id: 1, name: 'Đề tham khảo thi tuyển sinh lớp 10 chuyên Toán năm 2025 – 2026 sở GD&ĐT Hà Nam', questions: 25, time: 150, isCompleted: false },
                { id: 2, name: 'Đề thi thử chuyên Toán vào 10 năm 2025 – 2026 trường THPT chuyên Nguyễn Trãi - Hà Nam', questions: 24, time: 150, isCompleted: false },
            ]
        },
        "2024-2025": {
            id: "hn_2024_2025",
            title: "Bộ đề luyện thi tuyển sinh vào lớp 10 tỉnh Hà Nam năm 2024 - 2025",
            province: "Hà Nam",
            year: "2024-2025",
            type: "tuyensinh",
            grade: 9,
            soExams: [
                { id: 1, name: 'Đề tuyển sinh lớp 10 môn Toán năm 2024 – 2025 sở GD&ĐT Hà Nam', questions: 15, time: 90, isCompleted: false },
                { id: 2, name: 'Đề thi thử tuyển sinh lớp 10 môn Toán lần 1 năm 2024 – 2025 sở GD&ĐT Hà Nam', questions: 15, time: 90, isCompleted: false },
            ],
            phongExams: [
                { id: 1, name: 'Đề thi thử tuyển sinh lớp 10 môn Toán lần 2 năm 2024 – 2025 huyện Thanh Liêm - Hà Nam', questions: 16, time: 90, isCompleted: false },
                { id: 2, name: 'Đề minh hoạ thi tuyển sinh lớp 10 môn Toán năm 2024 – 2025 phòng GD&ĐT Duy Tiên - Hà Nam', questions: 15, time: 90, isCompleted: false },
            ],
            chuyenExams: [
                { id: 1, name: 'Đề tham khảo thi tuyển sinh lớp 10 chuyên Toán năm 2024 – 2025 sở GD&ĐT Hà Nam', questions: 25, time: 150, isCompleted: false },
            ]
        },
        "2023-2024": {
            id: "hn_2023_2024",
            title: "Bộ đề luyện thi tuyển sinh vào lớp 10 tỉnh Hà Nam năm 2023 - 2024",
            province: "Hà Nam",
            year: "2023-2024",
            type: "tuyensinh",
            grade: 9,
            soExams: [
                { id: 1, name: 'Đề tuyển sinh lớp 10 môn Toán năm 2023 – 2024 sở GD&ĐT Hà Nam', questions: 15, time: 90, isCompleted: false },
                { id: 2, name: 'Đề thi thử tuyển sinh lớp 10 môn Toán năm 2023 – 2024 sở GD&ĐT Hà Nam', questions: 15, time: 90, isCompleted: false },
            ],
            phongExams: [
                { id: 1, name: 'Đề thi thử tuyển sinh lớp 10 môn Toán năm 2023 – 2024 huyện Thanh Liêm - Hà Nam', questions: 16, time: 90, isCompleted: false },
            ],
            chuyenExams: [
                { id: 1, name: 'Đề tham khảo thi tuyển sinh lớp 10 chuyên Toán năm 2023 – 2024 sở GD&ĐT Hà Nam', questions: 25, time: 150, isCompleted: false },
            ]
        }
    },

    "Ninh Bình": {
        "2025-2026": {
            id: "nb_2025_2026",
            title: "Bộ đề luyện thi tuyển sinh vào lớp 10 tỉnh Ninh Bình năm 2025 - 2026",
            province: "Ninh Bình",
            year: "2025-2026",
            type: "tuyensinh",
            grade: 9,
            soExams: [
                { id: 1, name: 'Đề tuyển sinh lớp 10 môn Toán năm 2025 – 2026 sở GD&ĐT Ninh Bình', questions: 15, time: 90, isCompleted: false },
                { id: 2, name: 'Đề thi thử tuyển sinh lớp 10 môn Toán năm 2025 – 2026 sở GD&ĐT Ninh Bình', questions: 15, time: 90, isCompleted: false },
                { id: 3, name: 'Đề minh hoạ thi tuyển sinh lớp 10 môn Toán năm 2025 – 2026 sở GD&ĐT Ninh Bình', questions: 15, time: 90, isCompleted: false },
            ],
            phongExams: [
                { id: 1, name: 'Đề thi thử tuyển sinh lớp 10 môn Toán năm 2025 – 2026 huyện Tam Điệp - Ninh Bình', questions: 16, time: 90, isCompleted: false },
                { id: 2, name: 'Đề thi thử toán vào 10 lần 1 năm 2025 – 2026 phòng GD&ĐT Nho Quan – Ninh Bình', questions: 16, time: 90, isCompleted: false },
            ],
            chuyenExams: [
                { id: 1, name: 'Đề tham khảo thi tuyển sinh lớp 10 chuyên Toán năm 2025 – 2026 sở GD&ĐT Ninh Bình', questions: 25, time: 150, isCompleted: false },
                { id: 2, name: 'Đề thi thử chuyên Toán vào 10 năm 2025 – 2026 trường THPT chuyên Lương Văn Tụy - Ninh Bình', questions: 24, time: 150, isCompleted: false },
            ]
        },
        "2024-2025": {
            id: "nb_2024_2025",
            title: "Bộ đề luyện thi tuyển sinh vào lớp 10 tỉnh Ninh Bình năm 2024 - 2025",
            province: "Ninh Bình",
            year: "2024-2025",
            type: "tuyensinh",
            grade: 9,
            soExams: [
                { id: 1, name: 'Đề tuyển sinh lớp 10 môn Toán năm 2024 – 2025 sở GD&ĐT Ninh Bình', questions: 15, time: 90, isCompleted: false },
                { id: 2, name: 'Đề thi thử tuyển sinh lớp 10 môn Toán lần 1 năm 2024 – 2025 sở GD&ĐT Ninh Bình', questions: 15, time: 90, isCompleted: false },
            ],
            phongExams: [
                { id: 1, name: 'Đề thi thử tuyển sinh lớp 10 môn Toán lần 2 năm 2024 – 2025 huyện Gia Viễn - Ninh Bình', questions: 16, time: 90, isCompleted: false },
                { id: 2, name: 'Đề minh hoạ thi tuyển sinh lớp 10 môn Toán năm 2024 – 2025 phòng GD&ĐT Tam Điệp - Ninh Bình', questions: 15, time: 90, isCompleted: false },
            ],
            chuyenExams: [
                { id: 1, name: 'Đề tham khảo thi tuyển sinh lớp 10 chuyên Toán năm 2024 – 2025 sở GD&ĐT Ninh Bình', questions: 25, time: 150, isCompleted: false },
            ]
        },
        "2023-2024": {
            id: "nb_2023_2024",
            title: "Bộ đề luyện thi tuyển sinh vào lớp 10 tỉnh Ninh Bình năm 2023 - 2024",
            province: "Ninh Bình",
            year: "2023-2024",
            type: "tuyensinh",
            grade: 9,
            soExams: [
                { id: 1, name: 'Đề tuyển sinh lớp 10 môn Toán năm 2023 – 2024 sở GD&ĐT Ninh Bình', questions: 15, time: 90, isCompleted: false },
                { id: 2, name: 'Đề thi thử tuyển sinh lớp 10 môn Toán năm 2023 – 2024 sở GD&ĐT Ninh Bình', questions: 15, time: 90, isCompleted: false },
            ],
            phongExams: [
                { id: 1, name: 'Đề thi thử tuyển sinh lớp 10 môn Toán năm 2023 – 2024 huyện Gia Viễn - Ninh Bình', questions: 16, time: 90, isCompleted: false },
            ],
            chuyenExams: [
                { id: 1, name: 'Đề tham khảo thi tuyển sinh lớp 10 chuyên Toán năm 2023 – 2024 sở GD&ĐT Ninh Bình', questions: 25, time: 150, isCompleted: false },
            ]
        }
    }
};

// Helper functions to get data
export const getProvinces = () => Object.keys(examData);

export const getYearsByProvince = (province) => {
    return examData[province] ? Object.keys(examData[province]) : [];
};

export const getExamSetByProvinceAndYear = (province, year) => {
    return examData[province]?.[year] || null;
};

export const getAllExamSetsByProvince = (province) => {
    if (!examData[province]) return [];
    return Object.values(examData[province]);
};

// Helper function to get exams by type
export const getExamsByType = (province, year, examType) => {
    const examSet = getExamSetByProvinceAndYear(province, year);
    if (!examSet) return [];

    switch (examType) {
        case 'so':
            return examSet.soExams || [];
        case 'phong':
            return examSet.phongExams || [];
        case 'chuyen':
            return examSet.chuyenExams || [];
        default:
            return [];
    }
};

// Helper function to get all exams by type across all years for a province
export const getAllExamsByTypeAndProvince = (province, examType) => {
    if (!examData[province]) return [];

    const allExams = [];
    Object.entries(examData[province]).forEach(([year, examSet]) => {
        const exams = getExamsByType(province, year, examType);
        exams.forEach(exam => {
            allExams.push({
                ...exam,
                year: year,
                examSetId: examSet.id,
                examSetTitle: examSet.title
            });
        });
    });

    return allExams;
};

export const getAllExamSets = () => {
    const allSets = [];
    Object.entries(examData).forEach(([province, years]) => {
        Object.entries(years).forEach(([year, examSet]) => {
            allSets.push(examSet);
        });
    });
    return allSets;
};

// Get exam sets for default display (Nam Định only)
export const getDefaultExamSets = () => {
    return Object.values(examData["Nam Định"]);
};