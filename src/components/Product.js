import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';

function Product() {
    const { id } = useParams();
    const [product, setProduct] = useState({});
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch("http://localhost:8080/product/" + id);
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                const json = await response.json();
                setProduct(json);
            } catch (e) {
                setError(e);
            } finally {
                setLoading(false);
            }
        };
        if(id) {
            fetchData();
        }
    }, []);

    if(!id) {
        return (<>
            <h1>Product</h1>
            <p>Please select a product!</p>
        </>);
    }

    if (loading) { 
        return (<>
            <h1>Product</h1>
            <p>Loading data...</p>
        </>);
    }

    if (error) {
        return (<>
            <h1>Product</h1>
            <p>Error: {error.message}</p>
        </>);
    }

    const rows = [];
    for (let i = 0; i < product.calification; i++) {
        rows.push(<p>★</p>);
    }


  return (
    <div className='page page-phone'>
        <h1>Product</h1>
        <div className='mask'>
            <img src={'/images/' + product.image + '.png'} alt=''/>
        </div>
        <h3>{product.name}</h3>
        <h3>$ {product.price}</h3>
        <h2>Description</h2>
        <span>Ram memory: {product.ramMemory}</span>
        <span>Internal memory: {product.internalMemory}</span>
        <span>Avilability: {product.availability}</span>
        <span style={{ display: 'inline-block' }}>Calification: ({product.calification}/5)</span>
        {rows}
        {
            (product.blocked === true) ? 
            <span>Locked device, you need to unlock it to choose the phone company</span> : 
            <span>Unlocked device, you can choose the phone company</span> 
        }
        <h2>Seller</h2>
        <span>Name: {product.seller.name}</span>
        <span>Email: {product.seller.email}</span>
        <span>Phone: {product.seller.phone}</span>
        <span>Website: {product.seller.webSiteUrl}</span>
    </div>
  )
}

export default Product