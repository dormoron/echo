import {
    AiOutlineBold,
    AiOutlineClose,
    AiOutlineEnter,
    AiOutlineItalic,
    AiOutlineOrderedList,
    AiOutlineRedo,
    AiOutlineStrikethrough,
    AiOutlineUndo,
    AiOutlineUnorderedList,
} from "solid-icons/ai";
import { BiRegularParagraph, BiRegularCodeBlock,BiRegularImages } from "solid-icons/bi";
import { FiCode } from "solid-icons/fi";
import { TbClearFormatting } from "solid-icons/tb";
import { RiEditorDoubleQuotesR } from "solid-icons/ri"
import { TbSpacingVertical } from "solid-icons/tb";

const MenuBar = ( editor :any) => {
    const addImage: () => void = () => {
        const url = window.prompt('URL');
        if (url) {
            editor.chain().focus().setImage({ src: url }).run();
        }
    };

    if (!editor) {
        return null;
    }

    return (
        <div class="border border-slate-300 rounded-lg p-5 sticky top-3 left-0 right-0 bg-white z-10 flex gap-0.5 flex-wrap">
            <button
                onClick={() => editor.chain().focus().toggleHeading({ level: 1 }).run()}
                class={`editor-btn font-black ${editor.isActive("heading", { level: 1 }) && "active-editor-btn"
                }`}
            >
                H1
            </button>
            <button
                onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()}
                class={`editor-btn font-extrabold ${editor.isActive("heading", { level: 2 }) && "active-editor-btn"
                }`}
            >
                H2
            </button>
            <button
                onClick={() => editor.chain().focus().toggleHeading({ level: 3 }).run()}
                class={`editor-btn font-semibold ${editor.isActive("heading", { level: 3 }) && "active-editor-btn"
                }`}
            >
                H3
            </button>
            <button
                onClick={() => editor.chain().focus().toggleHeading({ level: 4 }).run()}
                class={`editor-btn font-medium ${editor.isActive("heading", { level: 4 }) && "active-editor-btn"
                }`}
            >
                H4
            </button>
            <button
                onClick={() => editor.chain().focus().toggleHeading({ level: 5 }).run()}
                class={`editor-btn font-normal ${editor.isActive("heading", { level: 5 }) && "active-editor-btn"
                }`}
            >
                H5
            </button>
            <button
                onClick={() => editor.chain().focus().toggleHeading({ level: 6 }).run()}
                class={`editor-btn font-normal ${editor.isActive("heading", { level: 6 }) && "active-editor-btn"
                }`}
            >
                H6
            </button>
            <button
                onClick={() => editor.chain().focus().toggleBold().run()}
                disabled={!editor.can().chain().focus().toggleBold().run()}
                class={`editor-btn ${editor.isActive("bold") && "active-editor-btn"
                }`}
            >
                <AiOutlineBold />
            </button>
            <button
                onClick={() => editor.chain().focus().toggleItalic().run()}
                disabled={!editor.can().chain().focus().toggleItalic().run()}
                class={`editor-btn ${editor.isActive("italic") && "active-editor-btn"
                }`}
            >
                <AiOutlineItalic />
            </button>
            <button
                onClick={() => editor.chain().focus().toggleStrike().run()}
                disabled={!editor.can().chain().focus().toggleStrike().run()}
                class={`editor-btn ${editor.isActive("strike") && "active-editor-btn"
                }`}
            >
                <AiOutlineStrikethrough />
            </button>
            <button
                onClick={() => editor.chain().focus().toggleCode().run()}
                disabled={!editor.can().chain().focus().toggleCode().run()}
                class={`editor-btn ${editor.isActive("code") && "active-editor-btn"
                }`}
            >
                <FiCode />
            </button>
            <button
                onClick={() => editor.chain().focus().unsetAllMarks().run()}
                class={`editor-btn`}
            >
                <TbClearFormatting />
            </button>
            <button
                onClick={() => editor.chain().focus().clearNodes().run()}
                class={`editor-btn`}
            >
                <AiOutlineClose />
            </button>
            <button
                onClick={() => editor.chain().focus().setParagraph().run()}
                class={`editor-btn ${editor.isActive("paragraph") && "active-editor-btn"
                }`}
            >
                <BiRegularParagraph />
            </button>

            <button onClick={addImage} class='editor-btn'><BiRegularImages /></button>

            <button
                onClick={() => editor.chain().focus().toggleBulletList().run()}
                class={`editor-btn ${editor.isActive("bulletList") && "active-editor-btn"
                }`}
            >
                <AiOutlineUnorderedList />
            </button>
            <button
                onClick={() => editor.chain().focus().toggleOrderedList().run()}
                class={`editor-btn ${editor.isActive("orderedList") && "active-editor-btn"
                }`}
            >
                <AiOutlineOrderedList />
            </button>
            <button
                onClick={() => editor.chain().focus().toggleCodeBlock().run()}
                class={`editor-btn ${editor.isActive("codeBlock") && "active-editor-btn"
                }`}
            >
                <BiRegularCodeBlock />
            </button>
            <button
                onClick={() => editor.chain().focus().toggleBlockquote().run()}
                class={`editor-btn ${editor.isActive("blockquote") && "active-editor-btn"
                }`}
            >
                <RiEditorDoubleQuotesR />
            </button>
            <button
                onClick={() => editor.chain().focus().setHorizontalRule().run()}
                class={`editor-btn`}
            >
                <TbSpacingVertical />
            </button>
            <button
                onClick={() => editor.chain().focus().setHardBreak().run()}
                class={`editor-btn`}
            >
                <AiOutlineEnter />
            </button>
            <button
                onClick={() => editor.chain().focus().undo().run()}
                disabled={!editor.can().chain().focus().undo().run()}
                class={`editor-btn`}
            >
                <AiOutlineUndo />
            </button>
            <button
                onClick={() => editor.chain().focus().redo().run()}
                disabled={!editor.can().chain().focus().redo().run()}
                class={`editor-btn`}
            >
                <AiOutlineRedo />
            </button>
        </div>
    );
};

export default MenuBar;
