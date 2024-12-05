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
  CardActionArea,
  Tabs,
  Tab,
  Chip,
  Stack,
  Button,
  Divider,
} from "@mui/material";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import LocationOnIcon from "@mui/icons-material/LocationOn";

const Activity = () => {
  const [tabValue, setTabValue] = useState(0);

  return (
    <Box>
      {/* Hero Section */}
      <Box sx={{ bgcolor: "primary.main", color: "white", py: 6 }}>
        <Container maxWidth="lg">
          <Typography variant="h3" gutterBottom fontWeight="bold">
            활동
          </Typography>
          <Typography variant="h6">
            한강의 생태계 보전을 위한 다양한 활동에 참여해보세요
          </Typography>
        </Container>
      </Box>

      {/* Programs Navigation */}
      <Container
        maxWidth="lg"
        sx={{ mt: -4, mb: 6, position: "relative", zIndex: 2 }}
      >
        <Grid container spacing={2}>
          {programCategories.map((category, index) => (
            <Grid item xs={12} sm={6} md={3} key={index}>
              <Card
                raised={tabValue === index}
                sx={{
                  cursor: "pointer",
                  transition: "0.3s",
                  "&:hover": { transform: "translateY(-4px)" },
                }}
                onClick={() => setTabValue(index)}
              >
                <CardContent sx={{ textAlign: "center" }}>
                  {category.icon}
                  <Typography variant="h6" sx={{ mt: 1 }}>
                    {category.title}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* Programs Content */}
      <Container maxWidth="lg" sx={{ mb: 8 }}>
        <TabPanel value={tabValue} index={0}>
          <Typography variant="h4" gutterBottom>
            샛숲학교
          </Typography>
          <Typography variant="body1" paragraph color="text.secondary">
            어린이들의 생태감수성을 키우는 체험형 환경교육 프로그램
          </Typography>
          <Grid container spacing={3}>
            {forestSchoolPrograms.map((program, index) => (
              <Grid item xs={12} md={4} key={index}>
                <ProgramCard program={program} />
              </Grid>
            ))}
          </Grid>
        </TabPanel>

        <TabPanel value={tabValue} index={1}>
          <Typography variant="h4" gutterBottom>
            생다진천
          </Typography>
          <Typography variant="body1" paragraph color="text.secondary">
            진천 지역의 생태농업과 환경보전 활동
          </Typography>
          <Grid container spacing={3}>
            {jincheonPrograms.map((program, index) => (
              <Grid item xs={12} md={4} key={index}>
                <ProgramCard program={program} />
              </Grid>
            ))}
          </Grid>
        </TabPanel>

        <TabPanel value={tabValue} index={2}>
          <Typography variant="h4" gutterBottom>
            중랑천
          </Typography>
          <Typography variant="body1" paragraph color="text.secondary">
            도시 하천의 생태계 복원과 시민참여 프로그램
          </Typography>
          <Grid container spacing={3}>
            {jungnangPrograms.map((program, index) => (
              <Grid item xs={12} md={4} key={index}>
                <ProgramCard program={program} />
              </Grid>
            ))}
          </Grid>
        </TabPanel>

        <TabPanel value={tabValue} index={3}>
          <Typography variant="h4" gutterBottom>
            강교육
          </Typography>
          <Typography variant="body1" paragraph color="text.secondary">
            전문가와 함께하는 심화 생태교육 프로그램
          </Typography>
          <Grid container spacing={3}>
            {riverEduPrograms.map((program, index) => (
              <Grid item xs={12} md={4} key={index}>
                <ProgramCard program={program} />
              </Grid>
            ))}
          </Grid>
        </TabPanel>
      </Container>
    </Box>
  );
};

// Program Card Component
const ProgramCard = ({ program }) => (
  <Card sx={{ height: "100%" }}>
    <CardActionArea>
      <CardMedia
        component="img"
        height="200"
        image={`/api/placeholder/400/200`}
        alt={program.title}
      />
      <CardContent>
        <Stack direction="row" spacing={1} mb={1}>
          {program.tags.map((tag, index) => (
            <Chip
              key={index}
              label={tag}
              size="small"
              color="primary"
              variant="outlined"
            />
          ))}
        </Stack>
        <Typography gutterBottom variant="h6" component="div">
          {program.title}
        </Typography>
        <Typography variant="body2" color="text.secondary" paragraph>
          {program.description}
        </Typography>
        <Stack spacing={1} sx={{ mt: 2 }}>
          <Stack direction="row" spacing={1} alignItems="center">
            <CalendarMonthIcon fontSize="small" color="action" />
            <Typography variant="body2">{program.date}</Typography>
          </Stack>
          <Stack direction="row" spacing={1} alignItems="center">
            <AccessTimeIcon fontSize="small" color="action" />
            <Typography variant="body2">{program.time}</Typography>
          </Stack>
          <Stack direction="row" spacing={1} alignItems="center">
            <LocationOnIcon fontSize="small" color="action" />
            <Typography variant="body2">{program.location}</Typography>
          </Stack>
        </Stack>
      </CardContent>
    </CardActionArea>
  </Card>
);

// TabPanel Component
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

// Sample Data
const programCategories = [
  { title: "샛숲학교", icon: "🌳" },
  { title: "생다진천", icon: "🌱" },
  { title: "중랑천", icon: "💧" },
  { title: "강교육", icon: "📚" },
];

const forestSchoolPrograms = [
  {
    title: "숲속 탐험대",
    description: "어린이들과 함께하는 생태놀이와 관찰 프로그램",
    tags: ["초등학생", "체험학습"],
    date: "2024.03.15 (토)",
    time: "10:00 - 12:00",
    location: "여의도 샛강생태공원",
  },
  // More programs...
];

const jincheonPrograms = [
  {
    title: "생태농업 체험",
    description: "친환경 농법으로 재배하는 작물 관리 체험",
    tags: ["농업", "체험"],
    date: "2024.03.20 (수)",
    time: "14:00 - 16:00",
    location: "진천 생태농장",
  },
  // More programs...
];

const jungnangPrograms = [
  {
    title: "하천 생태계 모니터링",
    description: "시민과 함께하는 도시 하천 생태계 조사",
    tags: ["모니터링", "시민과학"],
    date: "2024.03.22 (금)",
    time: "10:00 - 12:00",
    location: "중랑천 생태공원",
  },
  // More programs...
];

const riverEduPrograms = [
  {
    title: "한강 생태계 전문가 과정",
    description: "한강 생태계에 대한 심화 교육 프로그램",
    tags: ["전문가", "교육"],
    date: "2024.03.25 (월)",
    time: "19:00 - 21:00",
    location: "한강협력센터",
  },
  // More programs...
];

export default Activity;
