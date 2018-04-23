import React from 'react';
import { connect } from 'react-redux';
import { List, ListItem } from 'material-ui/List';
import { Card, CardTitle, Toolbar, Divider } from 'material-ui';

const showFiles = (props) => {
  let files = [];
  props.torrent[props.id].map((file) => {
    // console.log(file.name);
    files.push(<ListItem primaryText={file.name} />);
  })
  return files;
}

// props have id
const Item = (props) => (
  <div>
    <Card>
      <CardTitle title={props.torrent[props.id].location} subtitle={<div><div>{props.torrent[props.id].progress}</div> <div>{props.torrent[props.id].downloadSpeed/1000000} MBps`</div></div>}
      actAsExpander={true}
      showExpandableButton={true}
      />
      <List expandable={true}>
        {showFiles(props)}
      </List>
      <Toolbar />
    </Card>
    <br />
    <Divider />
    <br />
  </div>
);

const mapStateToProps = (state) => ({
  torrent: state.torrent
});

export default connect(mapStateToProps)(Item);