import MenuBar from "./menu-bar";
import { extensions } from "@/constants/tiptapExtensions";
import {HTMLContent, JSONContent} from "@tiptap/core";
import {createTiptapEditor} from "solid-tiptap";
import {Component} from "solid-js";

export interface EditorProps {
    onDataChange?: (json: JSONContent) => void;
    content:  HTMLContent | JSONContent | JSONContent[] | null;
    editable: boolean;
}

const Editor:Component<EditorProps> = ({ onDataChange, content, editable }) => {
    let ref!: HTMLDivElement;
    const editor = createTiptapEditor(() => ({
        editable,
        element: ref!,
        extensions: extensions,
        editorProps: {
            attributes: {
                class:
                    "!prose !dark:prose-invert text-sm sm:text-base max-w-none mt-7 focus:outline-none",
            },
        },
        onUpdate: ({ editor }) => {
            const json = editor.getJSON();
            onDataChange?.(json);
        },
        content: content,
    }));


    return (
        <div class="w-full relative">
            {editable && <MenuBar editor={editor} />}
            <div id="editor" ref={ref}/>
        </div>
    );
};

export default Editor;
