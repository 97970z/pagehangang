/* eslint-disable react/prop-types */
// // pages/Participate.jsx
// import { useState } from "react";
// import {
//   Container,
//   Row,
//   Col,
//   Card,
//   Button,
//   Form,
//   Badge,
// } from "react-bootstrap";

// function Participate() {
//   const [selectedRegion, setSelectedRegion] = useState("all");
//   const [selectedType, setSelectedType] = useState("all");

//   return (
//     <>
//       {/* 참여 히어로 섹션 */}
//       <div className="bg-success text-white py-5">
//         <Container>
//           <Row className="align-items-center">
//             <Col md={6}>
//               <h1>한강과 함께하는 시민 활동</h1>
//               <p className="lead">여러분의 참여로 한강이 더욱 건강해집니다</p>
//             </Col>
//             <Col md={6}>
//               <Card className="bg-light text-dark">
//                 <Card.Body>
//                   <h3>이번 달 참여 현황</h3>
//                   <div className="d-flex justify-content-around text-center">
//                     <div>
//                       <h4>23</h4>
//                       <p>진행 프로그램</p>
//                     </div>
//                     <div>
//                       <h4>456</h4>
//                       <p>참여 시민</p>
//                     </div>
//                     <div>
//                       <h4>89</h4>
//                       <p>협력 기관</p>
//                     </div>
//                   </div>
//                 </Card.Body>
//               </Card>
//             </Col>
//           </Row>
//         </Container>
//       </div>

//       {/* 프로그램 필터 섹션 */}
//       <Container className="py-4">
//         <Row>
//           <Col md={3}>
//             <Form.Group className="mb-3">
//               <Form.Label>지역 선택</Form.Label>
//               <Form.Select
//                 value={selectedRegion}
//                 onChange={(e) => setSelectedRegion(e.target.value)}
//               >
//                 <option value="all">전체 지역</option>
//                 <option value="yeouido">여의도</option>
//                 <option value="jamsil">잠실</option>
//                 <option value="ttukseom">뚝섬</option>
//               </Form.Select>
//             </Form.Group>
//           </Col>
//           <Col md={3}>
//             <Form.Group className="mb-3">
//               <Form.Label>활동 유형</Form.Label>
//               <Form.Select
//                 value={selectedType}
//                 onChange={(e) => setSelectedType(e.target.value)}
//               >
//                 <option value="all">전체 활동</option>
//                 <option value="eco">생태보전</option>
//                 <option value="education">환경교육</option>
//                 <option value="culture">문화행사</option>
//               </Form.Select>
//             </Form.Group>
//           </Col>
//           <Col md={3}>
//             <Form.Group className="mb-3">
//               <Form.Label>날짜 선택</Form.Label>
//               <Form.Control type="date" />
//             </Form.Group>
//           </Col>
//         </Row>
//       </Container>

//       {/* 프로그램 목록 */}
//       <Container className="py-3">
//         <Row>
//           {[1, 2, 3, 4, 5, 6].map((item) => (
//             <Col md={4} key={item} className="mb-4">
//               <Card>
//                 <Card.Img variant="top" src={`/path-to-program-${item}.jpg`} />
//                 <Card.Body>
//                   <div className="d-flex justify-content-between align-items-start mb-2">
//                     <Card.Title>생태모니터링 활동</Card.Title>
//                     <Badge bg="success">모집중</Badge>
//                   </div>
//                   <Card.Text>
//                     <p>📅 2024.03.15 (토) 14:00-16:00</p>
//                     <p>📍 여의도 한강공원</p>
//                     <p>👥 모집인원: 20명 (잔여: 5명)</p>
//                   </Card.Text>
//                   <div className="d-flex gap-2 mb-3">
//                     <Badge bg="info">초급</Badge>
//                     <Badge bg="secondary">가족</Badge>
//                   </div>
//                   <Button variant="primary" className="w-100">
//                     신청하기
//                   </Button>
//                 </Card.Body>
//               </Card>
//             </Col>
//           ))}
//         </Row>
//       </Container>

