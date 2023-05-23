// import markdown library
import { marked } from "marked";

marked.use({
  headerIds: false,
  mangle: false,
});

const MarkdownPreview = ({ markdown }) => {
  // const renderedHTML
  const render = marked.parse(markdown)

  return <div dangerouslySetInnerHTML={{__html: render}} id="preview"></div> 
}

export default MarkdownPreview;