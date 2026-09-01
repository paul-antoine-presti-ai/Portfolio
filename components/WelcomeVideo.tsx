"use client";

import { useState } from "react";
import { useTranslation } from "@/hooks/useTranslation";
import { welcomeVideoConfig } from "@/data/video";

export default function WelcomeVideo() {
  const { t } = useTranslation();
  const [videoError, setVideoError] = useState(false);

  const { type, localSrc, youtubeId, poster } = welcomeVideoConfig;
  const hasVideo =
    (type === "local" && localSrc) || (type === "youtube" && youtubeId);

  if (!hasVideo) return null;

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
          <div className="rounded-[13px] overflow-hidden bg-background-secondary aspect-video">
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
              <video
                src={localSrc}
                poster={poster}
                controls
                playsInline
                preload="metadata"
                onError={() => setVideoError(true)}
                className="w-full h-full object-cover bg-black"
              >
                {t("video.unsupported")}
              </video>
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
