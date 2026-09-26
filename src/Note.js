const NOTE_NAMES = ["C", "C#", "D", "D#", "E", "F", "F#", "G", "G#", "A", "A#", "B"]

export class Note {
  constructor(noteString) {
    this.name = noteString.slice(0, -1)

    if(!NOTE_NAMES.includes(this.name)) {
      throw new Error("Invalid Note")
    }

    this.octave = Number(noteString.slice(-1))
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
}