import { Container, VStack, Text, Button, Image, Box, SimpleGrid, Heading, Flex, Link, Spacer } from "@chakra-ui/react";
import { FaShoppingCart } from "react-icons/fa";

const products = [
  {
    id: 1,
    name: "Classic Leather Bag",
    price: "$120.00",
    image: "https://images.unsplash.com/photo-1540749046540-b7d8f98c7e4c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxjbGFzc2ljJTIwbGVhdGhlciUyMGJhZ3xlbnwwfHx8fDE3MTQ5MTkxNjN8MA&ixlib=rb-4.0.3&q=80&w=1080",
  },
  {
    id: 2,
    name: "Modern Shoulder Bag",
    price: "$95.00",
    image: "https://images.unsplash.com/photo-1511405946472-a37e3b5ccd47?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBzaG91bGRlciUyMGJhZ3xlbnwwfHx8fDE3MTQ5MTkxNjR8MA&ixlib=rb-4.0.3&q=80&w=1080",
  },
  {
    id: 3,
    name: "Vintage Handbag",
    price: "$150.00",
    image: "https://images.unsplash.com/photo-1485587643688-6d18a46d9524?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHx2aW50YWdlJTIwaGFuZGJhZ3xlbnwwfHx8fDE3MTQ5MTkxNjV8MA&ixlib=rb-4.0.3&q=80&w=1080",
  },
  {
    id: 4,
    name: "Casual Backpack",
    price: "$80.00",
    image: "https://images.unsplash.com/photo-1632083344463-0cc4dfa0c810?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxjYXN1YWwlMjBiYWNrcGFja3xlbnwwfHx8fDE3MTQ5MTkxNjV8MA&ixlib=rb-4.0.3&q=80&w=1080",
  },
];

const Header = () => (
  <Flex as="header" bg="blue.500" p={4} color="white" align="center">
    <Image src="logo.png" boxSize="50px" />
    <Spacer />
    <Link href="#" p={2}>
      Home
    </Link>
    <Link href="#" p={2}>
      Women
    </Link>
    <Link href="#" p={2}>
      Men
    </Link>
    <Link href="#" p={2}>
      Contact
    </Link>
  </Flex>
);

const Footer = () => (
  <Flex as="footer" bg="gray.700" p={4} color="white" justify="space-between" align="center">
    <Box>
      <Heading as="h3" size="lg">
        Contact Us
      </Heading>
      <Text>Email: m.marcelo@gmail.com</Text>
      <Text>Phone: (+63) 964 5235 342</Text>
    </Box>
    <Box>
      <Heading as="h3" size="lg">
        Follow Us
      </Heading>
      <Link href="https://www.facebook.com/profile.php?id=100063789082776" isExternal>
        Facebook
      </Link>
      <Link href="https://www.instagram.com/realcoleworld/" isExternal>
        Instagram
      </Link>
    </Box>
  </Flex>
);

const Index = () => (
  <Container maxW="container.xl" py={10}>
    <Header />
    <VStack spacing={8}>
      <Heading as="h1" size="xl">
        Bag Shop
      </Heading>
      <SimpleGrid columns={{ base: 1, md: 2, lg: 4 }} spacing={10}>
        {products.map((product) => (
          <Box key={product.id} p={5} shadow="md" borderWidth="1px" rounded="md">
            <Image src={product.image} alt={product.name} boxSize="200px" objectFit="cover" m="auto" />
            <Text mt={2} fontSize="xl" fontWeight="semibold" lineHeight="short">
              {product.name}
            </Text>
            <Text mt={2}>{product.price}</Text>
            <Button leftIcon={<FaShoppingCart />} colorScheme="teal" variant="solid" mt={3}>
              Add to Cart
            </Button>
          </Box>
        ))}
      </SimpleGrid>
    </VStack>
    <Footer />
  </Container>
);

export default Index;
