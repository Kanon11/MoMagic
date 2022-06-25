import axios from "axios";
import { useEffect, useState } from "react";
import styled from "styled-components";
import SmallProduct from "./Product";

const Container = styled.div`
    padding: 20px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
`;

const Products = ({ cat }) => {
    const [products, setProducts] = useState([]);
    useEffect(() => { 
        const getProducts = async () => {
            try {
                const result = await axios.get(
                    cat ? `http://localhost:5000/api/products?category=${cat}` : "http://localhost:5000/api/products"
                );
                // console.log(result.data);
                setProducts(result.data);
            } catch (error) {
                console.log("error on data get");
            }
        };
        getProducts();
    }, [cat]);

    return (
        <Container>
            {products.map((item) => 
                <SmallProduct item={item} key={item._id} />)
            } 
        </Container>
    );
};

export default Products;