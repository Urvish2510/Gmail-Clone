import React from "react";
import { useNavigate } from "react-router-dom";
import { IconButton } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import MoveToInboxIcon from "@mui/icons-material/MoveToInbox";
import EmailIcon from "@mui/icons-material/Email";
import DeleteIcon from "@mui/icons-material/Delete";
import ErrorIcon from "@mui/icons-material/Error";
import WatchLaterIcon from "@mui/icons-material/WatchLater";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import LabelImportantIcon from "@mui/icons-material/LabelImportant";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import PrintIcon from "@mui/icons-material/Print";
import UnfoldMoreIcon from "@mui/icons-material/UnfoldMore";

function Mail() {
  const navigate = useNavigate();

  return (
    <div style={{ flex: "1", backgroundColor: "whitesmoke" }}>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          backgroundColor: "white",
        }}
      >
        <div style={{ display: "flex" }}>
          <IconButton onClick={() => navigate("/")}>
            <ArrowBackIcon />
          </IconButton>

          <IconButton>
            <MoveToInboxIcon />
          </IconButton>

          <IconButton>
            <ErrorIcon />
          </IconButton>

          <IconButton>
            <DeleteIcon />
          </IconButton>

          <IconButton>
            <EmailIcon />
          </IconButton>

          <IconButton>
            <WatchLaterIcon />
          </IconButton>

          <IconButton>
            <CheckCircleIcon />
          </IconButton>

          <IconButton>
            <LabelImportantIcon />
          </IconButton>

          <IconButton>
            <MoreVertIcon />
          </IconButton>
        </div>

        <div>
          <IconButton>
            <UnfoldMoreIcon />
          </IconButton>

          <IconButton>
            <PrintIcon />
          </IconButton>

          <IconButton>
            <ExitToAppIcon />
          </IconButton>
        </div>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          margin: "30px",
          backgroundColor: "white",
          padding: "20px",
          height: "100vh",
          boxShadow: "0px 5px 7px 0px rgba(0, 0, 0, 0.24)",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            borderBottom: "1px solid whitesmoke",
            padding: "20px",
            position: "relative",
          }}
        >
          <h2 style={{ fontWeight: "400", marginRight: "20px" }}>Subject</h2>
          <LabelImportantIcon style={{ color: "#e8ab02" }} />
          <p
            style={{
              padding: "10px",
              marginRight: "20px",
              overflowWrap: "break-word",
            }}
          >
            Title
          </p>
          <p
            style={{
              position: "absolute",
              top: "24px",
              right: "0",
              fontSize: "12px",
              color: "gray",
            }}
          >
            11:04 pm
          </p>
        </div>

        <div style={{ marginLeft: "20px" }}>This is a Message</div>
      </div>
    </div>
  );
}

export default Mail;
