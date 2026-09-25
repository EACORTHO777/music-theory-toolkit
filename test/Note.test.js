import { test } from 'node:test'
import assert from 'node:assert'
import { Note } from '../src/Note.js'

test('reads name and octave from a note string', () => {
  const note = new Note ("C#4")

  assert.strictEqual(note.name, "C#")
  assert.strictEqual(note.octave, 4)
})

test('transposes a note up by semitones', () => {
  const note = new Note ("C#4")

    const transposed = note.transpose(2)

    assert.strictEqual(transposed.name, "D#")
    assert.strictEqual(transposed.octave, 4)
  
})