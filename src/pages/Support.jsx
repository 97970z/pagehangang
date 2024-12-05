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
  CardMedia,
  Button,
  Tabs,
  Tab,
  Stack,
  LinearProgress,
  Divider,
  Paper,
} from "@mui/material";
import { Favorite, LocalMall, CalendarToday } from "@mui/icons-material";

const Support = () => {
  const [tabValue, setTabValue] = useState(0);

  return (
    <Box>
      <Box sx={{ bgcolor: "primary.main", color: "white", py: 6 }}>
        <Container maxWidth="lg">
          <Typography variant="h3" gutterBottom fontWeight="bold">
            후원
          </Typography>
          <Typography variant="h6">한강의 미래를 함께 만들어주세요</Typography>
        </Container>
      </Box>

      <Container maxWidth="lg" sx={{ mt: -4, position: "relative", zIndex: 2 }}>
        <Grid container spacing={3}>
          <Grid item xs={12} md={8}>
            <Paper elevation={3} sx={{ p: 3 }}>
              <Stack direction="row" spacing={2} alignItems="center" mb={3}>
                <Favorite color="error" sx={{ fontSize: 40 }} />
                <Box>
                  <Typography variant="h5" gutterBottom>
                    현재 진행중인 모금
                  </Typography>
                  <Typography variant="body1">
                    수달 서식지 보호 프로젝트
                  </Typography>
                </Box>
              </Stack>
              <LinearProgress
                variant="determinate"
                value={75}
                sx={{ height: 10, borderRadius: 5, mb: 2 }}
              />
              <Stack direction="row" justifyContent="space-between" mb={3}>
                <Typography>목표액: 1,000만원</Typography>
                <Typography>달성액: 750만원 (75%)</Typography>
              </Stack>
              <Button variant="contained" color="primary" size="large">
                지금 후원하기
              </Button>
            </Paper>
          </Grid>

          <Grid item xs={12} md={4}>
            <Paper elevation={3} sx={{ p: 3 }}>
              <Typography variant="h6" gutterBottom>
                후원자 현황
              </Typography>
              <Typography variant="h3" color="primary" gutterBottom>
                1,234명
              </Typography>
              <Typography color="text.secondary">함께하는 한강애인</Typography>
            </Paper>
          </Grid>
        </Grid>
      </Container>

      <Container maxWidth="lg" sx={{ mt: 6 }}>
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <Tabs
            value={tabValue}
            onChange={(e, newValue) => setTabValue(newValue)}
          >
            <Tab label="한강애인" icon={<Favorite />} />
            <Tab label="한강굿즈" icon={<LocalMall />} />
          </Tabs>
        </Box>

        <Box sx={{ py: 4 }}>
          <TabPanel value={tabValue} index={0}>
            <Grid container spacing={3}>
              {supporterPlans.map((plan, index) => (
                <Grid item xs={12} md={4} key={index}>
                  <Card sx={{ height: "100%" }}>
                    <CardContent>
                      <Typography variant="h5" color="primary" gutterBottom>
                        {plan.title}
                      </Typography>
                      <Typography variant="h4" gutterBottom>
                        {plan.amount}원
                      </Typography>
                      <Typography color="text.secondary" paragraph>
                        {plan.description}
                      </Typography>
                      <Divider sx={{ my: 2 }} />
                      <Stack spacing={1}>
                        {plan.benefits.map((benefit, idx) => (
                          <Typography key={idx} variant="body2">
                            ✓ {benefit}
                          </Typography>
                        ))}
                      </Stack>
                      <Button variant="contained" fullWidth sx={{ mt: 3 }}>
                        후원하기
                      </Button>
                    </CardContent>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </TabPanel>

          <TabPanel value={tabValue} index={1}>
            <Grid container spacing={3}>
              {goods.map((item, index) => (
                <Grid item xs={12} sm={6} md={3} key={index}>
                  <Card>
                    <CardMedia
                      component="img"
                      height="200"
                      image={`/api/placeholder/400/200`}
                      alt={item.name}
                    />
                    <CardContent>
                      <Typography gutterBottom variant="h6">
                        {item.name}
                      </Typography>
                      <Typography variant="h6" color="primary" gutterBottom>
                        {item.price}원
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        {item.description}
                      </Typography>
                      <Button variant="outlined" fullWidth sx={{ mt: 2 }}>
                        구매하기
                      </Button>
                    </CardContent>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </TabPanel>
        </Box>
      </Container>

      <Box sx={{ bgcolor: "grey.100", py: 6, mt: 6 }}>
        <Container maxWidth="lg">
          <Typography variant="h5" gutterBottom textAlign="center">
            후원금은 이렇게 사용됩니다
          </Typography>
          <Grid container spacing={3} sx={{ mt: 2 }}>
            {usageCategories.map((category, index) => (
              <Grid item xs={12} sm={6} md={3} key={index}>
                <Paper sx={{ p: 3, textAlign: "center" }}>
                  {category.icon}
                  <Typography variant="h6" sx={{ mt: 2 }}>
                    {category.title}
                  </Typography>
                  <Typography color="text.secondary">
                    {category.percentage}%
                  </Typography>
                </Paper>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>
    </Box>
  );
};

function TabPanel(props) {
  const { children, value, index, ...other } = props;
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`support-tabpanel-${index}`}
      {...other}
    >
      {value === index && <Box>{children}</Box>}
    </div>
  );
}

const supporterPlans = [
  {
    title: "조합원",
    amount: "10,000",
    description: "매월 만원으로 한강의 미래를 만듭니다",
    benefits: ["정기 뉴스레터 구독", "연간 활동보고서", "기부금 영수증 발행"],
  },
];

const goods = [
  {
    name: "한강 에코백",
    price: "25,000",
    description: "100% 유기농 면으로 제작된 에코백",
  },
  {
    name: "수달 텀블러",
    price: "35,000",
    description: "친환경 스테인리스 텀블러",
  },
  {
    name: "한강 노트",
    price: "15,000",
    description: "재생지로 만든 친환경 노트",
  },
  {
    name: "새 엽서세트",
    price: "10,000",
    description: "한강의 조류 사진 엽서 5종",
  },
];

const usageCategories = [
  {
    title: "생태보전",
    percentage: 40,
    icon: "🌱",
  },
  {
    title: "교육연구",
    percentage: 30,
    icon: "📚",
  },
  {
    title: "시민활동",
    percentage: 20,
    icon: "👥",
  },
  {
    title: "운영비",
    percentage: 10,
    icon: "💡",
  },
];

export default Support;
