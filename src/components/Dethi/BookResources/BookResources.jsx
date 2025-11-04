import { useState } from 'react';
import { books } from '../../../data/bookData';

export default function BookResources() {
    const [selectedBook, setSelectedBook] = useState(null);
    const [selectedChapter, setSelectedChapter] = useState(null);
    const [selectedLesson, setSelectedLesson] = useState(null);

    const handleSelectBook = (book) => {
        setSelectedBook(book);
        setSelectedChapter(null);
        setSelectedLesson(null);
    };
    const handleSelectChapter = (chapter) => {
        setSelectedChapter(chapter);
        setSelectedLesson(null);
    };

    // Phân loại rõ ràng: SGK (sgk) và Sách bài tập (baitap)
    const grouped = books.reduce((acc, b) => {
        const title = (b.title || '').toLowerCase();
        const id = (b.id || '').toLowerCase();
        const isBaiTap =
            id.startsWith('baitap') ||
            title.includes('bài tập') ||
            title.includes('baitap') ||
            (b.subtitle && b.subtitle.toLowerCase().includes('bài tập'));
        if (isBaiTap) {
            acc.baitap.push(b);
        } else {
            acc.sgk.push(b);
        }
        return acc;
    }, { sgk: [], baitap: [] });

    const Card = ({ book }) => (
        <div className="bg-white rounded-xl shadow-md overflow-hidden flex flex-col max-w-[220px]">
            <div className="p-3 flex-1 flex flex-col">
                <div className="aspect-[3/4] w-full rounded-lg overflow-hidden shadow-sm">
                    <img
                        src={book.cover}
                        alt={book.title}
                        className="w-full h-full object-contain"
                    />
                </div>

                <h3 className="mt-3 font-semibold text-gray-900 text-base line-clamp-2">{book.title}</h3>
                <p className="text-xs text-gray-500 mt-1">
                    {book.publisher} • Lớp {book.grade}
                </p>

                <div className="mt-4">
                    <button
                        onClick={() => handleSelectBook(book)}
                        className="w-full py-2 rounded-md border border-orange-400 text-orange-600 text-sm font-medium hover:bg-orange-50 transition"
                    >
                        Xem ngay
                    </button>
                </div>
            </div>
        </div>
    );


    // Overview: split left (SGK) / right (Bài tập)
    if (!selectedBook) {
        return (
            <div className="space-y-6">
                <h2 className="text-2xl font-bold mb-2">Tài nguyên Sách</h2>

                <div className="grid grid-cols-1 lg:grid-cols-2 mt-10 gap-10">
                    {/* LEFT: Sách giáo khoa */}
                    <section className="bg-orange-50 rounded-2xl p-6 shadow-lg">
                        <div className="flex items-center justify-between mb-6">
                            <h3 className="text-xl font-bold">Sách giáo khoa</h3>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            {grouped.sgk.map(book => (
                                <Card key={book.id} book={book} />
                            ))}
                        </div>
                    </section>

                    {/* RIGHT: Sách bài tập */}
                    <section className="bg-orange-50 rounded-2xl p-6 shadow-lg">
                        <div className="flex items-center justify-between mb-6">
                            <h3 className="text-xl font-bold">Sách bài tập</h3>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            {grouped.baitap.map(book => (
                                <Card key={book.id} book={book} />
                            ))}
                        </div>
                    </section>
                </div>
            </div>
        );
    }

    // ...existing detail views (unchanged) ...
    if (selectedBook && !selectedChapter) {
        return (
            <div>
                <button className="mb-4 text-blue-600" onClick={() => setSelectedBook(null)}>← Quay lại danh sách sách</button>
                <div className="flex flex-col md:flex-row gap-8">
                    <img src={selectedBook.cover} alt={selectedBook.title} className="w-48 h-64 object-cover rounded-xl shadow" />
                    <div>
                        <h2 className="text-2xl font-bold mb-2">{selectedBook.title}</h2>
                        <p className="text-gray-600 mb-2">{selectedBook.publisher} • {selectedBook.year}</p>
                        <a
                            href={selectedBook.downloads.pdf}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-block mb-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                        >
                            Tải PDF
                        </a>
                        <h3 className="font-semibold mt-4 mb-2">Danh sách chương</h3>
                        <ul className="space-y-2">
                            {selectedBook.chapters.map(chap => (
                                <li
                                    key={chap.id}
                                    className="border rounded px-4 py-3 hover:bg-gray-50 cursor-pointer"
                                    onClick={() => handleSelectChapter(chap)}
                                >
                                    <span className="font-medium">{chap.title}</span>
                                    <span className="ml-2 text-xs text-gray-500">({chap.lessons.length} bài học)</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        );
    }

    if (selectedBook && selectedChapter && !selectedLesson) {
        return (
            <div>
                <button className="mb-4 text-blue-600" onClick={() => setSelectedChapter(null)}>← Quay lại chi tiết sách</button>
                <h2 className="text-xl font-bold mb-2">{selectedChapter.title}</h2>
                <ul className="space-y-2">
                    {selectedChapter.lessons.map(lesson => (
                        <li
                            key={lesson.id}
                            className="border rounded px-4 py-3 hover:bg-gray-50 cursor-pointer"
                            onClick={() => setSelectedLesson(lesson)}
                        >
                            <span className="font-medium">{lesson.title}</span>
                            <span className="ml-2 text-xs text-gray-500">Trang {lesson.pdfPage}</span>
                            <p className="text-sm text-gray-600">{lesson.summary}</p>
                        </li>
                    ))}
                </ul>
            </div>
        );
    }

    if (selectedBook && selectedChapter && selectedLesson) {
        return (
            <div>
                <button className="mb-4 text-blue-600" onClick={() => setSelectedLesson(null)}>← Quay lại chương</button>
                <h2 className="text-xl font-bold mb-2">{selectedLesson.title}</h2>
                <p className="mb-2 text-gray-700">{selectedLesson.summary}</p>
                <a
                    href={selectedBook.downloads.pdf + `#page=${selectedLesson.pdfPage}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                >
                    Xem trên PDF (trang {selectedLesson.pdfPage})
                </a>
                {selectedLesson.pdfPage && selectedBook?.downloads?.pdf && (
                    <div className="mt-4">
                        <iframe
                            src={`https://mozilla.github.io/pdf.js/web/viewer.html?file=${encodeURIComponent(selectedBook.downloads.pdf)}#page=${selectedLesson.pdfPage}`}
                            style={{ width: '100%', height: '70vh', border: 'none' }}
                            title="Xem trang bài học"
                        />
                    </div>
                )}
            </div>
        );
    }

    return null;
}