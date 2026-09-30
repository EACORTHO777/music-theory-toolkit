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

test('transpose a note down by semitones', () => {
  const note = new Note("C4")

  const transposed = note.transpose(-2)

  assert.strictEqual(transposed.name, "A#")
  assert.strictEqual(transposed.octave, 3)
})

test('throw error if invalid note', () => {

  assert.throws(() => {
     new Note("H4")
  })
})

test('throw error if invalid octave', () => {
  assert.throws(() => {
    new Note("Cx")
  })
})

test('note frequencies', () => {

  assert.strictEqual(new Note("A4").frequency, 440)
  assert.strictEqual(new Note ("A5").frequency, 880)
})

test('return b notes to # notes', () => {

  assert.strictEqual(new Note("Bb4").name, "A#")
  assert.strictEqual(new Note("Eb4").name, "D#")
})

test('returns the note name and octave as a string', () => {
  const note = new Note ("C#4")

  assert.strictEqual(note.toString(), "C#4")
})

test('checks if two notes are equal', () => {
  const note = new Note ("C4")

  assert.strictEqual(new Note ("C4").equals(new Note("C4")), true)
  assert.strictEqual(new Note ("C4").equals(new Note("D4")), false)
  assert.strictEqual(new Note ("Bb4").equals(new Note("A#4")), true)
})