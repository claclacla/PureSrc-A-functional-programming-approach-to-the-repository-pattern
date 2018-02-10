import IEntity from './IEntity';

class Source extends IEntity {
  constructor({ uid, name }) {
    super(uid);

    this.name = name;
  }
}

export default Source;