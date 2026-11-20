import { useEffect, useState } from "react";
import {
  Box,
  Button,
  Card,
  CardContent,
  Chip,
  Collapse,
  Stack,
  Typography,
  Container,
} from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import OpenInNewRoundedIcon from "@mui/icons-material/OpenInNewRounded";

const projects = [
  {
    title: "Employee Management System",
    stack: [
      "MERN",
      "TypeScript",
      "Material UI",
      "GraphQL",
      "jsonwebtoken",
      "nodemailer",
      "multer",
    ],
    description:
      "Full-Stack Employee Management System built with React, TypeScript, Node.js, Express, GraphQL, and MongoDB. The platform supports employee lifecycle management, attendance tracking, leave approvals, performance reviews, notifications, and profile image uploads with role-based access control.",

    highlights: [
      "Developed a full-stack Employee Management System to streamline HR operations including employee records, attendance tracking, leave management, and performance evaluation through a centralized dashboard.",
      "Built a responsive frontend using React, TypeScript, Material UI, Apollo Client, and Recharts to deliver an interactive and data-driven user experience.",
      "Designed and implemented a GraphQL-based backend with Node.js, Express, MongoDB, and Mongoose for efficient data handling and scalable API architecture.",
      "Integrated JWT authentication, Cloudinary image uploads, and Nodemailer workflows to support secure access control and automated email communication.",
    ],
    codeUrl: "https://github.com/rithanisr/Workpulse.git",
    demoUrl: "https://workpulse-sigma.vercel.app/",
    previewImages: [
      "/project-previews/employee/employee-management-1.png",
      "/project-previews/employee/employee-management-2.png",
      "/project-previews/employee/employee-management-3.png",
      "/project-previews/employee/employee-management-4.png",
      "/project-previews/employee/employee-management-5.png",
    ],
    previewClass: "project-preview-one",
    demoFlow: [
      "Login as Admin",
      "Create HR and Employee accounts",
      "Login as HR or Employee",
      "Access role-specific dashboards",
    ],
    demoCredentials: {
      email: "admin@gmail.com",
      password: "admin@123",
    },
  },
  {
    title: "Jewelry E-Commerce website",
    stack: [
      "MERN Stack",
      "TailWindCSS",
      "Axios",
      "React Router",
      "Mongoose",
      "JWT",
      "bcryptjs",
    ],
    description:
      "Built a MERN stack Jewelry E-Commerce application with product catalog, cart management, and order placement features. Designed responsive UI and developed RESTful APIs to enable smooth frontend–backend integration.",
    highlights: [
      "Built a full-stack jewellery e-commerce platform using React, Tailwind CSS, Node.js, Express, MongoDB, and Mongoose, with separate frontend and backend architecture for scalable development.",
      "Implemented JWT-based user authentication with secure login and registration flows, password hashing using bcryptjs, protected API routes, and persistent user sessions via local storage.",
      "Developed complete shopping cart and order management features, including add/update/remove cart actions, multi-step checkout, order history, and backend stock reduction during order placement.",
      "Created a responsive user experience with product listing, category/search filtering, detailed product pages, toast notifications, and API integration using Axios interceptors for seamless frontend-backend communication.",
    ],
    codeUrl: "https://github.com/rithanisr/JewelryShop.git",
    demoUrl: "https://jewelry-shop-alpha-beige.vercel.app/",
    previewImages: [
      "/project-previews/jewelry/jewelry-ecommerce-1.png",
      "/project-previews/jewelry/jewelry-ecommerce-2.png",
      "/project-previews/jewelry/jewelry-ecommerce-3.png",
      "/project-previews/jewelry/jewelry-ecommerce-4.png",
      "/project-previews/jewelry/jewelry-ecommerce-5.png",
    ],
    previewClass: "project-preview-two",
    demoFlow: [
      "Create a new account",
      "Login with your credentials",
      "Browse products",
      "Add to cart",
      "Checkout and place order",
    ],
  },
  {
    title: "News Website",
    stack: ["React.js", "Bootstrap", "Axios", "React Router"],
    description:
      "Created a responsive news portal that fetches real-time updates from a public news API and presents them in a smooth multi-page interface with reusable components.",
    highlights: [
      "Implemented page navigation using React Router for a seamless browsing flow.",
      "Added loading states, reusable UI components, and error handling for a better user experience.",
      "Focused on clean frontend structure and API-driven rendering.",
    ],
    codeUrl: "https://github.com/rithanisr/NewsNexa.git",
    demoUrl: "https://news-nexa.vercel.app/",
    previewImages: [
      "/project-previews/news/news-website-1.png",
      "/project-previews/news/news-website-2.png",
      "/project-previews/news/news-website-3.png",
      "/project-previews/news/news-website-4.png",
      "/project-previews/news/news-website-5.png",
    ],
    previewClass: "project-preview-three",
    demoFlow: [
      "Access the live news dashboard",
      "Explore real-time news updates",
      "Filter news by categories",
      "View detailed articles in a responsive layout",
    ],
  },
  {
    title: "AI-Powered Students Course Allocation System",
    stack: [
      "MERN Stack",
      "Material UI",
      "Axios",
      "React Router",
      "Mongoose",
      "JWT",
      "bcryptjs",
    ],
    description:
      "Developed a MERN-stack web application that allows students to register for courses, while administrators manage courses and student applications. The system automatically allocates students to suitable courses with a single click using an automated allocation process.",
    highlights: [
      "Student Registration: Students can register and submit their course applications through the platform.",
      "Admin Management: Administrators can log in, add courses, and manage student applications.",
      "Automated Course Allocation: Automatically allocates students to available courses when the admin clicks the Run Allocation button.",
      "AI-Powered Assistant: Integrated Gemini AI to provide real-time responses to user queries.",
    ],
    codeUrl:
      "https://github.com/rithanisr/AI-POWERED-STUDENT-COURSE-ALLOCATION-SYSTEM.git",
    demoUrl: "https://ai-powered-student-course-allocatio.vercel.app/",
    previewImages: [
      "/project-previews/AI/AIStudent-1.png",
      "/project-previews/AI/AIStudent-2.png",
      "/project-previews/AI/AIStudent-3.png",
      "/project-previews/AI/AIStudent-4.png",
      "/project-previews/AI/AIStudent-5.png",
    ],
    previewClass: "project-preview-four",
    demoFlow: [
      "Admin Login and add courses",
      "Student Registration course application",
      "Admin runs the allocation process",
      "AI assistant responds to user queries",
    ],
    demoCredentials: {
      email: "admin@gmail.com",
      password: "admin@123",
    },
  },
];

