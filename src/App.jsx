import './App.css'
import { useEffect, useId, useState } from 'react';
import MarkdownPreview from './components/MarkdownPreview';
import presetMarkdown from './data/presetMarkdown';

function App() {
  // const id = useId();
  const [input, setInput] = useState('');

  useEffect(() => {
    setInput(presetMarkdown)
  }, [])

  return (
    <>
     <h1>Enter your markdown:</h1>
     <textarea value={input} onInput={e => setInput(e.target.value)} name="editor" id="editor" cols="30" rows="10"></textarea>
     {/* <div id='preview'></div> */}
     <MarkdownPreview  markdown={input}/>
    </>
  )
}

export default App
