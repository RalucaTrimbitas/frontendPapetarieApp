import React, { useState, useEffect } from 'react';
import SearchBar from './SearchBar';
import ProductList from './ProductList';

const SearchPage = (props) => {
    const [input, setInput] = useState('');
    const [productListDefault, setProductListDefault] = useState();
    const [productList, setProductList] = useState();

    const fetchData = async () => {
        return await fetch('http://localhost:8080/produse')
            .then(response => response.json())
            .then(data => {
                setProductList(data)
                setProductListDefault(data)
            });
    }

    useEffect( () => {fetchData()},[]);

    const updateInput = async (input) => {
    const filtered = productListDefault.filter(product => {
        return product.denumire.toLowerCase().includes(input.toLowerCase())
    })
    setInput(input);
    setProductList(filtered);
    }


    return (
        <>
            <h1>Product List</h1>
            <SearchBar
                input={input}
                onChange={updateInput}
            />
            <ProductList productList={productList}/>
        </>
    );
}

export default SearchPage