import './App.css';
import { useState } from 'react';
import {
  AppBar,
  Box,
  Button,
  Container,
  CssBaseline,
  IconButton,
  Menu,
  MenuItem,
  Stack,
  Toolbar,
  Typography
} from '@mui/material';
import DarkModeRoundedIcon from '@mui/icons-material/DarkModeRounded';
import LightModeRoundedIcon from '@mui/icons-material/LightModeRounded';
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
import { ThemeProvider } from '@mui/material/styles';
import createAppTheme from './theme';
import Home from './Container/Home';
import About from './Container/About';
import Experience from './Container/Experience';
import Project from './Container/Project';
import Skills from './Container/Skills';
import ContactSection from './Container/Contact';

const navigationItems = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' }
];

function App() {
  const [mode, setMode] = useState('light');
  const [mobileMenuAnchor, setMobileMenuAnchor] = useState(null);
  const theme = createAppTheme(mode);
  const isDark = mode === 'dark';
  const isMobileMenuOpen = Boolean(mobileMenuAnchor);

  const handleOpenMobileMenu = (event) => {
    setMobileMenuAnchor(event.currentTarget);
  };

  const handleCloseMobileMenu = () => {
    setMobileMenuAnchor(null);
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box className={`app-shell ${isDark ? 'app-shell-dark' : 'app-shell-light'}`} sx={{ minHeight: '100vh' }}>
        <Box className="hero-section-shell">
          <AppBar
            position="static"
            color="transparent"
            elevation={0}
            sx={{
              backgroundColor: 'transparent',
              boxShadow: 'none',
              pt: { xs: 2, md: 3 }
            }}
          >
            <Toolbar
              sx={{
                display: 'flex',
                justifyContent: 'center',
                minHeight: 'auto',
                px: { xs: 2, md: 3 }
              }}
            >
              <Box className="nav-pill">
               

                <Stack
                  direction="row"
                  spacing={0.5}
                  sx={{ display: { xs: 'none', lg: 'flex' }, alignItems: 'center' }}
                >
                  {navigationItems.map((item) => (
                    <Button
                      key={item.href}
                      href={item.href}
                      sx={(theme) => ({
                        color: theme.palette.mode === 'light' ? 'rgba(15,48,51,0.88)' : 'rgba(255,255,255,0.92)'
                      })}
                    >
                      {item.label}
                    </Button>
                  ))}
                </Stack>

                <Stack direction="row" spacing={1} alignItems="center">
                  <IconButton
                    onClick={handleOpenMobileMenu}
                    aria-label="Open navigation menu"
                    aria-controls={isMobileMenuOpen ? 'mobile-navigation-menu' : undefined}
                    aria-expanded={isMobileMenuOpen ? 'true' : undefined}
                    aria-haspopup="true"
                    sx={{
                      display: { xs: 'inline-flex', lg: 'none' },
                      color: isDark ? '#2f9f9a' : '#0d7c80',
                      border: '1px solid rgba(13,124,128,0.16)',
                      backgroundColor: 'rgba(255,255,255,0.98)',
                      width: 42,
                      height: 42,
                      '&:hover': { backgroundColor: '#ffffff' }
                    }}
                  >
                    <MenuRoundedIcon />
                  </IconButton>

                  <IconButton
                    onClick={() => setMode(isDark ? 'light' : 'dark')}
                    aria-label="Toggle color theme"
                    sx={{
                      color: isDark ? '#2f9f9a' : '#0d7c80',
                      border: '1px solid rgba(13,124,128,0.16)',
                      backgroundColor: 'rgba(255,255,255,0.98)',
                      width: 42,
                      height: 42,
                      '&:hover': { backgroundColor: '#ffffff' }
                    }}
                  >
                    {isDark ? <LightModeRoundedIcon /> : <DarkModeRoundedIcon />}
                  </IconButton>

                
                </Stack>
              </Box>
            </Toolbar>
          </AppBar>

          <Menu
            id="mobile-navigation-menu"
            anchorEl={mobileMenuAnchor}
            open={isMobileMenuOpen}
            onClose={handleCloseMobileMenu}
            transformOrigin={{ horizontal: 'right', vertical: 'top' }}
            anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
            PaperProps={{
              sx: {
                mt: 1,
                minWidth: 220,
                borderRadius: 3,
                border: '1px solid rgba(13,124,128,0.12)',
                boxShadow: '0 18px 40px rgba(13, 83, 85, 0.16)'
              }
            }}
          >
            {navigationItems.map((item) => (
              <MenuItem
                key={item.href}
                component="a"
                href={item.href}
                onClick={handleCloseMobileMenu}
              >
                {item.label}
              </MenuItem>
            ))}
          </Menu>

          <Box id="home" sx={{ pt: { xs: 3, md: 4 }, pb: 0 }}>
            <Home />
            
          </Box>
        </Box>
        
        

        <Container maxWidth="lg">
          <Box id="about" sx={{ py: { xs: 2, md: 2 } }}>
            <About />
          </Box>
           <Box id="skills" sx={{ py: { xs: 2, md: 2 } }}>
            <Skills />
          </Box>
          <Box id="experience" sx={{ py: { xs: 1, md: 2 } }}>
            <Experience />
          </Box>
          <Box id="projects" sx={{ py: { xs: 2, md: 2 } }}>
            <Project />
          </Box>
               <Box id="contact" sx={{ py: { xs: 1, md: 2 } }}>
  <ContactSection />
</Box>
         
        </Container>
<Box
  component="footer"
  sx={{
    py: 3,
    mt: 4,
    borderTop: '1px solid',
    borderColor: 'divider'
  }}
>
  <Container maxWidth="lg">
    <Stack
      direction="column"
      spacing={1}
      alignItems="center"
      textAlign="center"
      sx={{display:"flex", justifyContent:"center", flexDirection:"row"}}
    >
      <Typography variant="body2" color="text.secondary">
        © {new Date().getFullYear()} S.R. Rithani. Built with React & Material UI
      </Typography>

    </Stack>
  </Container>
</Box>
   
      </Box>
    </ThemeProvider>
  );
}

export default App;
