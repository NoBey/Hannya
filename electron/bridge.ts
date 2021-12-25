import { contextBridge, ipcRenderer } from 'electron'

export const api = {
  /**
   * Here you can expose functions to the renderer process
   * so they can interact with the main (electron) side
   * without security problems.
   *
   * The function below can accessed using `window.Main.sendMessage`
   */

  sendMessage: async (message: string) => {
    ipcRenderer.send('message', message)
    

  },

  async getFile(filePath: any){
   return  await ipcRenderer.invoke('getFile', filePath)
  },

  async saveFile(...arg){
    return  await ipcRenderer.invoke('saveFile', ...arg)
   },

  async getOpenFilePath(){
    return  await ipcRenderer.invoke('getOpenFilePath')
  },
  async getSaveFilePath(){
    return  await ipcRenderer.invoke('getSaveFilePath')
  },

  /**
   * Provide an easier way to listen to events
   */
  on: (channel: string, callback: Function) => {
    ipcRenderer.on(channel, (_: any, data: any) => callback(data))
  }
}

contextBridge.exposeInMainWorld('Main', api)
