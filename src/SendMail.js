import React from "react";
import CloseIcon from "@mui/icons-material/Close";
import "./SendMail.css";
import { Button } from "@mui/material";

function SendMail() {
  return (
    <div className="sendMail">
      <div className="sendMail__header">
        <h3>New Message</h3>
        <CloseIcon className="sendMail__close" />
      </div>

      <form>
        <input type="text" />
        <input type="text" />
        <input type="text" />

        <div className="sendMail__options">
          <Button
            className="sendMail__send"
            variant="contained"
            color="primary"
            type="submit"
          >
            Send
          </Button>
        </div>
      </form>
    </div>
  );
}

export default SendMail;
