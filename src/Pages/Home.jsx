import React, { useState, useEffect } from 'react'
import ExampleMarkdown from '../static/example.md'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'


export default function Home() {
  const [mdFile, setMdFile] = useState('')

  useEffect(() => {
    fetch(ExampleMarkdown)
      .then((resp) => resp.text())
      .then((txt) => setMdFile(txt))
  }, [mdFile])
  
  console.log("mdFile", mdFile)
  return (
    <div style={{
      padding: '12rem',
    }}>
      <div style={{
        // height: '80vh',
        padding: '5rem',
        borderRadius: '2rem',
        boxShadow:
                  `0 2.8px 2.2px rgba(0, 0, 0, 0.034),
                  0 6.7px 5.3px rgba(0, 0, 0, 0.048),
                  0 12.5px 10px rgba(0, 0, 0, 0.06),
                  0 22.3px 17.9px rgba(0, 0, 0, 0.072),
                  0 41.8px 33.4px rgba(0, 0, 0, 0.086),
                  0 100px 80px rgba(0, 0, 0, 0.12)`
      }}>
        <ReactMarkdown children={mdFile} remarkPlugins={[remarkGfm]} />
      </div>
    </div>
  )
}
