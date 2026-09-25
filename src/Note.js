export class Note {
  constructor(noteString) {
    this.name = noteString.slice(0, -1)
    this.octave = Number(noteString.slice(-1))
  }
}