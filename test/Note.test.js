import { test } from 'node:test'
import assert from 'node:assert'
import { Note } from '../src/Note.js'

test('reads name and octave from a note string', () => {
  const note = new Note ("C#4")

  assert.strictEqual(note.name, "C#")
  assert.strictEqual(note.octave, 4)
})