import {
  Box,
  Container,
  Typography,
  Button,
  Card,
  CardContent,
  CardMedia,
  Grid,
  Paper,
  Divider,
  Stack,
} from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import WaterDropIcon from "@mui/icons-material/WaterDrop";
import ParkIcon from "@mui/icons-material/Park";
import GroupsIcon from "@mui/icons-material/Groups";

const Home = () => {
  return (
    <Box>
      {/* Hero Section */}
      <Box
        sx={{
          position: "relative",
          height: "80vh",
          display: "flex",
          alignItems: "center",
          bgcolor: "primary.main",
          color: "white",
          overflow: "hidden",
        }}
      >
        <Box
          component="img"
          src="/api/placeholder/1920/1080"
          alt="한강 전경"
          sx={{
            position: "absolute",
            width: "100%",
            height: "100%",
            objectFit: "cover",
            opacity: 0.6,
          }}
        />
        <Container maxWidth="lg" sx={{ position: "relative", zIndex: 1 }}>
          <Box maxWidth="600px">
            <Typography
              variant="h2"
              component="h1"
              gutterBottom
              fontWeight="bold"
            >
              함께 만드는 우리의 한강
            </Typography>
            <Typography variant="h5" paragraph sx={{ mb: 4 }}>
              시민과 함께 한강의 생태계를 보전하고 지속가능한 미래를 만듭니다
            </Typography>
            <Stack direction="row" spacing={2}>
              <Button
                variant="contained"
                color="secondary"
                size="large"
                endIcon={<ArrowForwardIcon />}
              >
                활동 참여하기
              </Button>
              <Button variant="outlined" color="inherit" size="large">
                후원하기
              </Button>
            </Stack>
          </Box>
        </Container>
      </Box>

      {/* Status Cards */}
      <Container
        maxWidth="lg"
        sx={{ mt: -5, mb: 8, position: "relative", zIndex: 2 }}
      >
        <Grid container spacing={3}>
          <Grid item xs={12} md={4}>
            <Paper elevation={3} sx={{ p: 3 }}>
              <Stack direction="row" spacing={2} alignItems="center" mb={2}>
                <WaterDropIcon color="primary" />
                <Typography variant="h6">오늘의 한강</Typography>
              </Stack>
              <Grid container spacing={2}>
                <Grid item xs={6}>
                  <Typography color="text.secondary">수온</Typography>
                  <Typography variant="h4">18.5°C</Typography>
                </Grid>
                <Grid item xs={6}>
                  <Typography color="text.secondary">수질등급</Typography>
                  <Typography variant="h4">Ib</Typography>
                </Grid>
              </Grid>
            </Paper>
          </Grid>
          <Grid item xs={12} md={4}>
            <Paper elevation={3} sx={{ p: 3 }}>
              <Stack direction="row" spacing={2} alignItems="center" mb={2}>
                <ParkIcon color="primary" />
                <Typography variant="h6">생태 현황</Typography>
              </Stack>
              <Stack spacing={1}>
                <Box display="flex" justifyContent="space-between">
                  <Typography>관찰된 조류</Typography>
                  <Typography fontWeight="bold">15종</Typography>
                </Box>
                <Box display="flex" justifyContent="space-between">
                  <Typography>수달 목격</Typography>
                  <Typography fontWeight="bold">2시간 전</Typography>
                </Box>
              </Stack>
            </Paper>
          </Grid>
          <Grid item xs={12} md={4}>
            <Paper elevation={3} sx={{ p: 3 }}>
              <Stack direction="row" spacing={2} alignItems="center" mb={2}>
                <GroupsIcon color="primary" />
                <Typography variant="h6">참여 현황</Typography>
              </Stack>
              <Stack spacing={1}>
                <Box display="flex" justifyContent="space-between">
                  <Typography>이번 달 프로그램</Typography>
                  <Typography fontWeight="bold">23개</Typography>
                </Box>
                <Box display="flex" justifyContent="space-between">
                  <Typography>참여 시민</Typography>
                  <Typography fontWeight="bold">456명</Typography>
                </Box>
              </Stack>
            </Paper>
          </Grid>
        </Grid>
      </Container>

      {/* Activities Section */}
      <Container maxWidth="lg" sx={{ mb: 8 }}>
        <Typography variant="h4" component="h2" textAlign="center" gutterBottom>
          주요 활동
        </Typography>
        <Divider sx={{ mb: 4 }} />
        <Grid container spacing={3}>
          {activities.map((activity, index) => (
            <Grid item xs={12} md={4} key={index}>
              <Card sx={{ height: "100%" }}>
                <CardMedia
                  component="img"
                  height="200"
                  image={`/api/placeholder/400/200`}
                  alt={activity.title}
                />
                <CardContent>
                  <Typography gutterBottom variant="h6" component="h3">
                    {activity.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {activity.description}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* Impact Numbers */}
      <Box sx={{ bgcolor: "primary.main", color: "white", py: 8 }}>
        <Container maxWidth="lg">
          <Grid container spacing={4} textAlign="center">
            {impactNumbers.map((item, index) => (
              <Grid item xs={6} md={3} key={index}>
                <Typography variant="h3" component="div" fontWeight="bold">
                  {item.number}
                </Typography>
                <Typography variant="subtitle1" sx={{ opacity: 0.8 }}>
                  {item.label}
                </Typography>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>
    </Box>
  );
};

const activities = [
  {
    title: "샛숲학교",
    description:
      "어린이들을 위한 생태교육 프로그램을 운영하며, 미래 세대의 환경 의식을 높입니다.",
  },
  {
    title: "생태모니터링",
    description:
      "시민과 전문가가 함께 참여하여 한강의 생태계 변화를 관찰하고 기록합니다.",
  },
  {
    title: "환경보전활동",
    description:
      "한강의 생태계 보전을 위한 다양한 실천 활동을 시민들과 함께 진행합니다.",
  },
];

const impactNumbers = [
  { number: "15,000+", label: "연간 참여 시민" },
  { number: "200+", label: "생태 프로그램" },
  { number: "3,000+", label: "정기후원자" },
  { number: "50+", label: "협력기관" },
];

export default Home;
