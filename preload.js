const { contextBridge, ipcRenderer } = require("electron");
contextBridge.exposeInMainWorld("tongs", {
    sbsb1:
() => ipcRenderer.invoke("sbsb")
        // return "AAA全国飞aaa"
    
})