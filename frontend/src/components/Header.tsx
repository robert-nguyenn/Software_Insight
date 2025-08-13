import React, { useState } from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
  Box,
  Avatar,
  Menu,
  MenuItem,
  ListItemIcon,
  ListItemText,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  Divider,
  useTheme,
} from '@mui/material';
import {
  Menu as MenuIcon,
  AccountCircle,
  Dashboard,
  Person,
  Logout,
  Login,
  PersonAdd,
  School,
  Work,
  Psychology,
  ContactMail,
  Home,
} from '@mui/icons-material';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';

const Header: React.FC = () => {
  const { user, isAuthenticated, logout } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const theme = useTheme();

  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleProfileMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const handleLogout = () => {
    logout();
    handleMenuClose();
    navigate('/');
  };

  const navigationItems = [
    { label: 'Home', path: '/', icon: <Home /> },
    { label: 'Courses', path: '/courses', icon: <School /> },
    { label: 'Internships', path: '/internships', icon: <Work /> },
    { label: 'Interview Tips', path: '/interview', icon: <Psychology /> },
    { label: 'Contact', path: '/contact', icon: <ContactMail /> },
  ];

  const isActivePath = (path: string) => {
    if (path === '/') {
      return location.pathname === '/';
    }
    return location.pathname.startsWith(path);
  };

  const renderDesktopMenu = () => (
    <Box sx={{ display: { xs: 'none', md: 'flex' }, alignItems: 'center', gap: 1 }}>
      {navigationItems.map((item) => (
        <Button
          key={item.path}
          component={Link}
          to={item.path}
          color="inherit"
          sx={{
            px: 2,
            py: 1,
            borderRadius: 2,
            backgroundColor: isActivePath(item.path) ? 'rgba(255, 255, 255, 0.1)' : 'transparent',
            '&:hover': {
              backgroundColor: 'rgba(255, 255, 255, 0.1)',
            },
          }}
        >
          {item.label}
        </Button>
      ))}
    </Box>
  );

  const renderMobileDrawer = () => (
    <Drawer
      variant="temporary"
      anchor="left"
      open={mobileOpen}
      onClose={handleDrawerToggle}
      ModalProps={{
        keepMounted: true, // Better open performance on mobile.
      }}
      sx={{
        display: { xs: 'block', md: 'none' },
        '& .MuiDrawer-paper': {
          boxSizing: 'border-box',
          width: 280,
        },
      }}
    >
      <Box sx={{ p: 2, display: 'flex', alignItems: 'center' }}>
        <img
          src="/images/codelaunchlogo.png"
          alt="CodeLaunch Logo"
          style={{
            height: '32px',
            width: 'auto',
            marginRight: '12px',
          }}
        />
        <Typography variant="h6" sx={{ fontWeight: 'bold', color: theme.palette.primary.main }}>
          CodeLaunch
        </Typography>
      </Box>
      <Divider />
      <List>
        {navigationItems.map((item) => (
          <ListItem key={item.path} disablePadding>
            <ListItemButton
              component={Link}
              to={item.path}
              onClick={handleDrawerToggle}
              selected={isActivePath(item.path)}
              sx={{
                borderRadius: 2,
                mx: 1,
                mb: 0.5,
              }}
            >
              <ListItemIcon>{item.icon}</ListItemIcon>
              <ListItemText primary={item.label} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      
      {isAuthenticated && (
        <>
          <Divider sx={{ my: 1 }} />
          <List>
            <ListItem disablePadding>
              <ListItemButton
                component={Link}
                to="/profile"
                onClick={handleDrawerToggle}
                sx={{
                  borderRadius: 2,
                  mx: 1,
                  mb: 0.5,
                }}
              >
                <ListItemIcon><Person /></ListItemIcon>
                <ListItemText primary="Profile" />
              </ListItemButton>
            </ListItem>
            {user?.role === 'admin' && (
              <ListItem disablePadding>
                <ListItemButton
                  component={Link}
                  to="/dashboard"
                  onClick={handleDrawerToggle}
                  sx={{
                    borderRadius: 2,
                    mx: 1,
                    mb: 0.5,
                  }}
                >
                  <ListItemIcon><Dashboard /></ListItemIcon>
                  <ListItemText primary="Dashboard" />
                </ListItemButton>
              </ListItem>
            )}
            <ListItem disablePadding>
              <ListItemButton
                onClick={() => {
                  handleLogout();
                  handleDrawerToggle();
                }}
                sx={{
                  borderRadius: 2,
                  mx: 1,
                  mb: 0.5,
                }}
              >
                <ListItemIcon><Logout /></ListItemIcon>
                <ListItemText primary="Logout" />
              </ListItemButton>
            </ListItem>
          </List>
        </>
      )}

      {!isAuthenticated && (
        <>
          <Divider sx={{ my: 1 }} />
          <List>
            <ListItem disablePadding>
              <ListItemButton
                component={Link}
                to="/login"
                onClick={handleDrawerToggle}
                sx={{
                  borderRadius: 2,
                  mx: 1,
                  mb: 0.5,
                }}
              >
                <ListItemIcon><Login /></ListItemIcon>
                <ListItemText primary="Login" />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton
                component={Link}
                to="/register"
                onClick={handleDrawerToggle}
                sx={{
                  borderRadius: 2,
                  mx: 1,
                  mb: 0.5,
                }}
              >
                <ListItemIcon><PersonAdd /></ListItemIcon>
                <ListItemText primary="Register" />
              </ListItemButton>
            </ListItem>
          </List>
        </>
      )}
    </Drawer>
  );

  const renderUserMenu = () => (
    <Menu
      anchorEl={anchorEl}
      open={Boolean(anchorEl)}
      onClose={handleMenuClose}
      onClick={handleMenuClose}
      transformOrigin={{ horizontal: 'right', vertical: 'top' }}
      anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
      PaperProps={{
        sx: {
          mt: 1,
          minWidth: 180,
        },
      }}
    >
      <MenuItem component={Link} to="/profile">
        <ListItemIcon>
          <Person fontSize="small" />
        </ListItemIcon>
        <ListItemText>Profile</ListItemText>
      </MenuItem>
      
      {user?.role === 'admin' && (
        <MenuItem component={Link} to="/dashboard">
          <ListItemIcon>
            <Dashboard fontSize="small" />
          </ListItemIcon>
          <ListItemText>Dashboard</ListItemText>
        </MenuItem>
      )}
      
      <Divider />
      
      <MenuItem onClick={handleLogout}>
        <ListItemIcon>
          <Logout fontSize="small" />
        </ListItemIcon>
        <ListItemText>Logout</ListItemText>
      </MenuItem>
    </Menu>
  );

  return (
    <>
      <AppBar
        position="fixed"
        sx={{
          background: 'linear-gradient(135deg, #2563eb 0%, #7c3aed 100%)',
          boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
        }}
      >
        <Toolbar>
          {/* Mobile menu button */}
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { md: 'none' } }}
          >
            <MenuIcon />
          </IconButton>

          {/* Logo */}
          <Box
            component={Link}
            to="/"
            sx={{
              display: 'flex',
              alignItems: 'center',
              textDecoration: 'none',
              color: 'inherit',
              flexGrow: { xs: 1, md: 0 },
              mr: { md: 4 },
            }}
          >
            <img
              src="/images/codelaunchlogo.png"
              alt="CodeLaunch Logo"
              style={{
                height: '40px',
                width: 'auto',
                marginRight: '12px',
              }}
            />
            <Typography
              variant="h6"
              sx={{
                fontWeight: 'bold',
                display: { xs: 'none', sm: 'block' },
              }}
            >
              CodeLaunch
            </Typography>
          </Box>

          {/* Desktop Navigation */}
          {renderDesktopMenu()}

          {/* Spacer */}
          <Box sx={{ flexGrow: 1 }} />

          {/* Auth buttons/menu */}
          {isAuthenticated ? (
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
              <Typography
                variant="body2"
                sx={{
                  display: { xs: 'none', sm: 'block' },
                  mr: 1,
                  opacity: 0.9,
                }}
              >
                Hi, {user?.name?.split(' ')[0] || user?.name}
              </Typography>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleProfileMenuOpen}
                color="inherit"
              >
                {user?.avatar ? (
                  <Avatar
                    src={user.avatar}
                    alt={user.name}
                    sx={{ width: 32, height: 32 }}
                  />
                ) : (
                  <AccountCircle />
                )}
              </IconButton>
            </Box>
          ) : (
            <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 1 }}>
              <Button
                component={Link}
                to="/login"
                color="inherit"
                variant="outlined"
                sx={{
                  borderColor: 'rgba(255, 255, 255, 0.5)',
                  '&:hover': {
                    borderColor: 'white',
                    backgroundColor: 'rgba(255, 255, 255, 0.1)',
                  },
                }}
              >
                Login
              </Button>
              <Button
                component={Link}
                to="/register"
                color="inherit"
                variant="contained"
                sx={{
                  backgroundColor: 'rgba(255, 255, 255, 0.15)',
                  '&:hover': {
                    backgroundColor: 'rgba(255, 255, 255, 0.25)',
                  },
                }}
              >
                Register
              </Button>
            </Box>
          )}
        </Toolbar>
      </AppBar>

      {/* Mobile drawer */}
      {renderMobileDrawer()}

      {/* User menu */}
      {isAuthenticated && renderUserMenu()}
    </>
  );
};

export default Header;
