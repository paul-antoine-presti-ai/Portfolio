"use client";

import { useRef, useState } from "react";
import { useTranslation } from "@/hooks/useTranslation";
import { welcomeVideoConfig } from "@/data/video";

function PlayIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
      className={className}
    >
      <path d="M8 5.14v13.72a1 1 0 0 0 1.5.86l11.04-6.86a1 1 0 0 0 0-1.72L9.5 4.28A1 1 0 0 0 8 5.14Z" />
    </svg>
  );
}

export default function WelcomeVideo() {
  const { t } = useTranslation();
  const videoRef = useRef<HTMLVideoElement>(null);
  const [videoError, setVideoError] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);

  const { type, localSrc, youtubeId, poster } = welcomeVideoConfig;
  const hasVideo =
    (type === "local" && localSrc) || (type === "youtube" && youtubeId);

  if (!hasVideo) return null;

  const handlePlay = async () => {
    const video = videoRef.current;
    if (!video) return;

    try {
      await video.play();
      setIsPlaying(true);
    } catch {
      // Autoplay policies or user gesture edge cases
    }
  };

  return (
    <section id="welcome" className="py-12 px-6 scroll-mt-24">
      <div className="max-w-4xl mx-auto animate-fade-in">
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-3">
            {t("video.title")}
          </h2>
          <p className="text-foreground/60 text-lg max-w-xl mx-auto">
            {t("video.subtitle")}
          </p>
        </div>

        <div className="relative rounded-2xl p-[3px] bg-gradient-to-br from-accent-light via-accent to-accent-hover orange-glow">
          <div className="relative rounded-[13px] overflow-hidden bg-background-secondary aspect-video">
            {type === "youtube" && youtubeId ? (
              <iframe
                src={`https://www.youtube-nocookie.com/embed/${youtubeId}?rel=0`}
                title={t("video.title")}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full border-0"
              />
            ) : videoError ? (
              <div className="w-full h-full flex flex-col items-center justify-center gap-4 p-8 text-center">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={poster}
                  alt="Paul-Antoine Sage"
                  className="w-24 h-24 rounded-full object-cover border-2 border-accent/50"
                />
                <p className="text-foreground/70">{t("video.error")}</p>
              </div>
            ) : (
              <>
                <video
                  ref={videoRef}
                  src={localSrc}
                  poster={poster}
                  controls={isPlaying}
                  playsInline
                  preload="metadata"
                  onError={() => setVideoError(true)}
                  onPlay={() => setIsPlaying(true)}
                  onPause={() => setIsPlaying(false)}
                  onEnded={() => setIsPlaying(false)}
                  className="w-full h-full object-cover bg-black"
                >
                  {t("video.unsupported")}
                </video>

                {!isPlaying && (
                  <button
                    type="button"
                    onClick={handlePlay}
                    aria-label={t("video.play")}
                    className="absolute inset-0 z-10 flex items-center justify-center group cursor-pointer"
                  >
                    <div className="absolute inset-0 bg-black/35 group-hover:bg-black/45 transition-colors" />
                    <div className="relative flex items-center justify-center">
                      <span
                        className="absolute w-24 h-24 md:w-32 md:h-32 rounded-full bg-accent/30 animate-ping"
                        aria-hidden="true"
                      />
                      <span className="relative flex items-center justify-center w-24 h-24 md:w-32 md:h-32 rounded-full bg-accent text-white shadow-2xl orange-glow-strong transition-transform group-hover:scale-110">
                        <PlayIcon className="w-10 h-10 md:w-14 md:h-14 ml-1.5 md:ml-2" />
                      </span>
                    </div>
                    <span className="absolute bottom-6 md:bottom-8 left-1/2 -translate-x-1/2 px-5 py-2 rounded-full glass border border-white/20 text-sm md:text-base font-medium text-white/95">
                      {t("video.play")}
                    </span>
                  </button>
                )}
              </>
            )}
          </div>
        </div>

        <p className="text-center text-sm text-foreground/50 mt-4">
          {t("video.hint")}
        </p>
      </div>
    </section>
  );
}
