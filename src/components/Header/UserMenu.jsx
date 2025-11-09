import { USER_MENU_ITEMS } from '../../config/headerMenuConfig';

export default function UserMenu({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <>
      <div className="fixed inset-0 z-10" onClick={onClose}></div>
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
          {USER_MENU_ITEMS.map((item, index) => (
            <a
              key={index}
              href={item.href}
              className="flex items-center gap-3 px-6 py-3 hover:bg-orange-500 text-gray-700 hover:text-white transition-colors"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={item.iconPath} />
              </svg>
              <span className="font-medium">{item.label}</span>
            </a>
          ))}
        </div>

        {/* Logout Button */}
        <div className="border-t p-4">
          <button
            onClick={onClose}
            className="w-full px-4 py-3 text-orange-600 border-2 border-orange-200 rounded-xl hover:bg-orange-50 hover:border-orange-300 transition-all duration-200 font-medium"
          >
            Đăng xuất
          </button>
        </div>
      </div>
    </>
  );
}