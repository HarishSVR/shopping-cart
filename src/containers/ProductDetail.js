import React,{useEffect} from "react";
import {useParams} from "react-router-dom";
import axios from 'axios';
import {useSelector,useDispatch} from "react-redux";
import {selectedProduct}from '../redux/actions/productActions'
const ProductDetail = () =>{
    const products = useSelector((state)=>state.product)
    const {productId} = useParams();
    const dispatch = useDispatch();
    const fetchProductDetail = async() =>{
        const response = await axios
        .get(`https://fakestoreapi.com/products/${productId}`)
        .catch((err) =>{console.log("err",err)})
    }
    dispatch(selectedProduct(response.data));
    useEffect(()=>{
        if(productId && productId !=="") fetchProductDetail();
    },[productId])

    return (
        <div className="ui grid container">
            
        </div>
    );
};

export default ProductDetail;