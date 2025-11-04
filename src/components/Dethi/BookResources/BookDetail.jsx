import React, { useState, useMemo } from 'react';

export default function BookDetail({ book, onBack, onSelectChapter }) {
    const [showPdf, setShowPdf] = useState(false);

    const totalLessons = useMemo(
        () => (book?.chapters || []).reduce((s, c) => s + ((c.lessons && c.lessons.length) || 0), 0),
        [book]
    );

    return (
        <div className="min-h-screen bg-gray-50 px-4 sm:px-6 py-10">
            <div className="max-w-6xl mx-auto">
                <button
                    onClick={onBack}
                    className="text-blue-600 hover:underline mb-6 inline-flex items-center gap-2 text-sm font-medium"
                    aria-label="Quay lại danh sách sách"
                >
                    ← Quay lại danh sách sách
                </button>

                <div className="bg-white rounded-3xl shadow-xl border border-gray-100 overflow-hidden p-6 md:p-10">
                    <div className="grid grid-cols-1 md:grid-cols-[260px_1fr] gap-10">
                        {/* Left: Cover */}
                        <div className="flex justify-center md:justify-start">
                            <div className="w-[220px]">
                                <div className="rounded-2xl overflow-hidden shadow-xl border border-gray-100">
                                    <img
                                        src={book?.cover || '/images/books/default-cover.jpg'}
                                        alt={book?.title}
                                        className="w-full h-[320px] object-cover"
                                    />
                                </div>

                                <div className="mt-4 text-center md:text-left space-y-1.5">
                                    <div className="text-gray-800 font-semibold text-lg leading-snug">
                                        {book?.title}
                                    </div>
                                    <div className="text-sm text-gray-500">{book?.publisher} • {book?.year}</div>

                                    <a
                                        href={book?.downloads?.pdf}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="block w-full mt-3 bg-blue-600 text-white text-center py-2.5 rounded-xl font-medium hover:bg-blue-700 transition"
                                    >
                                        Tải PDF
                                    </a>
                                </div>
                            </div>
                        </div>

                        {/* Right: info & chapters */}
                        <div>
                            <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
                                <div>
                                    <h1 className="text-2xl md:text-3xl font-extrabold text-gray-900 tracking-tight leading-snug">
                                        {book?.title}
                                    </h1>
                                    <p className="text-sm text-gray-500 mt-1">
                                        {book?.publisher} • Lớp {book?.grade}
                                    </p>
                                </div>

                                <button
                                    onClick={() => setShowPdf(v => !v)}
                                    className="inline-flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-xl text-gray-700 bg-white hover:bg-gray-50 hover:shadow-sm transition text-sm font-medium"
                                >
                                    {showPdf ? 'Đóng xem nhanh' : 'Xem nhanh'}
                                </button>
                            </div>

                            <div className="mt-8">
                                <div className="rounded-2xl border-2 border-gray-200 bg-white p-6 shadow-sm">
                                    <div className="flex items-center justify-between mb-5">
                                        <h2 className="text-xl font-semibold text-gray-900">
                                            Danh sách chương
                                        </h2>
                                        <div className="text-sm text-gray-500">
                                            {(book?.chapters?.length || 0)} chương • {totalLessons} bài
                                        </div>
                                    </div>

                                    <div className="space-y-4">
                                        {(book?.chapters || []).map((chap) => (
                                            <button
                                                key={chap.id}
                                                onClick={() => onSelectChapter(chap)}
                                                className="w-full text-left flex items-center justify-between p-5 rounded-xl border border-gray-300 bg-white hover:bg-blue-50 hover:border-blue-400 transition shadow-sm hover:shadow-md"
                                                aria-label={`Mở ${chap.title}`}
                                            >
                                                <div>
                                                    <div className="text-lg font-semibold text-gray-900">
                                                        {chap.title}
                                                    </div>
                                                    <div className="text-sm text-gray-500 mt-1">
                                                        {(chap.lessons?.length ?? 0)} bài học
                                                    </div>
                                                </div>

                                                <div className="flex items-center gap-2 text-blue-600 font-medium">
                                                    <span>Xem</span>
                                                    <svg
                                                        className="w-5 h-5 text-blue-500"
                                                        viewBox="0 0 24 24"
                                                        fill="none"
                                                        stroke="currentColor"
                                                    >
                                                        <path
                                                            strokeLinecap="round"
                                                            strokeLinejoin="round"
                                                            strokeWidth="2"
                                                            d="M9 5l7 7-7 7"
                                                        />
                                                    </svg>
                                                </div>
                                            </button>
                                        ))}
                                    </div>
                                </div>

                                {showPdf && book?.downloads?.pdf && (
                                    <div className="mt-6 border border-gray-200 rounded-2xl overflow-hidden shadow-md">
                                        <iframe
                                            src={`https://mozilla.github.io/pdf.js/web/viewer.html?file=${encodeURIComponent(book.downloads.pdf)}`}
                                            title="Xem toàn bộ sách"
                                            className="w-full h-[70vh]"
                                        />
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
