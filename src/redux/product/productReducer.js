import {BUY_PRODUCT} from './productType';

const initialState={
    dataList:[
        { "id":1, "name":"example1" },
        { "id":2, "name":"example2" }
    ],
    numberOfProducts:20,
    productName:"Saree",
    price:550
}

const bookReducer=(state=initialState, action)=>{
    switch(action.type){
        case  BUY_PRODUCT:return{
            ...state,
            numberOfProducts:state.numberOfProducts-1
        }
        default:return state;      
    }
}

export default bookReducer;