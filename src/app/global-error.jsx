"use client";

import ErrorPages from "@/components/ui/error-page";

export default function GlobalError({ error, reset }) {
  return (
    <html>
      <body>
        <ErrorPages type="general" onReset={reset} error={error} />
      </body>
    </html>
  );
}
