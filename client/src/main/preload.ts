const { contextBridge, ipcRenderer } = require('electron')
// Communicate asynchronously from a renderer process to the main process.
// Create a safe, bi-directional, synchronous bridge across isolated contexts
contextBridge.exposeInMainWorld('ipcRenderer', {
    // create: () => { return ipcRenderer },
    send: (channel, ...args) => ipcRenderer.send(channel, args),
    on: (channel, listener) => ipcRenderer.on(channel, listener)
})
console.log("execute preload");

