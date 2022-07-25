import { Box, Flex, Text, SimpleGrid, theme } from "@chakra-ui/react";
import { ApexOptions } from "apexcharts";

import { Header } from "../components/Header";
import { Sidebar } from "../components/Sidebar";

import dynamic from "next/dynamic";

const Chart = dynamic(() => import('react-apexcharts'), {ssr: false})

export default function Dashboard() {

    const options: ApexOptions = {
        chart: {
            toolbar: {
                show: false     // Ira remover a ferramentas de zoom, select, etc.
            },
            zoom: {
                enabled: false // Ira remover o zoom
            },
            foreColor: theme.colors.gray[400] // Cores do texto do gráfico
        },
        grid: {
            show: false // Linha e colunas na parte inferior do gráfico
        },
        dataLabels: {
            enabled: true // Dados de cada label
        },
        stroke: {
            curve: "straight" // Estilo da linha do grafico
        },
        tooltip: {
            style: {
                fontSize: '12px',
                fontFamily: undefined,
              }
        },
        xaxis: {
            type: "datetime", // tipo de dados
            axisBorder: {
                color: theme.colors.gray[600]
            },
            axisTicks: {
                color: theme.colors.gray[600]
            },
            categories: [
                '2022-07-25T00:00.000Z',
                '2022-07-26T00:00.000Z',
                '2022-07-27T00:00.000Z',
                '2022-07-28T00:00.000Z',
                '2022-07-29T00:00.000Z',
                '2022-07-30T00:00.000Z',
            ]
        },
        fill: { // opçoes de cores interna do gráfico
            opacity: 0.3,
            type: 'gradient',
            gradient: {
                shade: 'dark',
                opacityFrom: 0.9,
                opacityTo: 0.2
            }
        }
    }

    const series = [
        {
            name: 'series-1',
            data: [21, 42, 87, 34, 23, 67]
        }
    ]



    return (
        <Flex direction="column" h="100vh">
            <Header />
            <Flex w="100%" my="6" maxWidth={1480} mx="auto" px="6" alignItems="left">
                <Sidebar />
                <SimpleGrid
                    flex="1" //Como o componente SideBar, já possue uma largura específica, definimos flex="1" para ele ter direito a uma parte do espaço
                    gap="4" //Distancia entre os elementos dentro do grid
                    minChildWidth="320px" //cada item filho terá no mínimo 320px, quando minha tela em eixo X estiver menos que 320px, ele irá quebrar, jogando o item abaixo
                    alignItems="flex-start"
                >
                    <Box
                        p="8"
                        bg="gray.800"
                        borderRadius={8}
                    >
                        <Text fontSize="lg" mb="4">Usuários inscritos na semana</Text>
                        <Chart options={options} series={series} height={160} type="area" />
                    </Box>
                    <Box
                        p="8"
                        bg="gray.800"
                        borderRadius={8}
                    >
                        <Text fontSize="lg" mb="4">Taxa de abertura</Text>
                        <Chart options={options} series={series} height={160} type="area" />
                    </Box>
                </SimpleGrid>
            </Flex>
        </Flex>
    )
}