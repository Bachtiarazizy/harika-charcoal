"use client";

import ErrorPages from "@/components/ui/error-page";
import * as Sentry from "@sentry/nextjs";
import Error from "next/error";

export default function GlobalError({ error, reset }) {
  useEffect(() => {
    Sentry.captureException(error);
  }, [error]);
  return (
    <html>
      <body>
        <ErrorPages type="general" onReset={reset} error={error} />
      </body>
    </html>
  );
}
