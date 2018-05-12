import SourceCoordinatesDTO from '../dtos/SourceCoordinatesDTO';
import SourceCoordinates from '../entities/SourceCoordinates';

// TODO: Add check for souceDto type

export default function mapSourceCoordinatesDTOToSourceCoordinates(sourceCoordinatesDto) {
  let sourceCoordinates = new SourceCoordinates({ lat: sourceCoordinatesDto.lat, lng: sourceCoordinatesDto.lng });

  return sourceCoordinates;
}