// When my markdown previewer first loads, 
// the default text in the #editor field should contain 
// valid markdown that represents at least one of each of 
// the following elements: 
// -- a header (H1 size), 
// -- a sub header (H2 size), 
// -- a link, 
// -- inline code, 
// -- a code block, 
// -- a list item, 
// -- a blockquote, 
// -- an image, and 
// -- bolded text

const presetMarkdown = `# Hej på dig
## test
### ....

// comment ...
// Hur lägger jag till back-ticks?

function count(num1, num2) {
  return num1 * num2
}

bold **text** here!
Italic _text_.
Both **_text_**.


- And of course there are lists.
  - Some are bulleted.
     - With different indentation levels.
        - That look like this.


1. And there are numbered lists too.
1. Use just 1s if you want!
1. And last but not least, let's not forget embedded images:

![freeCodeCamp Logo](https://cdn.freecodecamp.org/testable-projects-fcc/images/fcc_secondary.svg)
`
export default presetMarkdown;