import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';

import { removeItem, updateQuantity} from '../actions'

const CartItem = ({data}) => {
    const itemQuantity = useSelector((state)=> state[data.id].quantity);
    const dispatch = useDispatch();
    const { title, id, } = data;
    console.log(itemQuantity)
    return(
        <Wrapper>
            <TitleDiv>
                <PaddingDiv>
                    <div>{title}</div>
                    <ExitButton onClick={()=>{
                        dispatch(removeItem(id))
                    }}>X</ExitButton>
                </PaddingDiv>
            </TitleDiv>
            <div>
                <QuantityDiv>
                    <PaddingDiv>
                        Quantity:  
                        <input 
                            value={itemQuantity}
                            // onChange={(ev) => dispatch(updateQuantity(data.id, ev.target.value))}
                        >
                        </input>
                    </PaddingDiv>
                </QuantityDiv>
            </div>
        </Wrapper>
    )
}

const PaddingDiv = styled.div`
    padding: 10px 10px;
    display: flex;
`

const Number = styled.div`
    font-weight: bold;
    color: black;
    background-color: white;
    height: 24px;
    width: 24px;
    text-align: center;
`

const Wrapper = styled.div`
    border: 1px dashed whitesmoke;
    width: 200px;
`

const QuantityDiv = styled.div`
    background-color: #301732;
    width: 100%;
    height: 40px;
`

const TitleDiv = styled.div`
    display: flex;
    width: 100%;
    height: 40px;
`

const ExitButton = styled.button`
    height: 20px;
    width: 20px;
    border: none;
    background-color: #401f43;
    color: white;
    margin-left: 130px;
`

export default CartItem