import React from 'react'
import {
    Box,
    Container,
    Link,
    SimpleGrid,
    Stack,
    Text,
    Flex,
    Tag,
    useColorModeValue,
    Image,
  } from '@chakra-ui/react';
  import { ReactNode } from 'react';
  
 
  
  const ListHeader = ({ children }: { children: ReactNode }) => {
    return (
      <Text fontWeight={'500'} fontSize={'lg'} mb={2}>
        {children}
      </Text>
    );
  };
  
  export default function Footer() {
    return (
      <Box
        bg={"#2c4152"}
        color={"white"}>
        <Container as={Stack} maxW={'6xl'} py={10}>
          <SimpleGrid columns={{ base: 1, sm: 2, md: 4 }} spacing={8}>
            <Stack align={'flex-start'}>
              <ListHeader>Ajio</ListHeader>
              <Link href={'#'}> Who We Are </Link>
              <Stack direction={'row'} align={'center'} spacing={2}>
                <Link href={'#'}>Join Our Team</Link>
                {/* <Tag
                  size={'sm'}
                  bg={useColorModeValue('green.300', 'green.800')}
                  ml={2}
                  color={'white'}>
                  New
                </Tag> */}
              </Stack>
              <Link href={'#'}>Terms & Conditions</Link>
              <Link href={'#'}>We Respect Your Privacy</Link>
              <Link href={'#'}>Fees & Payments</Link>
              <Link href={'#'}>Returns & Refunds Policy</Link>
              <Link href={'#'}>Returns & Refunds Policy</Link>
            </Stack>
            <Stack align={'flex-start'}>
              <ListHeader>Help</ListHeader>
              <Link href={'#'}>Track Your Order</Link>
              <Link href={'#'}>FAQ</Link>
              <Link href={'#'}>Returns</Link>
              <Link href={'#'}>Cancellation</Link>
              <Link href={'#'}>Payments</Link>
              <Link href={'#'}>Customer Care</Link>
              <Link href={'#'}>How Do I Redeem My Coupon</Link>
            </Stack>
            <Stack align={'flex-start'}>
              <ListHeader>Shop by</ListHeader>
              <Link href={'#'}>Men</Link>
              <Link href={'#'}>Women</Link>
              <Link href={'#'}>Kids</Link>
              <Link href={'#'}>India</Link>
              <Link href={'#'}>Stores</Link>
              <Link href={'#'}>New Arrivals</Link>
              <Link href={'#'}>Brand Directory</Link>
              <Link href={'#'}>Home</Link>
              <Link href={'#'}>Collections</Link>
            </Stack>
            <Stack align={'flex-start'}>
              <ListHeader>Follow Us</ListHeader>
              <Link href={'#'}>Facebook</Link>
              <Link href={'#'}>Twitter</Link>
              <Link href={'#'}>Dribbble</Link>
              <Link href={'#'}>Instagram</Link>
              <Link href={'#'}>LinkedIn</Link>
            </Stack>
          </SimpleGrid>
        </Container>
        <hr width="90%" alignItems="center" />
        <Box h="200px" border="1px solid red">
          <Flex>
          <Box width="50%" justifyContent="space-between" border="1px solid red">
            <Box justifyContent="left" width="30%" border="1px solid green"> Payment methods </Box>
            <Box width="50%" border="1px solid green">
              <Flex justifyContent="space-between" alignItems="center">
                <Box> <Image src='https://2.imimg.com/data2/PH/AM/MY-1585188/cash-on-delivery-500x500.png' alt='logo' 
                  w="100%" /> </Box>
                <Box> <Image src='https://2.imimg.com/data2/PH/AM/MY-1585188/cash-on-delivery-500x500.png' alt='logo' 
                  w="100%" /> </Box>
                <Box> <Image src='https://2.imimg.com/data2/PH/AM/MY-1585188/cash-on-delivery-500x500.png' alt='logo' 
                  w="100%" /> </Box>
                <Box>
                  <Image src='https://2.imimg.com/data2/PH/AM/MY-1585188/cash-on-delivery-500x500.png' alt='logo' 
                  w="100%" />
                </Box>
              </Flex>
            </Box>
          </Box>
          <Box width="50%" border="1px solid red" >
            <Box border="1px solid red" w="30%" marginLeft="70%"  > Secure systems </Box>
            <Box border="1px solid red" w="30%" marginLeft="70%" >sadasf</Box>
          </Box>
          </Flex>
        </Box>
      </Box>
    );
  }


      

