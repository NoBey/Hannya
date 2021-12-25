import { GlobalStyle } from './styles/GlobalStyle'

import { Greetings } from './components/Greetings'
import { CatalogTree } from './components/CatalogTree'
import './index.less'
import { useEffect, useState, KeyboardEvent } from 'react'
import { NavBar } from './components/NavBar'


const Main = window.Main

function Edit() {
  const [text, setText] = useState('')
  const [filePath, setFilePath] = useState()
  const [isEdit, setIsEdit] = useState(false)


  const openFile = async () => {
   const { canceled, filePath } =  await Main.getOpenFilePath()
   console.log(canceled)
   console.log(filePath)

   if(!canceled){
    const text = await Main.getFile(filePath)
    console.log(text)
    setFilePath(filePath)
    setText(text)
   }
  }

  const saveFile = async () => {
    let file = filePath
    if(!file){
     const { canceled, filePath: _filePath}  =  await Main.getSaveFilePath()
     if(canceled) return
     file = _filePath
    }
    Main.saveFile(file, text)
    setIsEdit(false)
  }

  const onKeyDown = (e: KeyboardEvent) => {
    if(e.metaKey && e.key === 's'){
      saveFile()
    }
  }

  // useEffect(() => {
  //   Main.getFile().then(t => setText(t))
  // }, [])

  return (
    <div className={'edit'} onKeyDown={onKeyDown}>
      <button onClick={openFile}>open</button>
      <button onClick={saveFile}>save</button>
      <span>{filePath || '未命名'}{isEdit ? "-已编辑" : ""}</span>
      <textarea value={text} onChange={e => {
        setText(e.target.value)
        setIsEdit(true)
      } } />
    </div>
  )
}

export function App() {
  return (
    <>
      <NavBar />
      <div className={'app'}>
        {/* <CatalogTree></CatalogTree> */}
        <Edit />
      </div>
    </>
  )
}
