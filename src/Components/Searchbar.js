import React from 'react'
import '../App.css';
import SearchIcon from '@material-ui/icons/Search'
import Settings from '@material-ui/icons/SettingsOutlined'
import Chat from '@material-ui/icons/ChatBubbleOutline'
import Profile from '@material-ui/icons/AccountCircleOutlined'
import NotificationsNoneOutlinedIcon from '@material-ui/icons/NotificationsNoneOutlined';
function Searchbar() {
    return (
        <div className="SearchBar">
            <button className="search-btn" type="submit"><SearchIcon /></button>
            <input type="text" className="searchtext" placeholder="Type to search.."></input>
            <Settings className="sett" />
            <Chat className="chat"/>
            <NotificationsNoneOutlinedIcon className="notif" />
            <span className="profile">Thomas Brown<Profile className="photo"/><div className="dev">Developer</div></span>
        </div>
    )
}

export default Searchbar
