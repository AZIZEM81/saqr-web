"use client";

import { useEffect, useState } from "react";

export default function UnityFrame({
  src = "/unity/index.html",
}: {
  src?: string;
}) {
  const [isReady, setIsReady] = useState<boolean | null>(null);

  // We "ping" the Unity index file. If it's missing, we show the fallback UI.
  useEffect(() => {
    let cancelled = false;

    fetch(src, { method: "GET" })
      .then((res) => {
        if (cancelled) return;
        setIsReady(res.ok);
      })
      .catch(() => {
        if (cancelled) return;
        setIsReady(false);
      });

    return () => {
      cancelled = true;
    };
  }, [src]);

  if (isReady === null) {
    return (
      <div className="aspect-video w-full rounded-xl border border-zinc-800 bg-zinc-900/40 p-6">
        <div className="text-zinc-300 font-medium">Loading simulator…</div>
        <div className="mt-2 text-sm text-zinc-400">
          Preparing Unity WebGL container.
        </div>
      </div>
    );
  }

  if (isReady === false) {
    return (
      <div className="rounded-xl border border-zinc-800 bg-zinc-900/40 p-6">
        <h2 className="text-lg font-semibold">Simulator Not Deployed Yet</h2>
        <p className="mt-2 text-sm text-zinc-400">
          The Unity WebGL build is not available at <code className="text-zinc-200">{src}</code>.
          <br />
          Please place the Unity export folder inside <code className="text-zinc-200">public/unity</code>
          (must include <code className="text-zinc-200">index.html</code>, <code className="text-zinc-200">Build/</code>,
          <code className="text-zinc-200">TemplateData/</code>).
        </p>

        <div className="mt-4 rounded-lg border border-zinc-800 bg-black/30 p-4 text-xs text-zinc-400">
          Investor note: The platform is ready to host the simulator; deployment is pending the latest Unity build artifact.
        </div>
      </div>
    );
  }

  return (
    <div className="aspect-video w-full overflow-hidden rounded-xl border border-zinc-800 bg-black">
      <iframe
        src={src}
        className="h-full w-full"
        title="SAQR Unity WebGL Simulator"
        allow="fullscreen"
      />
    </div>
  );
}