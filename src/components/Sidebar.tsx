import { Box, Icon, Link, Stack, Text } from "@chakra-ui/react";
import { RiDashboard2Line, RiGitBranchLine, RiInputMethodLine, RiUser3Line } from "react-icons/ri";

export function Sidebar(){
    return (
        <Box
            as="aside" w="64" mr="8"
            >
                <Stack
                    spacing="12" align="flex-start"
                >
                    <Box>
                        <Text fontWeight="bold" color="gray.400" fontSize="small">Geral</Text>
                        <Stack spacing="4" mt="8" align="stretch">
                            <Link display="flex" alignItems="center">
                                <Icon as={RiDashboard2Line}/>
                                <Text ml="4" fontWeight="medium">Dashboard</Text>
                            </Link>
                            <Link display="flex" alignItems="center">
                                <Icon as={RiUser3Line}/>
                                <Text ml="4" fontWeight="medium">Usuários</Text>
                            </Link>
                        </Stack>
                        
                    </Box>
                    <Box>
                        <Text fontWeight="bold" color="gray.400" fontSize="small">Automação</Text>
                        <Stack spacing="4" mt="8" align="stretch">
                            <Link display="flex" alignItems="center">
                                <Icon as={RiInputMethodLine}/>
                                <Text ml="4" fontWeight="medium">Formulários</Text>
                            </Link>
                            <Link display="flex" alignItems="center">
                                <Icon as={RiGitBranchLine}/>
                                <Text ml="4" fontWeight="medium">Autmação</Text>
                            </Link>
                        </Stack>
                        
                    </Box>
                </Stack>
            </Box>
    )
} 