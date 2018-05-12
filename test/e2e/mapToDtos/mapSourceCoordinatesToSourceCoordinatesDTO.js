import SourceCoordinatesDTO from '../dtos/SourceCoordinatesDTO';
import SourceCoordinates from '../entities/SourceCoordinates';

// TODO: Add check for souce type

export default function mapSourceCoordinatesToSourceCoordinatesDTO(sourceCoordinates) {
  let sourceCoordinatesDto = new SourceCoordinatesDTO({ lat: sourceCoordinates.lat, lng: sourceCoordinates.lng });

  return sourceCoordinatesDto;
}