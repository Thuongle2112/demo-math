import { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { books } from '../../../data/bookData';
import BookDetail from './BookDetail';
import ChapterDetail from './ChapterDetail';
import LessonDetail from './LessonDetail';

export default function BookResources() {
    const { bookId, chapterId, lessonId } = useParams();
    const navigate = useNavigate();

    // Find current book, chapter, lesson based on URL params
    const selectedBook = books.find(b => b.id === bookId);
    const selectedChapter = selectedBook?.chapters?.find(c => c.id === chapterId);
    const selectedLesson = selectedChapter?.lessons?.find(l => l.id === lessonId);

    // ✅ Redirect to books list if invalid IDs
    useEffect(() => {
        if (bookId && !selectedBook) {
            navigate('/on-thi/books', { replace: true });
        } else if (chapterId && !selectedChapter) {
            navigate(`/on-thi/books/${bookId}`, { replace: true });
        } else if (lessonId && !selectedLesson) {
            navigate(`/on-thi/books/${bookId}/${chapterId}`, { replace: true });
        }
    }, [bookId, chapterId, lessonId, selectedBook, selectedChapter, selectedLesson, navigate]);

    // ✅ Navigation handlers
    const handleSelectBook = (book) => {
        navigate(`/on-thi/books/${book.id}`);
    };

    const handleSelectChapter = (chapter) => {
        navigate(`/on-thi/books/${bookId}/${chapter.id}`);
    };

    const handleSelectLesson = (lesson) => {
        navigate(`/on-thi/books/${bookId}/${chapterId}/${lesson.id}`);
    };

    const handleBackToBooks = () => {
        navigate('/on-thi/books');
    };

    const handleBackToBook = () => {
        navigate(`/on-thi/books/${bookId}`);
    };

    const handleBackToChapter = () => {
        navigate(`/on-thi/books/${bookId}/${chapterId}`);
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

    // ✅ Render based on URL params
    // Lesson detail view
    if (lessonId && selectedLesson) {
        return (
            <LessonDetail
                lesson={selectedLesson}
                book={selectedBook}
                onBack={handleBackToChapter}
            />
        );
    }

    // Chapter detail view
    if (chapterId && selectedChapter) {
        return (
            <ChapterDetail
                chapter={selectedChapter}
                onBack={handleBackToBook}
                onSelectLesson={handleSelectLesson}
            />
        );
    }

    // Book detail view
    if (bookId && selectedBook) {
        return (
            <BookDetail
                book={selectedBook}
                onBack={handleBackToBooks}
                onSelectChapter={handleSelectChapter}
            />
        );
    }

    // ✅ Books overview - default view
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