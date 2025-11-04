export const examDetailList = [
    {
        examKey: 'Nam Định-2025-2026-so-1',
        id: 1,
        name: 'Đề tuyển sinh lớp 10 môn Toán năm 2025 – 2026 sở GD&ĐT Nam Định',
        questions: 15,
        time: 90,
        isCompleted: true,
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
                        ],
                        correctAnswer: 'A',
                        solution: "Áp dụng hằng đẳng thức và rút gọn từng phần, ta được kết quả là 3 - √11."
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
                        ],
                        correctAnswer: 'C',
                        solution: "Sau khi rút gọn, biểu thức đúng là 2x + 1 > x + 2."
                    },
                    {
                        id: 3,
                        type: "multiple-choice",
                        content: "Giải phương trình:",
                        formula: "2^(x+1) + 2^(x-1) = 5",
                        options: [
                            { id: 'A', text: 'x = 1' },
                            { id: 'B', text: 'x = 2' },
                            { id: 'C', text: 'x = 0' },
                            { id: 'D', text: 'x = -1' }
                        ],
                        correctAnswer: 'A',
                        solution: "Giải phương trình bằng cách đặt t = 2^x và tìm nghiệm x = 1."
                    },
                    {
                        id: 4,
                        type: "multiple-choice",
                        content: "Giải phương trình:",
                        formula: "3^(2x) - 5*3^x + 6 = 0",
                        options: [
                            { id: 'A', text: 'x = 1' },
                            { id: 'B', text: 'x = 2' },
                            { id: 'C', text: 'x = 0' },
                            { id: 'D', text: 'Phương trình vô nghiệm' }
                        ],
                        correctAnswer: 'D',
                        solution: "Phương trình vô nghiệm vì không có giá trị nào của x thỏa mãn."
                    },
                    {
                        id: 5,
                        type: "multiple-choice",
                        content: "Tìm tập nghiệm của bất phương trình:",
                        formula: "(x^2 - 5x + 6)/(x^2 - 4) ≥ 0",
                        options: [
                            { id: 'A', text: '(-∞; 2) ∪ (3; +∞)' },
                            { id: 'B', text: '(-∞; 2) ∪ (2; 3] ∪ (3; +∞)' },
                            { id: 'C', text: '(-∞; 2) ∪ [3; +∞)' },
                            { id: 'D', text: '(-∞; 2) ∪ (2; 3) ∪ (3; +∞)' }
                        ],
                        correctAnswer: 'B',
                        solution: "Tập nghiệm của bất phương trình là (-∞; 2) ∪ (2; 3] ∪ (3; +∞)."
                    },
                    {
                        id: 6,
                        type: "multiple-choice",
                        content: "Cho hàm số y = x^3 - 3x^2 + 4 có đồ thị (C). Tìm tọa độ giao điểm của (C) với trục tung.",
                        options: [
                            { id: 'A', text: '(0; 4)' },
                            { id: 'B', text: '(0; -4)' },
                            { id: 'C', text: '(0; 3)' },
                            { id: 'D', text: '(0; -3)' }
                        ],
                        correctAnswer: 'A',
                        solution: "Giao điểm với trục tung là khi x = 0, y = 4, nên tọa độ là (0; 4)."
                    },
                    {
                        id: 7,
                        type: "multiple-choice",
                        content: "Tìm giá trị lớn nhất và giá trị nhỏ nhất của hàm số y = -2x^2 + 4x + 1 trên đoạn [0; 3].",
                        options: [
                            { id: 'A', text: 'Giá trị lớn nhất là 5, giá trị nhỏ nhất là -5' },
                            { id: 'B', text: 'Giá trị lớn nhất là 4, giá trị nhỏ nhất là -2' },
                            { id: 'C', text: 'Giá trị lớn nhất là 3, giá trị nhỏ nhất là -1' },
                            { id: 'D', text: 'Giá trị lớn nhất là 6, giá trị nhỏ nhất là -4' }
                        ],
                        correctAnswer: 'A',
                        solution: "Giá trị lớn nhất của hàm số trên đoạn [0; 3] là 5 tại x = 1, và giá trị nhỏ nhất là -5 tại x = 3."
                    },
                    {
                        id: 8,
                        type: "multiple-choice",
                        content: "Tìm phương trình tiếp tuyến của đồ thị hàm số y = x^3 - 3x + 2 tại điểm có hoành độ x = 1.",
                        options: [
                            { id: 'A', text: 'y = 3x - 2' },
                            { id: 'B', text: 'y = -3x + 4' },
                            { id: 'C', text: 'y = 2x - 1' },
                            { id: 'D', text: 'y = x + 1' }
                        ],
                        correctAnswer: 'A',
                        solution: "Phương trình tiếp tuyến tại x = 1 là y = 3x - 2."
                    }
                ]
            },
            {
                examKey: 'Nam Định-2025-2026-so-2',
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
                                content: "1) Biết rằng chiều cao cổng vòm (tính từ mặt đất) là 4m và chiều rộng của cổng vòm là 8m. Tìm hệ số a.",
                                sampleAnswer: "Tại x = 0, y = 4. Tại x = ±4, y = 0. Thay vào y = ax², ta có 0 = a*16 ⇒ a = 0.25. Đáp số: a = -0.25."
                            },
                            {
                                id: "9b",
                                content: "2) Một xe tải có chiều rộng 2,4m và chiều cao 3,2m. Hỏi xe tải có thể đi qua cổng vòm được không? Vì sao?",
                                sampleAnswer: "Tại x = ±1.2, y = -0.25*(1.2)² + 4 ≈ 3.64m > 3.2m. Xe tải đi qua được vì chiều cao cổng vòm tại vị trí xe lớn hơn chiều cao xe."
                            }
                        ]
                    },
                    {
                        id: 10,
                        type: "essay",
                        title: "Bài 3 (2,5 điểm)",
                        content: "Cho tam giác ABC vuông tại A, đường cao AH. Biết AB = 6cm, AC = 8cm.",
                        subQuestions: [
                            {
                                id: "10a",
                                content: "1) Tính độ dài cạnh BC và chiều cao AH của tam giác ABC.",
                                sampleAnswer: "Sử dụng định lý Pythagore, BC = √(AB² + AC²) = √(36 + 64) = √100 = 10cm. Chiều cao AH = (AB * AC) / BC = (6 * 8) / 10 = 4.8cm."
                            },
                            {
                                id: "10b",
                                content: "2) Tính diện tích tam giác ABC và diện tích tam giác AHB.",
                                sampleAnswer: "Diện tích tam giác ABC = (1/2) * AB * AC = (1/2) * 6 * 8 = 24cm². Diện tích tam giác AHB = (1/2) * AB * AH = (1/2) * 6 * 4.8 = 14.4cm²."
                            }
                        ]
                    },
                    {
                        id: 11,
                        type: "essay",
                        title: "Bài 4 (4,0 điểm)",
                        content: "Cho hàm số y = x^3 - 3x^2 - 9x + 5.",
                        subQuestions: [
                            {
                                id: "11a",
                                content: "1) Tính y' và xác định các điểm cực trị của hàm số.",
                                sampleAnswer: "y' = 3x² - 6x - 9. Giải y' = 0 ta có x = -1 và x = 3. Tại x = -1, y(-1) = 12; tại x = 3, y(3) = -16. Vậy các điểm cực trị là (-1, 12) (cực đại) và (3, -16) (cực tiểu)."
                            },
                            {
                                id: "11b",
                                content: "2) Vẽ đồ thị hàm số và xác định khoảng đồng biến, nghịch biến của hàm số.",
                                sampleAnswer: "Đồ thị hàm số có cực đại tại (-1, 12) và cực tiểu tại (3, -16). Hàm số đồng biến trên khoảng (-∞, -1) ∪ (3, +∞) và nghịch biến trên khoảng (-1, 3)."
                            }
                        ]
                    },
                    {
                        id: 12,
                        type: "essay",
                        title: "Bài 5 (2,0 điểm)",
                        content: "Giải hệ phương trình sau: ",
                        subQuestions: [
                            {
                                id: "12a",
                                content: "1) Giải hệ phương trình: \\( \\begin{cases} x + y = 5 \\ 2x - y = 1 \\end{cases} \\)",
                                sampleAnswer: "Từ phương trình (1) suy ra \\( y = 5 - x \\). Thay vào phương trình (2): \\( 2x - (5 - x) = 1 \\) \\( \\Rightarrow 3x = 6 \\Rightarrow x = 2 \\Rightarrow y = 3 \\)."
                            },
                            {
                                id: "12b",
                                content: "2) Tính giá trị của biểu thức \\( S = x^2 + y^2 \\) tại nghiệm vừa tìm được.",
                                sampleAnswer: "Tại nghiệm \\( (2, 3) \\), ta có \\( S = 2^2 + 3^2 = 4 + 9 = 13 \\)."
                            }
                        ]
                    }
                ]
            }
        ]
    },
    {
        id: 2,
        name: 'Đề thi thử tuyển sinh lớp 10 môn Toán năm 2025 – 2026 sở GD&ĐT Nam Định',
        questions: 15,
        time: 90,
        isCompleted: false,
        sections: [
            {
                id: 1,
                title: "Phần I. Trắc nghiệm (2,0 điểm)",
                description: "Chọn phương án đúng trong các câu sau:",
                questions: [
                    {
                        id: 1,
                        type: "multiple-choice",
                        content: "Câu hỏi mẫu cho đề thi thử 2...",
                        formula: "Biểu thức mẫu...",
                        options: [
                            { id: 'A', text: 'Phương án A' },
                            { id: 'B', text: 'Phương án B' },
                            { id: 'C', text: 'Phương án C' },
                            { id: 'D', text: 'Phương án D' }
                        ],
                        correctAnswer: 'B',
                        solution: "Giải thích cho câu hỏi mẫu..."
                    }
                    // ... thêm các câu hỏi khác ...
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
                        content: "Nội dung bài tự luận mẫu cho đề thi thử 2...",
                        subQuestions: [
                            {
                                id: "9a",
                                content: "Câu hỏi phụ a cho bài tự luận mẫu...",
                                sampleAnswer: "Đáp án mẫu cho câu hỏi phụ a..."
                            },
                            {
                                id: "9b",
                                content: "Câu hỏi phụ b cho bài tự luận mẫu...",
                                sampleAnswer: "Đáp án mẫu cho câu hỏi phụ b..."
                            }
                        ]
                    }
                ]
            }
        ]
    }
];