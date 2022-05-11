import { CardHeader, Container, Grid } from "@mui/material";
import { Box, display } from "@mui/system";
import IProduct from "../interfaces/IProduct";
import { ActionButton, Card, PlanCost, PlanTitle } from "../styles/Card.styles";

export default function ProductCard({ product }: any) {

    return (
        <div style={{padding: "10px"}}>
            <Card>
                <PlanTitle>{product.productName}</PlanTitle>
                <PlanCost>R$ {product.unitPrice}</PlanCost>
                <ActionButton>Order Now</ActionButton>
            </Card>
        </div>
    );
}