function ProjectCard({ project }) {
  const [expanded, setExpanded] = useState(false);
  const [activePreviewIndex, setActivePreviewIndex] = useState(0);
  const [isPreviewHovered, setIsPreviewHovered] = useState(false);

  useEffect(() => {
    if (
      !project.previewImages?.length ||
      project.previewImages.length < 2 ||
      isPreviewHovered
    ) {
      return undefined;
    }

    const intervalId = window.setInterval(() => {
      setActivePreviewIndex(
        (prev) => (prev + 1) % project.previewImages.length,
      );
    }, 2500);

    return () => window.clearInterval(intervalId);
  }, [isPreviewHovered, project.previewImages]);

  return (
    <Card className="project-card-shell">
      <Box
        className={`project-preview ${project.previewClass}`}
        onMouseEnter={() => setIsPreviewHovered(true)}
        onMouseLeave={() => setIsPreviewHovered(false)}
      >
        {project.previewImages?.length ? (
          <>
            <Box
              component="img"
              src={project.previewImages[activePreviewIndex]}
              alt={`${project.title} landing page preview ${activePreviewIndex + 1}`}
              className="project-preview-image"
            />
            <Box className="project-preview-thumbnails">
              {project.previewImages.map((image, index) => (
                <Box
                  key={image}
                  component="button"
                  type="button"
                  onMouseEnter={() => setActivePreviewIndex(index)}
                  onFocus={() => setActivePreviewIndex(index)}
                  onClick={() => setActivePreviewIndex(index)}
                  className={`project-preview-thumb-button ${
                    activePreviewIndex === index
                      ? "project-preview-thumb-active"
                      : ""
                  }`}
                  aria-label={`Show preview ${index + 1} for ${project.title}`}
                >
                  <Box
                    component="img"
                    src={image}
                    alt=""
                    className="project-preview-thumb-image"
                  />
                </Box>
              ))}
            </Box>
            <Box className="project-preview-overlay" />
          </>
        ) : (
          <>
            <Box className="project-preview-overlay" />
            <Box className="project-preview-window project-window-left" />
            <Box className="project-preview-window project-window-center" />
            <Box className="project-preview-window project-window-right" />
          </>
        )}
      </Box>

      <CardContent
        sx={{
          p: { xs: 2.5, sm: 3 },
          display: "flex",
          flexDirection: "column",
          flexGrow: 1,
          minWidth: 0,
        }}
      >
        <Typography variant="h5" sx={{ fontWeight: 800, mb: 1.2 }}>
          {project.title}
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
          {project.stack.map((item) => (
            <Chip key={item} label={item} className="soft-chip" />
          ))}
        </Stack>

        <Typography
          className={!expanded ? "project-description-clamp" : ""}
          variant="body1"
          color="text.secondary"
          sx={{ lineHeight: 1.8 }}
        >
          {project.description}
        </Typography>

        <Button
          onClick={() => setExpanded((prev) => !prev)}
          sx={{
            alignSelf: "flex-start",
            px: 0,
            mt: 0.8,
            mb: 2,
            minWidth: "auto",
          }}
        >
          {expanded ? "Show less" : "Show more"}
        </Button>

        <Collapse in={expanded}>
          <Box component="ul" sx={{ pl: 2.5, mt: 0, mb: 2 }}>
            {project.highlights.map((point) => (
              <Typography
                component="li"
                key={point}
                variant="body2"
                color="text.secondary"
                sx={{ mb: 1.1, lineHeight: 1.75 }}
              >
                {point}
              </Typography>
            ))}
          </Box>

          {project.demoFlow && (
            <Box sx={{ mb: 2 }}>
              <Typography sx={{ fontWeight: 700, mb: 1 }}>Demo Flow</Typography>
              <Box component="ul" sx={{ pl: 2.5, m: 0 }}>
                {project.demoFlow.map((step, index) => (
                  <Typography
                    component="li"
                    key={index}
                    variant="body2"
                    color="text.secondary"
                    sx={{ mb: 0.8 }}
                  >
                    {step}
                  </Typography>
                ))}
              </Box>
            </Box>
          )}

          {project.demoCredentials && (
            <Box
              sx={{
                p: 1.5,
                borderRadius: 2,
                marginBottom: 2,
                backgroundColor: "#f5f7fa",
                border: "1px dashed #ccc",
              }}
            >
              <Typography sx={{ fontWeight: 700, mb: 0.5 }}>
                Demo Credentials
              </Typography>
              <Typography variant="body2">
                Email: {project.demoCredentials.email}
              </Typography>
              <Typography variant="body2">
                Password: {project.demoCredentials.password}
              </Typography>
            </Box>
          )}
        </Collapse>

        <Stack
          direction={{ xs: "column", sm: "row" }}
          spacing={1.5}
          sx={{ mt: "auto" }}
        >
          <Button
            fullWidth
            variant="outlined"
            startIcon={<GitHubIcon />}
            href={project.codeUrl || undefined}
            disabled={!project.codeUrl}
            target="_blank"
            rel="noreferrer"
            className="project-action-secondary"
          >
            Git Code
          </Button>
          <Button
            fullWidth
            variant="contained"
            startIcon={<OpenInNewRoundedIcon />}
            href={project.demoUrl || undefined}
            disabled={!project.demoUrl}
            target="_blank"
            rel="noreferrer"
            className="project-action-primary"
          >
            Demo
          </Button>
        </Stack>
      </CardContent>
    </Card>
  );
}

export default function Project() {
  return (
    <Container maxWidth="lg">
      <Box sx={{ width: "100%" }}>
        <Typography
          variant="h5"
          color="primary.main"
          sx={{ fontWeight: 600, letterSpacing: 1.4, color: "#0d7c80", mb: 2 }}
        >
          Projects
        </Typography>

        <Box
          sx={{
            display: "grid",
            gap: 3,
            gridTemplateColumns: {
              xs: "1fr",
              sm: "1fr",
              md: "repeat(2, minmax(0, 1fr))",
              lg: "repeat(3, minmax(0, 1fr))",
            },
          }}
        >
          {projects.map((project) => (
            <Box key={project.title}>
              <ProjectCard project={project} />
            </Box>
          ))}
        </Box>
      </Box>
    </Container>
  );
}
