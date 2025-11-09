import React, { useRef, useEffect, useState } from 'react';
import { useEditor, EditorContent } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import { Node } from '@tiptap/core';

// ✅ Custom Tiptap extension để render MathLive
const MathInline = Node.create({
    name: 'mathInline',
    group: 'inline',
    inline: true,
    atom: true,

    addAttributes() {
        return {
            latex: {
                default: '',
            },
        };
    },

    parseHTML() {
        return [
            {
                tag: 'span[data-math]',
            },
        ];
    },

    renderHTML({ node }) {
        return ['span', { 
            'data-math': '', 
            'data-latex': node.attrs.latex,
            class: 'math-inline'
        }, node.attrs.latex];
    },

    addNodeView() {
        return ({ node }) => {
            const dom = document.createElement('span');
            dom.className = 'inline-flex items-center px-2 py-0.5 mx-1 bg-blue-50 rounded-md border border-blue-200';
            dom.setAttribute('data-math', '');
            dom.setAttribute('data-latex', node.attrs.latex);

            // ✅ Render công thức bằng MathLive
            import('mathlive').then((module) => {
                const mf = new module.MathfieldElement();
                mf.value = node.attrs.latex;
                mf.readOnly = true;
                
                // Style cho mathfield readonly
                Object.assign(mf.style, {
                    border: 'none',
                    padding: '0',
                    fontSize: '1rem',
                    display: 'inline-block',
                    background: 'transparent',
                });

                dom.appendChild(mf);
            });

            return {
                dom,
            };
        };
    },
});

