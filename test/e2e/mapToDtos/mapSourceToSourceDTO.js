import UID from '../lib/uid/UID';

import SourceDTO from '../dtos/SourceDTO';
import Source from '../entities/Source';

// TODO: Add check for souce type

export default function mapSourceToSourceDTO(source) {
  let uid = source.uid ? source.uid : UID.create();

  let sourceDto = new SourceDTO({ uid, name: source.name });

  if(source.lat) {
    sourceDto.lat = source.lat;
  }

  if(source.lng) {
    sourceDto.lng = source.lng;
  }

  return sourceDto;
}