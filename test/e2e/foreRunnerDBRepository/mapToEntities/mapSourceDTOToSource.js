import SourceDTO from '../dtos/SourceDTO';
import Source from '../entities/Source';

export default function mapSourceDTOToSource(sourceDto) {
  let source = new Source({ uid: sourceDto.uid, name: sourceDto.name });

  return source;
}