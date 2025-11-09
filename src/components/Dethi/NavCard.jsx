import PropTypes from 'prop-types';

function NavCard({
    id,
    iconPath,
    fillRule,
    clipRule,
    title,
    description,
    color,
    isActive,
    onClick,
    variant = 'desktop',
    badge = null
}) {
    const colorClasses = {
        orange: {
            bg: 'bg-orange-100',
            icon: 'text-orange-600',
            border: 'border-orange-500',
            ring: 'ring-orange-200'
        },
        blue: {
            bg: 'bg-blue-100',
            icon: 'text-blue-600',
            border: 'border-blue-500',
            ring: 'ring-blue-200'
        },
        green: {
            bg: 'bg-green-100',
            icon: 'text-green-600',
            border: 'border-green-500',
            ring: 'ring-green-200'
        },
        purple: {
            bg: 'bg-purple-100',
            icon: 'text-purple-600',
            border: 'border-purple-500',
            ring: 'ring-purple-200'
        },
        gray: {
            bg: 'bg-gray-100',
            icon: 'text-gray-600',
            border: 'border-gray-500',
            ring: 'ring-gray-200'
        }
    };

    const colors = colorClasses[color] || colorClasses.gray;
    const isMobile = variant === 'mobile';

    return (
        <div
            onClick={onClick}
            className={`
        ${isMobile ? 'flex-shrink-0 w-40 snap-start p-4' : 'p-6'}
        bg-white rounded-xl shadow-lg hover:shadow-xl 
        transition-shadow cursor-pointer border
        ${isActive ? `${colors.border} ring-2 ${colors.ring}` : 'border-gray-200'}
      `}
        >
            {/* Icon */}
            <div className={`
        ${isMobile ? 'w-10 h-10 mb-3' : 'w-12 h-12 mb-4'}
        ${colors.bg} rounded-lg flex items-center justify-center
      `}>
                <svg
                    className={`${isMobile ? 'w-5 h-5' : 'w-6 h-6'} ${colors.icon}`}
                    fill="currentColor"
                    viewBox="0 0 20 20"
                >
                    <path
                        d={iconPath}
                        fillRule={fillRule}
                        clipRule={clipRule}
                    />
                </svg>
            </div>

            {/* Title */}
            <h3 className={`font-bold text-gray-900 ${isMobile ? 'text-sm mb-1' : 'mb-2'}`}>
                {title}
            </h3>

            {/* Description */}
            <p className={`${isMobile ? 'text-xs' : 'text-sm'} text-gray-600 line-clamp-2`}>
                {description}
                {badge && (
                    <span className="bg-pink-100 text-pink-600 text-xs px-1.5 py-0.5 rounded-full ml-1">
                        {badge}
                    </span>
                )}
            </p>
        </div>
    );
}

NavCard.propTypes = {
    id: PropTypes.string.isRequired,
    iconPath: PropTypes.string.isRequired,
    fillRule: PropTypes.string,
    clipRule: PropTypes.string,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    color: PropTypes.oneOf(['orange', 'blue', 'green', 'purple', 'gray']).isRequired,
    isActive: PropTypes.bool,
    onClick: PropTypes.func.isRequired,
    variant: PropTypes.oneOf(['desktop', 'mobile']),
    badge: PropTypes.string
};

export default NavCard;