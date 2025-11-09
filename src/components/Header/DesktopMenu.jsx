import { Link } from 'react-router-dom';
import { HEADER_MENU_CONFIG } from '../../config/headerMenuConfig';

export function AboutMenu() {
    return (
        <div className="relative group hidden md:block">
            <button className="px-2 lg:px-4 py-2 text-gray-800 cursor-pointer hover:text-orange-500 transition-colors">
                {HEADER_MENU_CONFIG.aboutSlearn.label}
            </button>
            <div className="absolute left-0 mt-3 w-44 bg-orange-100 shadow-lg rounded-lg opacity-0 py-2 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                {HEADER_MENU_CONFIG.aboutSlearn.items.map((item, index) => (
                    <a
                        key={index}
                        href={item.href}
                        className="block px-4 py-4 hover:bg-orange-500 hover:text-white text-sm"
                    >
                        {item.label}
                    </a>
                ))}
            </div>
        </div>
    );
}

export function PracticeMenu() {
    return (
        <div className="relative group hidden md:block">
            <button className="px-2 lg:px-4 py-2 text-gray-800 cursor-pointer hover:text-orange-500 transition-colors">
                {HEADER_MENU_CONFIG.practice.label}
            </button>
            <div className="absolute left-0 mt-3 w-44 bg-orange-100 shadow-lg rounded-lg opacity-0 py-2 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                {HEADER_MENU_CONFIG.practice.items.map((item, index) => (
                    <Link
                        key={index}
                        to={item.path}
                        className="block px-4 py-4 hover:bg-orange-500 hover:text-white text-sm"
                    >
                        {item.label}
                    </Link>
                ))}
            </div>
        </div>
    );
}

export function ExamsMenu({ activeSubmenu, onSubmenuHover, onSubmenuLeave }) {
    return (
        <div className="relative group hidden md:block">
            <button className="px-2 lg:px-4 py-2 text-gray-800 cursor-pointer hover:text-orange-500 transition-colors">
                {HEADER_MENU_CONFIG.exams.label}
            </button>
            <div className="absolute left-0 mt-3 w-44 bg-orange-100 shadow-lg rounded-lg opacity-0 py-2 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                {HEADER_MENU_CONFIG.exams.items.map((item, index) => {
                    if (item.path) {
                        return (
                            <Link
                                key={index}
                                to={item.path}
                                className="block px-4 py-4 hover:bg-orange-500 hover:text-white text-sm transition-colors"
                            >
                                {item.label}
                            </Link>
                        );
                    }

                    return (
                        <div
                            key={index}
                            className="relative"
                            onMouseEnter={() => onSubmenuHover(item.type)}
                            onMouseLeave={onSubmenuLeave}
                        >
                            <div className="flex items-center justify-between px-4 py-4 hover:bg-orange-500 hover:text-white text-sm transition-colors cursor-pointer">
                                <span>{item.label}</span>
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                </svg>
                            </div>
                            {activeSubmenu === item.type && (
                                <div className="absolute left-full top-0 ml-1 w-32 bg-orange-100 shadow-lg rounded-lg py-2">
                                    {item.grades.map(grade => (
                                        <Link
                                            key={grade}
                                            to={`/on-thi?type=${item.type}&grade=${grade}`}
                                            className="block px-4 py-4 hover:bg-orange-500 hover:text-white text-sm transition-colors"
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
        </div>
    );
}