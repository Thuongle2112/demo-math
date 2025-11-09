import React, { useState, useEffect } from 'react';

export default function LessonDetail({ lesson, book, onBack }) {
    const [iframeKey, setIframeKey] = useState(0);
    const [isLoading, setIsLoading] = useState(true);

    let pdfUrl = book?.downloads?.pdf || null;
    const page = lesson?.pdfPage || 1;

    // Fix Dropbox links: dl=0 → dl=1 (raw download)
    if (pdfUrl && pdfUrl.includes('dropbox.com')) {
        pdfUrl = pdfUrl.replace(/[?&]dl=0/, '?dl=1').replace(/[?&]dl=0/, '&dl=1');
        if (!pdfUrl.includes('dl=')) {
            pdfUrl += (pdfUrl.includes('?') ? '&' : '?') + 'dl=1';
        }
    }

    const viewerUrl = pdfUrl
        ? `https://mozilla.github.io/pdf.js/web/viewer.html?file=${encodeURIComponent(pdfUrl)}#page=${page}`
        : null;

    // Reset iframe khi lesson thay đổi
    useEffect(() => {
        setIframeKey(prev => prev + 1);
        setIsLoading(true);
    }, [lesson.id]);

    // Handle iframe load
    const handleIframeLoad = () => {
        setIsLoading(false);
    };

    return (
        <div>
            <button
                className="mb-4 px-4 py-2 text-blue-600 hover:text-blue-800 hover:bg-blue-50 rounded-lg transition-colors flex items-center gap-2"
                onClick={onBack}
            >
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                </svg>
                Quay lại chương
            </button>

            <h2 className="text-2xl font-bold mb-3 text-gray-900">{lesson.title}</h2>
            {lesson.summary && (
                <p className="mb-6 text-gray-700 text-lg leading-relaxed">{lesson.summary}</p>
            )}

            {!pdfUrl && (
                <div className="mb-4 px-4 py-3 bg-yellow-50 border border-yellow-200 text-yellow-800 rounded-lg flex items-start gap-3">
                    <svg className="w-5 h-5 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                    </svg>
                    <div>
                        <div className="font-semibold mb-1">PDF không có sẵn</div>
                        <div className="text-sm">Vui lòng liên hệ để được hỗ trợ tài liệu.</div>
                    </div>
                </div>
            )}

            {/* PDF Viewer - Hiển thị trực tiếp */}
            {pdfUrl && viewerUrl && (
                <div className="border-2 border-gray-200 rounded-xl shadow-lg overflow-hidden bg-gray-50 relative">
                    {/* Loading overlay */}
                    {isLoading && (
                        <div className="absolute inset-0 bg-white/90 flex items-center justify-center z-10">
                            <div className="text-center">
                                <div className="inline-block animate-spin rounded-full h-12 w-12 border-4 border-blue-500 border-t-transparent mb-3"></div>
                                <div className="text-gray-700 font-medium">Đang tải PDF...</div>
                            </div>
                        </div>
                    )}

                    {/* Iframe */}
                    <iframe
                        key={iframeKey}
                        src={viewerUrl}
                        title={`Xem PDF — ${lesson.title}`}
                        className="w-full"
                        style={{
                            height: '85vh',
                            border: 'none'
                        }}
                        onLoad={handleIframeLoad}
                        onError={() => {
                            setIsLoading(false);
                            console.error('Failed to load PDF');
                        }}
                    />
                </div>
            )}

            {/* Help text */}
            {pdfUrl && viewerUrl && (
                <div className="mt-4 px-4 py-3 bg-blue-50 border border-blue-200 rounded-lg">
                    <div className="flex items-start gap-3 text-sm text-blue-900">
                        <svg className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                        </svg>
                        <div>
                            <div className="font-semibold mb-1">Mẹo sử dụng:</div>
                            <ul className="list-disc list-inside space-y-1">
                                <li>Sử dụng toolbar trong PDF viewer để zoom, search, tải xuống</li>
                                <li>PDF tự động mở ở trang {page}</li>
                                <li>Có thể cuộn trang hoặc dùng navigation trong PDF viewer</li>
                            </ul>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}