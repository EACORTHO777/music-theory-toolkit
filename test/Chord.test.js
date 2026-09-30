import { test } from 'node:test'
import assert from 'node:assert'
import { Note } from '../src/Note.js'
import { Chord } from '../src/Chord.js'

test('builds a major chord', () => {
  const chord = new Chord(new Note("C4"), "major")
  
  const noteNames = chord.notes.map(note => note.name)

  assert.deepStrictEqual(noteNames, ["C", "E", "G"])
})

test('builds a major7 chord', () => {
  const chord = new Chord(new Note("C4"), "major7")
  
  const noteNames = chord.notes.map(note => note.name)

  assert.deepStrictEqual(noteNames, ["C", "E", "G", "B"])
})

test('throw new error if invalid chord', () => {
  assert.throws(() => {
    new Chord(new Note("C4"), ("banana"))
  })
})

test('checks if a note is in the chord', () => {
  const chord = new Chord(new Note("C4"), "major")

  assert.strictEqual(chord.contains(new Note("E4")), true)
  assert.strictEqual(chord.contains(new Note("D4")), false)
})

test('builds a relative minor chord from a major chord', () => {
  const chord = new Chord(new Note ("C4"), "major")

  const relativeChord = chord.relative()

  assert.strictEqual(relativeChord.rootNote.name, "A")
  assert.strictEqual(relativeChord.type, "minor")
})

test('builds a relative major chord from a minor chord', () => {
  const chord = new Chord(new Note ("A4"), "minor")

  const relativeChord = chord.relative()

  assert.strictEqual(relativeChord.rootNote.name, "C")
  assert.strictEqual(relativeChord.type, "major")
})

test('relative throws error for chords that are not major or minor', () => {
  assert.throws(() => {
    new Chord(new Note("C4"), "diminished").relative()
  })
})

test('returns a new Chord with transposed rootNote', () => {
  const cMajor = new Chord(new Note("C4"), "major")
  const dMajor = cMajor.transpose(2)

  assert.strictEqual(dMajor.rootNote.name, "D")
  assert.strictEqual(dMajor.type, "major")
})

test('returns C minor chord', () => {
  new Chord(new Note("C4"), "minor").toString()

  assert.strictEqual(new Chord(new Note("C4"), "minor").toString(), "C minor")
})