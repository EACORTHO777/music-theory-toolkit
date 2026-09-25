const NOTE_NAMES = ["C", "C#", "D", "D#", "E", "F", "F#", "G", "G#", "A", "A#", "B"]

export class Note {
  constructor(noteString) {
    this.name = noteString.slice(0, -1)
    this.octave = Number(noteString.slice(-1))
  }
  transpose(semitones) {
    const position = NOTE_NAMES.indexOf(this.name) + semitones
    const newName = NOTE_NAMES[position % 12]
    const newOctave = this.octave + Math.floor(position / 12)

    return new Note(newName + newOctave)
  }
}