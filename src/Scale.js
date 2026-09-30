import { Chord } from './Chord.js'

/**
 * The notes of each scale type, as semitone distances from the root note.
 */
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

/**
 * Represents a scale built from a root note and a scale type, e.g. D dorian.
 */
export class Scale {
  /**
   * Creates a scale.
   *
   * @param {Note} rootNote - The root note of the scale.
   * @param {string} type - The scale type, e.g. "major", "minor" or "dorian".
   * @throws {Error} If the scale type is not supported.
   */
  constructor(rootNote, type) {
    this.rootNote = rootNote
    this.type = type

    if(!SCALE_PATTERNS[this.type]) {
      throw new Error ("Invalid Scale")
    }
  }

  /**
   * The notes of the scale, starting from the root note.
   *
   * @type {Note[]}
   */
  get notes() {
    const pattern = SCALE_PATTERNS[this.type]

    return pattern.map(semitones => this.rootNote.transpose(semitones))
  }

  /**
   * Checks if a note is part of the scale. Only the note name is compared,
   * so the octave does not matter.
   *
   * @param {Note} note - The note to look for.
   * @returns {boolean} True if the scale contains a note with the same name.
   */
  contains(note) {
    for (const scaleNote of this.notes) {
      if (scaleNote.name === note.name) {
        return true
      }
    }
    return false
  }

  /**
   * Returns the relative scale: a major scale gives its relative minor
   * (C major → A minor), and a minor scale gives its relative major.
   *
   * @returns {Scale} A new relative scale.
   * @throws {Error} If the scale is neither major nor minor.
   */
  relative() {
    if (this.type === "major") {
      const relativeRoot = this.rootNote.transpose(-3)
      return new Scale(relativeRoot, "minor")
    } else if (this.type === "minor") {
        const relativeRoot = this.rootNote.transpose(3)
        return new Scale(relativeRoot, "major")
    }
    throw new Error ("Not a major or minor scale")
  }

  /**
   * Returns a new scale of the same type with the root note moved by a number of semitones.
   *
   * @param {number} semitones - Number of semitones to move. Negative values move down.
   * @returns {Scale} A new transposed scale.
   */
  transpose(semitones) {
    const newRoot = this.rootNote.transpose(semitones)
    return new Scale(newRoot, this.type)
  }

  /**
   * Returns the scale as a string, e.g. "D dorian".
   *
   * @returns {string} The root note name followed by the scale type.
   */
  toString() {
    return this.rootNote.name + " " + this.type
  }

  /**
   * The triads that belong to the scale, one for each scale degree
   * (C major gives C major, D minor, E minor, F major, G major, A minor and B diminished).
   * Each chord is built by stacking every other note of the scale.
   *
   * @type {Chord[]}
   * @throws {Error} If the scale does not have seven notes, e.g. a pentatonic scale.
   */
  get chords() {
    const scaleNotes = this.notes
    if (scaleNotes.length !== 7) {
      throw new Error ("Chords can only be generated for 7-note scales")
    }
    const chords = []
    for (let i = 0; i < scaleNotes.length; i++) {
      // The third and fifth are two and four scale steps above the root, wrapping around the scale.
      const root = scaleNotes[i]
      const third = scaleNotes[(i + 2) % 7]
      const fifth = scaleNotes[(i + 4) % 7]

      const type = this.#chordType(this.#distance(root, third), this.#distance(root, fifth))
      chords.push(new Chord(root, type))
    }
    return chords
  }

  /**
   * Finds the chord type from the semitone distances of the third and fifth above the root.
   *
   * @param {number} thirdDistance - Semitones from the root to the third.
   * @param {number} fifthDistance - Semitones from the root to the fifth.
   * @returns {string} "major", "minor" or "diminished".
   * @throws {Error} If the distances do not match a known chord type.
   */
  #chordType(thirdDistance, fifthDistance) {
    if (thirdDistance === 4 && fifthDistance === 7) {
      return "major"
    } else if (thirdDistance === 3 && fifthDistance === 7) {
      return "minor"
    } else if (thirdDistance === 3 && fifthDistance === 6) {
      return "diminished"
    }
    throw new Error ("Unknown chord type")
  }

  /**
   * Returns the upward distance in semitones from one note to another, within one octave (0–11).
   *
   * @param {Note} fromNote - The lower note.
   * @param {Note} toNote - The upper note.
   * @returns {number} The distance in semitones, between 0 and 11.
   */
  #distance(fromNote, toNote) {
    const rawDistance = toNote.midiNumber - fromNote.midiNumber
    return (rawDistance % 12 + 12) % 12
  }
}
