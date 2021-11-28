export class MusicBrainzReleaseGroup {
  id: string;
  'primary-type': string;
  'type-id': string;
  title: string;


  constructor() {
    this.title = '';
    this["type-id"] = '';
    this["primary-type"] = '';
    this.id = '';
  }
}
