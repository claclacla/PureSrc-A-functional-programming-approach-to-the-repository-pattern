class SourceCoordinates {
  constructor({ lat, lng }) {
    if (lat === undefined) {
      throw new Error("The lat parameter is required");
    }

    if (lng === undefined) {
      throw new Error("The lng parameter is required");
    }

    this.lat = lat;
    this.lng = lng;
  }
}

module.exports = SourceCoordinates;