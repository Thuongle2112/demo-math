import React, { useState } from 'react';

export default function LessonDetail({ lesson, book, onBack }) {
    const [showPdf, setShowPdf] = useState(false);

    const pdfUrl = book?.downloads?.pdf || null;
    const page = lesson?.pdfPage || 1;
    const viewerUrl = pdfUrl
        ? `https://mozilla.github.io/pdf.js/web/viewer.html?file=${encodeURIComponent(pdfUrl)}#page=${page}`
        : null;

    return (
        <div>
            <button className="mb-4 text-blue-600" onClick={onBack}>← Quay lại chương</button>

            <h2 className="text-xl font-bold mb-2">{lesson.title}</h2>
            {lesson.summary && <p className="mb-4 text-gray-700">{lesson.summary}</p>}

            {!pdfUrl && (
                <div className="mb-4 px-4 py-3 bg-yellow-50 border border-yellow-200 text-yellow-800 rounded">
                    PDF không có sẵn.
                </div>
            )}

            {pdfUrl && (
                <div className="mb-4 flex flex-wrap gap-3">
                    <a
                        href={pdfUrl + `#page=${page}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
                    >
                        Mở PDF (trang {page}) — tab mới
                    </a>

                    <button
                        onClick={() => setShowPdf(v => !v)}
                        className="inline-block px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700"
                    >
                        {showPdf ? 'Đóng xem nhanh' : 'Xem nhanh trong trang'}
                    </button>
                </div>
            )}

            {showPdf && viewerUrl && (
                <div className="border rounded-lg shadow-sm overflow-hidden">
                    <iframe
                        src={viewerUrl}
                        title={`Xem PDF — ${lesson.title}`}
                        className="w-full"
                        style={{ height: '70vh', border: 'none' }}
                    />
                </div>
            )}
        </div>
    );
}