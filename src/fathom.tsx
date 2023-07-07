import React from "react";

const fathomUrl = "https://cdn.usefathom.com/script.js";

function FathomScript({ site }: { site: string }) {
	return <script src={fathomUrl} data-site={site} data-spa="auto" defer />;
}

export const Fathom = React.memo(FathomScript);
