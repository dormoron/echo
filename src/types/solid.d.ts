declare module 'solid-js' {
  export interface Component<P = {}> {
    (props: P): JSX.Element;
  }

  export function createSignal<T>(
    initialValue: T
  ): [() => T, (value: T | ((prev: T) => T)) => T];

  export function onMount(fn: () => void): void;
  
  export function onCleanup(fn: () => void): void;
} 