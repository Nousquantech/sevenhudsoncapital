import React from "react";
import CardFour from "../components/CardFour";
import Container from "../components/Container";

const SectionFour = () => {
  return (
    <Container bgColor="bg-bg-bage">
      <div className="grid grid-cols-3 justify-center items-center py-7 gap-3">
        <CardFour
          pict="/card1.jpg"
          title="Expert-level knowledge"
          mainText="Our global team brings together many of the most in-demand thought leaders across the investment landscape, with expertise that spans fundamental equity, forensic accounting, fund strategy, public policy."
        />
        <CardFour
          pict="/card2.jpg"
          title="Independent Analysis"
          mainText="As we are neither a bank nor a brokerage, our analysis is completely independent. We don’t manage funds, execute trades, or create competing products, ensuring the insights you receive from 7HC are unbiased and objective."
        />
        <CardFour
          pict="/card3.jpg"
          title="Customizable Delivery"
          mainText="Our innovative approach to content delivery and integration allows you to fully customize how our insights and data are integrated, giving you the flexibility to implement cost-effective solutions across your organization with speed.
"
        />
      </div>
    </Container>
  );
};

export default SectionFour;
