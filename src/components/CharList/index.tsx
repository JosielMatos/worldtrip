import { Grid, GridItem } from "@chakra-ui/react";
import { Char } from "./Char";

export function CharList() {
  return (
    <Grid
      templateColumns={["1fr 1fr", "1fr 1fr", "1fr 1fr", "repeat(5, 1fr)"]}
      w="100%"
      justifyItems="space-between"
      alignItems="center"
      mt={["10", "32"]}
      mx="auto"
      maxW="1160px"
      flexWrap="wrap"
      gap={[1,5]}
    >
      <GridItem>
        <Char icon='cocktail' text='vida noturna' />
      </GridItem>
      <GridItem>
        <Char icon='surf' text='praia' />
      </GridItem>
      <GridItem>
        <Char icon='building' text='moderno' />
      </GridItem>
      <GridItem>
        <Char icon='museum' text='clássico' />
      </GridItem>
      <GridItem colSpan={[2, 2, 2, 1]}>
        <Char icon='earth' text='e mais...' />
      </GridItem>
    </Grid>
  );
}
