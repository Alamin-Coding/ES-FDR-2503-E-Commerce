import React from 'react'
import Section from '../Section'
import Container from '../Container'
import { Link } from 'react-router'
import RedButton from '../RedButton'

const CartTotal = () => {
  return (
    <Section className="pb-35">
        <Container>
            <div className='flex items-start gap-[173px]'>
                <div className='flex items-center gap-4 '>
                    <input type="text" placeholder="Coupon Code" 
                    className='py-4 pl-6 w-[300px] border border-gray-500'
                    />
                    <RedButton title="Apply Coupon" link="/" />
                </div>
                <div className='border border-gray-500 w-[470px]'>
                    <div className='px-6'>
                        <h3 className='pt-8 font-medium text-[20px] space-y-4'>Cart Total</h3>
                        <div className='pt-4 text-black text-[16px]'>
                            <div className='flex justify-between border-b border-gray-500 py-4'>
                                <span>Subtotal</span>
                                <span>$1750</span>
                            </div>
                            <div className='flex justify-between border-b border-gray-500 py-4'>
                                <span>Shipping</span>
                                <span>Free</span>
                            </div>
                            <div className='flex justify-between border-b border-gray-500 py-4'>
                                <span>Total</span>
                                <span>$1750</span>
                            </div>
                           <div className='flex justify-center'>
                             <RedButton title="Proceed To Checkout" link="/checkout" className="mt-4 mb-8 "/>
                           </div>
                        </div>
                    </div>
                </div>
            </div>
        </Container>
    </Section>
  )
}

export default CartTotal

