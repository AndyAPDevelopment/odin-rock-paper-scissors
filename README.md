# odin-rock-paper-scissors

# Rock Paper Scissors

A console-based implementation of the classic Rock Paper Scissors game built with JavaScript as part of [The Odin Project](https://www.theodinproject.com/) Foundations curriculum.

## Overview

The game runs entirely in the browser's developer console and plays a 5-round match between a human player and the computer.

### Features
- **Randomized Computer Choices:** Uses `Math.random()` to evenly select `"rock"`, `"paper"`, or `"scissors"`.
- **Case-Insensitive Player Input:** Accepts variations like `"rock"`, `"ROCK"`, or `"RocK"` via browser `prompt()`.
- **Score Tracking & Match Summary:** Tracks round-by-round outcomes over 5 rounds and declares an overall winner at the end.

## How to Run

1. Clone or download this repository.
2. Open `index.html` in your web browser.
3. Open the browser's Developer Tools (`F12` or `Ctrl + Shift + I` / `Cmd + Option + I`) and switch to the **Console** tab.
4. Follow the prompts to enter your choice for each of the 5 rounds.

## Concepts Practiced
- JavaScript functions, parameters, and return values
- Conditional logic (`if / else if / else`) and logical operators
- Lexical scoping and local state management
- `for` loops and string methods (`.toLowerCase()`)