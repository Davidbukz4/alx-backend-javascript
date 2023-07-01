export default class HolbertonClass {
  constructor(size, location) {
    this._size = size;
    this._location = location;
  }

  // returns the value representation
  valueOf() {
    return this._size;
  }

  // returns the string representation
  toString() {
    return this._location;
  }
}
