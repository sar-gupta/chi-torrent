import React from 'react';
import AppBar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import IconButton from 'material-ui/IconButton';
import MenuIcon from 'material-ui/svg-icons/navigation/menu';
import Divider from 'material-ui/Divider'

class Header extends React.Component {

  constructor(props) {
    super(props);
    this.state = {open: false};
    this.openDrawer = this.openDrawer.bind(this);
  }

  openDrawer = () => {
    this.setState({open: !this.state.open});
  }

  render() {
    return (
      <div>
        <AppBar title="Chi" titleStyle={{'textAlign': 'center'}} 
          iconElementLeft={
            <IconButton onClick={this.openDrawer}><MenuIcon /></IconButton>
          }
        />
        
        <Drawer
          open={this.state.open}
          docked={false}
          onRequestChange={this.openDrawer}
        >
          <MenuItem>Menu Item</MenuItem>
          <Divider />
          <MenuItem>Menu Item 2</MenuItem>
          <Divider />          
        </Drawer>

        
      </div>
    )
  }
}

export default Header;