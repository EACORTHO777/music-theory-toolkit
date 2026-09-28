const SCALE_PATTERNS = {
  major: [0, 2, 4, 5, 7, 9, 11],
  minor: [0, 2, 3, 5, 7, 8, 10],
  dorian: [0, 2, 3, 5, 7, 9, 10],
  phrygian: [0, 1, 3, 5, 7, 8, 10],
  lydian: [0, 2, 4, 6, 7, 9, 11],
  mixolydian: [0, 2, 4, 5, 7, 9, 10],
  locrian: [0, 1, 3, 5, 6, 8, 10],
  majorPentatonic: [0, 2, 4, 7, 9],
  minorPentatonic: [0, 3, 5, 7, 10]
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

  contains(note) {
    for (const scaleNote of this.notes) {
      if (scaleNote.name === note.name) {
        return true
      }
    }
    return false
  }

  relative() {
    if (this.type === "major") {
      const relativeRoot = this.rootNote.transpose(-3)
      return new Scale(relativeRoot, "minor")
    }
  }
}