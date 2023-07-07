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
export declare function useGoal(code: string): (value?: number) => void;
export {};
