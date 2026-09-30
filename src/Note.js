const NOTE_NAMES = ["C", "C#", "D", "D#", "E", "F", "F#", "G", "G#", "A", "A#", "B"]

const FLAT_TO_SHARP = {
  Db: "C#",
  Eb: "D#",
  Gb: "F#",
  Ab: "G#",
  Bb: "A#"
}

export class Note {
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
  transpose(semitones) {
    const position = NOTE_NAMES.indexOf(this.name) + semitones
    const newName = NOTE_NAMES[(position % 12 + 12) % 12]
    const newOctave = this.octave + Math.floor(position / 12)

    return new Note(newName + newOctave)
  }

  get midiNumber() {
    return (this.octave + 1) * 12 + NOTE_NAMES.indexOf(this.name)
  }

  get frequency() {
    return 440 * 2 ** ((this.midiNumber - 69) / 12)
  }

  toString() {
    return this.name + this.octave
  }
}