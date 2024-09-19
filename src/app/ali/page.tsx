import React from 'react';

async function fetchProducts() {
    try {
        const response = await fetch('https://e-commerce-apis-task3.vercel.app/product/all');
        if (!response.ok) throw new Error('Failed to fetch products');
        const data = await response.json();
        console.log('Fetched data:', data);
        
        // Ensure the products are an array
        if (Array.isArray(data.products)) {
            return data.products;
        } else {
            throw new Error('Unexpected response structure');
        }
    } catch (error) {
        console.error('Error fetching products:', error);
        return []; // Return an empty array in case of an error
    }
}

export default async function Ali() {
    const products = await fetchProducts();
    console.log('Products:', products);
    
    return (
        <>
            {products.length > 0 ? (
                products.map((product: any) => (
                    <h1 key={product._id} className='font-bold bg-slate-400 p-3'>
                        {product._id}
                    </h1>
                ))
            ) : (
                <p>No products available</p>
            )}
        </>
    );
}
