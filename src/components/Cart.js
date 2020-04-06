import React from 'react'
import {STORE_ITEMS} from '../data'
import styled from 'styled-components'
import CartItem from './CartItem'
import { getStoreItemArray } from '../reducers';
import { useSelector } from 'react-redux'

const Cart = () => {
    const [numItems, setNumItems] = React.useState(0)
    const state = useSelector(state => state)
    const storeItems = useSelector(getStoreItemArray)
    console.log(state, 'state')
    console.log(storeItems, 'storeItems')
    let price = 0
    storeItems.forEach(item=> {
        price += (item.price * item.quantity)
    })
    console.log(price)
    return (
        <Wrapper>
            <h1 style={{marginBottom:'0px'}}>Your Cart</h1>
            <p style={{marginTop:'5px'}}>{numItems} item</p>
            <CartItemDiv>
                {storeItems.map((item ,index)=> {
                        return <CartItem key={index+1} data={item} />
                    }
                )}
            </CartItemDiv>
            <CartFooterDiv>
                <div style={{display:'flex'}}>Total: <PriceWrapper>{price}</PriceWrapper></div>
                <PurchaseButton>Purchase</PurchaseButton>
            </CartFooterDiv>
        </Wrapper>
    )
}

export default Cart;

const CartItemDiv = styled.div`
    height: 30%;
`

const PriceWrapper = styled.div`
    font-weight: bold;
`

const PurchaseButton = styled.button`
    background-color: #ff406d;
    margin-top: 13px;
    width: 100px;
    height: 25px;
    border-radius: 25px;
    margin-left: 4%;
    border:none;
    outline: none;
    color: white;
`

const Wrapper = styled.div`
    background-color:#401f43;
    color: white;
    height: 1200px;
    position: fixed;
    width: 100%;
    display: flex;
    flex-direction: column;
    padding: 16px 32px;
`

const CartFooterDiv = styled.div`
    display: flex;
`