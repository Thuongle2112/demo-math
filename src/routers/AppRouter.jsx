import { Routes, Route, useLocation } from 'react-router-dom';
import Header from '../components/Header';
import FloatingContact from '../components/FloatingContact';
import Home from '../pages/Home';
import OnThi10THPT from '../pages/OnThi10THPT';
import ExamTaking from '../pages/ExamTaking';
import ExamResult from '../pages/ExamResult';

export default function AppRouter() {
    const location = useLocation();
    const hideHeader = location.pathname === '/exam-taking';

    return (
        <div className="min-h-screen">
            {!hideHeader && <Header />}
            <main>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/on-thi" element={<OnThi10THPT />} />
                    <Route path="/on-thi/books" element={<OnThi10THPT />} />
                    <Route path="/on-thi/books/:bookId" element={<OnThi10THPT />} />
                    <Route path="/on-thi/books/:bookId/:chapterId" element={<OnThi10THPT />} />
                    <Route path="/on-thi/books/:bookId/:chapterId/:lessonId" element={<OnThi10THPT />} />
                    <Route path="/on-thi/practice" element={<OnThi10THPT />} />
                    <Route path="/on-thi/exam-type" element={<OnThi10THPT />} />

                    <Route path="/exam-taking" element={<ExamTaking />} />
                    <Route path="/exam-results" element={<ExamResult />} />
                </Routes>
            </main>
            {!hideHeader && <FloatingContact />}
        </div>
    );
}