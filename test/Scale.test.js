import { test } from 'node:test'
import assert from 'node:assert'
import { Note } from '../src/Note.js'
import { Scale } from '../src/Scale.js'

test('builds a major scale', () => {
  const scale = new Scale(new Note("C4"), "major")

  const noteNames = scale.notes.map(note => note.name)

  assert.deepStrictEqual(noteNames, ["C", "D", "E", "F", "G", "A", "B"])
})

test('builds a minor scale', () => {
  const scale = new Scale(new Note("A4"), "minor")

  const noteNames = scale.notes.map(note => note.name)

  assert.deepStrictEqual(noteNames, ["A", "B", "C", "D", "E", "F", "G"])
})

test('throw error if invalid scale', () => {
  assert.throws(() => {
    new Scale(new Note("C4"), "banana")
  })
})

test('tone is in the scale', () => {
  const scale = new Scale(new Note ("C4"), "major")

  assert.strictEqual(scale.contains(new Note("E4")), true)
  assert.strictEqual(scale.contains(new Note("F#4")), false)
})

test('builds a dorian scale', () => {
  const scale = new Scale(new Note("D4"), "dorian")

  const noteNames = scale.notes.map(note => note.name)

  assert.deepStrictEqual(noteNames, ["D", "E", "F", "G", "A", "B", "C"])
})

test('builds a relative minor scale from a major scale', () => {
  const scale = new Scale(new Note ("C4"), "major")

  const relativeScale = scale.relative()

  assert.strictEqual(relativeScale.rootNote.name, "A")
  assert.strictEqual(relativeScale.type, "minor")
})

test('builds a relative major scale from a minor scale', () => {
  const scale = new Scale(new Note ("A4"), "minor")

  const relativeScale = scale.relative()

  assert.strictEqual(relativeScale.rootNote.name, "C")
  assert.strictEqual(relativeScale.type, "major")
})

test('relative throws error for scales that are not major or minor', () => {
  assert.throws(() => {
    new Scale(new Note("C4"), "dorian").relative()
  })
})