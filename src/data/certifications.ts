import harvardLogo from "@/assets/harvard-logo.png"
import udemyLogo from "@/assets/udemy-logo.webp";
import cs50Certificate from "@/assets/cs50-certificate.png";
import dockerCertificate from "@/assets/docker-certificate.jpg";
import sqlCertificate from "@/assets/sql-certificate.jpg";

export const certifications = [
    { id: "cs50", logo: harvardLogo, certificate: cs50Certificate, nameKey: "cs50", organizationKey: "harvard" },
    { id: "docker", logo: udemyLogo, certificate: dockerCertificate, nameKey: "docker", organizationKey: "udemy" },
    { id: "SQL", logo: udemyLogo, certificate: sqlCertificate, nameKey: "sql", organizationKey: "udemy" },
];     