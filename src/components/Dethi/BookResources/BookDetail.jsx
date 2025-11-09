import React from 'react';

export default function BookDetail({ book, onBack, onSelectChapter }) {
    return (
        <div>
            <button
                className="mb-4 px-4 py-2 text-blue-600 hover:text-blue-800 hover:bg-blue-50 rounded-lg transition-colors flex items-center gap-2"
                onClick={onBack}
            >
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                </svg>
                Quay lại danh sách sách
            </button>

            <div className="flex flex-col md:flex-row gap-8">
                <div className="flex-shrink-0">
                    <img
                        src={book.cover}
                        alt={book.title}
                        className="w-48 h-64 object-cover rounded-xl shadow-lg"
                    />
                </div>

                <div className="flex-1">
                    <h2 className="text-3xl font-bold mb-3 text-gray-900">{book.title}</h2>
                    <p className="text-gray-600 mb-4 text-lg">
                        {book.publisher} • {book.year} • Lớp {book.grade}
                    </p>

                    {book.downloads?.pdf && (
                        <a
                            href={book.downloads.pdf}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 mb-6 px-5 py-2.5 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors shadow-sm font-medium"
                        >
                            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                            </svg>
                            Tải PDF đầy đủ
                        </a>
                    )}

                    <h3 className="font-bold text-xl mt-6 mb-4 text-gray-900">Danh sách chương</h3>
                    <ul className="space-y-3">
                        {book.chapters.map(chapter => (
                            <li
                                key={chapter.id}
                                className="border border-gray-200 rounded-lg px-5 py-4 hover:bg-blue-50 hover:border-blue-300 cursor-pointer transition-all shadow-sm"
                                onClick={() => onSelectChapter(chapter)}
                            >
                                <div className="flex items-center justify-between">
                                    <span className="font-semibold text-gray-900">{chapter.title}</span>
                                    <span className="text-xs text-gray-500 bg-gray-100 px-3 py-1 rounded-full">
                                        {chapter.lessons.length} bài học
                                    </span>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
}