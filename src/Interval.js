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
    let semitones = this.semitones
    if(semitones < 0) {
       semitones = -this.semitones
    } 
    if (semitones > 12) {
      semitones = semitones % 12 
    }
    return INTERVAL_NAMES[semitones]
  }
}