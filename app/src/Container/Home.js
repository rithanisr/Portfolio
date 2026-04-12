import {
  Box,
  Button,
  Chip,
  Container,
  IconButton,
  Stack,
  Typography,
} from "@mui/material";
import DownloadRoundedIcon from "@mui/icons-material/DownloadRounded";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import CallOutlinedIcon from "@mui/icons-material/CallOutlined";

import InstagramIcon from "@mui/icons-material/Instagram";
import GitHubIcon from "@mui/icons-material/GitHub";
import PlayCircleFilledWhiteRoundedIcon from "@mui/icons-material/PlayCircleFilledWhiteRounded";
import image2 from "../asset/image2.png";

const stats = [
  { value: "1 year", label: "Experience" },
  { value: "MERN +GraphQL", label: "Core Stack" },
];

const socialLinks = [
  {
    icon: <LinkedInIcon />,
    href: "https://www.linkedin.com/in/rithani-s-r-2280038b/",
    label: "LinkedIn",
  },
  {
    icon: <GitHubIcon />,
    href: "https://github.com/rithanisr",
    label: "GitHub",
  },
];

export default function Home() {
  return (
    <>
      <Container maxWidth="lg">
        <Box
          className="hero-panel"
          sx={{ px: { xs: 1, sm: 3, md: 1 }, py: { xs: 1, md: 5 } }}
        >
          <Box
            sx={{
              display: "grid",
              gap: { xs: 1, md: 6 },
              alignItems: "center",
              gridTemplateColumns: {
                xs: "auto",
                sm: "1fr",
                md: "1.2fr 0.8fr",
                lg: "1.3fr 0.7fr",
              },
            }}
          >
            {/* LEFT CONTENT */}
            <Box
              sx={{
                order: { xs: 2, lg: 1 },
                textAlign: { xs: "center", lg: "left" },
                maxWidth: { xs: 500, md: 600, lg: "none" },
                mx: { xs: "auto", lg: 0 },
              }}
            >
              {/* SOCIAL ICONS */}
              <Stack
                direction="row"
                spacing={1}
                flexWrap="wrap"
                justifyContent={{ xs: "center", lg: "flex-start" }}
                sx={{ mb: 2 }}
              >
                {socialLinks.map((item) => (
                  <IconButton
                    key={item.label}
                    component="a"
                    href={item.href}
                    target="_blank"
                    rel="noreferrer"
                    className="hero-social-icon"
                  >
                    {item.icon}
                  </IconButton>
                ))}
              </Stack>

              {/* STATUS CHIP */}
              <Chip
                label="Available for Full Stack Developer Opportunities"
                sx={{
                  mb: 2.5,
                  mx: { xs: "auto", lg: 0 },
                  fontWeight: { xs: "auto", lg: 600 },
                }}
              />

              {/* NAME */}
              <Typography
                sx={{
                  fontWeight: 700,
                  lineHeight: 1.2,
                  mb: 1,
                  fontSize: {
                    xs: "1.5rem",
                    sm: "2.2rem",
                    md: "2.6rem",
                    lg: "3rem",
                  },
                }}
              >
                Hi, I&apos;m S.R.Rithani
              </Typography>

              {/* ROLE */}
              <Typography
                sx={{
                  mb: 2,
                  fontWeight: 600,
                  fontSize: {
                    xs: "1rem",
                    sm: "1.2rem",
                    md: "1.5rem",
                  },
                }}
              >
                Junior Full Stack Developer
              </Typography>

              {/* DESCRIPTION */}
              <Typography
                sx={{
                  mb: 3,
                  lineHeight: 1.8,
                  fontSize: { xs: "auto", md: "1.05rem" },
                   
                }}
              >
                I build responsive interfaces, secure backend systems, and
                maintainable MERN stack applications with React.js, Node.js,
                TypeScript, GraphQL, MongoDB, and REST APIs.
              </Typography>

              {/* BUTTON */}
             <Stack
  direction={{ xs: "column", sm: "row" }}
  spacing={2}
  justifyContent={{ xs: "center", lg: "flex-start" }}
  alignItems={{ xs: "center", lg: "flex-start" }} 
  
  sx={{ mb: 3,   px: { xs: 5, md: 0 }, }}
>
  <Button
    variant="contained"
    startIcon={<DownloadRoundedIcon />}
    href="/Resume.pdf"
    download
    sx={{
      width: { xs: "100%", sm: "auto" },
      maxWidth: 260,
    }}
  >
    Download CV
  </Button>
</Stack>

              {/* CONTACT */}
              <Stack
                direction="row"
                spacing={1}
                flexWrap="wrap"
                justifyContent={{ xs: "center", lg: "flex-start" }}
                sx={{ mb: 3 }}
              >
                <Chip
                  icon={<CallOutlinedIcon />}
                  label="6383532121"
                  sx={{
                    "& .MuiChip-icon": {
                      color: "#0d7c80",
                    },
                  }}
                />
                <Chip
                  icon={<EmailOutlinedIcon />}
                  label="rithanisr10@gmail.com"
                  sx={{
                    "& .MuiChip-icon": {
                      color: "#0d7c80",
                    },
                  }}
                />
              </Stack>

              {/* STATS */}
              <Box
                sx={{
                  display: "grid",
                  gap: 2,
                  gridTemplateColumns: {
                    xs: "1fr",
                    sm: "repeat(2, 1fr)",
                  },
                  maxWidth: 400,
                  mx: { xs: "auto", lg: 0 },
                  px: { xs: 5, md: 0 },
                }}
              >
                {stats.map((stat) => (
                  <Box key={stat.label} className="hero-stat-card">
                    <Typography sx={{ fontWeight: 600 }}>{stat.value}</Typography>
                    <Typography variant="body2">{stat.label}</Typography>
                  </Box>
                ))}
              </Box>
            </Box>

            <Box
              sx={{
                order: { xs: 1, lg: 2 },
                width: "100%",
                display: "flex",
                justifyContent: "center",
                marginTop: { xs: 0, md: "-30px", lg: "-50px" },
              }}
            >
              <Box
                className="hero-photo-wrap"
                sx={{ maxWidth: { xs: 320, sm: 380, md: 460 } }}
              >
                <Box className="hero-photo-glow" />

                {/* Background Shape */}
                <Box className="hero-photo-background" />

                {/* Image Container */}
                <Box className="hero-photo-mask">
                  <Box
                    component="img"
                    src={image2}
                    alt="S R Rithani"
                    className="hero-framed-image"
                  />
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
      </Container>
    </>
  );
}
