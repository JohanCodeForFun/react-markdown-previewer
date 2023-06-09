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

const presetMarkdown = `# Header (h1)
## Subheading (h2)

Link to [github portfolio](https://github.com/JohanCodeForFun).

\`let meaningOfLife = 42\`

\`\`\`
function printHello() {
  return "Hello"
}
\`\`\`

> Memento Mori

**Example of bold text.**

- Example
- of
- lists.

![Webshop Project](https://jhellberg.com/images/api-store-thumb.png)
`
export default presetMarkdown;