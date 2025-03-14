import MenuBar from "./menu-bar";
import { extensions } from "@/constants/tiptapExtensions";
import type { HTMLContent, JSONContent } from "@tiptap/core";
import { createTiptapEditor } from "solid-tiptap";
import { createSignal, onCleanup, onMount } from "solid-js";
import type { Component } from "solid-js";

export interface EditorProps {
    onDataChange?: (json: JSONContent) => void;
    onError?: (error: Error) => void;
    content: HTMLContent | JSONContent | JSONContent[] | null;
    editable: boolean;
    placeholder?: string;
    autoFocus?: boolean;
}

interface EditorUpdatePayload {
    editor: {
        getJSON: () => JSONContent;
    };
}

const Editor: Component<EditorProps> = (props: EditorProps) => {
    const { 
        onDataChange, 
        onError, 
        content, 
        editable,
        placeholder = '开始编写内容...',
        autoFocus = false
    } = props;
    
    let ref!: HTMLDivElement;
    const [isReady, setIsReady] = createSignal(false);
    
    try {
        const editor = createTiptapEditor(() => ({
            editable,
            element: ref!,
            extensions: extensions,
            editorProps: {
                attributes: {
                    class: "!prose !dark:prose-invert text-sm sm:text-base max-w-none mt-7 focus:outline-none",
                },
            },
            onUpdate: ({ editor }: EditorUpdatePayload) => {
                try {
                    const json = editor.getJSON();
                    onDataChange?.(json);
                } catch (error) {
                    console.error('编辑器更新错误:', error);
                    onError?.(error instanceof Error ? error : new Error(String(error)));
                }
            },
            content: content,
            autofocus: autoFocus,
            onCreate: () => {
                setIsReady(true);
            }
        }));

        onMount(() => {
            // 确保编辑器正确初始化
            if (!editor()?.isDestroyed && editable) {
                try {
                    // 添加占位符功能
                    const editorElement = ref.querySelector('.ProseMirror');
                    if (editorElement) {
                        editorElement.setAttribute('data-placeholder', placeholder);
                    }
                } catch (error) {
                    console.error('编辑器初始化错误:', error);
                }
            }
        });

        onCleanup(() => {
            // 确保编辑器实例被正确销毁
            if (!editor()?.isDestroyed) {
                editor()?.destroy();
            }
        });

        return (
            <div class="w-full relative">
                {editable && <MenuBar editor={editor} />}
                <div 
                    id="editor" 
                    ref={ref} 
                    class={`editor-container ${!isReady() ? 'opacity-50' : ''}`}
                />
            </div>
        );
    } catch (error) {
        console.error('编辑器创建错误:', error);
        onError?.(error instanceof Error ? error : new Error(String(error)));
        
        // 回退到一个简单的textarea
        return (
            <div class="w-full relative">
                <textarea 
                    class="w-full p-4 border rounded"
                    disabled={!editable}
                    placeholder={placeholder}
                    value={typeof content === 'string' ? content : JSON.stringify(content)}
                />
            </div>
        );
    }
};

export default Editor;
