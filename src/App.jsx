import "bootstrap/dist/css/bootstrap.min.css";
import { useEffect, useState } from 'react';
import MarkdownPreview from './components/MarkdownPreview';
import presetMarkdown from './data/presetMarkdown';
import Footer from "./components/Footer";

function App() {
  const [input, setInput] = useState('');

  useEffect(() => {
    setInput(presetMarkdown)
  }, [])

  return (
    <div className='container'>
      <h1 className='mt-3 mb-3'>Enter your markdown:</h1>
      <div className="row">
        <div className='col-6'>
        <textarea className='form-control mb-3' value={input} onInput={e => setInput(e.target.value)} name="editor" id="editor" cols="30" rows="10"></textarea>
        </div>
        <div className='col-6'>
        <MarkdownPreview  markdown={input}/>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default App
