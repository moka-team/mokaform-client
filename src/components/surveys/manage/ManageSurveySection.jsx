import { React, useEffect, useState } from "react";
import Header from "../../common/Header";
import Error from "../participate/Error";
import Loading from "../participate/Loading";
import { Container, TableSection, Text } from "./styled";

import DeleteIcon from "@mui/icons-material/Delete";
import EqualizerIcon from "@mui/icons-material/Equalizer";
import FirstPageIcon from "@mui/icons-material/FirstPage";
import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";
import LastPageIcon from "@mui/icons-material/LastPage";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import IconButton from "@mui/material/IconButton";
import Paper from "@mui/material/Paper";
import { styled, useTheme } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableFooter from "@mui/material/TableFooter";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";
import apiClient from "../../../api/client";
import routes from "../../../routes";
import { TContainer } from "./styled";
import { Edit } from '@mui/icons-material';
import { useCreateSurveyActions, useCreateSurveyValue } from '../create/surveyState';
function TablePaginationActions(props) {
  const theme = useTheme();
  const { count, page, rowsPerPage, onPageChange } = props;

  const handleFirstPageButtonClick = (event) => {
    onPageChange(event, 0);
  };

  const handleBackButtonClick = (event) => {
    onPageChange(event, page - 1);
  };

  const handleNextButtonClick = (event) => {
    onPageChange(event, page + 1);
  };

  const handleLastPageButtonClick = (event) => {
    onPageChange(event, Math.max(0, Math.ceil(count / rowsPerPage) - 1));
  };

  return (
    <Box sx={{ flexShrink: 0, ml: 2.5 }}>
      <IconButton
        onClick={handleFirstPageButtonClick}
        disabled={page === 0}
        aria-label="first page"
      >
        {theme.direction === "rtl" ? <LastPageIcon /> : <FirstPageIcon />}
      </IconButton>
      <IconButton
        onClick={handleBackButtonClick}
        disabled={page === 0}
        aria-label="previous page"
      >
        {theme.direction === "rtl" ? (
          <KeyboardArrowRight />
        ) : (
          <KeyboardArrowLeft />
        )}
      </IconButton>
      <IconButton
        onClick={handleNextButtonClick}
        disabled={page >= Math.ceil(count / rowsPerPage) - 1}
        aria-label="next page"
      >
        {theme.direction === "rtl" ? (
          <KeyboardArrowLeft />
        ) : (
          <KeyboardArrowRight />
        )}
      </IconButton>
      <IconButton
        onClick={handleLastPageButtonClick}
        disabled={page >= Math.ceil(count / rowsPerPage) - 1}
        aria-label="last page"
      >
        {theme.direction === "rtl" ? <FirstPageIcon /> : <LastPageIcon />}
      </IconButton>
    </Box>
  );
}

TablePaginationActions.propTypes = {
  count: PropTypes.number.isRequired,
  onPageChange: PropTypes.func.isRequired,
  page: PropTypes.number.isRequired,
  rowsPerPage: PropTypes.number.isRequired,
};

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: "#202632",
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

