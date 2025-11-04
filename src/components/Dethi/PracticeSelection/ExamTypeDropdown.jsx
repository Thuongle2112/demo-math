import Dropdown from './Dropdown';

function ExamTypeDropdown({ examType, onExamTypeSelect, isOpen, onToggle }) {
    const examTypeOptions = [
        { value: 'truong', label: 'Đề Trường', description: 'Trường THPT thường' },
        { value: 'so', label: 'Đề Sở', description: 'Sở Giáo dục và Đào tạo' },
        { value: 'phong', label: 'Đề Phòng', description: 'Phòng Giáo dục và Đào tạo' },
        { value: 'chuyen', label: 'Đề Chuyên', description: 'Trường THPT chuyên' }
    ];

    const currentOption = examTypeOptions.find(option => option.value === examType);

    const options = examTypeOptions.map(option => ({
        ...option,
        onClick: () => onExamTypeSelect(option.value)
    }));

    const renderOption = (option, selectedValue) => (
        <button
            onClick={option.onClick}
            className={`w-full text-left px-4 py-3 text-sm hover:bg-orange-50 transition-colors ${examType === option.value
                ? 'bg-orange-50 text-orange-600 font-medium'
                : 'text-gray-700 hover:text-orange-600'
                }`}
        >
            <div className="font-medium">{option.label}</div>
            <div className="text-xs text-gray-500">{option.description}</div>
        </button>
    );

    return (
        <Dropdown
            isOpen={isOpen}
            onToggle={onToggle}
            selectedValue={currentOption?.label}
            options={options}
            minWidth="140px"
            renderOption={renderOption}
        />
    );
}

export default ExamTypeDropdown;