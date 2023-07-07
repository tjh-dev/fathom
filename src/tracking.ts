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
