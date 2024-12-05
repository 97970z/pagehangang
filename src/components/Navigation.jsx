import React from "react";
import {
  AppBar,
  Toolbar,
  Container,
  Button,
  Box,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { Link, useLocation } from "react-router-dom";

const Navigation = () => {
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const location = useLocation();

  const menuItems = [
    { text: "소개", path: "/about" },
    { text: "활동", path: "/activity" },
    { text: "참여", path: "/participate" },
    { text: "소식", path: "/news" },
    { text: "후원", path: "/support" },
    { text: "디지털샛강지도", path: "/digitalstreammap" },
  ];

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <List>
      {menuItems.map((item) => (
        <ListItem
          button
          key={item.text}
          component={Link}
          to={item.path}
          selected={location.pathname === item.path}
        >
          <ListItemText primary={item.text} />
        </ListItem>
      ))}
    </List>
  );

  return (
    <AppBar position="sticky" color="default" elevation={1}>
      <Container maxWidth="lg">
        <Toolbar disableGutters>
          <Button
            component={Link}
            to="/pagehangang"
            sx={{
              mr: 4,
              display: "flex",
              alignItems: "center",
            }}
          >
            <Box
              component="img"
              src="logo.png"
              alt="한강조합 로고"
              sx={{ height: 40 }}
            />
          </Button>

          {isMobile ? (
            <>
              <IconButton
                color="inherit"
                aria-label="open drawer"
                edge="start"
                onClick={handleDrawerToggle}
                sx={{ ml: "auto" }}
              >
                <MenuIcon />
              </IconButton>
              <Drawer
                variant="temporary"
                anchor="right"
                open={mobileOpen}
                onClose={handleDrawerToggle}
                ModalProps={{ keepMounted: true }}
              >
                {drawer}
              </Drawer>
            </>
          ) : (
            <>
              <Box sx={{ flexGrow: 1, display: "flex", gap: 2 }}>
                {menuItems.map((item) => (
                  <Button
                    key={item.text}
                    component={Link}
                    to={item.path}
                    color={
                      location.pathname === item.path ? "primary" : "inherit"
                    }
                    sx={{
                      fontWeight:
                        location.pathname === item.path ? "bold" : "normal",
                      "&:hover": { color: "primary.main" },
                    }}
                  >
                    {item.text}
                  </Button>
                ))}
              </Box>
              <Button
                variant="contained"
                color="primary"
                component={Link}
                to="/support"
              >
                후원하기
              </Button>
            </>
          )}
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Navigation;
