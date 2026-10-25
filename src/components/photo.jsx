"use client";

import React, { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";
import { photos, photoPos, photoSrc, photoSrcSet } from "@/lib/photos";

/** Unsplash photo filling its box. Give the box a size or aspect ratio via className. */
export function Photo({ name, className, priority = false, sizes = "(min-width: 1024px) 50vw, 100vw", alt, children }) {
  const img = useRef(null);
  const [loaded, setLoaded] = useState(false);
  useEffect(() => {
    if (img.current?.complete && img.current.naturalWidth) setLoaded(true);
  }, []);
  return (
    <div data-photo="" data-loaded={loaded ? "" : undefined} className={cn("relative overflow-hidden bg-mist", className)}>
      <img
        ref={img}
        onLoad={() => setLoaded(true)}
        src={photoSrc(name)}
        srcSet={photoSrcSet(name)}
        sizes={sizes}
        alt={alt ?? photos[name][1]}
        loading={priority ? "eager" : "lazy"}
        fetchPriority={priority ? "high" : undefined}
        decoding="async"
        className="absolute inset-0 size-full object-cover"
        style={{ objectPosition: photoPos(name) }}
      />
      {children}
    </div>
  );
}
