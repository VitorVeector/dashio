import { Button, Flex, Stack } from "@chakra-ui/react";
import Input from '../components/Form/Input'
import { Header } from "../components/Header";

export default function Home() {
  return (
    <>
    <Header/>
    <Flex
      w="100vw"
      h="100vh"
      align="center"
      justify="center">
        
        <Flex
          as="form"
          width="100%"
          maxWidth={360}
          bg={"gray.800"}
          p="8"
          borderRadius={8}
          flexDir={"column"}
        >
          <Stack spacing="4">
            <Input type="email" name="email" label="E-mail"/>
            <Input type="password" name="password" label="Password"/>
          </Stack>
          <Button
            type="submit"
            mt="6"
            colorScheme="teal"
          >Entrar</Button>
        </Flex>
    </Flex>
    </>
  )
}
