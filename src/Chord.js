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

  contains(note) {
    for (const chordNote of this.notes) {
      if (chordNote.name === note.name) {
        return true
      }
    }
    return false
  }

  relative() {
    if(this.type === "major") {
      const relativeRoot = this.rootNote.transpose(-3)
      return new Chord(relativeRoot, "minor")
    } else if (this.type === "minor") {
      const relativeRoot = this.rootNote.transpose(3)
      return new Chord(relativeRoot, "major")
    }
    throw new Error ("Not a major or minor chord")
  }
}