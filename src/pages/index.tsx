import { Flex } from "@chakra-ui/react";
import type { NextPage } from "next";
import { Header } from "../components/Header";

const Home: NextPage = () => {
  return (
    <Flex direction={"column"}>
      <Header />
    </Flex>
  );
};

export default Home;
