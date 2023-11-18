export const fathomDomain = "https://cdn.usefathom.com";
export const fathomScript = fathomDomain + "/script.js";

export { Fathom } from "./fathom";

interface EventPayload {
	_site_id?: string;
	_value?: number;
}

interface FathomClient {
	blockTrackingForMe: () => void;
	enableTrackingForMe: () => void;
	trackPageview: (opts?: { url?: string; referrer?: string }) => void;
	trackGoal: (code: string, cents: number) => void;
	trackEvent: (name: string, payload?: EventPayload) => void;
	setSite: (id: string) => void;
}

declare global {
	interface Window {
		fathom?: FathomClient;
	}
}

const TRACKING_KEY = "blockFathomTracking";

type Options = {
	quietly: boolean;
};

export function disableTracking(options?: Options) {
	if (typeof document === "undefined") {
		console.error(`cannot disable tracking during ssr`);
		return;
	}
	if (!options || options.quietly === false) {
		if (typeof window.fathom === "undefined") {
			console.warn(`Fathom analytics not loaded. Cannot disable tracking`);
			return;
		}
		window.fathom.blockTrackingForMe();
	} else {
		window.localStorage?.setItem(TRACKING_KEY, "true");
	}
}

export function enableTracking(options?: Options) {
	if (typeof document === "undefined") {
		console.error(`cannot enable tracking during ssr`);
		return;
	}
	if (!options || options.quietly === false) {
		if (typeof window.fathom === "undefined") {
			console.warn(`Fathom analytics not loaded. Cannot enable tracking`);
			return;
		}
		window.fathom.enableTrackingForMe();
	} else {
		window.localStorage?.removeItem(TRACKING_KEY);
	}
}

export function useGoal(code: string, defaultValue: number = 0) {
	return function (value: number | undefined = undefined) {
		if (typeof document === "undefined") {
			console.error(`cannot track goal '${code}' during ssr`);
			return;
		}
		if (typeof window.fathom === "undefined") {
			console.warn(`Fathom analytics not loaded. Cannot track goal '${code}'`);
			return;
		}

		window.fathom.trackGoal(code, value ?? defaultValue);
	};
}

export function useTrackEvent(name: string, defaultPayload?: EventPayload) {
	return function (payload?: EventPayload) {
		if (typeof document === "undefined") {
			console.error(`cannot track event '${name}' during ssr`);
			return;
		}
		if (typeof window.fathom === "undefined") {
			console.warn(`Fathom analytics not loaded. Cannot track event '${name}'`);
			return;
		}

		window.fathom.trackEvent(name, payload ?? defaultPayload);
	};
}
