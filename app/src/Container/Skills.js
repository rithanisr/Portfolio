import { Box, Chip, Paper, Typography,Container } from "@mui/material";

const skillGroups = [
  {
    title: "Frontend",
    skills: [
      "HTML",
      "CSS",
      "JavaScript (ES6+)",
      "TypeScript",
      "React",
      "Redux Toolkit",
      "Material UI",
      "Bootstrap",
      "Tailwind CSS",
      "Responsive Design",
    ],
  },
  {
    title: "Backend & API Development",
    skills: [
      "Node.js",
      "Express.js",
      "REST APIs",
      "GraphQL",
      "Authentication (JWT)",
      "Email Services (Nodemailer)",
      "API Integration",
    ],
  },
  {
    title: "Database and Tools",
    skills: [
      "MongoDB",
      "Database Schema Design",
      "Git",
      "GitLab",
      "Jira",
      "Postman",
      "Jenkins",
    ],
  },
  {
    title: "AI Tools",
    skills: [
      "Codex",
      "Copilot",
      "Cursor",
      "Gork",
      "Google Gemini",
    ],
  },
];

export default function Skills() {
  return (
      <Container maxWidth="lg">
    <Box
    sx={{ width: "100%",}}>
      <Typography
        variant="h5"
        sx={{ fontWeight: 600, letterSpacing: 1.4, color: "#0d7c80", mb: 2 }}
      >
        Skills
      </Typography>

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
        {skillGroups.map((group) => (
          <Box key={group.title}>
            <Paper
              className="glass-card"
              sx={{ p: 3, height: "100%", borderRadius: 4 }}
            >
              <Typography
                variant="h6"
                color="primary.main"
                sx={{ mb: 2, fontWeight: 700 }}
              >
                {group.title}
              </Typography>
              <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1 }}>
                {group.skills.map((skill) => (
                  <Chip key={skill} label={skill} className="soft-chip" />
                ))}
              </Box>
            </Paper>
          </Box>
        ))}
      </Box>
    </Box>
    </Container>
  );
}
