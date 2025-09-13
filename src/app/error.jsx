"use client";

import ErrorPages from "@/components/ui/error-page";

export default function Error({ error, reset }) {
  return <ErrorPages type="500" onReset={reset} error={error} />;
}
