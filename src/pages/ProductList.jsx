import styled from "styled-components";
import Navbar from "../components/Navbar";
import Announcement from "../components/Announcement";
import Products from "../components/Products";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";
import { useLocation } from "react-router-dom";


const Container = styled.div``;

const Title = styled.h1`
  margin: 20px;
`;






const ProductList = () => {
    const location = useLocation();
    const cat = location.pathname.split("/")[2];
    return (
        <Container>
            <Navbar />
            <Announcement />
            <Title>All Items</Title>
            <Products cat={cat }/>
            <Newsletter />
            <Footer />
        </Container>
    );
};

export default ProductList;