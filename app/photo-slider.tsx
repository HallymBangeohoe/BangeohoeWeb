"use client";

import { useEffect, useRef, useState } from "react";

const photos = Array.from({ length: 8 }, (_, index) => ({
  src: `/club-photos/club-${String(index + 1).padStart(2, "0")}.webp`,
  alt: `방어회 활동 사진 ${index + 1}`,
}));

export default function PhotoSlider() {
  const [current, setCurrent] = useState(0);
  const [paused, setPaused] = useState(false);
  const touchStart = useRef<number | null>(null);

  const move = (direction: number) => {
    setCurrent((index) => (index + direction + photos.length) % photos.length);
  };

  useEffect(() => {
    if (paused) return;
    const timer = window.setInterval(() => move(1), 5200);
    return () => window.clearInterval(timer);
  }, [paused]);

  return (
    <section
      className="photo-slider"
      aria-label="방어회 활동 사진 슬라이드"
      tabIndex={0}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocus={() => setPaused(true)}
      onBlur={() => setPaused(false)}
      onKeyDown={(event) => {
        if (event.key === "ArrowLeft") move(-1);
        if (event.key === "ArrowRight") move(1);
      }}
      onTouchStart={(event) => {
        touchStart.current = event.touches[0]?.clientX ?? null;
        setPaused(true);
      }}
      onTouchEnd={(event) => {
        const end = event.changedTouches[0]?.clientX;
        if (touchStart.current !== null && end !== undefined) {
          const distance = end - touchStart.current;
          if (Math.abs(distance) > 45) move(distance > 0 ? -1 : 1);
        }
        touchStart.current = null;
        setPaused(false);
      }}
    >
      <div className="photo-slider__heading">
        <div>
          <span>ACTIVITY ARCHIVE</span>
          <h3>함께한 순간들</h3>
        </div>
        <p aria-live="polite">
          <strong>{String(current + 1).padStart(2, "0")}</strong>
          <span>/ {String(photos.length).padStart(2, "0")}</span>
        </p>
      </div>

      <div className="photo-slider__viewport">
        <div
          className="photo-slider__track"
          style={{ transform: `translate3d(-${current * 100}%, 0, 0)` }}
        >
          {photos.map((photo, index) => (
            <figure className="photo-slider__slide" aria-hidden={index !== current} key={photo.src}>
              <img src={photo.src} alt={photo.alt} loading="lazy" draggable={false} />
              <figcaption>DEFENSE CLUB · ACTIVITY {String(index + 1).padStart(2, "0")}</figcaption>
            </figure>
          ))}
        </div>

        <button className="photo-slider__arrow photo-slider__arrow--prev" type="button" onClick={() => move(-1)} aria-label="이전 사진">←</button>
        <button className="photo-slider__arrow photo-slider__arrow--next" type="button" onClick={() => move(1)} aria-label="다음 사진">→</button>
      </div>

      <div className="photo-slider__dots" aria-label="사진 선택">
        {photos.map((photo, index) => (
          <button
            className={index === current ? "is-active" : ""}
            type="button"
            onClick={() => setCurrent(index)}
            aria-label={`${index + 1}번째 사진 보기`}
            aria-current={index === current ? "true" : undefined}
            key={photo.src}
          />
        ))}
      </div>
    </section>
  );
}
