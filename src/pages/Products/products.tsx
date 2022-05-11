import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../auth/auth";
import ProductCard from "../../components/ProductCard";
import IProduct from "../../interfaces/IProduct";
import { getProducts } from "../../services/api";

export default function Products() {
    const [product, setProduct] = useState<Array<IProduct>>([]);

    const { authenticated, logout } = useContext(AuthContext);

    const productList = product.map((item: any) => <div><ProductCard product={item}>{item}</ProductCard></div>)

    const handleLogout = () => {
        logout();
    }

    useEffect(() => {
        getProducts().then((response: any) => {
            setProduct(response.data)
        });
    }, [])

    if (product) {
        return (
            <div style={{display: "flex"}}>{productList}</div>
        )
    }
}