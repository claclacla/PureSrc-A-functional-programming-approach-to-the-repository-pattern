import IDTO from './IDTO';

class SourceDTO extends IDTO {
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

export default SourceDTO;