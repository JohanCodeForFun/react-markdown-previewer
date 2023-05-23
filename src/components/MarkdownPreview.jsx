// import markdown library
import { marked } from "marked";
import DOMPurify from "dompurify";

marked.use({
  headerIds: false,
  mangle: false,
  breaks: true
});

const MarkdownPreview = ({ markdown }) => {
  const render = marked.parse(markdown)

  return <div dangerouslySetInnerHTML={{__html: DOMPurify.sanitize(render) }}></div>
}

export default MarkdownPreview;