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
  </Flex>
);

export default Navigation;
