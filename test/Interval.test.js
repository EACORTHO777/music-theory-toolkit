import { test } from 'node:test'
import assert from 'node:assert'
import { Note } from '../src/Note.js'
import { Interval } from '../src/Interval.js'

test('counts semitones between two notes', () => {
  const interval = new Interval(new Note("C4"), new Note ("E4"))

  assert.strictEqual(interval.semitones, 4)
})