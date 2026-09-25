const INTERVAL_NAMES = [
  "unison",
  "minor second",
  "major second",
  "minor third",
  "major third",
  "perfect fourth",
  "tritone",
  "perfect fifth",
  "minor sixth",
  "major sixth",
  "minor seventh",
  "major seventh",
  "octave"
]
export class Interval {
  constructor(fromNote, toNote) {
    this.fromNote = fromNote
    this.toNote = toNote
  }

  get semitones() {
    return this.toNote.midiNumber - this.fromNote.midiNumber
  }

  get name() {
    return INTERVAL_NAMES[this.semitones]
  }
}