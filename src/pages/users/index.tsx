import { Box, Button, Checkbox, Flex, Heading, Icon, Table, Tbody, Td, Text, Th, Thead, Tr } from "@chakra-ui/react";
import { RiAddLine, RiPencilLine } from "react-icons/ri";
import { Header } from "../../components/Header";
import { Pagination } from "../../components/Pagination";
import { Sidebar } from "../../components/Sidebar";

export default function UserList(){
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
                        <Flex mb="8" justify="space-between" align="center">
                            <Heading size="lg" fontWeight="normal">Usuários</Heading>
                            <Button 
                                as='a'
                                size='sm'
                                fontSize='sm'
                                colorScheme='whatsapp'
                                leftIcon={<Icon as={RiAddLine}/> // Adicionar icone à esquerda
                            }
                                >Criar novo</Button>
                        </Flex>
                        <Table colorScheme="whiteAlpha">
                            <Thead>
                                <Tr>
                                    <Th px="6" color="whatsapp.300" width="8">
                                        <Checkbox colorScheme="whatsapp"/>
                                    </Th>
                                    <Th>Usuário</Th>
                                    <Th>Data de cadastro</Th>
                                    <Th width="8"/>
                                </Tr>
                                
                            </Thead>
                            <Tbody>
                                <Tr px="6">
                                    <Td><Checkbox colorScheme="whatsapp"/></Td>
                                    <Td>
                                        <Box>
                                            <Text fontWeight="bold">Vítor Araujo</Text>
                                            <Text fontSize="sm" color="gray.400">job_vitoraraujo@outlook.com</Text>
                                        </Box>
                                    </Td>
                                    <Td>
                                        25 de julho, 2022
                                    </Td>
                                    <Td>
                                    <Button 
                                        as='a'
                                        size='sm'
                                        fontSize='sm'
                                        colorScheme='purple'
                                        leftIcon={<Icon as={RiPencilLine}/> // Adicionar icone à esquerda
                                    }
                                >Editar</Button>
                                    </Td>
                                </Tr>
                            </Tbody>
                        </Table>
                        <Pagination/>
                    </Box>
                </Flex>                   
        </Box>
    )
}