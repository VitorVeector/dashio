import { Flex, Input, Text, Icon, HStack, Box, Avatar } from "@chakra-ui/react"
import { RiNotificationLine, RiSearch2Line, RiUserAddLine} from 'react-icons/ri'

export const Header = () => {
    return (
        <Flex
            w="100%"
            as="header"
            maxWidth={1480}
            h="20"
            mx='auto'
            mt='4'
            px='4'
            align='center'>
                <Text 
                    fontSize="3xl"
                    as="span"
                    fontWeight={"bold"}
                    letterSpacing="tight">DashIO<Text as="span" color="whatsapp.500">.</Text></Text>
            <Flex
                as="label"
                flex="1"
                py="4"
                px="8"
                ml="6"
                maxWidth={480}
                alignSelf="center"
                color="gray.200"
                position="relative"
                bg="gray.800"
                borderRadius="full"
            >
                <Input 
                    color="gray.50"
                    variant="unstyled"
                    px="4"
                    mr="4"
                    placeholder="Buscar na plataforma"
                    _placeholder={{color: "gray.600"}} // Define os estilos do placeholder
                    /> 
                <Icon as={RiSearch2Line} fontSize="20"/>
            </Flex>

            <Flex
                align="center"
                ml="auto" // Faz com que todo conteúdo seja jogado para direita

            >
                <HStack spacing="10"
                    mx="8"
                    pr="8"
                    py="1"
                    color="gray.380"
                    borderRightWidth={1}
                    borderColor="gray.600"
>
                    <Icon as={RiNotificationLine} fontSize="20"/>
                    <Icon as={RiUserAddLine} fontSize="20"/>
                </HStack>
                <Flex align="center">
                    <Box mr="4" textAlign="right">
                        <Text>Vitor Hugo Araujo</Text>
                        <Text color="gray.500" fontSize="small">job_vitoraraujo@outlook.com</Text>
                    </Box>
                    <Avatar
                        size="md"
                        name="Vitor Hugo Araujo"
                        src="https://github.com/vitorveector.png"/>
                </Flex>
            </Flex>
        </Flex>
    )
}