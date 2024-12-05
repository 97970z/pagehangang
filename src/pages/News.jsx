/* eslint-disable react/prop-types */
import React, { useState } from "react";
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  CardMedia,
  Tabs,
  Tab,
  Paper,
  List,
  ListItem,
  ListItemText,
  Divider,
  Stack,
  IconButton,
} from "@mui/material";
import {
  Download,
  CalendarToday,
  ArticleOutlined,
  AttachMoney,
} from "@mui/icons-material";

const News = () => {
  const [tabValue, setTabValue] = useState(0);

  return (
    <Box>
      <Box sx={{ bgcolor: "primary.main", color: "white", py: 6 }}>
        <Container maxWidth="lg">
          <Typography variant="h3" gutterBottom fontWeight="bold">
            소식
          </Typography>
          <Typography variant="h6">
            한강의 최신 소식과 활동을 확인하세요
          </Typography>
        </Container>
      </Box>

      <Container maxWidth="lg" sx={{ mt: 4 }}>
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <Tabs
            value={tabValue}
            onChange={(e, newValue) => setTabValue(newValue)}
          >
            <Tab label="공지사항" />
            <Tab label="오늘 한강은" />
            <Tab label="보도자료" />
            <Tab label="연구 및 발행물" />
            <Tab label="한강편지" />
            <Tab label="재정보고" />
          </Tabs>
        </Box>

        <Box sx={{ py: 4 }}>
          <TabPanel value={tabValue} index={0}>
            <List>
              {notices.map((notice, index) => (
                <React.Fragment key={index}>
                  <ListItem alignItems="flex-start" sx={{ py: 3 }}>
                    <ListItemText
                      primary={
                        <Stack direction="row" alignItems="center" spacing={1}>
                          {notice.isImportant && (
                            <Paper
                              sx={{
                                px: 1,
                                bgcolor: "error.main",
                                color: "white",
                              }}
                            >
                              중요
                            </Paper>
                          )}
                          <Typography variant="h6">{notice.title}</Typography>
                        </Stack>
                      }
                      secondary={
                        <Stack spacing={1} sx={{ mt: 1 }}>
                          <Typography variant="body2" color="text.secondary">
                            {notice.content}
                          </Typography>
                          <Stack
                            direction="row"
                            spacing={2}
                            alignItems="center"
                          >
                            <Box display="flex" alignItems="center" gap={0.5}>
                              <CalendarToday fontSize="small" />
                              <Typography variant="body2">
                                {notice.date}
                              </Typography>
                            </Box>
                          </Stack>
                        </Stack>
                      }
                    />
                  </ListItem>
                  <Divider />
                </React.Fragment>
              ))}
            </List>
          </TabPanel>

          <TabPanel value={tabValue} index={1}>
            <Grid container spacing={3}>
              {dailyUpdates.map((update, index) => (
                <Grid item xs={12} md={4} key={index}>
                  <Card>
                    <CardMedia
                      component="img"
                      height="200"
                      image={`/api/placeholder/400/200`}
                      alt={update.title}
                    />
                    <CardContent>
                      <Typography gutterBottom variant="h6">
                        {update.title}
                      </Typography>
                      <Typography
                        variant="body2"
                        color="text.secondary"
                        paragraph
                      >
                        {update.content}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        {update.date}
                      </Typography>
                    </CardContent>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </TabPanel>

          <TabPanel value={tabValue} index={2}>
            <Grid container spacing={3}>
              {pressReleases.map((press, index) => (
                <Grid item xs={12} key={index}>
                  <Card>
                    <Grid container>
                      <Grid item xs={12} md={4}>
                        <CardMedia
                          component="img"
                          height="200"
                          image={`/api/placeholder/400/200`}
                          alt={press.title}
                          sx={{ height: "100%" }}
                        />
                      </Grid>
                      <Grid item xs={12} md={8}>
                        <CardContent>
                          <Typography gutterBottom variant="h6">
                            {press.title}
                          </Typography>
                          <Typography
                            variant="body2"
                            color="text.secondary"
                            paragraph
                          >
                            {press.content}
                          </Typography>
                          <Typography variant="body2" color="text.secondary">
                            {press.date} | {press.source}
                          </Typography>
                        </CardContent>
                      </Grid>
                    </Grid>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </TabPanel>

          <TabPanel value={tabValue} index={3}>
            <Grid container spacing={3}>
              {publications.map((pub, index) => (
                <Grid item xs={12} md={6} key={index}>
                  <Paper elevation={2}>
                    <Stack direction="row" spacing={2} p={2}>
                      <ArticleOutlined
                        sx={{ fontSize: 40, color: "primary.main" }}
                      />
                      <Box flex={1}>
                        <Typography variant="h6" gutterBottom>
                          {pub.title}
                        </Typography>
                        <Typography
                          variant="body2"
                          color="text.secondary"
                          paragraph
                        >
                          {pub.description}
                        </Typography>
                        <Stack direction="row" spacing={2} alignItems="center">
                          <Typography variant="body2" color="text.secondary">
                            {pub.date}
                          </Typography>
                          <IconButton color="primary" size="small">
                            <Download />
                          </IconButton>
                        </Stack>
                      </Box>
                    </Stack>
                  </Paper>
                </Grid>
              ))}
            </Grid>
          </TabPanel>

          <TabPanel value={tabValue} index={4}>
            <Grid container spacing={3}>
              {newsletters.map((newsletter, index) => (
                <Grid item xs={12} md={4} key={index}>
                  <Card>
                    <CardMedia
                      component="img"
                      height="200"
                      image={`/api/placeholder/400/200`}
                      alt={newsletter.title}
                    />
                    <CardContent>
                      <Typography gutterBottom variant="h6">
                        {newsletter.title}
                      </Typography>
                      <Typography
                        variant="body2"
                        color="text.secondary"
                        paragraph
                      >
                        {newsletter.description}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        {newsletter.date}
                      </Typography>
                    </CardContent>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </TabPanel>

          <TabPanel value={tabValue} index={5}>
            <Grid container spacing={3}>
              {financialReports.map((report, index) => (
                <Grid item xs={12} key={index}>
                  <Paper elevation={2}>
                    <Stack direction="row" spacing={2} p={3}>
                      <AttachMoney
                        sx={{ fontSize: 40, color: "primary.main" }}
                      />
                      <Box flex={1}>
                        <Typography variant="h6" gutterBottom>
                          {report.title}
                        </Typography>
                        <Typography variant="body2" paragraph>
                          {report.description}
                        </Typography>
                        <Stack direction="row" spacing={2} alignItems="center">
                          <Typography variant="body2" color="text.secondary">
                            {report.period}
                          </Typography>
                          <IconButton color="primary">
                            <Download />
                          </IconButton>
                        </Stack>
                      </Box>
                    </Stack>
                  </Paper>
                </Grid>
              ))}
            </Grid>
          </TabPanel>
        </Box>
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
      id={`news-tabpanel-${index}`}
      {...other}
    >
      {value === index && <Box>{children}</Box>}
    </div>
  );
}

const notices = [
  {
    title: "2024년 상반기 한강조합 신규 직원 채용 공고",
    content: "한강의 생태계 보전을 위해 함께할 신규 직원을 모집합니다.",
    date: "2024.02.28",
    isImportant: true,
  },
  {
    title: "3월 정기 이사회 개최 안내",
    content: "2024년 3월 정기 이사회가 개최됩니다.",
    date: "2024.02.25",
    isImportant: false,
  },
];

const dailyUpdates = [
  {
    title: "여의도 샛강 수달 가족 발견",
    content: "오늘 오전, 여의도 샛강에서 수달 가족이 목격되었습니다.",
    date: "2024.03.01",
  },
  {
    title: "봄철 철새 도래 현황",
    content: "이번 주 관찰된 철새는 총 15종입니다.",
    date: "2024.02.28",
  },
];

const pressReleases = [
  {
    title: "한강조합, 생태계 복원 성과 발표",
    content: "지난 5년간의 생태계 복원 프로젝트 성과를 발표했습니다.",
    date: "2024.02.20",
    source: "환경일보",
  },
];

const publications = [
  {
    title: "2024 한강 생태계 모니터링 보고서",
    description: "2024년 1분기 한강 생태계 모니터링 결과 보고서입니다.",
    date: "2024.02.15",
  },
];

const newsletters = [
  {
    title: "한강편지 3월호",
    description: "3월의 한강 소식과 활동 소식을 전해드립니다.",
    date: "2024.03.01",
  },
];

const financialReports = [
  {
    title: "2024년 1분기 재정보고서",
    description: "2024년 1분기 수입 및 지출 내역을 공개합니다.",
    period: "2024.01.01 - 2024.03.31",
  },
];

export default News;
