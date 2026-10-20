/**
 * Interval names indexed by their size in semitones (0 = unison ... 12 = octave).
 */
const INTERVAL_NAMES = [
  'unison',
  'minor second',
  'major second',
  'minor third',
  'major third',
  'perfect fourth',
  'tritone',
  'perfect fifth',
  'minor sixth',
  'major sixth',
  'minor seventh',
  'major seventh',
  'octave',
]
/**
 * Represents the distance between two notes.
 */
export class Interval {
  /**
   * Creates an interval from one note to another.
   *
   * @param {Note} fromNote - The note the interval starts from.
   * @param {Note} toNote - The note the interval goes to.
   */
  constructor(fromNote, toNote) {
    this.fromNote = fromNote
    this.toNote = toNote
  }

  /**
   * The number of semitones from fromNote to toNote.
   * Negative if the interval goes downwards.
   *
   * @type {number}
   */
  get semitones() {
    return this.toNote.midiNumber - this.fromNote.midiNumber
  }

  /**
   * The name of the interval, e.g. "major third".
   * Descending intervals get the same name as ascending ones, and intervals
   * larger than an octave are reduced to their simple form (C4 → D5 is a "major second").
   *
   * @type {string}
   */
  get name() {
    return INTERVAL_NAMES[this.#simpleSemitones()]
  }

  /**
   * The size of the interval within one octave, always positive (C4 -> D5 gives 2)
   *
   * @returns {number} The number of semitones, between 0 and 12.
   */
  #simpleSemitones() {
    const distance = Math.abs(this.semitones)

    return distance > 12 ? distance % 12 : distance
  }
}
