import { Pipe, PipeTransform } from '@angular/core';
import { SocialMedia } from '../Enums/socialMedia';

@Pipe({
  name: 'socialmediaName'
})
export class SocialmediaNamePipe implements PipeTransform {

  transform(value: SocialMedia, ...args: unknown[]): unknown {
    return value === SocialMedia.Facebook
    ? "Facebook"
    : value === SocialMedia.Instagram
    ? "Instagram"
    : value === SocialMedia.LinkedIn
    ? "LinkedIn"
    : value === SocialMedia.Pinterest
    ? "Pinterest"
    : value === SocialMedia.Twitter
    ? "Twitter"
    : value === SocialMedia.Youtube
    ? "Youtube"
    : "Unknown"
  }

}
