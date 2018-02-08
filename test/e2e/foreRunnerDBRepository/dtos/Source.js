class Source {
  constructor(name) {
    if (name === undefined) {
      throw new Error("The name parameter is required");
    }

    this.name = name;
  }
}

export default Source;