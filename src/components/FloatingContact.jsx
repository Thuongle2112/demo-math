function FloatingContact() {
    const handleCall = () => {
        window.location.href = 'tel:0833560332';
    }

    return (
        <div className="fixed bottom-6 right-6 z-50 cursor-pointer max-md:right-4 max-md:bottom-4" onClick={handleCall}>
            <div className="flex items-center bg-orange-500 hover:bg-orange-600 text-white rounded-full shadow-lg transition-all duration-300 hover:shadow-xl">
                {/* Phone Icon */}
                <div className="w-12 h-12 flex items-center justify-center">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                    </svg>
                </div>

                {/* Phone Number Text - hidden on mobile */}
                <div className="hidden md:flex items-center pr-3">
                    <span className="text-xs font-semibold">
                        0833 560 332
                    </span>
                </div>
            </div>

            {/* Pulse Animation */}
            <div className="absolute inset-0 rounded-full bg-orange-400 animate-ping opacity-30"></div>
        </div>
    )
}

export default FloatingContact;