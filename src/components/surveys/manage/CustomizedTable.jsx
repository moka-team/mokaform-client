import { React, useState, Fragment } from "react";
import PropTypes from "prop-types";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableContainer from "@mui/material/TableContainer";
import TableFooter from "@mui/material/TableFooter";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import IconButton from "@mui/material/IconButton";
import FirstPageIcon from "@mui/icons-material/FirstPage";
import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";
import LastPageIcon from "@mui/icons-material/LastPage";
import { styled } from "@mui/material/styles";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";

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
const tmpData = [
  {
    surveyId: 1,
    answerCount: 0,
    title: "설문 제목",
    summary: "설문 요약",
    startDate: "2022-01-01",
    endDate: "2022-12-31",
    isAnonymous: false,
    isPublic: true,
    category: [],
  },
  {
    surveyId: 2,
    answerCount: 0,
    title: "설문 제목2",
    summary: "설문 요약2",
    startDate: "2022-01-01",
    endDate: "2022-12-31",
    isAnonymous: false,
    isPublic: true,
  },
  {
    surveyId: 3,
    answerCount: 0,
    title: "설문 제목3",
    summary: "설문 요약3",
    startDate: "2022-01-01",
    endDate: "2022-12-31",
    isAnonymous: false,
    isPublic: true,
  },
  {
    surveyId: 4,
    answerCount: 0,
    title: "설문 제목",
    summary: "설문 요약",
    startDate: "2022-01-01",
    endDate: "2022-12-31",
    isAnonymous: false,
    isPublic: true,
    category: [],
  },
  {
    surveyId: 5,
    answerCount: 0,
    title: "설문 제목2",
    summary: "설문 요약2",
    startDate: "2022-01-01",
    endDate: "2022-12-31",
    isAnonymous: false,
    isPublic: true,
  },
  {
    surveyId: 6,
    answerCount: 0,
    title: "설문 제목3",
    summary: "설문 요약3",
    startDate: "2022-01-01",
    endDate: "2022-12-31",
    isAnonymous: false,
    isPublic: true,
  },
  {
    surveyId: 7,
    answerCount: 0,
    title: "설문 제목",
    summary: "설문 요약",
    startDate: "2022-01-01",
    endDate: "2022-12-31",
    isAnonymous: false,
    isPublic: true,
    category: [],
  },
  {
    surveyId: 8,
    answerCount: 0,
    title: "설문 제목2",
    summary: "설문 요약2",
    startDate: "2022-01-01",
    endDate: "2022-12-31",
    isAnonymous: false,
    isPublic: true,
  },
  {
    surveyId: 9,
    answerCount: 0,
    title: "설문 제목3",
    summary: "설문 요약3",
    startDate: "2022-01-01",
    endDate: "2022-12-31",
    isAnonymous: false,
    isPublic: true,
  },
  {
    surveyId: 10,
    answerCount: 0,
    title: "설문 제목",
    summary: "설문 요약",
    startDate: "2022-01-01",
    endDate: "2022-12-31",
    isAnonymous: false,
    isPublic: true,
    category: [],
  },
  {
    surveyId: 11,
    answerCount: 0,
    title: "설문 제목2",
    summary: "설문 요약2",
    startDate: "2022-01-01",
    endDate: "2022-12-31",
    isAnonymous: false,
    isPublic: true,
  },
  {
    surveyId: 12,
    answerCount: 0,
    title: "설문 제목3",
    summary: "설문 요약3",
    startDate: "2022-01-01",
    endDate: "2022-12-31",
    isAnonymous: false,
    isPublic: true,
  },
];

export default function CustomPaginationActionsTable() {
  const options = ["삭제", "수정"];
  const [anchorEl, setAnchorEl] = useState(null);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const open = Boolean(anchorEl);

  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);

  const [dialogOpen, setDialogOpen] = useState(false);

  // Avoid a layout jump when reaching the last page with empty rows.
  const emptyRows =
    page > 0 ? Math.max(0, (1 + page) * rowsPerPage - tmpData.length) : 0;

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const handleClickListItem = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleMenuItemClick = (event, index) => {
    setSelectedIndex(index);
    setAnchorEl(null);

    if (index === 0) {
      handleClickDialogOpen();
    }
  };

  const handleClickDialogOpen = () => {
    setDialogOpen(true);
  };

  const handleDialogClose = () => {
    setDialogOpen(false);
  };

  return (
    <TableContainer component={Paper}>
      <Table aria-label="custom pagination table">
        <TableHead>
          <TableRow>
            <StyledTableCell>설문 제목</StyledTableCell>
            <StyledTableCell align="right">설문 요약</StyledTableCell>
            <StyledTableCell align="right">응답 인원 수</StyledTableCell>
            <StyledTableCell align="right">설문 시작일</StyledTableCell>
            <StyledTableCell align="right">설문 종료일</StyledTableCell>
            <StyledTableCell align="right">익명 가능 여부</StyledTableCell>
            <StyledTableCell align="right">공개 여부</StyledTableCell>
            <StyledTableCell align="right"></StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {(rowsPerPage > 0
            ? tmpData.slice(
                page * rowsPerPage,
                page * rowsPerPage + rowsPerPage
              )
            : tmpData
          ).map((data) => (
            <StyledTableRow key={data.surveyId}>
              <StyledTableCell component="th" scope="row">
                {data.title}
              </StyledTableCell>
              <StyledTableCell align="right">{data.summary}</StyledTableCell>
              <StyledTableCell align="right">
                {data.answerCount}
              </StyledTableCell>
              <StyledTableCell align="right">{data.startDate}</StyledTableCell>
              <StyledTableCell align="right">{data.endDate}</StyledTableCell>
              <StyledTableCell align="right">
                {data.isAnonymous ? <div>가능</div> : <div>불가능</div>}
              </StyledTableCell>
              <StyledTableCell align="right">
                {data.isPublic ? <div>가능</div> : <div>불가능</div>}
              </StyledTableCell>
              <StyledTableCell>
                <IconButton
                  id="lock-button"
                  aria-haspopup="listbox"
                  aria-controls="lock-menu"
                  aria-expanded={open ? "true" : undefined}
                  onClick={handleClickListItem}
                >
                  <MoreVertIcon sx={{ color: "#202632" }} />
                </IconButton>
              </StyledTableCell>
            </StyledTableRow>
          ))}

          {emptyRows > 0 && (
            <TableRow style={{ height: 53 * emptyRows }}>
              <TableCell colSpan={8} />
            </TableRow>
          )}
        </TableBody>
        <TableFooter>
          <TableRow>
            <TablePagination
              rowsPerPageOptions={[5, 10, 25, { label: "All", value: -1 }]}
              colSpan={8}
              count={tmpData.length}
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
      <Menu
        id="lock-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "lock-button",
          role: "listbox",
        }}
      >
        {options.map((option, index) => (
          <MenuItem
            key={option}
            selected={index === selectedIndex}
            onClick={(event) => handleMenuItemClick(event, index)}
          >
            {option}
          </MenuItem>
        ))}
      </Menu>
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
            설문 삭제 작업은 영구적이며 되돌릴 수 없습니다. 삭제하는 즉시 귀하의
            설문에 액세스 할 수 없게 됩니다. 설문에 관련된 모든 데이터가
            삭제됩니다.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleDialogClose}>취소</Button>
          <Button onClick={handleDialogClose} autoFocus>
            확인
          </Button>
        </DialogActions>
      </Dialog>
    </TableContainer>
  );
}
