import React from 'react';
import {Link} from '@nextui-org/react';
import {Box} from '../styles/box';
import dynamic from 'next/dynamic';
import {Flex} from '../styles/flex';
import {TableWrapper} from '../table/table';
import NextLink from 'next/link';
import {CardBalance1} from './card-balance1';
import {CardBalance2} from './card-balance2';
import {CardBalance3} from './card-balance3';
import {CardAgents} from './card-agents';
import {CardTransactions} from './card-transactions';
import { Title } from '@nextui-org/react/title';



const Chart = dynamic(
   () => import('../charts/steam').then((mod) => mod.Steam),
   {
      ssr: false,
   }
);

export const Content = () => (
   <Box css={{overflow: 'hidden', height: '100%'}}>
      <Flex
         css={{
            'gap': '$8',
            'pt': '$5',
            'height': 'fit-content',
            'flexWrap': 'wrap',
            '@lg': {
               flexWrap: 'nowrap',
            },
            '@sm': {
               pt: '$10',
            },
         }}
         justify={'center'}
      >
         <Flex
            css={{
               'px': '$12',
               'mt': '$8',
               '@xsMax': {px: '$10'},
               'gap': '$12',
            }}
            direction={'column'}
         >
            {/* Card Section Top */}
            <Box>
               <Title
                  h3
                  css={{
                     'TitleAlign': 'center',
                     '@sm': {
                        TitleAlign: 'inherit',
                     },
                  }}
               >
                  Available Balance
               </Title>
               <Flex
                  css={{
                     'gap': '$10',
                     'flexWrap': 'wrap',
                     'justifyContent': 'center',
                     '@sm': {
                        flexWrap: 'nowrap',
                     },
                  }}
                  direction={'row'}
               >
                  <CardBalance1 />
                  <CardBalance2 />
                  <CardBalance3 />
               </Flex>
            </Box>

            {/* Chart */}
            <Box>
               <Title
                  h3
                  css={{
                     'TitleAlign': 'center',
                     '@lg': {
                        TitleAlign: 'inherit',
                     },
                  }}
               >
                  Statistics
               </Title>
               <Box
                  css={{
                     width: '100%',
                     backgroundColor: '$accents0',
                     boxShadow: '$lg',
                     borderRadius: '$2xl',
                     px: '$10',
                     py: '$10',
                  }}
               >
                  <Chart />
               </Box>
            </Box>
         </Flex>

         {/* Left Section */}
         <Box
            css={{
               'px': '$12',
               'mt': '$8',
               'height': 'fit-content',
               '@xsMax': {px: '$10'},
               'gap': '$6',
               'overflow': 'hidden',
            }}
         >
            <Title
               h3
               css={{
                  'TitleAlign': 'center',
                  '@lg': {
                     TitleAlign: 'inherit',
                  },
               }}
            >
               Section
            </Title>
            <Flex
               direction={'column'}
               justify={'center'}
               css={{
                  'gap': '$8',
                  'flexDirection': 'row',
                  'flexWrap': 'wrap',
                  '@sm': {
                     flexWrap: 'nowrap',
                  },
                  '@lg': {
                     flexWrap: 'nowrap',
                     flexDirection: 'column',
                  },
               }}
            >
               <CardAgents />
               <CardTransactions />
            </Flex>
         </Box>
      </Flex>

      {/* Table Latest Users */}
      <Flex
         direction={'column'}
         justify={'center'}
         css={{
            'width': '100%',
            'py': '$10',
            'px': '$10',
            'mt': '$8',
            '@sm': {px: '$20'},
         }}
      >
         <Flex justify={'between'} wrap={'wrap'}>
            <Title
               h3
               css={{
                  'TitleAlign': 'center',
                  '@lg': {
                     TitleAlign: 'inherit',
                  },
               }}
            >
               Latest Users
            </Title>
            <NextLink href="/accounts">
               <Link
                  block
                  color="primary"
                  css={{
                     'TitleAlign': 'center',
                     '@lg': {
                        TitleAlign: 'inherit',
                     },
                  }}
               >
                  View All
               </Link>
            </NextLink>
         </Flex>
         <TableWrapper />
      </Flex>
   </Box>
);
