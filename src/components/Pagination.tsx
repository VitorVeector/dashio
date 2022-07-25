import { Box, Button, Stack } from "@chakra-ui/react";

export function Pagination(){
    return(
        <Stack 
            direction={"row"}
            spacing="6"
            mt="8"
            justify={"space-between"}
            align="center">
                <Box>
                    <strong>0</strong> - <strong>10</strong> de <strong>100</strong>
                </Box>
                <Stack direction={"row"} spacing="2">
                    <Button
                        size="sm"
                        fontSize={"xs"}
                        width="4"
                        colorScheme={"whatsapp"}
                        disabled // Desabilitando button
                        _disabled={{bgColor: 'whatsapp.500', cursor: 'default'}} // Estilizando o disabled
                        >1</Button>
                    <Button
                        size="sm"
                        fontSize={"xs"}
                        width="4"
                        bgColor={"gray.700"}
                        _hover={
                            {bg: 'gray.400'}
                        }
                        >2</Button>
                    <Button
                        size="sm"
                        fontSize={"xs"}
                        width="4"
                        bgColor={"gray.700"}
                        _hover={
                            {bg: 'gray.400'}
                        }
                        >3</Button>
                    <Button
                        size="sm"
                        fontSize={"xs"}
                        width="4"
                        bgColor={"gray.700"}
                        _hover={
                            {bg: 'gray.400'}
                        }
                        >4</Button>
                    <Button
                        size="sm"
                        fontSize={"xs"}
                        width="4"
                        bgColor={"gray.700"}
                        _hover={
                            {bg: 'gray.400'}
                        }
                        >5</Button>
                    <Button
                        size="sm"
                        fontSize={"xs"}
                        width="4"
                        bgColor={"gray.700"}
                        _hover={
                            {bg: 'gray.400'}
                        }
                        >6</Button>
                </Stack>
            
        </Stack>
    )
}