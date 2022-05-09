import { Card, CardHeader } from "@mui/material";

export default function ProductCard({ product }: any) {

    return (
        <div>
            <Card sx={{display: "flex", width: "250px", height: "200px", margin: "15px"}}>
                <CardHeader
                    title={"Product"}
                    subheader={"Food"}
                />
            </Card>
        </div>
    );
}