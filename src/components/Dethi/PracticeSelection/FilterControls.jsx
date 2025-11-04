import ExamTypeDropdown from './ExamTypeDropdown';
import Dropdown from './Dropdown';

function FilterControls({
    examType,
    onExamTypeSelect,
    isExamTypeDropdownOpen,
    setIsExamTypeDropdownOpen,
    activeProvince,
    provinces,
    onProvinceSelect,
    isProvinceDropdownOpen,
    setIsProvinceDropdownOpen,
    selectedYear,
    availableYears,
    onYearSelect,
    isYearDropdownOpen,
    setIsYearDropdownOpen,
    sortOption,
    setSortOption,
    urlParams
}) {
    const provinceOptions = provinces.map(province => ({
        value: province,
        label: province,
        onClick: () => onProvinceSelect(province)
    }));

    // Format year labels để hiển thị đẹp hơn
    const formatYearLabel = (year) => {
        // Nếu year có format như "gk1-2025-2026", "ck2-2024-2025", etc.
        // thì chỉ lấy phần năm học "2025-2026"
        const yearMatch = year.match(/(\d{4}-\d{4})$/);
        if (yearMatch) {
            return yearMatch[1]; // Trả về "2025-2026"
        }
        
        // Nếu không match pattern trên thì trả về year gốc
        return year;
    };

    const yearOptions = availableYears.map(year => ({
        value: year,
        label: formatYearLabel(year), // Hiển thị label đẹp
        onClick: () => onYearSelect(year)
    }));

    return (
        <div className="flex gap-4 mb-4">
            {/* Exam Type Dropdown */}
            <ExamTypeDropdown
                examType={examType}
                onExamTypeSelect={onExamTypeSelect}
                isOpen={isExamTypeDropdownOpen}
                onToggle={() => setIsExamTypeDropdownOpen(!isExamTypeDropdownOpen)}
            />

            {/* Province Dropdown */}
            <Dropdown
                isOpen={isProvinceDropdownOpen}
                onToggle={() => setIsProvinceDropdownOpen(!isProvinceDropdownOpen)}
                selectedValue={activeProvince}
                options={provinceOptions}
                minWidth="150px"
            />

            {/* Year Dropdown */}
            <Dropdown
                isOpen={isYearDropdownOpen}
                onToggle={() => setIsYearDropdownOpen(!isYearDropdownOpen)}
                selectedValue={selectedYear}
                options={yearOptions}
                placeholder="Chọn năm"
                minWidth="120px"
            />

            {/* Sort Dropdown */}
            <select
                value={sortOption}
                onChange={(e) => setSortOption(e.target.value)}
                className="px-3 py-2 rounded-lg text-sm border"
            >
                <option value="newest">Mới nhất</option>
                <option value="oldest">Cũ nhất</option>
                <option value="name">Tên A-Z</option>
            </select>
        </div>
    );
}

export default FilterControls;