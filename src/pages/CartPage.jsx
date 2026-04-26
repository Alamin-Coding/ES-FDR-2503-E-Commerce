import React from 'react'
import Container from '../components/Container'
import CartTable from '../components/cart/CartTable'
import CartTotal from '../components/cart/CartTotal'
import Section from '../components/Section'

const CartPage = () => {
  return (
   <Section>
    <Container>
      <CartTable/>
      <CartTotal />
    </Container>
   </Section>
  )
}

export default CartPage