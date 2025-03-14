declare module 'solid-js/web' {
  export function render(
    code: () => any,
    element: HTMLElement
  ): () => void;

  export function hydrate(
    code: () => any,
    element: HTMLElement
  ): () => void;

  export function getRequestEvent(): any;
} 