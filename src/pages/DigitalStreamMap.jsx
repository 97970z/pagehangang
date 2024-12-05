/* eslint-disable react/prop-types */
import { useState } from "react";
import {
  Tabs,
  Tab,
  Box,
  Paper,
  Typography,
  Grid,
  Card,
  CardContent,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import FilterListIcon from "@mui/icons-material/FilterList";

const DigitalStreamMap = () => {
  const [activeTab, setActiveTab] = useState(0);

  const mapTypes = [
    {
      id: "trails",
      name: "산책로 지도",
      mapUrl:
        "https://www.google.com/maps/d/u/2/embed?mid=1TLlIkOrCyq3cU_4jM76bDGUwpxEODqoQ&ehbc=2E312F",
      legend: [
        { color: "#FF0000", label: "코스 A (1.2km)" },
        { color: "#00FF00", label: "코스 B (0.8km)" },
        { color: "#0000FF", label: "코스 C (1.5km)" },
      ],
      additionalInfo: {
        title: "산책로 정보",
        content: "계절별 추천 산책로와 소요시간 안내",
      },
    },
    {
      id: "plants",
      name: "식물 지도",
      mapUrl: "https://www.google.com/maps/d/embed?mid=YOUR_PLANTS_MAP_ID",
      legend: [
        { color: "#8B4513", label: "교목" },
        { color: "#228B22", label: "관목" },
        { color: "#90EE90", label: "초화류" },
      ],
      additionalInfo: {
        title: "식물 관찰 정보",
        content: "계절별 관찰 가능한 식물 안내",
      },
    },
    {
      id: "mammals",
      name: "포유류 지도",
      mapUrl: "https://www.google.com/maps/d/embed?mid=YOUR_MAMMALS_MAP_ID",
      legend: [
        { color: "#FFA500", label: "서식지" },
        { color: "#8B4513", label: "관찰 포인트" },
      ],
      additionalInfo: {
        title: "포유류 관찰 정보",
        content: "시간대별 관찰 가능한 포유류 안내",
      },
    },
    {
      id: "birds",
      name: "조류 지도",
      mapUrl: "https://www.google.com/maps/d/embed?mid=YOUR_BIRDS_MAP_ID",
      legend: [
        { color: "#FF1493", label: "철새 관찰지" },
        { color: "#4169E1", label: "텃새 서식지" },
      ],
      additionalInfo: {
        title: "조류 관찰 정보",
        content: "계절별 관찰 가능한 조류 안내",
      },
    },
  ];

  const handleTabChange = (event, newValue) => {
    setActiveTab(newValue);
  };

  const LegendItem = ({ color, label }) => (
    <Box display="flex" alignItems="center" gap={1} mb={1}>
      <Box width={16} height={16} bgcolor={color} />
      <Typography variant="body2">{label}</Typography>
    </Box>
  );

  return (
    <Box sx={{ maxWidth: 1200, margin: "0 auto", p: 3 }}>
      <Typography variant="h4" component="h1" gutterBottom>
        디지털샛강지도
      </Typography>

      <Box sx={{ borderBottom: 1, borderColor: "divider", mb: 3 }}>
        <Tabs
          value={activeTab}
          onChange={handleTabChange}
          variant="scrollable"
          scrollButtons="auto"
          aria-label="map type tabs"
        >
          {mapTypes.map((type, index) => (
            <Tab key={type.id} label={type.name} id={`tab-${index}`} />
          ))}
        </Tabs>
      </Box>

      {mapTypes.map((type, index) => (
        <Box
          key={type.id}
          role="tabpanel"
          hidden={activeTab !== index}
          id={`tabpanel-${index}`}
        >
          {activeTab === index && (
            <Grid container spacing={3}>
              <Grid item xs={12} lg={9}>
                <Paper elevation={3}>
                  <Box
                    sx={{ height: { xs: "400px", lg: "700px" }, width: "100%" }}
                  >
                    <iframe
                      src={type.mapUrl}
                      style={{ width: "100%", height: "100%", border: 0 }}
                      title={type.name}
                    />
                  </Box>
                </Paper>
              </Grid>

              <Grid item xs={12} lg={3}>
                <Box display="flex" flexDirection="column" gap={3}>
                  {/* 필터 패널 */}
                  <Card>
                    <CardContent>
                      <Box display="flex" alignItems="center" gap={1} mb={2}>
                        <FilterListIcon />
                        <Typography variant="h6">필터</Typography>
                      </Box>
                      {/* 필터 옵션들은 각 지도 유형에 맞게 구현 */}
                    </CardContent>
                  </Card>

                  {/* 범례 패널 */}
                  <Card>
                    <CardContent>
                      <Typography variant="h6" gutterBottom>
                        범례
                      </Typography>
                      {type.legend.map((item, idx) => (
                        <LegendItem
                          key={idx}
                          color={item.color}
                          label={item.label}
                        />
                      ))}
                    </CardContent>
                  </Card>

                  {/* 추가 정보 패널 */}
                  <Accordion>
                    <AccordionSummary
                      expandIcon={<ExpandMoreIcon />}
                      aria-controls="additional-info-content"
                      id="additional-info-header"
                    >
                      <Typography>{type.additionalInfo.title}</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                      <Typography>{type.additionalInfo.content}</Typography>
                    </AccordionDetails>
                  </Accordion>
                </Box>
              </Grid>
            </Grid>
          )}
        </Box>
      ))}
    </Box>
  );
};

export default DigitalStreamMap;
