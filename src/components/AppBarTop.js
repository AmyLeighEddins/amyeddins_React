import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Icon from '@material-ui/core/Icon';
import MenuIcon from '@material-ui/icons/Menu';
import Typography from '@material-ui/core/Typography';
import '../styles/styles.css';

const AppBarTop = ({ drawerState, setDrawerState }) => {
  return (
    <AppBar position="fixed" class="appBar">
      <Toolbar>
        <Icon
          class="icon"
          color="inherit"
          aria-label="open drawer"
          onClick={() => setDrawerState(!drawerState)}
          edge="start"
        >
          <MenuIcon />
        </Icon>
        <Typography variant="h6" noWrap></Typography>
      </Toolbar>
    </AppBar>
  );
};

export default AppBarTop;
