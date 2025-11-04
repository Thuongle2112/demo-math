function Dropdown({ isOpen, onToggle, selectedValue, options, placeholder, minWidth = "120px" }) {
    // Tìm option tương ứng với selectedValue để lấy label
    const selectedOption = options.find(option => option.value === selectedValue);
    const displayText = selectedOption ? selectedOption.label : (placeholder || selectedValue);

    return (
        <div className="relative" style={{ minWidth }}>
            <button
                onClick={onToggle}
                className="w-full px-3 py-2 text-left bg-white border border-gray-300 rounded-lg hover:border-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent flex items-center justify-between"
            >
                <span className="text-gray-900">
                    {displayText}
                </span>
                <svg
                    className={`w-4 h-4 text-gray-400 transition-transform ${isOpen ? 'rotate-180' : ''}`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
            </button>

            {isOpen && (
                <div className="absolute top-full left-0 right-0 mt-1 bg-white border border-gray-200 rounded-lg shadow-lg z-50 max-h-60 overflow-y-auto">
                    {options.map((option, index) => (
                        <button
                            key={index}
                            onClick={() => {
                                option.onClick();
                                onToggle(); // Đóng dropdown
                            }}
                            className={`w-full px-3 py-2 text-left hover:bg-gray-50 transition-colors ${selectedValue === option.value ? 'bg-orange-50 text-orange-600 border-r-2 border-orange-500' : 'text-gray-900'
                                }`}
                        >
                            {option.label}
                        </button>
                    ))}
                </div>
            )}
        </div>
    );
}

export default Dropdown;