import fs from 'fs'
import path from 'path'

export function readFile(filepath: string){
   return fs.readFileSync(path.resolve(filepath)).toString()
}


export function saveFile(filepath, content){
    return fs.writeFileSync(path.resolve(filepath), content)
 }
 