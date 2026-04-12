import { useState } from "react";
import {
  Box,
  Button,
  Chip,
  Paper,
  Stack,
  Typography,
  Container,
} from "@mui/material";
import SchoolOutlinedIcon from "@mui/icons-material/SchoolOutlined";
import WorkspacePremiumOutlinedIcon from "@mui/icons-material/WorkspacePremiumOutlined";
import VerifiedOutlinedIcon from "@mui/icons-material/VerifiedOutlined";

const strengths = [
  "Responsive UI",
  "REST & GraphQL APIs",
  "JWT / OTP Authentication",
  "MongoDB & Schema Design",
  "State Management",
  "Performance Optimization",
  "Code Review & Collaboration",
];

export default function About() {
  const [showAchievementMore, setShowAchievementMore] = useState(false);

  return (
    <Container maxWidth="lg">
      <Box
        sx={{
          width: "100%",
        }}
      >
        <Box>
          <Typography
            variant="h5"
            color="primary.main"
            sx={{
              fontWeight: 600,
              letterSpacing: 1.4,
              color: "#0d7c80",
              mb: 2,
            }}
          >
            About
          </Typography>

          <Typography
            variant="body1"
            color="text.secondary"
            sx={{ mb: 2.5, lineHeight: 1.9 }}
          >
            I&apos;m a Junior Full Stack Developer with an academic background
            in Electronics and Communication Engineering, now focused on
            building modern web applications. My engineering foundation helps me
            approach software development with strong analytical thinking and
            problem-solving skills. I primarily work with
            <span style={{ fontWeight: 700 }}>
              {" "}
              React.js, Node.js, TypeScript, MERN stack and GraphQL
            </span>{" "}
            to create scalable, maintainable, and user-focused digital products.
          </Typography>

          <Typography
            variant="body1"
            color="text.secondary"
            sx={{ mb: 3.5, lineHeight: 1.9 }}
          >
            After graduating in Electronics and Communication Engineering, I
            worked in non-IT roles that strengthened my communication,
            adaptability, and professional discipline. Between 2021 and 2023, I
            took a purposeful career break that became a turning point in my
            career, allowing me to upskill in modern web technologies and
            transition into software development. Starting as a frontend intern,
            I progressed into full stack development, contributing to API
            integrations, authentication systems, and deployment workflows.
          </Typography>

          <Stack
            direction="row"
            spacing={1.2}
            useFlexGap
            flexWrap="wrap"
            sx={{
              maxWidth: "100%",
              alignContent: "flex-start",
              mb: 2,
              display: "flex",
              flexWrap: "wrap",
            }}
          >
            {strengths.map((item) => (
              <Chip key={item} label={item} className="soft-chip" />
            ))}
          </Stack>
        </Box>

        <Box
          sx={{
            display: "grid",
            gap: 2.5,
            gridTemplateColumns: {
              xs: "1fr",
              sm: "repeat(2, minmax(0, 1fr))",
              lg: "repeat(3, minmax(0, 1fr))",
            },
          }}
        >
          <Box>
            <Paper className="glass-card" sx={{ p: 3, height: "100%" }}>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: 1.5,
                  mb: 1.5,
                }}
              >
                <SchoolOutlinedIcon color="primary" />
                <Typography variant="h6">Education</Typography>
              </Box>

              <Typography variant="subtitle2" sx={{ fontWeight: 700 }}>
                B.E. Electronics & Communication
              </Typography>

              <Typography color="text.secondary">
                M. Kumarasamy College of Engineering
              </Typography>

              <Typography color="text.secondary">2016 | CGPA: 8.11</Typography>
            </Paper>
          </Box>

          <Box>
            <Paper className="glass-card" sx={{ p: 3, height: "100%" }}>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: 1.5,
                  mb: 1.5,
                }}
              >
                <WorkspacePremiumOutlinedIcon color="primary" />
                <Typography variant="h6">Achievement</Typography>
              </Box>

              <Typography variant="subtitle2" sx={{ fontWeight: 700 }}>
                Best Employee Award
              </Typography>

              <Typography color="text.secondary">
                Phoenix Solutions | July 2025
              </Typography>

              <Typography
                variant="body2"
                color="text.secondary"
                sx={{
                  mt: 1.5,
                  lineHeight: 1.8,
                  display: !showAchievementMore ? "-webkit-box" : "block",
                  WebkitLineClamp: !showAchievementMore ? 2 : "unset",
                  WebkitBoxOrient: "vertical",
                  overflow: "hidden",
                }}
              >
                Recognized for excellence in product development, ownership of
                deliverables, and maintaining high-quality code through strong
                team collaboration.
              </Typography>

              <Button
                onClick={() => setShowAchievementMore((prev) => !prev)}
                sx={{ mt: 1, px: 0, minWidth: "auto", alignSelf: "flex-start" }}
              >
                {showAchievementMore ? "Show less" : "Show more"}
              </Button>
            </Paper>
          </Box>

          <Box>
            <Paper className="glass-card" sx={{ p: 3, height: "100%" }}>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: 1.5,
                  mb: 1.5,
                }}
              >
                <VerifiedOutlinedIcon color="primary" />
                <Typography variant="h6">Certifications</Typography>
              </Box>
              <Box sx={{ marginLeft: "25px" }}>
                <li>React Basics in HackerRank</li>
                <li>
                  {" "}
                  Full Stack Development (MERN Stack) in Greens Technology
                </li>
              </Box>
            </Paper>
          </Box>
        </Box>
      </Box>
    </Container>
  );
}
