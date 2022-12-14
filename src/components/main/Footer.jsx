import { Box, Typography } from "@mui/material";
import Stack from "@mui/material/Stack";
import { PolicyLink } from "../common/styled";

function Copyright() {
  return (
    <Stack
      direction="row"
      alignItems="center"
      justifyContent="center"
      spacing={2}
    >
      <Typography variant="body2" color="text.secondary" align="center">
        <PolicyLink to={`/termsOfService`} style={{ textDecoration: "none" }}>
          이용약관
        </PolicyLink>
      </Typography>
      <Typography variant="body2" color="text.secondary" align="center">
        <PolicyLink to={`/privacyPolicy`} style={{ textDecoration: "none" }}>
          개인정보 처리방침
        </PolicyLink>{" "}
      </Typography>
      <Typography variant="body2" color="text.secondary" align="center">
        {"Copyright © "}
        MOKA {new Date().getFullYear()}
        {/* <Link color="black">MOKA</Link> {new Date().getFullYear()} */}
        {"."}
      </Typography>
    </Stack>
  );
}

export default function Footer() {
  return (
    <Box sx={{ bgcolor: "background.paper", p: 6 }} component="footer">
      <Typography variant="h6" align="center" gutterBottom>
        MOKA FORM
      </Typography>
      <Typography
        variant="subtitle1"
        align="center"
        color="text.secondary"
        component="p"
      >
        2022 KAKAO ENTERPRISE ACADEMY
      </Typography>
      <Copyright />
    </Box>
  );
}
