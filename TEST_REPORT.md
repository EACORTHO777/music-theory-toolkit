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

**Example** (shows what a filled-in row can look like — remove this example table before
submitting):

| What was tested                                                        | How it was tested                                                                                                       | Result                                                                       |
| ------------------------------------------------------------------------ | --------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------ |
| `new Note("C#4")` reads name and octave | Automated unit test (node:test): created a Note and checked that `name` is `"C#"` and `octave` is `4` | ✅ Passed                                                                    |
| `Picture.getPixelAt(x, y)` with coordinates outside the image.         | Manual test via the Test-App's interface: entered a coordinate pair larger than the image's width/height and observed the output. | ❌ Didn't throw an error initially — fixed, now throws a clear exception. |

**My test results:**

| What was tested | How it was tested | Result |
| ---------------- | ------------------ | ------- |
| `new Note("C#4")` reads name and octave |  Automated unit test (node:test): created a Note and checked that `name` is `"C#"` and `octave` is `4` | ✅ Passed        |
| `note.transpose(2)` transposes a note up by semitones                 | Automated unit test (node:test): created `new Note("C#4")`, called `transpose(2)` and checked that name is `"D#"` and octave is `4`                  | ✅ Passed      |
| `note.transpose(-2)` transposes a note down by semitones                  | Automated unit test (node:test): created `new Note("C4")`, called `transpose(-2)` and checked that name is `"A#"` and octave is `3`                   | ✅ Passed        |
| `new Note()` throws an error if invalid note name                 |Automated unit test (node:test): called `new Note("H4")` and checked that it `throws an error`                    |✅ Passed         |
| `new Note()` throws an error if invalid octave                 |Automated unit test (node:test): called `new Note("Cx")` and checked that it `throws an error`                    |✅ Passed         |
| `frequency` shows note frequency                   | Automated unit test (node:test): called `new Note("A4").frequency` and `new Note("A5").frequency` checked that it returns `440` and `880`                   | ✅ Passed         |
| `new Note()` converts flat names to sharp names (e.g. Bb -> A#)                   | Automated unit test (node:test): called `new Note("Bb4").name` and `new Note("Eb4").name` checked that it returns `A#` and `D#`                   | ✅ Passed         |
|                   |                    |         |
|                   |                    |         |
|                   |                    |         |
|                   |                    |         |
|                   |                    |         |
|                   |                    |         |
|                   |                    |         |
|                   |                    |         |
|                   |                    |         |
|                   |                    |         |
|                   |                    |         |
|                   |                    |         |
|                   |                    |         |
|                   |                    |         |
|                   |                    |         |
|                   |                    |         |
|                   |                    |         |
|                   |                    |         |
|                   |                    |         |

