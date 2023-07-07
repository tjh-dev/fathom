export declare const fathomDomain = "https://cdn.usefathom.com";
export declare const fathomScript: string;
export { Fathom } from "./fathom";
export { useGoal } from "./use-goal";
export { disableTracking, enableTracking } from "./tracking";
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
