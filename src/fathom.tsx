import React from "react";
import { fathomScript } from "./";

export type FathomScriptProps = {
	/**
	 * Site ID
	 */
	site: string;
	/**
	 * Array of domains to exclude from tracking.
	 */
	exclude?: string[];
	/**
	 * Use canonical url if one is defined.
	 *
	 * Set to "false" to override the default behaviour.
	 */
	canonical?: boolean;
	/**
	 * Disable automatic tracking.
	 *
	 * Set to "false" to override the default behaviour.
	 */
	auto?: boolean;
};

function FathomScript({ site, exclude, canonical, auto }: FathomScriptProps) {
	return (
		<script
			src={fathomScript}
			data-site={site}
			data-excluded-domains={exclude?.map((domain) => domain.trim()).join(",")}
			data-canonical={canonical}
			data-auto={auto}
			data-spa="history"
			defer
		/>
	);
}

export const Fathom = React.memo(FathomScript);
