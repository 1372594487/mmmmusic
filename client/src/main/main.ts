// main.js

// Modules to control application life and create native browser window
const { app, BrowserWindow, protocol, Tray, ipcMain } = require('electron')
const path = require('path')
// const _ = require('lodash')
const createWindow = () => {
  // Create the browser window.
  // const appIcon = new Tray(path.join(__dirname, './assets/jie.JPG'))
  const mainWindow = new BrowserWindow({
    width: 1022,
    minWidth: 1022,
    height: 670,
    minHeight: 670,
    webPreferences: {
      preload: path.join(__dirname, 'preload.ts'),
      nodeIntegration: true,
      // contextIsolation: false
    },
    titleBarStyle: 'hidden',
    useContentSize: true,
    // titleBarOverlay: {
    //     color: '#2f3241',
    //     symbolColor: '#74b1be'
    // },
    // transparent: true,
    icon: path.join(__dirname, '../render/assets/img/jie.jpg'),
    // 
    show: false
  })
  mainWindow.once('ready-to-show', () => {
    mainWindow.show()
  })
  // mainWindow.on('resize', _.throttle((e) => {
  //     let sizeData = mainWindow.getSize()
  //     // console.log(JSON.stringify(sizeData));
  //     // mainWindow.webContents.send('resizeEvent', JSON.stringify(sizeData))
  //     mainWindow.webContents.send('resizeEvent', sizeData)
  // }, 300))
  mainWindow.on('resize', (e) => {
    let sizeData = mainWindow.getSize()
    // console.log(JSON.stringify(sizeData));
    // mainWindow.webContents.send('resizeEvent', JSON.stringify(sizeData))
    mainWindow.webContents.send('resizeEvent', sizeData)
  })

  // 关闭窗口
  ipcMain.on('close', () => {
    mainWindow.close();
  });

  // 最小化窗口
  ipcMain.on('minimize', () => {
    mainWindow.minimize();
  });

  //最大化窗口
  ipcMain.on('maximize', () => {
    if (mainWindow.isMaximized()) {
      mainWindow.unmaximize();
    } else {
      mainWindow.maximize();
    }
  });

  // console.log("mainWindow=>", mainWindow);
  // console.log("__dirname", __dirname);
  // console.log("print process.env.npm_lifecycle_event", process.env.npm_lifecycle_event);
  // and load the index.html of the app.
  if (process.env.npm_lifecycle_event === "electron:dev") {
    mainWindow.loadURL('http://localhost:3019')
    // Open the DevTools.
    mainWindow.webContents.openDevTools()

  } else {
    mainWindow.loadFile('dist/index.html')
  }

}


// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.whenReady().then(() => {
  app.on('activate', () => {
    // On macOS it's common to re-create a window in the app when the
    // dock icon is clicked and there are no other windows open.
    if (BrowserWindow.getAllWindows().length === 0) createWindow()
  })
  // Register a custom protocol and intercept existing protocol requests.
  protocol.registerFileProtocol('atom', (request, callback) => {
    const url = request.url.substr(7)
    callback({ path: path.normalize(`${__dirname}/${url}`) })
  })
  createWindow()
})

// const { app, protocol } = require('electron')
// const path = require('path')

// Quit when all windows are closed, except on macOS. There, it's common
// for applications and their menu bar to stay active until the user quits
// explicitly with Cmd + Q.
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit()
})
// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and require them here.
