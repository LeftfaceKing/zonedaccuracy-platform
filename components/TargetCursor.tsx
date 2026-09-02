"use client";

import { useEffect, useRef } from "react";

type TrailPoint = {
  x: number;
  y: number;
};

export default function TargetCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const pathRef = useRef<SVGPathElement>(null);

  useEffect(() => {
    const cursor = cursorRef.current;
    const path = pathRef.current;

    if (!cursor || !path) {
      return;
    }

    const pointerQuery = window.matchMedia("(pointer: fine)");

    if (!pointerQuery.matches) {
      return;
    }

    let mouseX = window.innerWidth / 2;
    let mouseY = window.innerHeight / 2;

    let cursorX = mouseX;
    let cursorY = mouseY;

    let frameId = 0;

    const points: TrailPoint[] = Array.from(
      { length: 22 },
      () => ({
        x: mouseX,
        y: mouseY,
      }),
    );

    const createPath = (trail: TrailPoint[]) => {
      if (trail.length < 2) {
        return "";
      }

      let result = `M ${trail[0].x} ${trail[0].y}`;

      for (let index = 1; index < trail.length - 1; index += 1) {
        const current = trail[index];
        const next = trail[index + 1];

        const midpointX = (current.x + next.x) / 2;
        const midpointY = (current.y + next.y) / 2;

        result += ` Q ${current.x} ${current.y} ${midpointX} ${midpointY}`;
      }

      const finalPoint = trail[trail.length - 1];

      result += ` T ${finalPoint.x} ${finalPoint.y}`;

      return result;
    };

    const showCursor = () => {
      cursor.classList.add("target-cursor-visible");
      path.classList.add("target-trail-visible");
    };

    const hideCursor = () => {
      cursor.classList.remove("target-cursor-visible");
      path.classList.remove("target-trail-visible");
    };

    const handleMouseMove = (event: MouseEvent) => {
      mouseX = event.clientX;
      mouseY = event.clientY;

      showCursor();

      const target = event.target as HTMLElement | null;

      const interactive = target?.closest(
        "a, button, input, textarea, select, [role='button']",
      );

      cursor.classList.toggle(
        "target-cursor-lock",
        Boolean(interactive),
      );
    };

    const handleMouseDown = () => {
      cursor.classList.add("target-cursor-click");
    };

    const handleMouseUp = () => {
      cursor.classList.remove("target-cursor-click");
    };

    const animate = () => {
      cursorX += (mouseX - cursorX) * 0.42;
      cursorY += (mouseY - cursorY) * 0.42;

      cursor.style.transform = `translate3d(${cursorX}px, ${cursorY}px, 0)`;

      points[0].x += (mouseX - points[0].x) * 0.38;
      points[0].y += (mouseY - points[0].y) * 0.38;

      for (let index = 1; index < points.length; index += 1) {
        const previous = points[index - 1];
        const current = points[index];

        const followSpeed = Math.max(
          0.055,
          0.19 - index * 0.005,
        );

        current.x +=
          (previous.x - current.x) * followSpeed;

        current.y +=
          (previous.y - current.y) * followSpeed;
      }

      const reversedPoints = [...points].reverse();

      path.setAttribute(
        "d",
        createPath(reversedPoints),
      );

      frameId = requestAnimationFrame(animate);
    };

    window.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseleave", hideCursor);
    document.addEventListener("mouseenter", showCursor);
    window.addEventListener("mousedown", handleMouseDown);
    window.addEventListener("mouseup", handleMouseUp);

    animate();

    return () => {
      cancelAnimationFrame(frameId);

      window.removeEventListener(
        "mousemove",
        handleMouseMove,
      );

      document.removeEventListener(
        "mouseleave",
        hideCursor,
      );

      document.removeEventListener(
        "mouseenter",
        showCursor,
      );

      window.removeEventListener(
        "mousedown",
        handleMouseDown,
      );

      window.removeEventListener(
        "mouseup",
        handleMouseUp,
      );
    };
  }, []);

  return (
    <>
      <svg
        className="target-trail"
        aria-hidden="true"
      >
        <path ref={pathRef} />
      </svg>

      <div
        ref={cursorRef}
        className="target-cursor"
        aria-hidden="true"
      >
        <span className="cursor-ring cursor-ring-outer" />
        <span className="cursor-ring cursor-ring-inner" />

        <span className="cursor-line cursor-line-top" />
        <span className="cursor-line cursor-line-right" />
        <span className="cursor-line cursor-line-bottom" />
        <span className="cursor-line cursor-line-left" />

        <span className="cursor-dot" />
      </div>
    </>
  );
}