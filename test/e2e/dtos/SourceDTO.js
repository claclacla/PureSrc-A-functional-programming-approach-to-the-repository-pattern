import IDTO from './IDTO';

class SourceDTO extends IDTO {
  constructor({ uid, name }) {
    super(uid);

    this.name = name;
  }
}

export default SourceDTO;