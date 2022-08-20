import React, {useState} from 'react'

export default function Forms(props) {

  const clickUp= () => {
console.log("on click is click")
let SetText2=text.toUpperCase()
setText(SetText2)
  }
  const clickUpl= () => {
    console.log("on click is click")
    let SetText2=text.toLowerCase()
    setText(SetText2)
      }
      
      const copyText= (event) => {
        console.log("click")
      let copyInput =document.getElementById("exampleFormControlTextarea1")
      copyInput.select();
      navigator.clipboard.writeText(copyInput.value)
      alert("Your text has been copied")
      
          }
          const clearText= (event) => {
            console.log("click")
          let clearInput =""
         setText(clearInput)}
  const handleOnchange= (event) => {
    console.log("oncheck")
setText(event.target.value)

  }
      const [text,setText] = useState('')
      
  return (
    <>
 
    <div className='container'>
<div className="mb-8">
  <label for="exampleFormControlTextarea1" className="form-label">Example textarea</label>
  <textarea className="form-control" id="exampleFormControlTextarea1"  value={text}  onChange={handleOnchange} rows="8" ></textarea>
</div>
<button type="button" className="btn btn-primary my-3 " onClick={clickUp}>Covert to Uppercase</button>
<button type="button" className="btn btn-primary my-3  mx-2" onClick={clickUpl}>Covert to Lowercase</button>
<button type="button" className="btn btn-primary my-3  mx-2 "  value={text} onClick={copyText}>Copy Text</button>
<button type="button" className="btn btn-primary my-3  mx-2 "  value={text} onClick={clearText}>Clear Text</button>

    </div>
    <div className="container">
      <h2>About text</h2>
      <p>word {text.split(" ").length} and {text.length} letter</p>
      <p>Timing to read all {0.08*text.split(" ").length}</p>
      <h1 className='color=red'>Preview</h1>
      <p>{text}</p>
    </div>
    </>
  )

  }