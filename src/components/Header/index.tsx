import { Flex, Grid, Image } from "@chakra-ui/react";

export function Header() {
  return (
    <Flex
      bg='white'
      w='100%'
      as='header'
      h={["3.125rem", "6.25rem"]}
      align='center'
      justify='center'
    >
      <Grid
        h='100%'
        w='100%'
        maxW='1160px'
        alignItems='center'
        templateColumns='repeat(3, 1fr)'
        justifyContent='center'
      >
        <Image src="/logo.svg" alt="logo" gridColumn="2" justifySelf="center" w={["5.0625rem", "11.5rem"]}/>
      </Grid>
    </Flex>
  );
}
