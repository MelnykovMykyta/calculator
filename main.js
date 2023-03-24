const { app, BrowserWindow } = require('electron')

const createWindow = () => {
  const win = new BrowserWindow({
    width: 216,
    height: 344,
    resizable: false,
    maximizable: false
  })

  win.loadFile('index.html')
}

app.whenReady().then(() => {
  createWindow()
})