export default function ManageSurveySection() {
  const [survey, setSurvey] = useState(null);
  const [loading, setLoading] = useState(true);

  const [selectedSurveyId, setSelectedSurveyId] = useState(null);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [dialogOpen, setDialogOpen] = useState(false);

  const [requireRerender, setRequireRerender] = useState(true);
  const navigate = useNavigate();

  // Avoid a layout jump when reaching the last page with empty rows.
  const emptyRows =
    page > 0 ? Math.max(0, (1 + page) * rowsPerPage - survey.length) : 0;


    const currentSurvey = useCreateSurveyValue();
    const {
      setTitle,
      setSummary,
      setIsAnonymous,
      setIsPublic,
      setStartDate,
      setEndDate,
      setCategories,
      setQuestions,
      setMultiQuestions,
    } = useCreateSurveyActions();

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const handleClickListItem = (event) => {
    setSelectedSurveyId(event.currentTarget.value);
    handleClickDialogOpen();
  };

  const handleClickDialogOpen = () => {
    setDialogOpen(true);
  };

  const handleDialogClose = () => {
    setDialogOpen(false);
  };
  const handleOnClick = async (surveyId) => {
    await apiClient
      .get(`/api/v1/users/my/surveys/${surveyId}/stats`)
      .then((res) => navigate(routes.surveyStats, { state: res.data.data }));
  };

  const handleClickEdit = async( sharingKey) => {
    await apiClient.get("/api/v1/survey",{
      params:{
        sharingKey
      }
    }).then((res)=>{

      navigate(routes.editSurvey,{state:res.data.data})
    })

  }

  const handleDeleteItem = async () => {
    setDialogOpen(false);

    try {
      const response = await apiClient.delete(
        "/api/v1/survey/" + selectedSurveyId
      );
      setRequireRerender(!requireRerender);
    } catch (error) {}
  };

  const fetchData = async () => {
    try {
      const response = await apiClient.get("/api/v1/users/my/surveys");
      setSurvey(response.data.data.content);
      setLoading(false);
    } catch (error) {
      return <Error></Error>;
    }
  };

  useEffect(() => {
    fetchData();
  }, [requireRerender]);

  if (loading) return <Loading></Loading>;

  return (
    <Container>
      <Header></Header>
      <TableSection>
        <Text>설문 관리</Text>
        <TContainer>
          <TableContainer component={Paper}>
            <Table aria-label="custom pagination table">
              <TableHead>
                <TableRow>
                  <StyledTableCell>설문 제목</StyledTableCell>
                  <StyledTableCell align="center">설문 요약</StyledTableCell>
                  <StyledTableCell align="center">응답 수</StyledTableCell>
                  <StyledTableCell align="center">설문 시작일</StyledTableCell>
                  <StyledTableCell align="center">설문 종료일</StyledTableCell>
                  <StyledTableCell align="center">익명</StyledTableCell>
                  <StyledTableCell align="center">공개</StyledTableCell>
                  <StyledTableCell align="center">통계</StyledTableCell>
                  <StyledTableCell align="center">수정</StyledTableCell>
                  <StyledTableCell align="center">삭제</StyledTableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {(rowsPerPage > 0
                  ? survey.slice(
                      page * rowsPerPage,
                      page * rowsPerPage + rowsPerPage
                    )
                  : survey
                ).map((data) => (
                  <StyledTableRow key={data.surveyId}>
                    <StyledTableCell component="th" scope="row">
                      {data.title}
                    </StyledTableCell>
                    <StyledTableCell align="center">
                      {data.summary}
                    </StyledTableCell>
                    <StyledTableCell align="center">
                      {data.surveyeeCount}
                    </StyledTableCell>
                    <StyledTableCell align="center">
                      {data.startDate}
                    </StyledTableCell>
                    <StyledTableCell align="center">
                      {data.endDate}
                    </StyledTableCell>
                    <StyledTableCell align="center">
                      {data.isAnonymous ? <div>가능</div> : <div>불가능</div>}
                    </StyledTableCell>
                    <StyledTableCell align="center">
                      {data.isPublic ? <div>가능</div> : <div>불가능</div>}
                    </StyledTableCell>
                    <StyledTableCell align="center">
                      <IconButton onClick={() => handleOnClick(data.surveyId)}>
                        <EqualizerIcon sx={{ color: "#202632" }} />
                      </IconButton>
                    </StyledTableCell>
                    <StyledTableCell align="center">
                      <IconButton onClick={()=>handleClickEdit( data.sharingKey)}>
                        <Edit sx={{ color: "#202632" }}/>
                      </IconButton>
                    </StyledTableCell>
                    <StyledTableCell align="center">
                      <IconButton
                        id="lock-button"
                        aria-haspopup="listbox"
                        aria-controls="lock-menu"
                        onClick={handleClickListItem}
                        value={data.surveyId}
                      >
                        <DeleteIcon sx={{ color: "#202632" }} />
                      </IconButton>
                    </StyledTableCell>
                  </StyledTableRow>
                ))}

                {emptyRows > 0 && (
                  <TableRow style={{ height: 53 * emptyRows }}>
                    <TableCell colSpan={9} />
                  </TableRow>
                )}
              </TableBody>
              <TableFooter>
                <TableRow>
                  <TablePagination
                    rowsPerPageOptions={[
                      5,
                      10,
                      25,
                      { label: "All", value: -1 },
                    ]}
                    colSpan={9}
                    count={survey.length}
                    rowsPerPage={rowsPerPage}
                    page={page}
                    SelectProps={{
                      inputProps: {
                        "aria-label": "rows per page",
                      },
                      native: true,
                    }}
                    onPageChange={handleChangePage}
                    onRowsPerPageChange={handleChangeRowsPerPage}
                    ActionsComponent={TablePaginationActions}
                  />
                </TableRow>
              </TableFooter>
            </Table>
            <Dialog
              open={dialogOpen}
              onClose={handleDialogClose}
              aria-labelledby="alert-dialog-title"
              aria-describedby="alert-dialog-description"
            >
              <DialogTitle id="alert-dialog-title">
                {"설문을 삭제하시겠습니까?"}
              </DialogTitle>
              <DialogContent>
                <DialogContentText id="alert-dialog-description">
                  설문 삭제 작업은 영구적이며 되돌릴 수 없습니다. 삭제하는 즉시
                  귀하의 설문에 액세스 할 수 없게 됩니다. 설문에 관련된 모든
                  데이터가 삭제됩니다.
                </DialogContentText>
              </DialogContent>
              <DialogActions>
                <Button onClick={handleDialogClose}>취소</Button>
                <Button onClick={handleDeleteItem} autoFocus>
                  확인
                </Button>
              </DialogActions>
            </Dialog>
          </TableContainer>
        </TContainer>
      </TableSection>
    </Container>
  );
}
