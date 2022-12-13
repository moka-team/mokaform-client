import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";
import React, { useEffect, useState } from "react";
import apiClient from "../../../api/client";
import {
  CheckBoxContainer,
  Container,
  Message,
  Title,
  WithdrawalButton,
  WithdrawalContainer,
  WithdrawlContainer,
} from "./styled";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Button from "@mui/material/Button";

export default function Withdrawal() {
  const [email, setEmail] = useState("");
  const [checked, setChecked] = useState(false);
  const [successDialogOpen, setSuccessDialogOpen] = useState(false);

  const fetchWithdrawal = async () => {
    try {
      const res = await apiClient.post("/api/v1/users/withdrawal");
      alert("탈퇴가 완료되었습니다!");
      window.location.replace("/");
      localStorage.clear();
    } catch (err) {
      console.log(err);
    }
  };

  const fetchProfile = async () => {
    const response = await apiClient.get("/api/v1/users/my");
    setEmail(response.data.data.email);
  };

  const handleChange = (event) => {
    setChecked(event.target.checked);
  };

  const onClickHandler = (event) => {
    console.log(checked);
    fetchWithdrawal();
  };

  const handleSuccessDialogClose = () => {
    setSuccessDialogOpen(false);
  };

  const handleSuccessDialogConfirmClose = () => {
    setSuccessDialogOpen(false);
  };

  useEffect(() => {
    fetchProfile();
  }, []);

  return (
    <Container>
      <WithdrawlContainer>
        <Title>탈퇴 안내</Title>
        <p>회원탈퇴를 신청하기 전에 안내 사항을 꼭 확인해주세요.</p>
        <Message>
          ✅ 사용하고 계신 아이디({email})는 탈퇴할 경우 재사용 및 복구가
          불가능합니다.
        </Message>
        <p>
          <span>탈퇴한 아이디는 본인과 타인 모두 재사용 및 복구가 불가</span>
          하오니 신중하게 선택하시기 바랍니다.
        </p>
        <Message>✅ 탈퇴 후 생성한 설문은 모두 삭제됩니다.</Message>
        <p>
          탈퇴 이전에 생성한 설문은 모두 삭제되며 설문 참여 및 통계 결과 확인이
          제한됩니다.
        </p>
        <p>
          특히 탈퇴 후에는 회원 정보가 삭제되어{" "}
          <span>설문 통계 결과를 제공해드릴 수 없으니</span> 필요한 데이터는
          미리 확인하시기 바랍니다.
        </p>
        <CheckBoxContainer>
          <FormControlLabel
            control={
              <Checkbox
                checked={checked}
                onChange={handleChange}
                sx={{
                  color: "#202632",
                  "&.Mui-checked": {
                    color: "#202632",
                  },
                }}
              />
            }
            label="안내 사항을 모두 확인하였으며, 이에 동의합니다"
          />
        </CheckBoxContainer>
        <WithdrawalContainer>
          <WithdrawalButton onClick={onClickHandler} disabled={!checked}>
            확인
          </WithdrawalButton>
        </WithdrawalContainer>
      </WithdrawlContainer>
      <Dialog
        open={successDialogOpen}
        onClose={handleSuccessDialogClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        sx={{
          "& .MuiDialog-container": {
            "& .MuiPaper-root": {
              width: "100%",
              maxWidth: "500px",
            },
          },
        }}
      >
        <DialogTitle id="success-dialog-title">알림</DialogTitle>
        <DialogContent>
          <DialogContentText
            id="success-dialog-description"
            sx={{ color: "#202632" }}
          >
            회원 탈퇴가 완료되었습니다!
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button
            sx={{ color: "#202632" }}
            onClick={handleSuccessDialogConfirmClose}
            autoFocus
          >
            확인
          </Button>
        </DialogActions>
      </Dialog>
    </Container>
  );
}
