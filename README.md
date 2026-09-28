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

