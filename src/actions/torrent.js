import { ipcRenderer } from 'electron';
// import * as path from 'path';
import WebTorrent from 'webtorrent';


let downloadPath;

ipcRenderer.send('getDownloadPath');
ipcRenderer.on('getDownloadPath', (event, loc) => {
  downloadPath = loc;
})

export const addTorrent = (id, files, location, progress, downloadSpeed) => ({
  type: 'ADD_TORRENT',
  id,
  files,
  location,
  progress,
  downloadSpeed
});

export const startAddTorrent = (torrentId, handleClick) => {
  return (dispatch, getState) => {
    // console.log(getState());
    let file;
    const client = new WebTorrent();
    client.add(torrentId, { path: downloadPath }, (torrent) => {
      torrent.on('download', () => {
        // dispatch(addTorrent(torrentId, torrent.files, torrent.name, `${torrent.progress*100}%`, torrent.downloadSpeed));
        console.log('downloading');
      });
      torrent.on('done', () => {
        // console.log(torrent.downloaded);
        // console.log(torrent.path);
        // mainWindow.webContents.send('torrent:completed', torrentId, torrent.path);
        dispatch(addTorrent(torrentId, torrent.files, torrent.name, `${torrent.progress*100}%`, 0));
        
        handleClick();

        // console.log(getState());
      });
    });
  };
};
