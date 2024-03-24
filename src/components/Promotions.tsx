import { Section } from '@radix-ui/themes'
import React from 'react'
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

function Promotions() {
    return (
        <Section className='flex bg-[#F4F4F4] p-2 w-full justify-center items-center gap-5 '>
            <FaChevronLeft />
            Get 10% off on Business Sign Up
            <FaChevronRight />
        </Section>
    )
}

export default Promotions
