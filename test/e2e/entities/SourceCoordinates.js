import IEntity from './IEntity';

class SourceCoordinates extends IEntity {
  constructor({ lat, lng }) {
    super();

    this.lat = lat;
    this.lng = lng;
  }
}

export default SourceCoordinates;