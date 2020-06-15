import React, { Fragment } from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {buyProduct} from '../redux';

 function ProductContainerByHook(props){
     const numberOfProducts=useSelector(state=>state.numberOfProducts);
     const productName=useSelector(state=>state.productName);
     const price=useSelector(state=>state.price);
     const dataList=useSelector(state=>state.dataList);
     const dispatch=useDispatch();
     console.log(dataList)

    return(
        <div>
            <div>
                {dataList.map(person => (
                    <Fragment>
                        <p>{person.id}</p>
                        <p>{person.name}</p>
                    </Fragment>
                 ))}
            </div>
            <h1>Hook Container</h1>
            <h2>Number of products - {numberOfProducts}</h2>
            <h2>Name of products - {productName}</h2>
            <h2>Price of products - {price}</h2>            
            <button onClick={()=>dispatch(buyProduct())}>buy Product</button>
        </div>
    )
}


export default ProductContainerByHook;