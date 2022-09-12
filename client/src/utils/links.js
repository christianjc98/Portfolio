import { FiUser, FiAward, FiBriefcase, FiMail } from "react-icons/fi";

const links = [
  { id: "1", text: "About", icon: <FiUser />, path: "#" },
  {
    id: "2",
    text: "Experience",
    icon: <FiAward />,
    path: "#experience-section",
  },
  {
    id: "3",
    text: "Projects",
    icon: <FiBriefcase />,
    path: "#project-section",
  },
  { id: "4", text: "Contact", icon: <FiMail />, path: "#contact-section" },
];

export default links;
