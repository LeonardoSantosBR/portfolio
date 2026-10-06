import harvardLogo from "@/assets/harvard-logo.png"
import udemyLogo from "@/assets/udemy-logo.webp";
import itauLogo from "@/assets/itau-logo.png";
import cs50Certificate from "@/assets/cs50-certificate.png";
import dockerCertificate from "@/assets/docker-certificate.jpg";
import sqlCertificate from "@/assets/sql-certificate.jpg";
import itauIaCertificate from "@/assets/itau-java-ia-certificate.jpg";

export const certifications = [
    { id: "cs50", logo: harvardLogo, certificate: cs50Certificate, nameKey: "cs50", organizationKey: "harvard" },
    { id: "itau", logo: itauLogo, certificate: itauIaCertificate, nameKey: "itau", organizationKey: "itauUnibanco" },
    { id: "docker", logo: udemyLogo, certificate: dockerCertificate, nameKey: "docker", organizationKey: "udemy" },
    { id: "sql", logo: udemyLogo, certificate: sqlCertificate, nameKey: "sql", organizationKey: "udemy" },
];     
