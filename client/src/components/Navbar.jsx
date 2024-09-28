import {
  Button,
  Container,
  Flex,
  HStack,
  Text,
  useColorMode,
  useColorModeValue,
} from "@chakra-ui/react";
import React from "react";
import { FaMoon, FaPlusSquare, FaSun } from "react-icons/fa";
import { Link } from "react-router-dom";

const Navbar = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <Container maxW={"1140px"} px={4}>
      <Flex
        h={16}
        alignItems={"center"}
        justifyContent={"space-between"}
        flexDirection={{
          base: "column",
          sm: "row",
        }}
      >
        <Text
          bgGradient="linear(to-l, #7928CA, #FF0080)"
          bgClip="text"
          textAlign={"center"}
          textTransform={"uppercase"}
          fontSize={{ base: "22", sm: "28" }}
          fontWeight="extrabold"
        >
          <Link to="/"> praductzz 🛒 </Link>
        </Text>

        <HStack spacing={3} alignItems={"center"}>
          <Link to={"/create"}>
            <Button>
              <FaPlusSquare />
            </Button>
          </Link>
          <Link>
            <Button onClick={toggleColorMode}>
              {colorMode === "light" ? <FaSun /> : <FaMoon />}
            </Button>
          </Link>
        </HStack>
      </Flex>
    </Container>
  );
};

export default Navbar;