export default function MathEditor({ value, onChange, disabled, placeholder }) {
    const [showMathInput, setShowMathInput] = useState(false);
    const mathFieldRef = useRef(null);
    const [mathLive, setMathLive] = useState(null);

    // Dynamically import MathLive (client-side only)
    useEffect(() => {
        import('mathlive').then((module) => {
            setMathLive(module);
        });
    }, []);

    const editor = useEditor({
        extensions: [
            StarterKit,
            MathInline, // ✅ Thêm extension custom
        ],
        content: value || '',
        editable: !disabled,
        onUpdate: ({ editor }) => {
            onChange && onChange(editor.getHTML());
        },
        editorProps: {
            attributes: {
                class: 'min-h-[200px] max-h-[400px] overflow-y-auto p-4 focus:outline-none prose prose-sm max-w-none',
            },
        },
    });

    useEffect(() => {
        if (showMathInput && mathFieldRef.current && mathLive) {
            // Initialize MathLive field
            const mf = new mathLive.MathfieldElement({
                virtualKeyboardMode: 'onfocus',
                smartMode: true,
            });

            // ✅ Apply styles
            Object.assign(mf.style, {
                fontSize: '1.25rem',
                padding: '0.75rem',
                border: 'none',
                width: '100%',
                outline: 'none',
                minHeight: '120px',
            });

            mathFieldRef.current.innerHTML = '';
            mathFieldRef.current.appendChild(mf);
            mf.focus();

            mathFieldRef.current._mf = mf;
        }
    }, [showMathInput, mathLive]);

    if (!editor) {
        return null;
    }

    const insertMath = () => {
        setShowMathInput(true);
    };

    const handleInsertMath = () => {
        const mf = mathFieldRef.current?._mf;
        if (mf) {
            const latex = mf.getValue();
            if (latex) {
                // ✅ Insert bằng custom node thay vì HTML thuần
                editor
                    .chain()
                    .focus()
                    .insertContent({
                        type: 'mathInline',
                        attrs: { latex },
                    })
                    .run();
            }
        }
        setShowMathInput(false);
    };

    const handleCancelMath = () => {
        setShowMathInput(false);
    };

    return (
        <div className="border border-gray-300 rounded-lg overflow-hidden shadow-sm">
            {/* Toolbar */}
            {!disabled && (
                <div className="bg-gray-50 border-b border-gray-300 p-2 flex flex-wrap gap-1 items-center">
                    <button
                        onClick={() => editor.chain().focus().toggleBold().run()}
                        disabled={!editor.can().chain().focus().toggleBold().run()}
                        className={`px-3 py-1.5 rounded transition-colors ${
                            editor.isActive('bold')
                                ? 'bg-gray-300 text-gray-900'
                                : 'hover:bg-gray-200 text-gray-700'
                        } disabled:opacity-40 disabled:cursor-not-allowed`}
                        type="button"
                        title="Bold (Ctrl+B)"
                    >
                        <strong>B</strong>
                    </button>
                    <button
                        onClick={() => editor.chain().focus().toggleItalic().run()}
                        disabled={!editor.can().chain().focus().toggleItalic().run()}
                        className={`px-3 py-1.5 rounded transition-colors ${
                            editor.isActive('italic')
                                ? 'bg-gray-300 text-gray-900'
                                : 'hover:bg-gray-200 text-gray-700'
                        } disabled:opacity-40 disabled:cursor-not-allowed`}
                        type="button"
                        title="Italic (Ctrl+I)"
                    >
                        <em>I</em>
                    </button>
                    <button
                        onClick={() => editor.chain().focus().toggleStrike().run()}
                        disabled={!editor.can().chain().focus().toggleStrike().run()}
                        className={`px-3 py-1.5 rounded transition-colors ${
                            editor.isActive('strike')
                                ? 'bg-gray-300 text-gray-900'
                                : 'hover:bg-gray-200 text-gray-700'
                        } disabled:opacity-40 disabled:cursor-not-allowed`}
                        type="button"
                        title="Strikethrough"
                    >
                        <s>S</s>
                    </button>

                    <div className="w-px h-6 bg-gray-300 mx-1" />

                    <button
                        onClick={() => editor.chain().focus().toggleBulletList().run()}
                        className={`px-3 py-1.5 rounded transition-colors ${
                            editor.isActive('bulletList')
                                ? 'bg-gray-300 text-gray-900'
                                : 'hover:bg-gray-200 text-gray-700'
                        }`}
                        type="button"
                        title="Bullet List"
                    >
                        • List
                    </button>
                    <button
                        onClick={() => editor.chain().focus().toggleOrderedList().run()}
                        className={`px-3 py-1.5 rounded transition-colors ${
                            editor.isActive('orderedList')
                                ? 'bg-gray-300 text-gray-900'
                                : 'hover:bg-gray-200 text-gray-700'
                        }`}
                        type="button"
                        title="Numbered List"
                    >
                        1. List
                    </button>

                    <div className="w-px h-6 bg-gray-300 mx-1" />

                    {/* Math button */}
                    <button
                        onClick={insertMath}
                        className="px-3 py-1.5 rounded bg-blue-100 hover:bg-blue-200 text-blue-700 font-semibold transition-colors"
                        type="button"
                        title="Insert Math Formula"
                    >
                        ƒ(x) Công thức
                    </button>

                    <div className="w-px h-6 bg-gray-300 mx-1" />

                    <button
                        onClick={() => editor.chain().focus().undo().run()}
                        disabled={!editor.can().chain().focus().undo().run()}
                        className="px-3 py-1.5 rounded hover:bg-gray-200 text-gray-700 transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
                        type="button"
                        title="Undo (Ctrl+Z)"
                    >
                        ↶
                    </button>
                    <button
                        onClick={() => editor.chain().focus().redo().run()}
                        disabled={!editor.can().chain().focus().redo().run()}
                        className="px-3 py-1.5 rounded hover:bg-gray-200 text-gray-700 transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
                        type="button"
                        title="Redo (Ctrl+Y)"
                    >
                        ↷
                    </button>
                </div>
            )}

            {/* Editor Content */}
            <div className={`bg-white ${disabled ? 'bg-gray-50 cursor-not-allowed opacity-70' : ''}`}>
                <EditorContent editor={editor} />
            </div>

            {/* MathLive Input Modal */}
            {showMathInput && (
                <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4">
                    <div className="bg-white rounded-xl shadow-2xl max-w-2xl w-full mx-auto">
                        {/* Header */}
                        <div className="px-6 py-4 border-b border-gray-200 flex items-center justify-between">
                            <h3 className="text-lg font-bold text-gray-900">
                                Nhập công thức toán học
                            </h3>
                            <button
                                onClick={handleCancelMath}
                                className="text-gray-400 hover:text-gray-600 transition-colors"
                                type="button"
                            >
                                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>
                        </div>

                        {/* Body */}
                        <div className="px-6 py-4">
                            <div
                                ref={mathFieldRef}
                                className="border-2 border-blue-300 rounded-lg p-4 min-h-[140px] mb-4 bg-white focus-within:border-blue-500 focus-within:ring-2 focus-within:ring-blue-200 transition-all"
                            />

                            <div className="bg-blue-50 border border-blue-200 rounded-lg p-3 text-sm text-blue-900">
                                <div className="flex items-start gap-2">
                                    <svg className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                                    </svg>
                                    <div>
                                        <div className="font-semibold mb-1">Gợi ý:</div>
                                        <ul className="list-disc list-inside space-y-0.5 text-blue-800">
                                            <li>Click để hiện bàn phím ảo với ký tự toán học</li>
                                            <li>Nhập LaTeX: <code className="bg-white px-1 rounded">x^2</code>, <code className="bg-white px-1 rounded">\frac{'{'}<span>a</span>{'}'}{'{'}<span>b</span>{'}'}</code>, <code className="bg-white px-1 rounded">\sqrt{'{'}<span>x</span>{'}'}</code></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Footer */}
                        <div className="px-6 py-4 bg-gray-50 border-t border-gray-200 rounded-b-xl flex gap-3 justify-end">
                            <button
                                onClick={handleCancelMath}
                                className="px-6 py-2.5 text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 font-medium transition-colors"
                                type="button"
                            >
                                Hủy
                            </button>
                            <button
                                onClick={handleInsertMath}
                                className="px-6 py-2.5 bg-blue-600 text-white rounded-lg hover:bg-blue-700 font-semibold shadow-sm transition-colors"
                                type="button"
                            >
                                Chèn công thức
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}