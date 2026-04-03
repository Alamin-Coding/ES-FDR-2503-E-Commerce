import React from 'react'
import Section from './Section'
import Container from './Container'
import ServiceCard from './ServiceCard'
import {  SecureIcon, DeliveryIcon, CustomerserviceIcon } from './icons'

const Service = () => {
  return (
    <Section className='pb-35'>
        <Container>
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'>
                <ServiceCard Icon={DeliveryIcon} title="FREE AND FAST DELIVERY" description="Free delivery for all orders over $140" />
                <ServiceCard Icon={CustomerserviceIcon} title="24/7 CUSTOMER SERVICET" description="Friendly 24/7 customer support" />
                <ServiceCard Icon={SecureIcon} title="MONEY BACK GUARANTEE" description="We reurn money within 30 days" />
            </div>
        </Container>
    </Section>
  )
}

export default Service