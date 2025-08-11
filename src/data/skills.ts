import skillImages from "./images";

export const skillTabs = [
  "All",
  "Languages & Databases",
  "Web & Backend",
  "CI/CD & Automation",
  "Containers & Orchestration",
  "Cloud, Platforms & Monitoring",
  "Project & Code Management",
  "Build, Test & Quality",
];

export const allSkills = [
  // Languages & Databases
  { name: "JavaScript", img: skillImages.JavaScript, category: "Languages & Databases" },
  { name: "Python", img: skillImages.Python, category: "Languages & Databases" },
  { name: "Bash", img: skillImages.Bash, category: "Languages & Databases" },
  { name: "SQL", img: skillImages.SQL, category: "Languages & Databases" },
  { name: "PL/SQL", img: skillImages.PLSQL, category: "Languages & Databases" },
  { name: "MongoDB", img: skillImages.MongoDB, category: "Languages & Databases" },
  { name: "PostgreSQL", img: skillImages.PostgresSQL, category: "Languages & Databases" },

  // Web & Backend
  { name: "HTML", img: skillImages.HTML, category: "Web & Backend" },
  { name: "CSS", img: skillImages.CSS, category: "Web & Backend" },
  { name: "Spring Boot", img: skillImages.SpringBoot, category: "Web & Backend" },
  { name: "Nginx", img: skillImages.Nginx, category: "Web & Backend" },
  { name: "Apache", img: skillImages.Apache, category: "Web & Backend" },
  { name: "Haproxy", img: skillImages.Haproxy, category: "Web & Backend" },
  { name: "Gateway API", img: skillImages.GatewayAPI, category: "Web & Backend" },

  // CI/CD & Automation
  { name: "Jenkins", img: skillImages.Jenkins, category: "CI/CD & Automation" },
  { name: "GitLab CI/CD", img: skillImages.GitLabCI, category: "CI/CD & Automation" },
  { name: "Ansible", img: skillImages.Ansible, category: "CI/CD & Automation" },
  { name: "Terraform", img: skillImages.Terraform, category: "CI/CD & Automation" },
  { name: "OpenTofu", img: skillImages.OpenTofu, category: "CI/CD & Automation" },
  { name: "FluxCD", img: skillImages.FluxCD, category: "CI/CD & Automation" },

  // Containers & Orchestration
  { name: "Docker", img: skillImages.Docker, category: "Containers & Orchestration" },
  { name: "Podman", img: skillImages.Podman, category: "Containers & Orchestration" },
  { name: "Kubernetes", img: skillImages.Kubernetes, category: "Containers & Orchestration" },
  { name: "OpenShift", img: skillImages.OpenShift, category: "Containers & Orchestration" },
  { name: "Helm", img: skillImages.Helm, category: "Containers & Orchestration" },

  // Cloud, Platforms & Monitoring
  { name: "GCP", img: skillImages.GCP, category: "Cloud, Platforms & Monitoring" },
  { name: "CloudFoundry", img: skillImages.CloudFoundry, category: "Cloud, Platforms & Monitoring" },
  { name: "Grafana", img: skillImages.Grafana, category: "Cloud, Platforms & Monitoring" },
  { name: "InfluxDB", img: skillImages.Influxdb, category: "Cloud, Platforms & Monitoring" },

  // Project & Code Management
  { name: "Git", img: skillImages.Git, category: "Project & Code Management" },
  { name: "GitHub", img: skillImages.GitHub, category: "Project & Code Management" },
  { name: "GitLab", img: skillImages.GitLab, category: "Project & Code Management" },
  { name: "Nexus", img: skillImages.Nexus, category: "Project & Code Management" },
  { name: "Jira", img: skillImages.Jira, category: "Project & Code Management" },
  { name: "Confluence", img: skillImages.Confluence, category: "Project & Code Management" },
  { name: "Scrum", img: skillImages.Scrum, category: "Project & Code Management" },

  // Build, Test & Quality
  { name: "Maven", img: skillImages.Maven, category: "Build, Test & Quality" },
  { name: "Gradle", img: skillImages.Gradle, category: "Build, Test & Quality" },
  { name: "npm", img: skillImages.npm, category: "Build, Test & Quality" },
  { name: "Postman", img: skillImages.Postman, category: "Build, Test & Quality" },
  { name: "Insomnia", img: skillImages.Insomnia, category: "Build, Test & Quality" },
  { name: "Robot Fwk", img: skillImages.RobotFramework, category: "Build, Test & Quality" },
  { name: "k6", img: skillImages.k6, category: "Build, Test & Quality" },
  { name: "JUnit5", img: skillImages.JUnit5, category: "Build, Test & Quality" },
  { name: "SonarQube", img: skillImages.SonarQube, category: "Build, Test & Quality" },
  { name: "Linux", img: skillImages.Linux, category: "Build, Test & Quality" },
];
