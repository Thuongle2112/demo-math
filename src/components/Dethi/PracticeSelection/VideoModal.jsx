function VideoModal({ isOpen, videoUrl, onClose }) {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
            <div className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-hidden">
                <div className="flex justify-between items-center p-4 border-b">
                    <h3 className="text-lg font-semibold">Video chữa đề</h3>
                    <button
                        onClick={onClose}
                        className="text-gray-400 hover:text-gray-600 text-xl"
                    >
                        ×
                    </button>
                </div>
                <div className="aspect-video">
                    <iframe
                        src={videoUrl}
                        className="w-full h-full"
                        allowFullScreen
                        title="Video chữa đề"
                    />
                </div>
            </div>
        </div>
    );
}

export default VideoModal;