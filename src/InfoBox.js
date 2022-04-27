import React from "react";
import { Card, CardContent, Typography } from "@material-ui/core";

function InfoBox({ title, cases, total }) {
  return (
    <Card className="InfoBox">
      <CardContent>
        {/** Title */}
        <Typography color="textSecondary">{title}</Typography>
        {/** Cases */}
        <h2 className="infobox_cases">{cases}</h2>
        {/** Total cases */}
        <Typography className="infobox_total" color="textSecondary">
          {total} Total
        </Typography>
      </CardContent>
    </Card>
  );
}

export default InfoBox;
