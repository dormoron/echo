declare module '@tiptap/core' {
  interface JSONContent {
    type?: string;
    attrs?: Record<string, any>;
    content?: JSONContent[];
    marks?: {
      type: string;
      attrs?: Record<string, any>;
    }[];
    text?: string;
  }

  interface HTMLContent {
    [key: string]: any;
  }
}

declare module '@tiptap/html' {
  import { JSONContent } from '@tiptap/core';
  import { Extension } from '@tiptap/core';

  export function generateHTML(
    document: JSONContent,
    extensions: Extension[]
  ): string;
} 