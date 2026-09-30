/**
 * The twelve note names of the chromatic scale, in ascending order from C.
 * A note's position in this list is its pitch class (C = 0, C# = 1 ... B = 11).
 */
const NOTE_NAMES = ["C", "C#", "D", "D#", "E", "F", "F#", "G", "G#", "A", "A#", "B"]

/**
 * Maps flat note names to their enharmonic sharp equivalents, so that
 * every note is stored with a name from NOTE_NAMES.
 */
const FLAT_TO_SHARP = {
  Db: "C#",
  Eb: "D#",
  Gb: "F#",
  Ab: "G#",
  Bb: "A#"
}

/**
 * Represents a single musical note with a name and an octave, e.g. C#4.
 */
export class Note {
  /**
   * Creates a note from a string such as "C4", "F#3" or "Bb5".
   * Flat names are converted to their sharp equivalents (Bb → A#).
   *
   * @param {string} noteString - The note name followed by a single-digit octave.
   * @throws {Error} If the note name or the octave is invalid.
   */
  constructor(noteString) {
    this.name = noteString.slice(0, -1)
    if (FLAT_TO_SHARP[this.name]) {
    this.name = FLAT_TO_SHARP[this.name]
    }
    if(!NOTE_NAMES.includes(this.name)) {
      throw new Error("Invalid Note")
    }

    this.octave = Number(noteString.slice(-1))
    if(Number.isNaN(this.octave)) {
      throw new Error("Invalid Octave")
    }
  }
  /**
   * Returns a new note moved up or down by a number of semitones.
   *
   * @param {number} semitones - Number of semitones to move. Negative values move down.
   * @returns {Note} A new transposed note. The original note is not changed.
   */
  transpose(semitones) {
    const position = NOTE_NAMES.indexOf(this.name) + semitones
    // Wraps the position into 0–11, also for negative values.
    const newName = NOTE_NAMES[(position % 12 + 12) % 12]
    const newOctave = this.octave + Math.floor(position / 12)

    return new Note(newName + newOctave)
  }

  /**
   * The MIDI note number of this note (C4 = 60, A4 = 69).
   *
   * @type {number}
   */
  get midiNumber() {
    return (this.octave + 1) * 12 + NOTE_NAMES.indexOf(this.name)
  }

  /**
   * The frequency of this note in hertz, using standard tuning where A4 = 440 Hz.
   *
   * @type {number}
   */
  get frequency() {
    return 440 * 2 ** ((this.midiNumber - 69) / 12)
  }

  /**
   * Returns the note as a string, e.g. "C#4".
   *
   * @returns {string} The note name followed by the octave.
   */
  toString() {
    return this.name + this.octave
  }

  /**
   * Checks if this note has the same name and octave as another note.
   * Enharmonic notes are equal, since flats are stored as sharps (Bb4 equals A#4).
   *
   * @param {Note} otherNote - The note to compare with.
   * @returns {boolean} True if both notes have the same name and octave.
   */
  equals(otherNote) {
    return this.name === otherNote.name && this.octave === otherNote.octave
  }
}
