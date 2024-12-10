/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import {
  Box,
  Container,
  Typography,
  Paper,
  Tab,
  Tabs,
  Stack,
  Chip,
  Button,
  IconButton,
  Tooltip,
} from "@mui/material";
import {
  FullscreenOutlined,
  InfoOutlined,
  ShareOutlined,
} from "@mui/icons-material";

const DigitalStreamMap = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [isFullscreen, setIsFullscreen] = useState(false);

  const mapTypes = [
    {
      id: "trails",
      name: "산책로",
      mapUrl:
        "https://www.google.com/maps/d/u/2/embed?mid=1TLlIkOrCyq3cU_4jM76bDGUwpxEODqoQ&ehbc=2E312F",
      legend: [
        { color: "#FF0000", label: "코스 A (1.2km)" },
        { color: "#00FF00", label: "코스 B (0.8km)" },
        { color: "#0000FF", label: "코스 C (1.5km)" },
      ],
    },
    {
      id: "plants",
      name: "식물",
      mapUrl: "https://www.google.com/maps/d/embed?mid=YOUR_PLANTS_MAP_ID",
      legend: [
        { color: "#8B4513", label: "교목" },
        { color: "#228B22", label: "관목" },
        { color: "#90EE90", label: "초화류" },
      ],
    },
    {
      id: "mammals",
      name: "포유류",
      mapUrl: "https://www.google.com/maps/d/embed?mid=YOUR_MAMMALS_MAP_ID",
      legend: [
        { color: "#FFA500", label: "서식지" },
        { color: "#8B4513", label: "관찰 포인트" },
      ],
    },
    {
      id: "birds",
      name: "조류",
      mapUrl: "https://www.google.com/maps/d/embed?mid=YOUR_BIRDS_MAP_ID",
      legend: [
        { color: "#FF1493", label: "철새 관찰지" },
        { color: "#4169E1", label: "텃새 서식지" },
      ],
    },
  ];

  const handleFullscreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen();
      setIsFullscreen(true);
    } else {
      document.exitFullscreen();
      setIsFullscreen(false);
    }
  };

  return (
    <Box
      sx={{
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        bgcolor: "#f5f5f5",
      }}
    >
      {/* 헤더 */}
      <Box
        sx={{
          bgcolor: "primary.main",
          color: "white",
          py: 2,
          boxShadow: 2,
        }}
      >
        <Container maxWidth={false}>
          <Stack
            direction="row"
            justifyContent="space-between"
            alignItems="center"
          >
            <Stack direction="row" spacing={2} alignItems="center">
              <Typography variant="h5">디지털샛강지도</Typography>
              <Tooltip title="지도 정보">
                <IconButton color="inherit" size="small">
                  <InfoOutlined />
                </IconButton>
              </Tooltip>
            </Stack>
            <Stack direction="row" spacing={1}>
              <Tooltip title="공유하기">
                <IconButton color="inherit">
                  <ShareOutlined />
                </IconButton>
              </Tooltip>
              <Tooltip title="전체화면">
                <IconButton color="inherit" onClick={handleFullscreen}>
                  <FullscreenOutlined />
                </IconButton>
              </Tooltip>
            </Stack>
          </Stack>
        </Container>
      </Box>

      {/* 메인 컨텐츠 */}
      <Box sx={{ flex: 1, p: 2 }}>
        <Paper
          elevation={3}
          sx={{
            height: "100%",
            overflow: "hidden",
            borderRadius: 2,
          }}
        >
          {/* 탭 & 범례 */}
          <Stack
            direction="row"
            justifyContent="space-between"
            alignItems="center"
            sx={{
              borderBottom: 1,
              borderColor: "divider",
              bgcolor: "white",
            }}
          >
            <Tabs
              value={activeTab}
              onChange={(e, v) => setActiveTab(v)}
              variant="scrollable"
              scrollButtons="auto"
              sx={{
                "& .MuiTab-root": {
                  minWidth: 100,
                  py: 2,
                },
              }}
            >
              {mapTypes.map((type) => (
                <Tab
                  key={type.id}
                  label={type.name}
                  sx={{ fontWeight: "medium" }}
                />
              ))}
            </Tabs>
            <Stack
              direction="row"
              spacing={1}
              px={3}
              sx={{ overflowX: "auto", flexWrap: "nowrap" }}
            >
              {mapTypes[activeTab].legend.map((item, i) => (
                <Chip
                  key={i}
                  label={item.label}
                  size="small"
                  sx={{
                    bgcolor: item.color,
                    color: "white",
                    "& .MuiChip-label": {
                      px: 2,
                      textShadow: "0px 0px 4px rgba(0,0,0,0.5)",
                      fontWeight: "medium",
                    },
                  }}
                />
              ))}
            </Stack>
          </Stack>

          {/* 지도 */}
          {mapTypes.map((type, index) => (
            <Box
              key={type.id}
              role="tabpanel"
              hidden={activeTab !== index}
              sx={{
                height: "calc(100% - 49px)",
                position: "relative",
              }}
            >
              {activeTab === index && (
                <iframe
                  src={type.mapUrl}
                  style={{
                    width: "100%",
                    height: "100%",
                    border: 0,
                    backgroundColor: "#f8f8f8",
                  }}
                  title={type.name}
                  onWheel={(e) => {
                    // Ctrl 키가 눌린 상태에서만 확대/축소 허용
                    if (!e.ctrlKey) {
                      e.preventDefault();
                    } else {
                      e.currentTarget.style.pointerEvents = "auto";
                    }
                  }}
                />
              )}
            </Box>
          ))}
        </Paper>
      </Box>
    </Box>
  );
};

export default DigitalStreamMap;
