import { Flex, Heading, Image, Text } from "@chakra-ui/react";

export function Banner() {
  return (
    <Flex
      w='100%'
      h={["10.1875rem", "15.625rem", "15.625rem", "20.9375rem"]}
      bgImage="url('/banner-bg.jpg')"
      bgRepeat='no-repeat'
      bgSize='cover'
      bgPosition={["100% 20%", "100% 20%", "100% 30%"]}
    >
      <Flex
        justify={["center", "space-between"]}
        align='center'
        w='100%'
        px={["4", "10", "25", "20", "36"]}
      >
        <div>
          <Heading
            color='gray.100'
            fontWeight='500'
            fontSize={["xl", "2xl", "2xl", "2xl", "4xl"]}
          >
            5 Continentes, <br />
            infinitas possibilidades.
          </Heading>
          <Text
            color='gray.300'
            mt='5'
            fontSize={["0.8rem", "xl"]}
            maxW={["100%", "100%", "100%", "34.375rem"]}
          >
            Chegou a hora de tirar do papel a viagem que você sempre sonhou.
          </Text>
        </div>
        <Image
          w={["18.75rem", "18.75rem", "18.75rem", "26.875rem"]}
          src='/airplane.svg'
          alt='avião'
          display={["none", "none", "block"]}
          transform='translateY(48px)'
          ml='8'
        />
      </Flex>
    </Flex>
  );
}
