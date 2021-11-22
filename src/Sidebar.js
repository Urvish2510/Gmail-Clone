import { Button } from '@mui/material';
import React from 'react';
import './Sidebar.css';
import AddIcon from '@mui/icons-material/Add';
import InboxIcon from '@mui/icons-material/Inbox';
import SidebarOption from './SidebarOption';
import StarIcon from '@mui/icons-material/Star';

function Sidebar() {
    return (
        <div className="sidebar">
            <Button
                className="sidebar__compose"
                startIcon={<AddIcon fontSize="large" />}
            >
                Compose
            </Button>

            <SidebarOption Icon={InboxIcon} title="Inbox" number={11} 
            selected={true}/>
            <SidebarOption Icon={StarIcon} title="Starred" number={11} />
        </div>
    );
}

export default Sidebar;
