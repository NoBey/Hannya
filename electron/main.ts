import { app, BrowserWindow, ipcMain, Menu,dialog  } from 'electron'
import { readFile, saveFile } from './utils'

let mainWindow: BrowserWindow | null

declare const MAIN_WINDOW_WEBPACK_ENTRY: string
declare const MAIN_WINDOW_PRELOAD_WEBPACK_ENTRY: string

// const assetsPath =
//   process.env.NODE_ENV === 'production'
//     ? process.resourcesPath
//     : app.getAppPath()

function createWindow () {
  Menu.setApplicationMenu(null)
  mainWindow = new BrowserWindow({
    // icon: path.join(assetsPath, 'assets', 'icon.png'),
    titleBarStyle: 'hiddenInset',
    spellcheck: false,
    title: 'Hannya',
    width: 1100,
    height: 700,
    frame: false,
    backgroundColor: '#191622',
    webPreferences: {
      nodeIntegration: false,
      contextIsolation: true,
      preload: MAIN_WINDOW_PRELOAD_WEBPACK_ENTRY
    }
  })

  mainWindow.webContents.openDevTools()

  mainWindow.loadURL(MAIN_WINDOW_WEBPACK_ENTRY)

  mainWindow.on('closed', () => {
    mainWindow = null
  })
}

async function registerListeners () {
  /**
   * This comes from bridge integration, check bridge.ts
   */
  ipcMain.on('message', (_, message) => {
    console.log(message)
  })

  ipcMain.handle('test', async (...args) => {
    return readFile()
  })

  ipcMain.handle('getFile', async (ctx, filePath) => {
    return readFile(filePath)
  })
  ipcMain.handle('saveFile', async (ctx, ...args) => {
    return saveFile(...args)
  })

  ipcMain.handle('getOpenFilePath', async (...args) => {
    const { canceled, filePaths } = await dialog.showOpenDialog({ properties: ['openFile'] })
    return { canceled, filePath: filePaths[0] }
  })

  ipcMain.handle('getSaveFilePath', async (...args) => {
    const data = await dialog.showSaveDialog({ defaultPath: "未命名.md", properties: ['createDirectory'] })
    return data
  })


  

}

app.on('ready', createWindow)
  .whenReady()
  .then(registerListeners)
  .catch(e => console.error(e))

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow()
  }
})
