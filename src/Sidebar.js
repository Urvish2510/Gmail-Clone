import { Button, IconButton } from "@mui/material";
import React from "react";
import "./Sidebar.css";
import InboxIcon from "@mui/icons-material/Inbox";
import SidebarOption from "./SidebarOption";
import StarIcon from "@mui/icons-material/Star";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import LabelImportantIcon from "@mui/icons-material/LabelImportant";
import NearMeIcon from "@mui/icons-material/NearMe";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import PersonIcon from "@mui/icons-material/Person";
import DuoIcon from "@mui/icons-material/Duo";
import PhoneIcon from "@mui/icons-material/Phone";
import { useDispatch } from "react-redux";
import { openSendMessage } from "./features/mailSlice";

function Sidebar() {
  const dispatch = useDispatch();

  return (
    <div className="sidebar">
      <Button className="sidebar__compose" onClick={() => dispatch(openSendMessage())}>
          <img
            className="compose__Image"
            src="https://www.gstatic.com/images/icons/material/colored_icons/1x/create_32dp.png"
            alt="+"
          />
            <p className="compose">Compose</p>
      </Button>

      <SidebarOption
        Icon={InboxIcon}
        title="Inbox"
        number={11}
        selected={true}
      />
      <SidebarOption Icon={StarIcon} title="Starred" number={11} />
      <SidebarOption Icon={AccessTimeIcon} title="Snoozed" number={11} />
      <SidebarOption Icon={LabelImportantIcon} title="Important" number={11} />
      <SidebarOption Icon={NearMeIcon} title="Drafts" number={11} />
      <SidebarOption Icon={ExpandMoreIcon} title="More" number={11} />

      <div className="sidebar__footer">
        <div className="sidebar__footerIcons">
          <IconButton>
            <PersonIcon />
          </IconButton>
          <IconButton>
            <DuoIcon />
          </IconButton>
          <IconButton>
            <PhoneIcon />
          </IconButton>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
