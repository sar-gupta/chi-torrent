import React from 'react';
import { connect } from 'react-redux';
import Item from './Item';
import Snackbar from 'material-ui/Snackbar';
import { startAddTorrent } from '../actions/torrent';
import { RaisedButton, TextField } from 'material-ui';

class HomePage extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      open: false,
    };
  }

  handleClick = () => {
    const audio = new Audio('../assets/notif.mp3');
    audio.play();
    this.setState({
      open: true,
    });
  };

  handleRequestClose = () => {
    this.setState({
      open: false
    });
  };


  torrentId;

  onClickHandle = (e) => {
    e.preventDefault();
    this.torrentId = e.target.magnet.value;
    console.log(e.target.magnet.value);
    this.props.onClickHandle(this.torrentId, this.handleClick);
  }

  showAllTorrents = () => {
    let allTorrents = [];
    // return this.props.torrent.map((item) => {
    //   <Item id={this.torrentId} files={item} key={this.torrentId} />
    // });
    // { console.log('show all torrents') }
    for (var key in this.props.torrent) {
      allTorrents.push(<Item id={this.torrentId} key={this.torrentId} />);
    };
    return allTorrents;
  }

  render() {
    return (
      <div>
        <form onSubmit={this.onClickHandle}>
          <TextField name="magnet" fullWidth={true} hintText="Magnet link goes here" />
          <RaisedButton type="submit" label="Add new torrent" fullWidth={true} />
        </form>
        {
          this.showAllTorrents()
        }
        <Snackbar
          open={this.state.open}
          message="Download completed!"
          autoHideDuration={4000}
          onRequestClose={this.handleRequestClose}
        />
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  onClickHandle: (torrentId, handleClick) => dispatch(startAddTorrent(torrentId, handleClick))
});

const mapStateToProps = (state) => ({
  torrent: state.torrent
});

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);