import IEntity from './IEntity';

class Source extends IEntity {
  constructor({ uid, name, lat, lng }) {
    super(uid);

    this.name = name;

    if(lat) {
      this.lat = lat;
    }

    if(lng) {
      this.lng = lng;
    }
  }
}

export default Source;