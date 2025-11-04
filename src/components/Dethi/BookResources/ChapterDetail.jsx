import React from 'react';

export default function ChapterDetail({ chapter, onBack, onSelectLesson }) {
    return (
        <div>
            <button className="mb-4 text-blue-600" onClick={onBack}>← Quay lại chi tiết sách</button>
            <h2 className="text-xl font-bold mb-4">{chapter.title}</h2>
            <ul className="space-y-2">
                {chapter.lessons.map(lesson => (
                    <li
                        key={lesson.id}
                        className="border rounded px-4 py-3 hover:bg-gray-50 cursor-pointer"
                        onClick={() => onSelectLesson(lesson)}
                    >
                        <span className="font-medium">{lesson.title}</span>
                        {lesson.pdfPage && (
                            <span className="ml-2 text-xs text-gray-500">Trang {lesson.pdfPage}</span>
                        )}
                        {lesson.summary && (
                            <p className="text-sm text-gray-600">{lesson.summary}</p>
                        )}
                    </li>
                ))}
            </ul>
        </div>
    );
}