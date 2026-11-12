
"use client";

import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";

export function LivingDots() {
  const [mounted, setMounted] = useState(false);

  const leftRef = useRef<HTMLDivElement>(null);
  const rightRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;

    // Only animate for actual mouse/trackpad pointers.
    const query = window.matchMedia(
      "(min-width: 1150px) and " +
        "(hover: hover) and (pointer: fine) and " +
        "(prefers-reduced-motion: no-preference)"
    );

    const layers = [
      leftRef.current,
      rightRef.current,
    ].filter((layer): layer is HTMLDivElement => !!layer);

    let boxes: {
      layer: HTMLDivElement;
      x: number;
      y: number;
    }[] = [];

    let frame = 0;
    let mouseX = -1000;
    let mouseY = -1000;

    // Measure once rather than recalculating
    // layout on every mouse movement.
    function measure() {
      boxes = layers.map((layer) => {
        const rect = layer.getBoundingClientRect();

        return {
          layer,
          x: rect.left,
          y: rect.top,
        };
      });
    }

    function paint() {
      frame = 0;

      for (const box of boxes) {
        box.layer.style.setProperty(
          "--dot-x",
          `${mouseX - box.x}px`
        );

        box.layer.style.setProperty(
          "--dot-y",
          `${mouseY - box.y}px`
        );

        box.layer.style.setProperty(
          "--dot-active",
          "1"
        );
      }
    }

    function onPointerMove(event: PointerEvent) {
      mouseX = event.clientX;
      mouseY = event.clientY;

      if (!frame) {
        frame = requestAnimationFrame(paint);
      }
    }

    function dim() {
      for (const layer of layers) {
        layer.style.setProperty("--dot-active", "0");
      }
    }

    function stop() {
      cancelAnimationFrame(frame);
      frame = 0;

      window.removeEventListener(
        "pointermove",
        onPointerMove
      );

      window.removeEventListener("resize", measure);
      window.removeEventListener("blur", dim);

      document.documentElement.removeEventListener(
        "pointerleave",
        dim
      );

      dim();
    }

    function update() {
      stop();

      if (!query.matches) return;

      measure();

      window.addEventListener(
        "pointermove",
        onPointerMove,
        { passive: true }
      );

      window.addEventListener("resize", measure);
      window.addEventListener("blur", dim);

      document.documentElement.addEventListener(
        "pointerleave",
        dim
      );
    }

    update();
    query.addEventListener("change", update);

    return () => {
      query.removeEventListener("change", update);
      stop();
    };
  }, [mounted]);

  if (!mounted) return null;

  return createPortal(
    <div
      className="living-dots-frame"
      aria-hidden="true"
    >
      <div className="living-dots-track">
        {/* Left band */}
        <div className="living-dots-band living-dots-left">
          <div className="living-dots-field">
            <div className="living-dots-base" />

            <div
              ref={leftRef}
              className="living-dots-lit"
            />
          </div>
        </div>

        {/* Right band */}
        <div className="living-dots-band living-dots-right">
          <div className="living-dots-field">
            <div className="living-dots-base" />

            <div
              ref={rightRef}
              className="living-dots-lit"
            />
          </div>
        </div>
      </div>
    </div>,
    document.body
  );
}
