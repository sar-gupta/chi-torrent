export default (state = {}, action) => {
  switch (action.type) {
    case 'ADD_TORRENT':
      // const { id, downloaded, downloadSpeed, progress, location } = action;
      let newState = {...state}
      newState[action.id]=action.files;
      newState[action.id].location = action.location;
      newState[action.id].progress = action.progress;
      newState[action.id].downloadSpeed = action.downloadSpeed;
      return newState;
    default:
      return state;
  }
};