import { Box, Container, Flex, Grid, Heading } from '@radix-ui/themes'
import Link from 'next/link'
import React from 'react'
import { FiShoppingCart } from "react-icons/fi";
import { IoSearch } from "react-icons/io5";

function Header() {
    return (
        <nav>
            <Grid columns={"4"} width="100%" height={"100%"} flow={'column'} className='min-h-20'>
                <Heading size="8" className='self-center cursor-default pl-2'>ECOMMERCE</Heading>
                <Flex gap="6" className='justify-center items-center col-span-2 '>
                    <Link href={"/"}>Categories</Link>
                    <Link href={"/"}>Sale</Link>
                    <Link href={"/"}>Clearance</Link>
                    <Link href={"/"}>New Stock</Link>
                    <Link href={"/"}>Trending</Link>
                </Flex>
                <Grid columns={"3"} pt={"1"} rows={"2"} className='h-full'>
                    <Flex className='justify-evenly col-span-2'>
                        <Link href={"/"} >Help</Link>
                        <Link href={"/"}>Orders & Returns</Link>
                    </Flex>
                    <Link href={"/"}>userName</Link>
                    <Flex className='justify-evenly col-start-2 col-end-4 items-center'>
                        <IoSearch size={25} className='cursor-pointer' />
                        <FiShoppingCart size={25} className='cursor-pointer' />
                    </Flex>
                </Grid>
            </Grid>
        </nav >
    )
}

export default Header
