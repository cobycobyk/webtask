import './NavBar.css';
import SearchIcon from '@material-ui/icons/Search';
import RoomIcon from '@material-ui/icons/Room';
import PhoneIcon from '@material-ui/icons/Phone';
import WatchLaterIcon from '@material-ui/icons/WatchLater';

export default function NavBar() {

  return (
    <nav>
      <div className="nav__left">
        <SearchIcon className="nav__icon"/>
      </div>
      <div className="nav__right">
        <RoomIcon className="nav__icon"/>
        <PhoneIcon className="nav__icon"/>
        <WatchLaterIcon className="nav__icon"/>
      </div>
    </nav>
  );
}