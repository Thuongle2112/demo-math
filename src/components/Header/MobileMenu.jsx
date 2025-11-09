import { useState } from 'react';
import { Link } from 'react-router-dom';
import { HEADER_MENU_CONFIG, USER_MENU_ITEMS } from '../../config/headerMenuConfig';

export default function MobileMenu({ isOpen, onClose }) {
    const [expandedMenu, setExpandedMenu] = useState(null);
    const [expandedSubmenu, setExpandedSubmenu] = useState(null);

    if (!isOpen) return null;

    const toggleMenu = (menu) => {
        setExpandedMenu(expandedMenu === menu ? null : menu);
        setExpandedSubmenu(null);
    };

    const toggleSubmenu = (submenu) => {
        setExpandedSubmenu(expandedSubmenu === submenu ? null : submenu);
    };

    return (
        <>
            {/* Fullscreen Menu */}
            <div className="fixed inset-0 bg-white z-50 md:hidden overflow-y-auto">
                {/* Header with Logo */}
                <div className="flex items-center justify-between p-4 border-b bg-gradient-to-r from-orange-50 to-orange-100 sticky top-0 z-10">
                    <Link to="/" onClick={onClose}>
                        <img src="/images/logo-2.png" alt="Logo" className="h-10 w-auto" />
                    </Link>
                    <button onClick={onClose} className="p-2 hover:bg-orange-200 rounded-lg transition-colors">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                </div>

                {/* User Info */}
                <div className="p-4 border-b bg-gradient-to-r from-blue-50 to-blue-100">
                    <div className="flex items-center gap-3">
                        <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full flex items-center justify-center">
                            <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                            </svg>
                        </div>
                        <div>
                            <h3 className="font-bold text-gray-900">0833560332</h3>
                            <p className="text-gray-600 text-sm">667715koco@gmail.com</p>
                        </div>
                    </div>
                </div>

                {/* Navigation */}
                <div className="py-2">
                    {/* Về Slearn */}
                    <div>
                        <button
                            onClick={() => toggleMenu('about')}
                            className="flex items-center justify-between w-full px-4 py-3 hover:bg-orange-50 transition-colors"
                        >
                            <span className="font-medium text-gray-900">{HEADER_MENU_CONFIG.aboutSlearn.label}</span>
                            <svg
                                className={`w-5 h-5 transition-transform ${expandedMenu === 'about' ? 'rotate-180' : ''}`}
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                            </svg>
                        </button>
                        {expandedMenu === 'about' && (
                            <div className="bg-orange-50">
                                {HEADER_MENU_CONFIG.aboutSlearn.items.map((item, index) => (
                                    <a
                                        key={index}
                                        href={item.href}
                                        className="block px-8 py-3 text-sm text-gray-700 hover:bg-orange-100 hover:text-orange-600"
                                        onClick={onClose}
                                    >
                                        {item.label}
                                    </a>
                                ))}
                            </div>
                        )}
                    </div>

                    {/* Ôn tập */}
                    <div>
                        <button
                            onClick={() => toggleMenu('practice')}
                            className="flex items-center justify-between w-full px-4 py-3 hover:bg-orange-50 transition-colors"
                        >
                            <span className="font-medium text-gray-900">{HEADER_MENU_CONFIG.practice.label}</span>
                            <svg
                                className={`w-5 h-5 transition-transform ${expandedMenu === 'practice' ? 'rotate-180' : ''}`}
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                            </svg>
                        </button>
                        {expandedMenu === 'practice' && (
                            <div className="bg-orange-50">
                                {HEADER_MENU_CONFIG.practice.items.map((item, index) => (
                                    <Link
                                        key={index}
                                        to={item.path}
                                        className="block px-8 py-3 text-sm text-gray-700 hover:bg-orange-100 hover:text-orange-600"
                                        onClick={onClose}
                                    >
                                        {item.label}
                                    </Link>
                                ))}
                            </div>
                        )}
                    </div>

                    {/* Thi thử */}
                    <div>
                        <button
                            onClick={() => toggleMenu('exams')}
                            className="flex items-center justify-between w-full px-4 py-3 hover:bg-orange-50 transition-colors"
                        >
                            <span className="font-medium text-gray-900">{HEADER_MENU_CONFIG.exams.label}</span>
                            <svg
                                className={`w-5 h-5 transition-transform ${expandedMenu === 'exams' ? 'rotate-180' : ''}`}
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                            </svg>
                        </button>
                        {expandedMenu === 'exams' && (
                            <div className="bg-orange-50">
                                {HEADER_MENU_CONFIG.exams.items.map((item, index) => {
                                    if (item.path) {
                                        return (
                                            <Link
                                                key={index}
                                                to={item.path}
                                                className="block px-8 py-3 text-sm text-gray-700 hover:bg-orange-100 hover:text-orange-600"
                                                onClick={onClose}
                                            >
                                                {item.label}
                                            </Link>
                                        );
                                    }

                                    return (
                                        <div key={index}>
                                            <button
                                                onClick={() => toggleSubmenu(item.type)}
                                                className="flex items-center justify-between w-full px-8 py-3 text-sm text-gray-700 hover:bg-orange-100 hover:text-orange-600"
                                            >
                                                <span>{item.label}</span>
                                                <svg
                                                    className={`w-4 h-4 transition-transform ${expandedSubmenu === item.type ? 'rotate-180' : ''}`}
                                                    fill="none"
                                                    stroke="currentColor"
                                                    viewBox="0 0 24 24"
                                                >
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                                </svg>
                                            </button>
                                            {expandedSubmenu === item.type && (
                                                <div className="bg-orange-100">
                                                    {item.grades.map(grade => (
                                                        <Link
                                                            key={grade}
                                                            to={`/on-thi?type=${item.type}&grade=${grade}`}
                                                            className="block px-12 py-2 text-sm text-gray-600 hover:bg-orange-200 hover:text-orange-700"
                                                            onClick={onClose}
                                                        >
                                                            Lớp {grade}
                                                        </Link>
                                                    ))}
                                                </div>
                                            )}
                                        </div>
                                    );
                                })}
                            </div>
                        )}
                    </div>
                </div>

                {/* User Actions */}
                <div className="border-t mt-4">
                    <div className="p-2">
                        {USER_MENU_ITEMS.map((item, index) => (
                            <a
                                key={index}
                                href={item.href}
                                className="flex items-center gap-3 px-4 py-3 hover:bg-orange-50 rounded-lg transition-colors"
                                onClick={onClose}
                            >
                                <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={item.iconPath} />
                                </svg>
                                <span className="text-gray-700">{item.label}</span>
                            </a>
                        ))}
                    </div>
                    <div className="p-4">
                        <button
                            onClick={onClose}
                            className="w-full px-4 py-3 text-orange-600 border-2 border-orange-200 rounded-xl hover:bg-orange-50 transition-colors font-medium"
                        >
                            Đăng xuất
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
}