Integrate Fathom analytics into your remix.run project

## Usage

Add the tracking component to your root route.
```jsx
import { Fathom } from "@tjh-dev/fathom";

export default function Root() {
  return (
    <html>
      <head>
        <Fathom site="SITE_ID" />
        <Meta />
      </head>
      <body>
        <Outlet />
        <Scripts />
      </body>
    </html>
  );
}
```

All done! 🎉
