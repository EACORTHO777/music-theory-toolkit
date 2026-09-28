# Music Theory Toolkit

A JavaScript library for developers who want to use music theory in their apps without calculating notes, scales and chords themselves.

## What it does

- Creates tones and transposes them
- Calculates intervals and their names
- Build scales (9 types) and chords (9 types)
- Find relative major/minor
- Calculates a notes frequencies in hz
- Supports both # and b
- Find a tone in a certain scale

## What it doesn't do 

- No sound input or output
- No graphic design
- Does not handle octaves over 9

## Requirements

- Node.js 18 or later
- ES modules

## Installation

- Install the module with npm:
```
npm install github:EACORTHO777/music-theory-toolkit
```

- Import the classes you need:
```js
import { Note, Interval, Scale, Chord } from 'music-theory-toolkit'
```

## Usage

### Note

- A note that either stands by itself, or builds a chord/scale

```js
const note = new Note("C4") 
note.name // "C"
note.octave // 4
note.transpose(2) // Note D4
note.midiNumber // 60
note.frequency // 261.63
``` 
- Tones that includes "b" (e.g Eb) translates to # (e.g D#)
- Error will throw if the name or octave are invalid 

### Interval

- The distance between two tones

```js
const interval = new Interval(new Note("C4"), new Note("E4"))
interval.semitones // 4
interval.name // "major third" 
```

- Interval works upwards (C4 -> E4) and downwards (E4 -> C4). Semitones gets negative down. E4 -> C4 gives -4, although name still remains "major third"
- Interval works if interval is in a higher octave (C4 -> D5) gives "major second" 

### Scale

- A combination of notes creates a scale

```js
const scale = new Scale(new Note("C4"), "major")
scale.notes // [C, D, E, F, G, A, B] (Note objects)
scale.contains(new Note ("E4")) // true
scale.contains(new Note ("F#4")) // false
scale.relative() // Scale: A minor 
```
- Scales in this module:
  - `"major"`
  - `"minor"`
  - `"dorian"`
  - `"phrygian"`
  - `"lydian"`
  - `"mixolydian"`
  - `"locrian"`
  - `"majorPentatonic"`
  - `"minorPentatonic"`
- Throws an error if invalid type and if relative() is something else other than major/minor (e.g. Dorian scale)