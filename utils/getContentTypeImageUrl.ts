

export default function (type) {
  switch (type) {
    case 'Video':
      return "/icons/video.svg";
    case 'Article':
      return "/icons/artical.svg";
    default:
      return "/icons/video.svg"
  }
}
