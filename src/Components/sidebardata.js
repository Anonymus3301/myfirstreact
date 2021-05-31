 import React from 'react'
 import '../App.css'
 import Icon from '@material-ui/icons/Home'
 import Dashboard from '@material-ui/icons/DashboardOutlined'
 import Users from '@material-ui/icons/AccountCircleOutlined'
 import Documents from '@material-ui/icons/FolderOpen'
 import Apps from '@material-ui/icons/Apps'
 import Discover from '@material-ui/icons/ExploreOutlined'
 import PagesIcon from '@material-ui/icons/Pages'
 import Support from '@material-ui/icons/ContactSupportOutlined'
 import Inbox from '@material-ui/icons/Inbox'
 import FileManager from '@material-ui/icons/Folder'
 import DataList from '@material-ui/icons/List'
 import Settings from '@material-ui/icons/SettingsOutlined'
 import Logout from '@material-ui/icons/ExitToApp'
 export const sidebardata= [
     {
        icon:"Main",
     },
     {
        title:"Dashboard",
        icon:<Dashboard />,
        link:"/dash"
     },
     {
      title:"Discover",
      icon:<Discover />,
      link:"/home"
     },
     {
        title:"Users",
        icon:<Users />,
        link:"/home"
     },
     {
        title:"Documents",
        icon:<Documents />,
        link:"/home"
     },
     {
        title:"Applications",
        icon:<Apps />,
        link:"/home"
     },
     {
        title:"Pages",
        icon:<PagesIcon />,
        link:"/home"
     },
     {

     },
     {
        icon:"Secondary",  
     },
     {
         title:"Support Center",
         icon:<Support />,
         link:"/home"
      },
      {
         title:"Inbox",
         icon:<Inbox />,
         link:"/home"
      },
      {
         title:"File Manager",
         icon:<FileManager />,
         link:"/home"
      },
      {
         title:"Data List",
         icon:<DataList />,
         link:"/home"
      },
      {

      },
      {
         title:"Settings",
         icon:<Settings />,
         link:"/home"
      },{
         title:"Log Out",
         icon:<Logout />,
         link:"/home"
      },
 ]
 
 
 