/**
 * The notes of each chord type, as semitone distances from the root note.
 */
const CHORD_PATTERNS ={
  major: [0, 4, 7],
  minor: [0, 3, 7],
  diminished: [0, 3, 6],
  augmented: [0, 4, 8],
  sus2: [0, 2, 7],
  sus4: [0, 5, 7],
  major7: [0, 4, 7, 11],
  minor7: [0, 3, 7, 10],
  dominant7: [0, 4, 7, 10]
}

/**
 * Represents a chord built from a root note and a chord type, e.g. C minor.
 */
export class Chord {
  /**
   * Creates a chord.
   *
   * @param {Note} rootNote - The root note of the chord.
   * @param {string} type - The chord type, e.g. "major", "minor" or "dominant7".
   * @throws {Error} If the chord type is not supported.
   */
  constructor(rootNote, type) {
    this.rootNote = rootNote
    this.type = type

    if(!CHORD_PATTERNS[this.type]) {
      throw new Error ("Invalid Chord")
    }
  }

  /**
   * The notes of the chord, starting from the root note.
   *
   * @type {Note[]}
   */
  get notes() {
    const pattern = CHORD_PATTERNS[this.type]

    return pattern.map(semitones => this.rootNote.transpose(semitones))
  }

  /**
   * Checks if a note is part of the chord. Only the note name is compared,
   * so the octave does not matter.
   *
   * @param {Note} note - The note to look for.
   * @returns {boolean} True if the chord contains a note with the same name.
   */
  contains(note) {
    for (const chordNote of this.notes) {
      if (chordNote.name === note.name) {
        return true
      }
    }
    return false
  }

  /**
   * Returns the relative chord: a major chord gives its relative minor
   * (C major → A minor), and a minor chord gives its relative major.
   *
   * @returns {Chord} A new relative chord.
   * @throws {Error} If the chord is neither major nor minor.
   */
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

  /**
   * Returns a new chord of the same type with the root note moved by a number of semitones.
   *
   * @param {number} semitones - Number of semitones to move. Negative values move down.
   * @returns {Chord} A new transposed chord.
   */
  transpose(semitones) {
    const newRoot = this.rootNote.transpose(semitones)
    return new Chord(newRoot, this.type)
  }

  /**
   * Returns the chord as a string, e.g. "C minor".
   *
   * @returns {string} The root note name followed by the chord type.
   */
  toString() {
    return this.rootNote.name + " " + this.type
  }
}
