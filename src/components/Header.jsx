import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useScroll } from '../hooks/useScroll';

export default function Header() {
    const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);
    const [activeSubmenu, setActiveSubmenu] = useState(null);
    const [headerState, setHeaderState] = useState({
        isVisible: true,
        isScrolled: false,
        isAtTop: true
    });

    const { scrollY, scrollDirection } = useScroll();

    useEffect(() => {
        const isAtTop = scrollY < 20;
        const isScrolled = scrollY > 20;
        const isVisible = scrollY < 100 || scrollDirection === 'up';

        setHeaderState({
            isVisible,
            isScrolled,
            isAtTop
        });
    }, [scrollY, scrollDirection]);

    const toggleUserMenu = () => {
        setIsUserMenuOpen(!isUserMenuOpen);
    };

    const closeUserMenu = () => {
        setIsUserMenuOpen(false);
    };

    const handleSubmenuHover = (submenu) => {
        setActiveSubmenu(submenu);
    };

    const handleSubmenuLeave = () => {
        setActiveSubmenu(null);
    };

    return (
        <>
            <header
                className={`fixed top-0 left-0 right-0 z-30 transition-transform duration-300 ease-in-out
                ${headerState.isVisible ? 'translate-y-0' : '-translate-y-full'}
                ${headerState.isScrolled ? 'shadow-md bg-white/95 backdrop-blur-sm' : 'shadow-sm bg-white'}`}
            >
                <div className="w-full flex items-center justify-between px-[5%] sm:px-[6%] lg:px-[8%] xl:px-[10%] py-6">
                    {/* Left: Logo image */}
                    <div className="flex items-center flex-shrink-0">
                        <Link to="/">
                            <img src="/images/logo-2.png" alt="Logo" className="h-12 w-auto" />
                        </Link>
                    </div>

                    {/* Right: menu */}
                    <div className="flex items-center gap-4 lg:gap-8 text-gray-800 font-medium">
                        <div className="flex items-center gap-4 lg:gap-8">
                            <div className="relative group hidden md:block">
                                <button className="px-2 lg:px-4 py-2 text-gray-800 cursor-pointer hover:text-orange-500 transition-colors">
                                    Về Slearn
                                </button>
                                <div className="absolute left-0 mt-3 w-44 bg-orange-100 shadow-lg rounded-lg opacity-0 py-2 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                                    <a href="#" className="block px-4 py-4 hover:bg-orange-500 hover:text-white text-sm">Giới thiệu chung</a>
                                    <a href="#" className="block px-4 py-4 hover:bg-orange-500 hover:text-white text-sm">Phương pháp đào tạo</a>
                                    <a href="#" className="block px-4 py-4 hover:bg-orange-500 hover:text-white text-sm">Đội ngũ giảng viên</a>
                                    <a href="#" className="block px-4 py-4 hover:bg-orange-500 hover:text-white text-sm">Chương trình</a>
                                    <a href="#" className="block px-4 py-4 hover:bg-orange-500 hover:text-white text-sm">Sự kiện</a>
                                    <a href="#" className="block px-4 py-4 hover:bg-orange-500 hover:text-white text-sm">Hệ thống cơ sở</a>
                                    <a href="#" className="block px-4 py-4 hover:bg-orange-500 hover:text-white text-sm">Chính sách</a>
                                </div>
                            </div>

                            <div className="relative group hidden md:block">
                                <button className="px-2 lg:px-4 py-2 text-gray-800 cursor-pointer hover:text-orange-500 transition-colors">
                                    Ôn tập
                                </button>
                                <div className="absolute left-0 mt-3 w-44 bg-orange-100 shadow-lg rounded-lg opacity-0 py-2 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                                    <Link to="/on-thi/books?grade=6" className="block px-4 py-4 hover:bg-orange-500 hover:text-white text-sm">Lớp 6</Link>
                                    <Link to="/on-thi/books?grade=7" className="block px-4 py-4 hover:bg-orange-500 hover:text-white text-sm">Lớp 7</Link>
                                    <Link to="/on-thi/books?grade=8" className="block px-4 py-4 hover:bg-orange-500 hover:text-white text-sm">Lớp 8</Link>
                                    <Link to="/on-thi/books?grade=9" className="block px-4 py-4 hover:bg-orange-500 hover:text-white text-sm">Lớp 9</Link>
                                    <Link to="/on-thi/books?grade=10" className="block px-4 py-4 hover:bg-orange-500 hover:text-white text-sm">Lớp 10</Link>
                                    <Link to="/on-thi/books?grade=11" className="block px-4 py-4 hover:bg-orange-500 hover:text-white text-sm">Lớp 11</Link>
                                    <Link to="/on-thi/books?grade=12" className="block px-4 py-4 hover:bg-orange-500 hover:text-white text-sm">Lớp 12</Link>
                                </div>
                            </div>

                            <div className="relative group hidden md:block">
                                <button className="px-2 lg:px-4 py-2 text-gray-800 cursor-pointer hover:text-orange-500 transition-colors">
                                    Thi thử
                                </button>
                                <div className="absolute left-0 mt-3 w-44 bg-orange-100 shadow-lg rounded-lg opacity-0 py-2 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                                    {/* Thi thử giữa kỳ 1 */}
                                    <div
                                        className="relative"
                                        onMouseEnter={() => handleSubmenuHover('giua-ky-1')}
                                        onMouseLeave={handleSubmenuLeave}
                                    >
                                        <div className="flex items-center justify-between px-4 py-4 hover:bg-orange-500 hover:text-white text-sm transition-colors cursor-pointer">
                                            <span>Thi thử giữa kỳ 1</span>
                                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                            </svg>
                                        </div>
                                        {activeSubmenu === 'giua-ky-1' && (
                                            <div className="absolute left-full top-0 ml-1 w-32 bg-orange-100 shadow-lg rounded-lg py-2">
                                                <Link to="/on-thi?type=giuaky1&grade=6" className="block px-4 py-4 hover:bg-orange-500 hover:text-white text-sm transition-colors">Lớp 6</Link>
                                                <Link to="/on-thi?type=giuaky1&grade=7" className="block px-4 py-4 hover:bg-orange-500 hover:text-white text-sm transition-colors">Lớp 7</Link>
                                                <Link to="/on-thi?type=giuaky1&grade=8" className="block px-4 py-4 hover:bg-orange-500 hover:text-white text-sm transition-colors">Lớp 8</Link>
                                                <Link to="/on-thi?type=giuaky1&grade=9" className="block px-4 py-4 hover:bg-orange-500 hover:text-white text-sm transition-colors">Lớp 9</Link>
                                                <Link to="/on-thi?type=giuaky1&grade=10" className="block px-4 py-4 hover:bg-orange-500 hover:text-white text-sm transition-colors">Lớp 10</Link>
                                                <Link to="/on-thi?type=giuaky1&grade=11" className="block px-4 py-4 hover:bg-orange-500 hover:text-white text-sm transition-colors">Lớp 11</Link>
                                                <Link to="/on-thi?type=giuaky1&grade=12" className="block px-4 py-4 hover:bg-orange-500 hover:text-white text-sm transition-colors">Lớp 12</Link>
                                            </div>
                                        )}
                                    </div>

                                    {/* Thi thử cuối kỳ 1 */}
                                    <div
                                        className="relative"
                                        onMouseEnter={() => handleSubmenuHover('cuoi-ky-1')}
                                        onMouseLeave={handleSubmenuLeave}
                                    >
                                        <div className="flex items-center justify-between px-4 py-4 hover:bg-orange-500 hover:text-white text-sm transition-colors cursor-pointer">
                                            <span>Thi thử cuối kỳ 1</span>
                                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                            </svg>
                                        </div>
                                        {activeSubmenu === 'cuoi-ky-1' && (
                                            <div className="absolute left-full top-0 ml-1 w-32 bg-orange-100 shadow-lg rounded-lg py-2">
                                                <Link to="/on-thi?type=cuoiky1&grade=6" className="block px-4 py-4 hover:bg-orange-500 hover:text-white text-sm transition-colors">Lớp 6</Link>
                                                <Link to="/on-thi?type=cuoiky1&grade=7" className="block px-4 py-4 hover:bg-orange-500 hover:text-white text-sm transition-colors">Lớp 7</Link>
                                                <Link to="/on-thi?type=cuoiky1&grade=8" className="block px-4 py-4 hover:bg-orange-500 hover:text-white text-sm transition-colors">Lớp 8</Link>
                                                <Link to="/on-thi?type=cuoiky1&grade=9" className="block px-4 py-4 hover:bg-orange-500 hover:text-white text-sm transition-colors">Lớp 9</Link>
                                                <Link to="/on-thi?type=cuoiky1&grade=10" className="block px-4 py-4 hover:bg-orange-500 hover:text-white text-sm transition-colors">Lớp 10</Link>
                                                <Link to="/on-thi?type=cuoiky1&grade=11" className="block px-4 py-4 hover:bg-orange-500 hover:text-white text-sm transition-colors">Lớp 11</Link>
                                                <Link to="/on-thi?type=cuoiky1&grade=12" className="block px-4 py-4 hover:bg-orange-500 hover:text-white text-sm transition-colors">Lớp 12</Link>
                                            </div>
                                        )}
                                    </div>

                                    {/* Thi thử giữa kỳ 2 */}
                                    <div
                                        className="relative"
                                        onMouseEnter={() => handleSubmenuHover('giua-ky-2')}
                                        onMouseLeave={handleSubmenuLeave}
                                    >
                                        <div className="flex items-center justify-between px-4 py-4 hover:bg-orange-500 hover:text-white text-sm transition-colors cursor-pointer">
                                            <span>Thi thử giữa kỳ 2</span>
                                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                            </svg>
                                        </div>
                                        {activeSubmenu === 'giua-ky-2' && (
                                            <div className="absolute left-full top-0 ml-1 w-32 bg-orange-100 shadow-lg rounded-lg py-2">
                                                <Link to="/on-thi?type=giuaky2&grade=6" className="block px-4 py-4 hover:bg-orange-500 hover:text-white text-sm transition-colors">Lớp 6</Link>
                                                <Link to="/on-thi?type=giuaky2&grade=7" className="block px-4 py-4 hover:bg-orange-500 hover:text-white text-sm transition-colors">Lớp 7</Link>
                                                <Link to="/on-thi?type=giuaky2&grade=8" className="block px-4 py-4 hover:bg-orange-500 hover:text-white text-sm transition-colors">Lớp 8</Link>
                                                <Link to="/on-thi?type=giuaky2&grade=9" className="block px-4 py-4 hover:bg-orange-500 hover:text-white text-sm transition-colors">Lớp 9</Link>
                                                <Link to="/on-thi?type=giuaky2&grade=10" className="block px-4 py-4 hover:bg-orange-500 hover:text-white text-sm transition-colors">Lớp 10</Link>
                                                <Link to="/on-thi?type=giuaky2&grade=11" className="block px-4 py-4 hover:bg-orange-500 hover:text-white text-sm transition-colors">Lớp 11</Link>
                                                <Link to="/on-thi?type=giuaky2&grade=12" className="block px-4 py-4 hover:bg-orange-500 hover:text-white text-sm transition-colors">Lớp 12</Link>
                                            </div>
                                        )}
                                    </div>

                                    {/* Thi thử cuối kỳ 2 */}
                                    <div
                                        className="relative"
                                        onMouseEnter={() => handleSubmenuHover('cuoi-ky-2')}
                                        onMouseLeave={handleSubmenuLeave}
                                    >
                                        <div className="flex items-center justify-between px-4 py-4 hover:bg-orange-500 hover:text-white text-sm transition-colors cursor-pointer">
                                            <span>Thi thử cuối kỳ 2</span>
                                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                            </svg>
                                        </div>
                                        {activeSubmenu === 'cuoi-ky-2' && (
                                            <div className="absolute left-full top-0 ml-1 w-32 bg-orange-100 shadow-lg rounded-lg py-2">
                                                <Link to="/on-thi?type=cuoiky2&grade=6" className="block px-4 py-4 hover:bg-orange-500 hover:text-white text-sm transition-colors">Lớp 6</Link>
                                                <Link to="/on-thi?type=cuoiky2&grade=7" className="block px-4 py-4 hover:bg-orange-500 hover:text-white text-sm transition-colors">Lớp 7</Link>
                                                <Link to="/on-thi?type=cuoiky2&grade=8" className="block px-4 py-4 hover:bg-orange-500 hover:text-white text-sm transition-colors">Lớp 8</Link>
                                                <Link to="/on-thi?type=cuoiky2&grade=9" className="block px-4 py-4 hover:bg-orange-500 hover:text-white text-sm transition-colors">Lớp 9</Link>
                                                <Link to="/on-thi?type=cuoiky2&grade=10" className="block px-4 py-4 hover:bg-orange-500 hover:text-white text-sm transition-colors">Lớp 10</Link>
                                                <Link to="/on-thi?type=cuoiky2&grade=11" className="block px-4 py-4 hover:bg-orange-500 hover:text-white text-sm transition-colors">Lớp 11</Link>
                                                <Link to="/on-thi?type=cuoiky2&grade=12" className="block px-4 py-4 hover:bg-orange-500 hover:text-white text-sm transition-colors">Lớp 12</Link>
                                            </div>
                                        )}
                                    </div>

                                    {/* Thi thử vào 10 */}
                                    <Link to="/on-thi?type=tuyensinh&grade=9" className="block px-4 py-4 hover:bg-orange-500 hover:text-white text-sm transition-colors">
                                        Thi thử vào 10
                                    </Link>

                                    {/* Thi thử Tốt nghiệp THPT */}
                                    <Link to="/on-thi?type=totnghiep&grade=12" className="block px-4 py-4 hover:bg-orange-500 hover:text-white text-sm transition-colors">
                                        Thi thử Tốt nghiệp THPT
                                    </Link>
                                </div>
                            </div>
                        </div>

                        {/* ...existing user menu code... */}
                        <div className="flex items-center gap-3 ml-4">
                            {/* User dropdown with click event */}
                            <div className="relative hidden md:flex items-center">
                                <button
                                    onClick={toggleUserMenu}
                                    className="flex items-center gap-3 px-3 py-2 rounded-full hover:bg-gray-50 transition-colors cursor-pointer"
                                >
                                    <div className="w-10 h-10 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full flex items-center justify-center">
                                        <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                                        </svg>
                                    </div>
                                    <div className="text-left">
                                        <div className="text-sm font-semibold text-gray-900">0833560332</div>
                                    </div>
                                    <svg className={`w-4 h-4 text-gray-500 transition-transform duration-200 ${isUserMenuOpen ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 20 20" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                    </svg>
                                </button>

                                {/* User Dropdown Menu */}
                                {isUserMenuOpen && (
                                    <>
                                        {/* Backdrop to close menu when clicking outside */}
                                        <div
                                            className="fixed inset-0 z-10"
                                            onClick={closeUserMenu}
                                        ></div>

                                        <div className="absolute right-0 mt-3 w-80 bg-white shadow-xl rounded-2xl border top-full overflow-hidden z-20">
                                            {/* User Info Header */}
                                            <div className="p-6 bg-gradient-to-r from-orange-50 to-orange-100 border-b">
                                                <div className="flex items-center gap-4">
                                                    <div className="w-16 h-16 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full flex items-center justify-center">
                                                        <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                                                            <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                                                        </svg>
                                                    </div>
                                                    <div>
                                                        <h3 className="font-bold text-gray-900 text-lg">0833560332</h3>
                                                        <p className="text-gray-600 text-sm">667715koco@gmail.com</p>
                                                        <span className="inline-block mt-1 px-3 py-1 text-xs font-medium text-orange-600 bg-orange-100 rounded-full">
                                                            Chính sửa hồ sơ
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>

                                            {/* Menu Items */}
                                            <div className="py-2">
                                                <a href="#" className="flex items-center gap-3 px-6 py-3 hover:bg-orange-500 text-gray-700 hover:text-gray-900 hover:text-white transition-colors">
                                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                                                    </svg>
                                                    <span className="font-medium">Bảng điều khiển</span>
                                                </a>

                                                <a href="#" className="flex items-center gap-3 px-6 py-3 hover:bg-orange-500 text-gray-700 hover:text-gray-900 hover:text-white transition-colors">
                                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                                                    </svg>
                                                    <span className="font-medium">Profile</span>
                                                </a>

                                                <a href="#" className="flex items-center gap-3 px-6 py-3 hover:bg-orange-500 text-gray-700 hover:text-gray-900 hover:text-white transition-colors">
                                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                                    </svg>
                                                    <span className="font-medium">Lịch sử Test</span>
                                                </a>

                                                <a href="#" className="flex items-center gap-3 px-6 py-3 hover:bg-orange-500 text-gray-700 hover:text-gray-900 hover:text-white transition-colors">
                                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                                                    </svg>
                                                    <span className="font-medium">Bài test của tôi</span>
                                                </a>

                                                <a href="#" className="flex items-center gap-3 px-6 py-3 hover:bg-orange-500 text-gray-700 hover:text-gray-900 hover:text-white transition-colors">
                                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                                                    </svg>
                                                    <span className="font-medium">Khóa học của tôi</span>
                                                </a>
                                            </div>

                                            {/* Logout Button */}
                                            <div className="border-t p-4">
                                                <button
                                                    onClick={closeUserMenu}
                                                    className="w-full px-4 py-3 text-orange-600 border-2 border-orange-200 rounded-xl hover:bg-orange-50 hover:border-orange-300 transition-all duration-200 font-medium"
                                                >
                                                    Đăng xuất
                                                </button>
                                            </div>
                                        </div>
                                    </>
                                )}
                            </div>

                            {/* Mobile menu button */}
                            <button className="md:hidden p-2 text-gray-600 hover:text-gray-800">
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
            </header>
            <div aria-hidden className="h-16 md:h-20 lg:h-24" />
        </>
    )
}