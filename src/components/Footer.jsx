import {
  Box,
  Container,
  Grid,
  Typography,
  Link,
  Stack,
  TextField,
  Button,
  IconButton,
  Divider,
} from "@mui/material";
import {
  Facebook,
  Instagram,
  YouTube,
  Twitter,
  Phone,
  Email,
  LocationOn,
} from "@mui/icons-material";
import { Link as RouterLink } from "react-router-dom";

const Footer = () => {
  return (
    <Box sx={{ bgcolor: "grey.900", color: "grey.100", pt: 6, pb: 3 }}>
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          <Grid item xs={12} md={4}>
            <Typography variant="h6" gutterBottom>
              한강사회적협동조합
            </Typography>
            <Typography variant="body2" sx={{ mb: 2 }}>
              더 나은 자연과 사회를 위해 강 생태를 가꾸고, 문화를 일구는
              사회적협동조합
            </Typography>
            <Stack direction="row" spacing={1}>
              <IconButton size="small" sx={{ color: "grey.100" }}>
                <Facebook />
              </IconButton>
              <IconButton size="small" sx={{ color: "grey.100" }}>
                <Instagram />
              </IconButton>
              <IconButton size="small" sx={{ color: "grey.100" }}>
                <YouTube />
              </IconButton>
              <IconButton size="small" sx={{ color: "grey.100" }}>
                <Twitter />
              </IconButton>
            </Stack>
          </Grid>

          <Grid item xs={12} md={2}>
            <Typography variant="h6" gutterBottom>
              빠른 메뉴
            </Typography>
            <Stack spacing={1}>
              {["소개", "후원", "참여", "소식"].map((text) => (
                <Link
                  key={text}
                  component={RouterLink}
                  to={`/${text === "소개" ? "about" : text}`}
                  color="inherit"
                  underline="hover"
                >
                  {text}
                </Link>
              ))}
            </Stack>
          </Grid>

          <Grid item xs={12} md={3}>
            <Typography variant="h6" gutterBottom>
              연락처
            </Typography>
            <Stack spacing={1}>
              <Stack direction="row" spacing={1} alignItems="center">
                <Phone fontSize="small" />
                <Typography variant="body2">02-1234-5678</Typography>
              </Stack>
              <Stack direction="row" spacing={1} alignItems="center">
                <Email fontSize="small" />
                <Typography variant="body2">info@hangang.org</Typography>
              </Stack>
              <Stack direction="row" spacing={1}>
                <LocationOn fontSize="small" />
                <Typography variant="body2">
                  서울특별시 영등포구 여의도동 한강생태공원
                </Typography>
              </Stack>
            </Stack>
          </Grid>

          <Grid item xs={12} md={3}>
            <Typography variant="h6" gutterBottom>
              뉴스레터 구독
            </Typography>
            <Stack spacing={2}>
              <TextField
                variant="outlined"
                size="small"
                placeholder="이메일 주소를 입력하세요"
                sx={{
                  bgcolor: "grey.800",
                  "& .MuiOutlinedInput-root": {
                    color: "grey.100",
                    "& fieldset": {
                      borderColor: "grey.700",
                    },
                    "&:hover fieldset": {
                      borderColor: "grey.600",
                    },
                  },
                }}
              />
              <Button variant="contained" color="primary">
                구독하기
              </Button>
            </Stack>
          </Grid>
        </Grid>

        <Divider sx={{ my: 4, borderColor: "grey.800" }} />

        <Grid container justifyContent="space-between" alignItems="center">
          <Grid item>
            <Typography variant="body2" color="grey.500">
              © 2024 한강사회적협동조합. All rights reserved.
            </Typography>
          </Grid>
          <Grid item>
            <Stack direction="row" spacing={2}>
              <Link color="inherit" underline="hover">
                개인정보처리방침
              </Link>
              <Link color="inherit" underline="hover">
                이용약관
              </Link>
            </Stack>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Footer;
