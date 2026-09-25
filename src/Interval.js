export class Interval {
  constructor(fromNote, toNote) {
    this.fromNote = fromNote
    this.toNote = toNote
  }

  get semitones() {
    return this.toNote.midiNumber - this.fromNote.midiNumber
  }
}