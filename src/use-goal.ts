interface FathomClient {
	blockTrackingForMe: () => void;
	enableTrackingForMe: () => void;
	trackPageview: (opts?: { url?: string; referrer?: string }) => void;
	trackGoal: (code: string, cents: number) => void;
	setSite: (id: string) => void;
}

declare global {
	interface Window {
		fathom?: FathomClient;
	}
}

export function useGoal(code: string) {
	return function (value: number = 0) {
		if (typeof document === "undefined") {
			console.error(`cannot track event '${code}' during ssr`);
			return;
		}
		if (typeof window.fathom === "undefined") {
			console.warn(`Fathom analytics not loaded. Cannot track event '${code}'`);
			return;
		}
		window.fathom.trackGoal(code, value);
	};
}
