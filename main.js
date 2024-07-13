const { app,BrowserWindow,ipcMain } = require("electron");
const path = require("path");

function createWindow() {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      preload: path.join(__dirname, "preload.js"),
      // devTools:false //关闭调试工具
    },
    autoHideMenuBar: true,
  });
    // 注意：
  //  因为我们加载的是Vue 构建后的dist 目录，所以我们需要改一下， load
  //  的文件地址。
  win.loadFile("dist/index.html");
}
ipcMain.handle("sbsb", async () => {
  console.log("sbsb11");
  return "AAA全国飞aaaaasssssssssssssssssssssssa";
  //拉取测试
});
app.whenReady().then(() => {
  createWindow();

  app.on("activate", () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow();
    }
  });
});

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit();
  }
});