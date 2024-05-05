import { Flex, Image, Link, Spacer } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";

const Navigation = () => (
  <Flex as="header" bg="blue.500" p={4} color="white" align="center">
    <Image src="logo.png" boxSize="50px" />
    <Spacer />
    <Link as={RouterLink} to="/" p={2}>
      Home
    </Link>
    <Link as={RouterLink} to="/women" p={2}>
      Women
    </Link>
    <Link as={RouterLink} to="/men" p={2}>
      Men
    </Link>
    <Link as={RouterLink} to="/contact" p={2}>
      Contact
    </Link>
    <Link as={RouterLink} to="/signup" p={2}>
      Sign Up
    </Link>
    <Link as={RouterLink} to="/login" p={2} bg="yellow.300" borderRadius="md">
      Sign Up
    </Link>
  </Flex>
);

export default Navigation;
