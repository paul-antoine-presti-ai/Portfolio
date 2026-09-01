export type WelcomeVideoType = "local" | "youtube";

export const welcomeVideoConfig = {
  /** "local" pour un fichier dans /public, "youtube" pour une vidéo hébergée */
  type: "local" as WelcomeVideoType,
  /** Chemin vers la vidéo locale (ex: /welcome.mp4) */
  localSrc: "/welcome.mp4",
  /** ID YouTube (ex: "dQw4w9WgXcQ" pour youtube.com/watch?v=dQw4w9WgXcQ) */
  youtubeId: "",
  /** Image affichée avant la lecture */
  poster: "/paul-antoine.jpg",
};
