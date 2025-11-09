import PropTypes from 'prop-types';
import { EXAM_FEATURES } from '../../../config/examTypesConfig';

function ExamTypeCard({ type, isHovered, onHover, onLeave, onClick }) {
    return (
        <div
            onMouseEnter={onHover}
            onMouseLeave={onLeave}
            onClick={onClick}
            className={`relative bg-white rounded-2xl p-6 shadow-lg cursor-pointer transition-all duration-300 border-2 flex flex-col
        ${isHovered
                    ? `${type.hoverBorder} ring-4 ${type.ringColor} transform -translate-y-2 shadow-2xl`
                    : `${type.borderColor} hover:shadow-xl`
                }`}
        >
            {/* Icon */}
            <div className="flex items-start mb-4">
                <div className={`w-12 h-12 bg-gradient-to-br ${type.bgGradient} rounded-xl flex items-center justify-center text-white shadow-lg flex-shrink-0`}>
                    <svg className="w-6 h-6 md:w-8 md:h-8" fill="currentColor" viewBox="0 0 20 20">
                        <path d={type.iconPath} fillRule={type.fillRule} clipRule={type.clipRule} />
                    </svg>
                </div>
            </div>

            {/* Content */}
            <div className="flex-grow flex flex-col">
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                    {type.title}
                </h3>
                <p className="text-gray-600 text-sm mb-4">
                    {type.description}
                </p>

                {/* Features */}
                <div className="space-y-2 mb-4">
                    {EXAM_FEATURES.map((feature, idx) => (
                        <div key={idx} className="flex items-center text-xs text-gray-500">
                            <svg className="w-3 h-3 mr-2 text-green-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                            </svg>
                            {feature.text}
                        </div>
                    ))}
                </div>
            </div>

            {/* CTA Button */}
            <div className="mt-auto">
                <div className={`w-full py-3 px-3 bg-gradient-to-r ${type.bgGradient} text-white rounded-lg font-medium text-center text-sm transition-all duration-300
          ${isHovered ? 'shadow-lg transform scale-105' : ''}`}>
                    Bắt đầu luyện tập
                </div>
            </div>

            {/* Hover Overlay */}
            {isHovered && (
                <div className="absolute inset-0 bg-gradient-to-r from-white/5 to-white/10 rounded-2xl pointer-events-none" />
            )}
        </div>
    );
}

ExamTypeCard.propTypes = {
    type: PropTypes.shape({
        id: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        iconPath: PropTypes.string.isRequired,
        fillRule: PropTypes.string,
        clipRule: PropTypes.string,
        bgGradient: PropTypes.string.isRequired,
        borderColor: PropTypes.string.isRequired,
        hoverBorder: PropTypes.string.isRequired,
        ringColor: PropTypes.string.isRequired
    }).isRequired,
    isHovered: PropTypes.bool.isRequired,
    onHover: PropTypes.func.isRequired,
    onLeave: PropTypes.func.isRequired,
    onClick: PropTypes.func.isRequired
};

export default ExamTypeCard;