# Test Report

<!--
    Commit this file to the root of your GitHub repository, alongside your module's code.
    It is required regardless of how you tested your module — even if your tests live in a
    test application or use a testing framework, summarize them here.
-->

## Summary

*Briefly describe how you tested your module, and why you chose that approach — clearly enough
that someone else could carry out the same tests. What was hardest to test, and why?*

*If you used a testing framework, you may link to its generated report or include screenshots of
the test run here.*

Answer:

The tests were applied by using node:test and by self written automated tests. There is one test file per class in the /test folder, 26 tests in total. 

How to run tests: 
```
npm test
``` 
The reason for choosing this line of testing was to make sure I'm in as much control over the tests as possible. The choice was also based on that node:test is built into Node.js, so therefore no need for any installation. 

The tests were also written first so I could watch it fail before I wrote the code. 

The hardest part was a test for relative() on chords that passed for the wrong reason. It initially threw an error on a chord that was accepted for the wrong reason. "Dorian" was not a valid chord-type, so in this case it was the constructor that threw the error, not the function, relative(), itself. 

## Test Results

| What was tested | How it was tested | Result |
| ---------------- | ------------------ | ------- |
| `new Note("C#4")` reads name and octave |  Automated unit test (node:test): created a Note and checked that `name` is `"C#"` and `octave` is `4` | ✅ Passed        |
| `note.transpose(2)` transposes a note up by semitones                 | Automated unit test (node:test): created `new Note("C#4")`, called `transpose(2)` and checked that name is `"D#"` and octave is `4`                  | ✅ Passed      |
| `note.transpose(-2)` transposes a note down by semitones                  | Automated unit test (node:test): created `new Note("C4")`, called `transpose(-2)` and checked that name is `"A#"` and octave is `3`                   | ✅ Passed        |
| `new Note()` throws an error if invalid note name                 |Automated unit test (node:test): called `new Note("H4")` and checked that it `throws an error`                    |✅ Passed         |
| `new Note()` throws an error if invalid octave                 |Automated unit test (node:test): called `new Note("Cx")` and checked that it `throws an error`                    |✅ Passed         |
| `frequency` shows note frequency                   | Automated unit test (node:test): called `new Note("A4").frequency` and `new Note("A5").frequency` checked that it returns `440` and `880`                   | ✅ Passed         |
| `new Note()` converts flat names to sharp names (e.g. Bb -> A#)                   | Automated unit test (node:test): called `new Note("Bb4").name` and `new Note("Eb4").name` checked that it returns `A#` and `D#`                   | ✅ Passed         |
| `interval.semitones` counts semitones between two notes                   | Automated unit test (node:test): called `new Interval(new Note("C4"), new Note ("E4"))` and checked that `semitones` is `4`                   | ✅ Passed         |
| `interval.name` returns the name of the interval                  | Automated unit test (node:test): called `new Interval(new Note("C4"), new Note ("E4"))` and checked that `interval.name` is `"major third"`                   | ✅ Passed         |
| `interval.name` returns the name of the descending interval                  | Automated unit test (node:test): called `new Interval(new Note("E4"), new Note ("C4"))` and checked that `interval.name` is `"major third"`                   | ✅ Passed         |
| `interval.name` names an interval larger than an octave                 | Automated unit test (node:test): called `new Interval(new Note("C4"), new Note ("D5"))` and checked that `interval.name` is `"major second"`                   | ✅ Passed         |
| `scale.notes` builds a major scale                 | Automated unit test (node:test): called `new Scale(new Note("C4"), "major")` and checked that `notes` is `"C, D, E, F, G, A, B"`                   | ✅ Passed         |
| `scale.notes` builds a minor scale                 | Automated unit test (node:test): called `new Scale(new Note("A4"), "minor")` and checked that `notes` is `"A, B, C, D, E, F, G"`                   | ✅ Passed         |
| `scale.notes` builds a dorian scale               | Automated unit test (node:test): called `new Scale(new Note("D4"), "dorian")` and checked that `notes` is `"D, E, F, G, A, B, C"`                   | ✅ Passed         |
| `new Scale()` throws an error if invalid scale            | Automated unit test (node:test): called `new Scale(new Note("C4"), "banan")` and checked that it throws an error                  | ✅ Passed         |
| `scale.contains` checks if tone is in the scale             | Automated unit test (node:test): created a C4 major scale, called `contains(new Note("E4"))` and `contains(new Note("F#4"))` and checked that they return `true` and `false`                   | ✅ Passed         |
| `scale.relative()` builds a relative minor scale from a major scale | Automated unit test (node:test): created `new Scale(new Note("C4"), "major")`, called `relative()` and checked that `rootNote.name` is `"A"` and `type` is `"minor"` | ✅ Passed |
| `scale.relative()` builds a relative major scale from a minor scale | Automated unit test (node:test): created `new Scale(new Note("A4"), "minor")`, called `relative()` and checked that `rootNote.name` is `"C"` and `type` is `"major"` | ✅ Passed |
| `scale.relative()` throws an error for scales that are not major or minor | Automated unit test (node:test): called `new Scale(new Note("C4"), "dorian").relative()` and checked that it throws an error | ✅ Passed |
| `chord.notes` builds a major chord | Automated unit test (node:test): called `new Chord(new Note("C4"), "major")` and checked that `notes` is `"C, E, G"` | ✅ Passed |
| `chord.notes` builds a major7 chord | Automated unit test (node:test): called `new Chord(new Note("C4"), "major7")` and checked that `notes` is `"C, E, G, B"` | ✅ Passed |
| `new Chord()` throws an error if invalid chord | Automated unit test (node:test): called `new Chord(new Note("C4"), "banana")` and checked that it throws an error | ✅ Passed |
| `chord.contains` checks if a note is in the chord | Automated unit test (node:test): created a C4 major chord, called `contains(new Note("E4"))` and `contains(new Note("D4"))` and checked that they return `true` and `false` | ✅ Passed |
| `chord.relative()` builds a relative minor chord from a major chord | Automated unit test (node:test): created `new Chord(new Note("C4"), "major")`, called `relative()` and checked that `rootNote.name` is `"A"` and `type` is `"minor"` | ✅ Passed |
| `chord.relative()` builds a relative major chord from a minor chord | Automated unit test (node:test): created `new Chord(new Note("A4"), "minor")`, called `relative()` and checked that `rootNote.name` is `"C"` and `type` is `"major"` | ✅ Passed |
| `chord.relative()` throws an error for chords that are not major or minor | Automated unit test (node:test): called `new Chord(new Note("C4"), "diminished").relative()` and checked that it throws an error | ✅ Passed |
