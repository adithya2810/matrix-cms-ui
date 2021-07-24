export default function getContentTypeImageUrl(type: string, isBlogContent?: boolean) {
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
        return "/icons/video.svg";
      case 'Article':
        return "/icons/artical.svg";
      case 'Audio':
        return "/icons/icon_Podcast_Black.svg";
      default:
        return "/icons/video.svg"
    }
  }

}
