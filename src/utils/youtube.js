// Converts any common YouTube URL shape into an embeddable URL.
// The public site just needs a standard embed (with YouTube's own controls) -
// no custom player needed here, unlike the admin panel's editing view.
export const toYoutubeEmbedUrl = (url) => {
  const patterns = [
    /(?:youtube\.com\/watch\?v=)([\w-]{11})/,
    /(?:youtu\.be\/)([\w-]{11})/,
    /(?:youtube\.com\/embed\/)([\w-]{11})/,
  ];
  for (const pattern of patterns) {
    const match = url.match(pattern);
    if (match) return `https://www.youtube.com/embed/${match[1]}`;
  }
  return url;
};