import SourceDTO from '../dtos/SourceDTO';
import Source from '../entities/Source';

// TODO: Add check for souceDto type

export default function mapSourceDTOToSource(sourceDto) {
  let source = new Source({ uid: sourceDto.uid, name: sourceDto.name });

  if(sourceDto.lat) {
    source.lat = sourceDto.lat;
  }

  if(sourceDto.lng) {
    source.lng = sourceDto.lng;
  }

  return source;
}