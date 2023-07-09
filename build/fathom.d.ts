import React from "react";
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
    /**
     * Override the script URL.
     */
    scriptUrl?: string;
};
declare function FathomScript({ site, exclude, canonical, auto, scriptUrl, }: FathomScriptProps): JSX.Element;
export declare const Fathom: React.MemoExoticComponent<typeof FathomScript>;
export {};
