/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { useState } from "react";
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  Button,
  Stack,
  Paper,
  Tabs,
  Tab,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  LinearProgress,
} from "@mui/material";
import {
  School,
  Park,
  WaterDrop,
  LocalLibrary,
  ArrowForward,
} from "@mui/icons-material";

const Activity = () => {
  const [tabValue, setTabValue] = useState(0);

  return (
    <Box>
      {/* Hero Section */}
      <Box sx={{ bgcolor: "primary.main", color: "white", py: 6 }}>
        <Container maxWidth="lg">
          <Grid container alignItems="center" spacing={4}>
            <Grid item xs={12} md={6}>
              <Typography variant="h3" gutterBottom fontWeight="bold">
                우리의 활동
              </Typography>
              <Typography variant="h6">
                한강의 미래를 위한 4가지 핵심 프로젝트
              </Typography>
            </Grid>
            <Grid item xs={12} md={6}>
              <Paper sx={{ p: 3, bgcolor: "rgba(255, 255, 255, 0.1)" }}>
                <Typography variant="h4" gutterBottom color="primary.light">
                  2024년 상반기
                </Typography>
                <Stack direction="row" spacing={3} sx={{ color: "white" }}>
                  <Box>
                    <Typography variant="h2">156</Typography>
                    <Typography>교육 프로그램</Typography>
                  </Box>
                  <Box>
                    <Typography variant="h2">23</Typography>
                    <Typography>연구 과제</Typography>
                  </Box>
                </Stack>
              </Paper>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Main Content */}
      <Container maxWidth="lg" sx={{ my: 6 }}>
        <Tabs
          value={tabValue}
          onChange={(e, newValue) => setTabValue(newValue)}
          centered
          sx={{ mb: 4 }}
        >
          <Tab icon={<School />} label="샛숲학교" />
          <Tab icon={<Park />} label="생다진천" />
          <Tab icon={<WaterDrop />} label="중랑천" />
          <Tab icon={<LocalLibrary />} label="강교육" />
        </Tabs>

        <TabPanel value={tabValue} index={0}>
          <Grid container spacing={4}>
            <Grid item xs={12} md={6}>
              <Typography variant="h4" gutterBottom color="primary">
                샛숲학교
              </Typography>
              <Typography variant="h6" gutterBottom>
                어린이들의 생태감수성을 키우는 체험형 환경교육
              </Typography>
              <Typography paragraph>
                샛숲학교는 한강의 생태계를 직접 체험하고 배우는 현장 중심
                교육프로그램입니다. 전문 생태교육가와 함께 한강의 동식물을
                관찰하고, 생태계의 소중함을 배웁니다.
              </Typography>
              <Stack spacing={2}>
                <Typography variant="h6">2024년 상반기 운영 현황</Typography>
                <Box>
                  <Typography variant="subtitle2" gutterBottom>
                    프로그램 진행률
                  </Typography>
                  <LinearProgress
                    variant="determinate"
                    value={65}
                    sx={{ height: 8, borderRadius: 4 }}
                  />
                  <Typography variant="caption" color="text.secondary">
                    65% 달성 (42/65 프로그램)
                  </Typography>
                </Box>
                <Box>
                  <Typography variant="subtitle2" gutterBottom>
                    참여 학교
                  </Typography>
                  <LinearProgress
                    variant="determinate"
                    value={80}
                    sx={{ height: 8, borderRadius: 4 }}
                  />
                  <Typography variant="caption" color="text.secondary">
                    80% 달성 (32/40 학교)
                  </Typography>
                </Box>
              </Stack>
            </Grid>
            <Grid item xs={12} md={6}>
              <TableContainer component={Paper} sx={{ height: "100%" }}>
                <Table>
                  <TableHead>
                    <TableRow>
                      <TableCell>프로그램</TableCell>
                      <TableCell>대상</TableCell>
                      <TableCell>기간</TableCell>
                      <TableCell>상태</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {forestSchoolPrograms.map((program, index) => (
                      <TableRow key={index}>
                        <TableCell>{program.name}</TableCell>
                        <TableCell>{program.target}</TableCell>
                        <TableCell>{program.period}</TableCell>
                        <TableCell>
                          <Button
                            size="small"
                            variant={
                              program.status === "모집중"
                                ? "contained"
                                : "outlined"
                            }
                            color={
                              program.status === "모집중"
                                ? "primary"
                                : "inherit"
                            }
                          >
                            {program.status}
                          </Button>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
            </Grid>
          </Grid>

          {/* Impact Section */}
          <Box sx={{ mt: 6 }}>
            <Typography variant="h5" gutterBottom>
              프로그램 성과
            </Typography>
            <Grid container spacing={3}>
              {impactMetrics.map((metric, index) => (
                <Grid item xs={12} sm={6} md={3} key={index}>
                  <Card>
                    <CardContent>
                      <Typography color="text.secondary" gutterBottom>
                        {metric.label}
                      </Typography>
                      <Typography variant="h4" color="primary">
                        {metric.value}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        {metric.description}
                      </Typography>
                    </CardContent>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </Box>

          {/* Gallery Section */}
          <Box sx={{ mt: 6 }}>
            <Stack
              direction="row"
              justifyContent="space-between"
              alignItems="center"
              mb={3}
            >
              <Typography variant="h5">활동 갤러리</Typography>
              <Button endIcon={<ArrowForward />}>전체보기</Button>
            </Stack>
            <Grid container spacing={2}>
              {[1, 2, 3, 4].map((item) => (
                <Grid item xs={12} sm={6} md={3} key={item}>
                  <img
                    src={`/api/placeholder/300/200`}
                    alt={`활동 이미지 ${item}`}
                    style={{
                      width: "100%",
                      height: "200px",
                      objectFit: "cover",
                      borderRadius: "8px",
                    }}
                  />
                </Grid>
              ))}
            </Grid>
          </Box>
        </TabPanel>

        {/* 나머지 탭 패널들도 유사한 구조로 구현 */}
      </Container>
    </Box>
  );
};

function TabPanel(props) {
  const { children, value, index, ...other } = props;
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`activity-tabpanel-${index}`}
      {...other}
    >
      {value === index && <Box>{children}</Box>}
    </div>
  );
}

const forestSchoolPrograms = [
  {
    name: "한강 생태탐험대",
    target: "초등 1-3학년",
    period: "3-5월",
    status: "모집중",
  },
  {
    name: "물새 관찰교실",
    target: "초등 4-6학년",
    period: "4-6월",
    status: "모집중",
  },
  {
    name: "어린이 생태학자",
    target: "초등 전학년",
    period: "3-6월",
    status: "모집완료",
  },
  {
    name: "가족 생태교실",
    target: "가족",
    period: "상시",
    status: "모집중",
  },
];

const impactMetrics = [
  {
    label: "누적 참여 학생",
    value: "15,234명",
    description: "2020년 이후",
  },
  {
    label: "협력 학교",
    value: "32개",
    description: "2024년 현재",
  },
  {
    label: "생태교육 시간",
    value: "2,456시간",
    description: "2023년 기준",
  },
  {
    label: "참여 만족도",
    value: "4.8/5",
    description: "2023년 평균",
  },
];

export default Activity;
