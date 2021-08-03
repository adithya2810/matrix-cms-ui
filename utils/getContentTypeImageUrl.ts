export default function getContentTypeImageUrl(type: string, isBlogContent?: boolean, color?: string) {
  if (isBlogContent) {
    switch (type) {
      case 'Video':
        return "/icons/Icon_Video_blue.svg";
      case 'Article':
        return "/icons/icon_artical_blue.svg";
      case 'Audio':
        return "/icons/Icon_Podcast_blue.svg"
      default:
        return "/icons/Icon_Video_blue.svg"
    }
  } else {
    switch (type) {
      case 'Video':
        return color ? "/icons/video-white.svg" : "/icons/video.svg"
      case 'Article':
        return color ? "/icons/artical-white.svg" : "/icons/artical.svg"
      case 'Audio':
        return color ? "/icons/icon_Podcast-white.svg" : "/icons/icon_Podcast_Black.svg"
      default:
        return color ? "/icons/video-white.svg" : "/icons/video.svg"
    }
  }

}
