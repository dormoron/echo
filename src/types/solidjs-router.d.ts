declare module '@solidjs/router' {
  import { Component, JSX } from 'solid-js';

  export interface RouteProps {
    path: string;
    component: Component<any>;
    children?: JSX.Element;
  }

  export interface RoutesProps {
    children: JSX.Element;
  }

  export interface RouterProps {
    children: JSX.Element;
  }

  export interface LocationState {
    pathname: string;
    search: string;
    hash: string;
    state: any;
    key: string;
  }

  export interface NavigateOptions {
    replace?: boolean;
    scroll?: boolean;
    state?: any;
  }

  export interface NavigateFn {
    (to: string, options?: NavigateOptions): void;
    (delta: number): void;
  }

  export interface LocationStateObj {
    key: string;
    value: any;
  }

  export interface RouteDataFuncArgs {
    location: LocationState;
    navigate: NavigateFn;
    params: Record<string, string>;
  }

  export type RouteDataFunc<T = any> = (
    args: RouteDataFuncArgs
  ) => T;

  export const Route: Component<RouteProps>;
  export const Routes: Component<RoutesProps>;
  export const Router: Component<RouterProps>;
  
  export function useParams<T = Record<string, string>>(): T;
  export function useNavigate(): NavigateFn;
  export function useLocation(): LocationState;
  export function useSearchParams<T = Record<string, string>>(): [T, (params: T) => void];
  export function useRouteData<T = any>(): T;
  export function useMatch(path: string): boolean;
  export function useLocation(): LocationState;
  export function useHref(to: string): string;
  export function useIsRouting(): boolean;
} 