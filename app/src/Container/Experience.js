import {
  Box,
  Card,
  CardContent,
  Chip,
  Stack,
  Tooltip,
  Typography,
  Container,
} from "@mui/material";
import BusinessCenterRoundedIcon from "@mui/icons-material/BusinessCenterRounded";
import CodeRoundedIcon from "@mui/icons-material/CodeRounded";
import AccountTreeRoundedIcon from "@mui/icons-material/AccountTreeRounded";

const professionalExperience = [
  {
    company: "Pheonix Solutions",
    role: "Junior Software Engineer",
    date: "Dec 2024 - Aug 2025",
    type: "Professional",
    icon: <BusinessCenterRoundedIcon />,
    achievements: [
      "Developed responsive web interfaces using React.js and Material UI to improve product usability and functionality.",
      "Integrated REST and GraphQL APIs with Node.js and Express.js to improve data flow and application performance.",
      "Used Git for version control and contributed to deployment processes for reliable feature delivery to production.",
    ],
  },
  {
    company: "Nutz Technovation Private Limited",
    role: "React.js Developer Intern",
    date: "Sep 2024 - Dec 2024",
    type: "Internship",
    icon: <CodeRoundedIcon />,
    achievements: [
      "Built UI components using React.js and Material UI under mentor guidance, improving the application interface.",
      "Learned and applied new React libraries to complete assigned tasks and support feature development.",
      "Collaborated with mentor and team members to implement UI features and resolve issues on time.",
    ],
  },
  {
    company: "Innobyte Services",
    role: "Full Stack Developer Intern",
    date: "Mar 2024 - Apr 2024",
    type: "Internship",
    icon: <AccountTreeRoundedIcon />,
    achievements: [
      "Developed a JWT-based login system with OTP using the MERN stack for secure user authentication.",
      "Designed MongoDB schemas for user data and OTP storage to support secure and efficient workflows.",
      "Implemented OTP verification in Node.js and Express.js and connected it with the React.js frontend.",
    ],
  },
];

const earlierExperience = [
  {
    role: "Subject Matter Expert",
    company: "Scope-e Knowledge Center",
    date: "Nov 2018 - Sep 2020",
  },
  {
    role: "Project Engineer",
    company: "Softrix Technology",
    date: "Nov 2016 - Oct 2018",
  },
];

export default function Experience() {
  return (
    <Container maxWidth="lg">
    <Box className="experience-section-shell" sx={{width:"100%"}}>
      <Box sx={{ mb: 2 }}>
        <Typography
          variant="h5"
          sx={{ fontWeight: 600, letterSpacing: 1.4, color: "#0d7c80" }}
        >
          Experience
        </Typography>
      </Box>

      <Box
        sx={{
          display: "grid",
          gap: 3,
          gridTemplateColumns: {
            xs: "1fr",
            sm: "repeat(2, minmax(0, 1fr))",
            lg: "repeat(3, minmax(0, 1fr))",
          },
        }}
      >
        {professionalExperience.map((job) => (
          <Box key={`${job.company}-${job.role}`}>
            <Card className="experience-card">
              <CardContent sx={{ p: 3.25 }}>
                <Box className="experience-icon-box">{job.icon}</Box>

                <Stack
                  direction="row"
                  spacing={1}
                  useFlexGap
                  flexWrap="wrap"
                  sx={{ mb: 2 }}
                >
                  <Chip
                    label={job.date}
                    size="small"
                    className="experience-chip"
                  />
                  <Chip
                    label={job.type}
                    size="small"
                    className="experience-chip"
                  />
                </Stack>

                <Typography variant="h5" sx={{ mb: 0.75, fontWeight: 800 }}>
                  {job.role}
                </Typography>
                <Typography
                  variant="subtitle1"
                  color="primary.main"
                  sx={{ mb: 2, fontWeight: 700 }}
                >
                  {job.company}
                </Typography>

                <Box component="ul" sx={{ pl: 2.4, m: 0 }}>
                  {job.achievements.map((point) => (
                    <Typography
                      component="li"
                      key={point}
                      variant="body2"
                      color="text.secondary"
                      sx={{ mb: 1.15, lineHeight: 1.85 }}
                    >
                      {point}
                    </Typography>
                  ))}
                </Box>
              </CardContent>
            </Card>
          </Box>
        ))}

        <Box>
          <Card className="experience-summary-card experience-card">
            <CardContent sx={{ p: 3.25 }}>
              <Box className="experience-icon-box">
                <BusinessCenterRoundedIcon />
              </Box>

              <Typography variant="h5" sx={{ mb: 0.75, fontWeight: 800 }}>
                Other Experience
              </Typography>
              <Typography
                variant="body2"
                color="text.secondary"
                sx={{ mb: 2.25, lineHeight: 1.8 }}
              >
                Before moving into full stack development, I gained valuable
                professional experience that enhanced my communication skills,
                problem-solving mindset, and ability to deliver reliable
                results.
              </Typography>

              <Stack direction="row" spacing={1.2} useFlexGap flexWrap="wrap">
                {earlierExperience.map((item) => (
                  <Tooltip
                    key={item.role}
                    title={`${item.role} | ${item.company} | ${item.date}`}
                    arrow
                  >
                    <Chip
                      label={`${item.role} | ${item.company} | ${item.date}`}
                      sx={{
                        height: "auto",
                        alignItems: "flex-start",
                        py: 0.75,
                        "& .MuiChip-label": {
                          display: "block",
                          whiteSpace: "normal",
                          lineHeight: 1.5,
                          paddingTop: 1,
                          paddingBottom: 1,
                        },
                      }}
                    />
                  </Tooltip>
                ))}
              </Stack>
            </CardContent>
          </Card>
        </Box>
      </Box>
    </Box>
    </Container>
  );
}
