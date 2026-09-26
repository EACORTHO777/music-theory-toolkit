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