//       {/* 참여 안내 섹션 */}
//       <div className="bg-light py-5">
//         <Container>
//           <h2 className="mb-4">참여 안내</h2>
//           <Row>
//             <Col md={4} className="mb-4">
//               <Card>
//                 <Card.Body>
//                   <h3 className="h5">🌱 개인 참여</h3>
//                   <ul className="list-unstyled">
//                     <li className="mb-2">- 생태 모니터링</li>
//                     <li className="mb-2">- 환경교육 프로그램</li>
//                     <li className="mb-2">- 자원봉사 활동</li>
//                   </ul>
//                 </Card.Body>
//               </Card>
//             </Col>
//             <Col md={4} className="mb-4">
//               <Card>
//                 <Card.Body>
//                   <h3 className="h5">👥 단체 참여</h3>
//                   <ul className="list-unstyled">
//                     <li className="mb-2">- 학교 연계 프로그램</li>
//                     <li className="mb-2">- 기업 ESG 활동</li>
//                     <li className="mb-2">- 지역사회 협력</li>
//                   </ul>
//                 </Card.Body>
//               </Card>
//             </Col>
//             <Col md={4} className="mb-4">
//               <Card>
//                 <Card.Body>
//                   <h3 className="h5">📝 참여 방법</h3>
//                   <ul className="list-unstyled">
//                     <li className="mb-2">1. 프로그램 선택</li>
//                     <li className="mb-2">2. 온라인 신청</li>
//                     <li className="mb-2">3. 참가 확정 안내</li>
//                   </ul>
//                 </Card.Body>
//               </Card>
//             </Col>
//           </Row>
//         </Container>
//       </div>
//     </>
//   );
// }

// export default Participate;

import { useState } from "react";
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
  Chip,
  Stack,
  TextField,
  MenuItem,
  Paper,
} from "@mui/material";
import {
  Campaign,
  Handshake,
  People,
  CalendarMonth,
  AccessTime,
  LocationOn,
} from "@mui/icons-material";

const Participate = () => {
  const [tabValue, setTabValue] = useState(0);
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedLocation, setSelectedLocation] = useState("all");

  return (
    <Box>
      <Box sx={{ bgcolor: "primary.main", color: "white", py: 6 }}>
        <Container maxWidth="lg">
          <Typography variant="h3" gutterBottom fontWeight="bold">
            참여하기
          </Typography>
          <Typography variant="h6">
            한강 생태계 보전을 위한 다양한 방법으로 참여해주세요
          </Typography>
        </Container>
      </Box>

      <Container maxWidth="lg" sx={{ mt: -4, position: "relative", zIndex: 2 }}>
        <Grid container spacing={2}>
          {categories.map((category, index) => (
            <Grid item xs={12} sm={4} key={index}>
              <Paper
                elevation={3}
                sx={{
                  p: 3,
                  textAlign: "center",
                  height: "100%",
                  transition: "0.3s",
                  "&:hover": { transform: "translateY(-4px)" },
                }}
              >
                {category.icon}
                <Typography variant="h6" sx={{ mt: 2 }}>
                  {category.title}
                </Typography>
                <Typography color="text.secondary" sx={{ mt: 1 }}>
                  {category.description}
                </Typography>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Container>

      <Container maxWidth="lg" sx={{ mt: 6 }}>
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <Tabs
            value={tabValue}
            onChange={(e, newValue) => setTabValue(newValue)}
          >
            <Tab label="캠페인" />
            <Tab label="프로그램" />
            <Tab label="자원봉사" />
          </Tabs>
        </Box>

        <Box sx={{ py: 4 }}>
          <Grid container spacing={2} sx={{ mb: 4 }}>
            <Grid item xs={12} sm={4}>
              <TextField
                select
                fullWidth
                label="카테고리"
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
              >
                <MenuItem value="all">전체</MenuItem>
                <MenuItem value="environment">환경보전</MenuItem>
                <MenuItem value="education">교육</MenuItem>
                <MenuItem value="culture">문화</MenuItem>
              </TextField>
            </Grid>
            <Grid item xs={12} sm={4}>
              <TextField
                select
                fullWidth
                label="지역"
                value={selectedLocation}
                onChange={(e) => setSelectedLocation(e.target.value)}
              >
                <MenuItem value="all">전체</MenuItem>
                <MenuItem value="yeouido">여의도</MenuItem>
                <MenuItem value="jungrang">중랑천</MenuItem>
                <MenuItem value="jincheon">진천</MenuItem>
              </TextField>
            </Grid>
          </Grid>

          <TabPanel value={tabValue} index={0}>
            <Grid container spacing={3}>
              {campaigns.map((campaign, index) => (
                <Grid item xs={12} md={4} key={index}>
                  <CampaignCard campaign={campaign} />
                </Grid>
              ))}
            </Grid>
          </TabPanel>

          <TabPanel value={tabValue} index={1}>
            <Grid container spacing={3}>
              {programs.map((program, index) => (
                <Grid item xs={12} md={4} key={index}>
                  <ProgramCard program={program} />
                </Grid>
              ))}
            </Grid>
          </TabPanel>

          <TabPanel value={tabValue} index={2}>
            <Grid container spacing={3}>
              {volunteerActivities.map((activity, index) => (
                <Grid item xs={12} md={4} key={index}>
                  <VolunteerCard activity={activity} />
                </Grid>
              ))}
            </Grid>
          </TabPanel>
        </Box>
      </Container>
    </Box>
  );
};

const CampaignCard = ({ campaign }) => (
  <Card sx={{ height: "100%" }}>
    <CardMedia
      component="img"
      height="200"
      image={`/api/placeholder/400/200`}
      alt={campaign.title}
    />
    <CardContent>
      <Stack direction="row" spacing={1} mb={1}>
        {campaign.tags.map((tag, index) => (
          <Chip
            key={index}
            label={tag}
            size="small"
            color="primary"
            variant="outlined"
          />
        ))}
      </Stack>
      <Typography gutterBottom variant="h6">
        {campaign.title}
      </Typography>
      <Typography variant="body2" color="text.secondary" paragraph>
        {campaign.description}
      </Typography>
      <Button variant="outlined" color="primary">
        참여하기
      </Button>
    </CardContent>
  </Card>
);

const ProgramCard = ({ program }) => (
  <Card sx={{ height: "100%" }}>
    <CardMedia
      component="img"
      height="200"
      image={`/api/placeholder/400/200`}
      alt={program.title}
    />
    <CardContent>
      <Stack spacing={2}>
        <Typography variant="h6">{program.title}</Typography>
        <Typography variant="body2" color="text.secondary">
          {program.description}
        </Typography>
        <Stack direction="row" spacing={1} alignItems="center">
          <CalendarMonth fontSize="small" />
          <Typography variant="body2">{program.date}</Typography>
        </Stack>
        <Stack direction="row" spacing={1} alignItems="center">
          <LocationOn fontSize="small" />
          <Typography variant="body2">{program.location}</Typography>
        </Stack>
        <Button variant="contained" color="primary">
          신청하기
        </Button>
      </Stack>
    </CardContent>
  </Card>
);

const VolunteerCard = ({ activity }) => (
  <Card sx={{ height: "100%" }}>
    <CardMedia
      component="img"
      height="200"
      image={`/api/placeholder/400/200`}
      alt={activity.title}
    />
    <CardContent>
      <Typography gutterBottom variant="h6">
        {activity.title}
      </Typography>
      <Typography variant="body2" color="text.secondary" paragraph>
        {activity.description}
      </Typography>
      <Stack spacing={1} sx={{ mb: 2 }}>
        <Stack direction="row" spacing={1} alignItems="center">
          <CalendarMonth fontSize="small" />
          <Typography variant="body2">{activity.date}</Typography>
        </Stack>
        <Stack direction="row" spacing={1} alignItems="center">
          <AccessTime fontSize="small" />
          <Typography variant="body2">{activity.time}</Typography>
        </Stack>
        <Stack direction="row" spacing={1} alignItems="center">
          <LocationOn fontSize="small" />
          <Typography variant="body2">{activity.location}</Typography>
        </Stack>
      </Stack>
      <Button variant="contained" color="primary" fullWidth>
        참여 신청
      </Button>
    </CardContent>
  </Card>
);

function TabPanel(props) {
  const { children, value, index, ...other } = props;
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`participate-tabpanel-${index}`}
      {...other}
    >
      {value === index && <Box>{children}</Box>}
    </div>
  );
}

