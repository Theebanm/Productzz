import React, { useEffect } from "react";
import { Link } from "react-router-dom";

import { Container, SimpleGrid, Text, VStack } from "@chakra-ui/react";
import { useProductStore } from "../store/product";
import ProductCard from "../components/ProductCard";
const HomePage = () => {
  const { fetchProducts, products } = useProductStore();
  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);
  return (
    <Container maxW={"container.xl"} py={"12"}>
      <VStack spacing={"8"}>
        <Text
          bgGradient="linear(to-l, #7928CA, #FF0080)"
          bgClip="text"
          textAlign={"center"}
          textTransform={"uppercase"}
          fontSize={{ base: "22", sm: "28" }}
          fontWeight="extrabold"
        >
          Current Products
        </Text>

        <SimpleGrid
          columns={{
            base: 1,
            md: 2,
            lg: 3,
          }}
          spacing={"10"}
          w={"full"}
        >
          {products.map((product) => (
            <ProductCard key={product._id} product={product} />
          ))}
        </SimpleGrid>

        {products.length === 0 && (
          <>
            <Text
              fontSize={"xl"}
              textAlign={"center"}
              fontWeight={"bold"}
              color={"gray.100"}
            >
              No Product Found !
            </Text>
            <Link to={"/create"}>
              <Text
                as={"span"}
                color={"blue"}
                _hover={{ textDecoration: "underline" }}
              >
                Create New Product{" "}
              </Text>
            </Link>
          </>
        )}
      </VStack>
    </Container>
  );
};

export default HomePage;
