import { ReactNode } from "react";
import styles from "./navbar.module.css";
import pic from "./assets/Binus-Logo-Universitas.png";
import Image from "next/image";
import {
  Box,
  Flex,
  Avatar,
  HStack,
  IconButton,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  useDisclosure,
  useColorModeValue,
  Stack,
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon, AddIcon } from "@chakra-ui/icons";
import Link from "next/link";

const Links = [
  {
    name: "Home",
    path: "/",
  },
  {
    name: "Projects",
    path: "/project",
  },
  {
    name: "Profile",
    path: "/profile",
  },
];



const NavLink = ({ children, path }: { children: ReactNode; path: string }) => (
  <Box
    px={2}
    py={1}
    rounded={"md"}
    _hover={{
      textDecoration: "none",
      bg: useColorModeValue("gray.200", "gray.700"),
    }}
  >
    <Link href={path}>{children}</Link>
  </Box>
);

export default function Navbar() {

  return (
    <>
    <div className={styles.keren}>
    <img className={styles.logo} src="https://international.binus.ac.id/wp-content/uploads/2020/07/site-logo.png"></img>
    <div className={styles.links}>
    <div className={styles.wtf}><NavLink key={"/"} path={"/"}>Home</NavLink></div>
    <div className={styles.wtf}><NavLink key={"/project"} path={"/project"}>Projects</NavLink></div>
    <div className={styles.wtf}><NavLink key={"/profile"} path={"/profile"}>Profile</NavLink></div>
    </div>
    </div>

    </>
  );
}