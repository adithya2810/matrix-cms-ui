

export default function (type) {
  switch (type) {
    case 'Video':
      return "/icons/video.svg";
    case 'Article':
      return "/icons/icon_Podcast_Black.svg";
    default:
      return "/icons/video.svg"
  }
}
