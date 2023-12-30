import { Card, CardContent, Divider, Grid, Typography } from "@mui/material";
import ComplexVitamin from "./ComplexVitamin";
import VitaminLink from "./VitaminLink";

export default function Home() {
  return (
    <Card>
      <CardContent>
        <Typography variant="h3" textAlign="center">
          Витамины
        </Typography>
        <Divider />
        <Grid container spacing={2} mt={1}>
          <Grid item md={3}>
            <VitaminLink name="A" />
          </Grid>
          <Grid item md={3}>
            <ComplexVitamin
              mainName="B"
              variants={["B1", "B2", "B3", "B5", "B6", "B9", "B12"]}
            />
          </Grid>
          <Grid item md={3}>
            <VitaminLink name="C" />
          </Grid>
          <Grid item md={3}>
            <VitaminLink name="E" />
          </Grid>
          <Grid item md={3}>
            <VitaminLink name="D" />
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
}
