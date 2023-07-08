export declare const fathomDomain = "https://cdn.usefathom.com";
export declare const fathomScript: string;
export { Fathom } from "./fathom";
interface FathomClient {
    blockTrackingForMe: () => void;
    enableTrackingForMe: () => void;
    trackPageview: (opts?: {
        url?: string;
        referrer?: string;
    }) => void;
    trackGoal: (code: string, cents: number) => void;
    setSite: (id: string) => void;
}
declare global {
    interface Window {
        fathom?: FathomClient;
    }
}
type Options = {
    quietly: boolean;
};
export declare function disableTracking(options?: Options): void;
export declare function enableTracking(options?: Options): void;
export declare function useGoal(code: string): (value?: number) => void;
