import { Flex } from "@chakra-ui/react";
import type { NextPage } from "next";
import { Banner } from "../components/Banner";
import { CharList } from "../components/CharList";
import { Header } from "../components/Header";

const Home: NextPage = () => {
  return (
    <Flex direction={"column"}>
      <Header />
      <Banner />
      <CharList />
    </Flex>
  );
};

export default Home;
