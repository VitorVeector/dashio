import { Box, Divider, Flex, Heading, Stack, SimpleGrid, Button, Icon } from "@chakra-ui/react";
import { RiSave2Line, RiXboxLine } from "react-icons/ri";
import Input from "../../components/Form/Input";
import { Header } from "../../components/Header";
import { Sidebar } from "../../components/Sidebar";

export default function UserCreate(){
    return(
        <Box>
            
            <Header/>
                <Flex 
                    w='100%' 
                    my='6'
                    maxWidth={1480}
                    mx='auto'
                    px='6'
                    align='left'>
                    <Sidebar/>  
                    <Box 
                        flex='1' // Irá ocupar toda largura possível
                        borderRadius={8} bg='gray.800' p="8"
                    >
                        <Heading size="lg">Criar usuário</Heading>

                        <Divider my={"6"} borderColor={"gray.700"}></Divider>

                        <Stack direction={"column"} spacing="8">
                            <SimpleGrid minChildWidth={"240px"} spacing="8" w="100%">
                                <Input name="name" label="Nome completo"/>
                                <Input name="email" label="E-mail"/>
                            </SimpleGrid>
                            <SimpleGrid minChildWidth={"240px"} spacing="8" w="100%">
                                <Input name="password" type={"password"} label="Senha"/>
                                <Input name="password_confirmation" type={"password"} label="Confirmação de senha"/>
                            </SimpleGrid>
                        </Stack>
                        <Flex mt="8" justify={"flex-end"}>
                            <Stack direction={"row"}>
                                <Button colorScheme={"whiteAlpha"} leftIcon={<Icon as={RiXboxLine}></Icon>}>Cancelar</Button>
                                <Button colorScheme={"whatsapp"} leftIcon={<Icon as={RiSave2Line}></Icon>}>Salvar</Button>
                            </Stack>
                        </Flex>
                    </Box>


                </Flex>                   
        </Box>
    )
}