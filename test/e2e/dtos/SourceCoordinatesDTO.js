import IDTO from './IDTO';

class SourceCoordinatesDTO extends IDTO {
  constructor({ lat, lng }) {
    super();

    this.lat = lat;
    this.lng = lng;
  }
}

export default SourceCoordinatesDTO;