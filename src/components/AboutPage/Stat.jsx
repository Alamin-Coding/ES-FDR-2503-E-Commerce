import React from 'react'
import Section from '../Section'
import Container from '../Container'
import StatCard from './StatCard'
import { ShopIcon, SaleIcon, MoneybagIcon, ShoppingbagIcon } from '../icons'

const Stat = () => {
  return (
    <Section>
        <Container>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 justify-items-center">
                <StatCard Icon={ShopIcon} title="10.5k" description="Sallers active our site" />
                <StatCard Icon={SaleIcon} title="33k" description="Mopnthly Produduct Sale" />
                <StatCard Icon={ShoppingbagIcon} title="45.5k" description="Customer active in our site" />
                <StatCard Icon={MoneybagIcon} title="25k" description="Anual gross sale in our site" />
            </div>
        </Container>  
    </Section>
  )
}

export default Stat