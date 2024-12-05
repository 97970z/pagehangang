/* eslint-disable react/prop-types */
import React from "react";
import {
  Box,
  Container,
  Typography,
  Grid,
  Paper,
  Card,
  CardContent,
  CardMedia,
  Tab,
  Tabs,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  Divider,
} from "@mui/material";
import LocationOnIcon from "@mui/icons-material/LocationOn";
// import GroupsIcon from '@mui/icons-material/Groups';
// import StarIcon from '@mui/icons-material/Star';
// import BusinessIcon from '@mui/icons-material/Business';

const About = () => {
  const [tabValue, setTabValue] = React.useState(0);

  const handleTabChange = (event, newValue) => {
    setTabValue(newValue);
  };

  return (
    <Box>
      {/* Mission & Vision Section */}
      <Box sx={{ bgcolor: "primary.main", color: "white", py: 8 }}>
        <Container maxWidth="lg">
          <Grid container spacing={4} alignItems="center">
            <Grid item xs={12} md={6}>
              <Typography variant="h3" gutterBottom fontWeight="bold">
                한강조합 소개
              </Typography>
              <Box mb={4}>
                <Typography variant="h5" gutterBottom fontWeight="medium">
                  미션
                </Typography>
                <Typography variant="body1" paragraph>
                  시민과 함께 한강의 생태계를 보전하고 지속가능한 미래를
                  만듭니다
                </Typography>
              </Box>
              <Box>
                <Typography variant="h5" gutterBottom fontWeight="medium">
                  비전
                </Typography>
                <Typography variant="body1">
                  모두가 함께 누리는 건강한 한강 생태계 조성
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12} md={6}>
              <Box
                component="img"
                src="/api/placeholder/600/400"
                alt="한강 전경"
                sx={{
                  width: "100%",
                  borderRadius: 2,
                  boxShadow: 3,
                }}
              />
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Tabs Section */}
      <Container maxWidth="lg" sx={{ mt: 4 }}>
        <Box sx={{ borderBottom: 1, borderColor: "divider", mb: 3 }}>
          <Tabs value={tabValue} onChange={handleTabChange} centered>
            <Tab label="주요성과" />
            <Tab label="함께하는 사람들" />
            <Tab label="지부소개" />
            <Tab label="오시는 길" />
          </Tabs>
        </Box>

        {/* 주요성과 */}
        <TabPanel value={tabValue} index={0}>
          <Grid container spacing={3}>
            {achievements.map((achievement, index) => (
              <Grid item xs={12} md={4} key={index}>
                <Card>
                  <CardMedia
                    component="img"
                    height="200"
                    image={`/api/placeholder/400/200`}
                    alt={achievement.title}
                  />
                  <CardContent>
                    <Typography variant="h6" gutterBottom>
                      {achievement.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {achievement.description}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </TabPanel>

        {/* 함께하는 사람들 */}
        <TabPanel value={tabValue} index={1}>
          <Grid container spacing={3}>
            {people.map((person, index) => (
              <Grid item xs={12} sm={6} md={3} key={index}>
                <Paper elevation={2} sx={{ p: 2, textAlign: "center" }}>
                  <Box
                    component="img"
                    src={`/api/placeholder/150/150`}
                    alt={person.name}
                    sx={{
                      width: 120,
                      height: 120,
                      borderRadius: "50%",
                      mb: 2,
                    }}
                  />
                  <Typography variant="h6" gutterBottom>
                    {person.name}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {person.role}
                  </Typography>
                </Paper>
              </Grid>
            ))}
          </Grid>
        </TabPanel>

        {/* 지부소개 */}
        <TabPanel value={tabValue} index={2}>
          <Grid container spacing={4}>
            {branches.map((branch, index) => (
              <Grid item xs={12} md={4} key={index}>
                <Card>
                  <CardMedia
                    component="img"
                    height="200"
                    image={`/api/placeholder/400/200`}
                    alt={branch.name}
                  />
                  <CardContent>
                    <Typography variant="h6" gutterBottom>
                      {branch.name}
                    </Typography>
                    <List>
                      <ListItem>
                        <ListItemIcon>
                          <LocationOnIcon color="primary" />
                        </ListItemIcon>
                        <ListItemText primary={branch.address} />
                      </ListItem>
                      <ListItem>
                        <ListItemText
                          primary={branch.description}
                          sx={{ pl: 4 }}
                        />
                      </ListItem>
                    </List>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </TabPanel>

        {/* 오시는 길 */}
        <TabPanel value={tabValue} index={3}>
          <Paper elevation={3} sx={{ p: 3 }}>
            <Grid container spacing={4}>
              <Grid item xs={12} md={7}>
                <Box
                  sx={{
                    width: "100%",
                    height: 400,
                    bgcolor: "grey.200",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  지도가 들어갈 영역
                </Box>
              </Grid>
              <Grid item xs={12} md={5}>
                <Typography variant="h6" gutterBottom>
                  찾아오시는 길
                </Typography>
                <List>
                  <ListItem>
                    <ListItemIcon>
                      <LocationOnIcon />
                    </ListItemIcon>
                    <ListItemText
                      primary="주소"
                      secondary="서울특별시 영등포구 여의도동 한강생태공원"
                    />
                  </ListItem>
                  <Divider sx={{ my: 2 }} />
                  <ListItem>
                    <ListItemText
                      primary="지하철"
                      secondary="5호선 여의나루역 1번 출구에서 도보 10분"
                    />
                  </ListItem>
                  <ListItem>
                    <ListItemText
                      primary="버스"
                      secondary="간선버스: 162, 261, 362"
                    />
                  </ListItem>
                </List>
              </Grid>
            </Grid>
          </Paper>
        </TabPanel>
      </Container>
    </Box>
  );
};

// TabPanel Component
function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`about-tabpanel-${index}`}
      aria-labelledby={`about-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ py: 3 }}>{children}</Box>}
    </div>
  );
}

// Data
const achievements = [
  {
    title: "생태계 복원",
    description: "수달 서식지 복원 및 철새 도래지 보호 성공",
  },
  {
    title: "시민참여",
    description: "연간 15,000명 이상의 시민이 프로그램 참여",
  },
  {
    title: "환경교육",
    description: "200개 이상의 학교와 협력하여 환경교육 진행",
  },
];

const people = [
  { name: "김한강", role: "이사장" },
  { name: "이생태", role: "사무국장" },
  { name: "박시민", role: "교육팀장" },
  { name: "정협력", role: "연구팀장" },
];

const branches = [
  {
    name: "여의도 본부",
    address: "서울시 영등포구 여의도동",
    description: "한강 생태계 보전의 중심, 주요 교육 프로그램 운영",
  },
  {
    name: "중랑천 지부",
    address: "서울시 중랑구",
    description: "도시 하천 생태계 연구 및 모니터링 거점",
  },
  {
    name: "진천 지부",
    address: "충북 진천군",
    description: "습지 보전 및 생태농업 실천 현장",
  },
];

export default About;
