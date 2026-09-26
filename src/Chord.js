const CHORD_PATTERNS ={
  major: [0, 4, 7],
  minor: [0, 3, 7]
}

export class Chord {
  constructor(rootNote, type) {
    this.rootNote = rootNote
    this.type = type

    if(!CHORD_PATTERNS[this.type]) {
      throw new Error ("Invalid Chord")
    }
  }

  get notes() {
    const pattern = CHORD_PATTERNS[this.type]

    return pattern.map(semitones => this.rootNote.transpose(semitones))
  }
}