const categories = [
  {
    title: "캠페인",
    description: "환경보전을 위한 다양한 캠페인에 참여하세요",
    icon: <Campaign sx={{ fontSize: 40, color: "primary.main" }} />,
  },
  {
    title: "프로그램",
    description: "교육 및 체험 프로그램에 참여하세요",
    icon: <People sx={{ fontSize: 40, color: "primary.main" }} />,
  },
  {
    title: "자원봉사",
    description: "한강의 생태계 보전을 위한 봉사활동에 참여하세요",
    icon: <Handshake sx={{ fontSize: 40, color: "primary.main" }} />,
  },
];

const campaigns = [
  {
    title: "플라스틱 프리 챌린지",
    description: "한강의 플라스틱 오염을 줄이기 위한 시민 참여 캠페인",
    tags: ["환경보호", "챌린지"],
  },
  {
    title: "하천정화 캠페인",
    description: "깨끗한 하천을 만들기 위한 정화활동",
    tags: ["환경보호", "정화활동"],
  },
];

const programs = [
  {
    title: "생태 탐사 프로그램",
    description: "전문가와 함께하는 한강 생태계 탐사",
    date: "2024.03.15",
    location: "여의도 한강공원",
  },
  {
    title: "어린이 생태교실",
    description: "어린이를 위한 재미있는 생태 교육",
    date: "2024.03.20",
    location: "샛강생태공원",
  },
];

const volunteerActivities = [
  {
    title: "철새 서식지 보호활동",
    description: "철새들의 안전한 서식지 조성을 위한 봉사활동",
    date: "2024.03.25",
    time: "10:00 - 12:00",
    location: "여의도 샛강생태공원",
  },
  {
    title: "생태모니터링",
    description: "시민과 함께하는 생태계 모니터링",
    date: "2024.03.27",
    time: "14:00 - 16:00",
    location: "중랑천 생태공원",
  },
];

export default Participate;
