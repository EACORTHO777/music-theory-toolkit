const SCALE_PATTERNS = {
  major: [0, 2, 4, 5, 7, 9, 11],
  minor: [0, 2, 3, 5, 7, 8, 10]
}

export class Scale {
  constructor(rootNote, type) {
    this.rootNote = rootNote
    this.type = type

    if(!SCALE_PATTERNS[this.type]) {
      throw new Error ("Invalid Scale")
    }
  }
  
  get notes() {
    const pattern = SCALE_PATTERNS[this.type]

    return pattern.map(semitones => this.rootNote.transpose(semitones))
  }
}