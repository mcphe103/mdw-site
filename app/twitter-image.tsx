import { createSocialImage, socialImageSize } from "./social-image";

export const alt =
  "McPherson Digital Works — dependable websites for Modesto and Central Valley small businesses";
export const size = socialImageSize;
export const contentType = "image/png";

export default function TwitterImage() {
  return createSocialImage();
}
