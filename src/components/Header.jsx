import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useScroll } from '../hooks/useScroll';
import { AboutMenu, PracticeMenu, ExamsMenu } from './Header/DesktopMenu';
import UserMenu from './Header/UserMenu';
import MobileMenu from './Header/MobileMenu';

export default function Header() {
    const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
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

        setHeaderState({ isVisible, isScrolled, isAtTop });
    }, [scrollY, scrollDirection]);

    return (
        <>
            <header
                className={`fixed top-0 left-0 right-0 z-30 transition-transform duration-300 ease-in-out
                ${headerState.isVisible ? 'translate-y-0' : '-translate-y-full'}
                ${headerState.isScrolled ? 'shadow-md bg-white/95 backdrop-blur-sm' : 'shadow-sm bg-white'}`}
            >
                <div className="w-full flex items-center justify-between px-[5%] sm:px-[6%] lg:px-[8%] xl:px-[10%] py-6">
                    {/* Logo */}
                    <div className="flex items-center flex-shrink-0">
                        <Link to="/">
                            <img src="/images/logo-2.png" alt="Logo" className="h-12 w-auto" />
                        </Link>
                    </div>

                    {/* Desktop Menu */}
                    <div className="flex items-center gap-4 lg:gap-8 text-gray-800 font-medium">
                        <div className="flex items-center gap-4 lg:gap-8">
                            <AboutMenu />
                            <PracticeMenu />
                            <ExamsMenu
                                activeSubmenu={activeSubmenu}
                                onSubmenuHover={setActiveSubmenu}
                                onSubmenuLeave={() => setActiveSubmenu(null)}
                            />
                        </div>

                        {/* User Menu & Mobile Button */}
                        <div className="flex items-center gap-3 ml-4">
                            {/* Desktop User Menu */}
                            <div className="relative hidden md:flex items-center">
                                <button
                                    onClick={() => setIsUserMenuOpen(!isUserMenuOpen)}
                                    className="flex items-center gap-3 px-3 py-2 rounded-full hover:bg-gray-50 transition-colors"
                                >
                                    <div className="w-10 h-10 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full flex items-center justify-center">
                                        <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                                        </svg>
                                    </div>
                                    <div className="text-left">
                                        <div className="text-sm font-semibold text-gray-900">0833560332</div>
                                    </div>
                                    <svg
                                        className={`w-4 h-4 text-gray-500 transition-transform ${isUserMenuOpen ? 'rotate-180' : ''}`}
                                        fill="none"
                                        viewBox="0 0 20 20"
                                        stroke="currentColor"
                                    >
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                    </svg>
                                </button>

                                <UserMenu isOpen={isUserMenuOpen} onClose={() => setIsUserMenuOpen(false)} />
                            </div>

                            {/* Mobile Menu Button */}
                            <button
                                onClick={() => setIsMobileMenuOpen(true)}
                                className="md:hidden p-2 text-gray-600 hover:text-gray-800"
                            >
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
            </header>

            {/* Mobile Menu */}
            <MobileMenu isOpen={isMobileMenuOpen} onClose={() => setIsMobileMenuOpen(false)} />

            <div aria-hidden className="h-16 md:h-20 lg:h-24" />
        </>
    );
}