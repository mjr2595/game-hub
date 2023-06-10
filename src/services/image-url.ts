// https://media.rawg.io/media/games/328/3283617cb7d75d67257fc58339188742.jpg
// https://media.rawg.io/media/crop/600/400/games/328/3283617cb7d75d67257fc58339188742.jpg

const getCroppedImageUrl = (url: string) => {
  const target = "media/";
  const index = url.indexOf(target) + target.length;
  return url.slice(0, index) + "crop/600/400/" + url.slice(index);
};

export default getCroppedImageUrl;
