import {
  Box,
  Paper,
  Stack,
  Typography,
  Button,
  IconButton,
  Tooltip,
  Chip,
} from "@mui/material";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import EmailRoundedIcon from "@mui/icons-material/EmailRounded";
import DownloadRoundedIcon from "@mui/icons-material/DownloadRounded";
import CallOutlinedIcon from "@mui/icons-material/CallOutlined";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import naukari from "../asset/naukari.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHackerrank } from "@fortawesome/free-brands-svg-icons";

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
  {
    icon: (
      <Box
        component="img"
        src={naukari}
        alt="Naukri"
        sx={{ width: 22, height: 22, objectFit: "contain" }}
      />
    ),
    href: "https://www.naukri.com/mnjuser/profile",
    label: "Naukri",
  },
  {
    icon: <FontAwesomeIcon icon={faHackerrank} style={{ fontSize: 20 }} />,
    href: "https://www.hackerrank.com/profile/rithaniravi",
    label: "HackerRank",
  },
];

const ContactSection = () => {
  return (
    <>
      <Box sx={{ px: { xs: 2, sm: 3 }, py: { xs: 3, md: 4 } }}>
        {/* Heading */}
        <Box sx={{ mb: 2 }}>
          <Typography
            variant="h5"
            sx={{
              letterSpacing: 1.4,
              color: "#0d7c80",
              mb: 2,
              fontWeight: 600,
            }}
          >
            Contact
          </Typography>
          <Typography variant="h6" sx={{ fontWeight: { xs: "auto", lg: 500 } }}>
            Let’s build something together.
          </Typography>
        </Box>

        <Stack
          spacing={4}
          alignItems="center"
          sx={{
            maxWidth: 700,
            width: "100%",
            display: "flex",
            justifyContent: "center",
            textAlign: "center",
          }}
        >
          {/* Glass Card */}
          <Paper
            elevation={0}
            sx={(theme) => ({
              p: { xs: 4, md: 5 },
              width: "100%",
              borderRadius: 4,
              backdropFilter: "blur(12px)",
              background:
                theme.palette.mode === "light"
                  ? "rgba(255,255,255,0.7)"
                  : "rgba(20,20,20,0.6)",
              border: "1px solid rgba(255,255,255,0.2)",
              transition: "all 0.3s ease",
              "&:hover": {
                transform: "translateY(-4px)",
                boxShadow: "0 20px 40px rgba(0,0,0,0.12)",
              },
            })}
          >
            <Stack spacing={3} alignItems="center">
              {/* Description */}
              <Typography
                variant="body1"
                color="text.secondary"
                sx={{
                  mb: 3,
                  lineHeight: 1.8,
                  fontSize: { xs: "auto", md: "1.05rem" },
                }}
              >
                I'm actively seeking full stack developer opportunities, with a
                strong interest in AI. I’m eager to learn, adapt, and grow with
                new technologies.
              </Typography>

              {/* Email Button */}
              <Button
                variant="contained"
                startIcon={<EmailRoundedIcon />}
                href="mailto:rithanisr10@gmail.com"
                sx={{
                  px: 4,
                  py: 1.3,
                  width: {
      xs: "100%", 
      sm: "60%",   
      md: "30%",   
    },
                  textTransform: "none",
                  borderRadius: 2,
                  fontWeight: 500,
                }}
              >
                Email Me
              </Button>

              {/* Social Icons */}
              <Stack
                direction={{ xs: "column", sm: "row" }}
                spacing={1.5}
                useFlexGap
                flexWrap="wrap"
                sx={{
                  mb: 3,
                  justifyContent: { xs: "center", lg: "flex-start" },
                  alignItems: { xs: "center", sm: "flex-start" },
                  width: "100%",
                }}
              >
                <Chip
                  icon={<LocationOnOutlinedIcon />}
                  label="Salem, Tamil Nadu, India"
                  sx={{
                    "& .MuiChip-icon": {
                      color: "#0d7c80",
                    },
                  }}
                />

                <Chip
                  icon={<EmailRoundedIcon />}
                  label="rithanisr10@gmail.com"
                  component="a"
                  href="mailto:rithanisr10@gmail.com"
                  clickable
                  sx={{
                    "& .MuiChip-icon": {
                      color: "#0d7c80",
                    },
                  }}
                />

                <Chip
                  icon={<CallOutlinedIcon />}
                  label="+91 6383532121"
                  component="a"
                  href="tel:+916383532121"
                  clickable
                  sx={{
                    "& .MuiChip-icon": {
                      color: "#0d7c80",
                    },
                  }}
                />
              </Stack>

              <Stack
                direction={{ xs: "row", sm: "row" }}
                spacing={1.5}
                useFlexGap
                flexWrap="wrap"
                sx={{
                  mb: 3,
                  justifyContent: { xs: "center", lg: "flex-start" },
                  alignItems: { xs: "center", sm: "flex-start" },
                  width: "100%",
                }}
              >
                {socialLinks.map((item) => (
                  <IconButton
                    key={item.label}
                    component="a"
                    href={item.href}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={item.label}
                    className="hero-social-icon"
                  >
                    {item.icon}
                  </IconButton>
                ))}
              </Stack>
            </Stack>
          </Paper>
        </Stack>
      </Box>
    </>
  );
};

export default ContactSection;
