import React, { useState } from "react";
import { Container } from "./styled";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { useNavigate } from "react-router-dom";
import { userState } from "../../../authentication/userState";
import { useRecoilValue } from "recoil";

export default function DeleteSurvey({ request }) {
  const user = useRecoilValue(userState);
  const [dialogOpen, setDialogOpen] = useState(true);
  const navigate = useNavigate();

  const handleClickDialogOpen = () => {
    setDialogOpen(true);
  };

  const handleDialogClose = () => {
    setDialogOpen(false);
  };

  const handleConfirm = () => {
    setDialogOpen(false);

    request === "mypage" ? navigate("/mypage/" + user.id) : navigate("/");
  };

  return (
    <Container>
      <Dialog
        open={dialogOpen}
        onClose={handleDialogClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        sx={{
          "& .MuiDialog-container": {
            "& .MuiPaper-root": {
              width: "100%",
              maxWidth: "500px", // Set your width here
            },
          },
        }}
      >
        <DialogTitle id="alert-dialog-title">{"알림"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            이미 삭제된 설문입니다!
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleConfirm} autoFocus>
            확인
          </Button>
        </DialogActions>
      </Dialog>
    </Container>
  );
}
