const electron = require('electron');
const path = require('path');
const _ = require('lodash');

const { app, BrowserWindow, ipcMain, shell } = electron;

let mainWindow;

app.on('ready', () => {
  mainWindow = new BrowserWindow({
    webPreferences: { backgroundThrottling: false },
    show: false
  });
  mainWindow.loadURL(`file://${__dirname}/src/index.html`);
  mainWindow.maximize();
  mainWindow.show();
});

ipcMain.on('getDownloadPath', (event) => {
  mainWindow.webContents.send('getDownloadPath', path.join(app.getPath('downloads'), 'chi_downloads'));
});

ipcMain.on('folder:open', (event, outputPath) => {
  shell.showItemInFolder(outputPath);
});
