import { test } from 'node:test'
import assert from 'node:assert'
import { Note } from '../src/Note.js'
import { Chord } from '../src/Chord.js'

test('builds a major chord', () => {
  const chord = new Chord(new Note("C4"), "major")
  
  const noteNames = chord.notes.map(note => note.name)

  assert.deepStrictEqual(noteNames, ["C", "E", "G"])
})

test('throw new error if invalid chord', () => {
  assert.throws(() => {
    new Chord(new Note("C4"), ("banana"))
  })
})