import React from "react";
import CardFive from "../components/CardFive";
import Container from "../components/Container";

const SectionFive = () => {
  return (
    <Container bgColor="bg-white">
      <div className=" flex flex-col justify-center items-center">
        <div className="flex flex-col justify-center items-center gap-2 py-10 px-44">
          <span className="text-navi text-4xl font-bold">
            Investment Research Solutions Offered by 7HC.
          </span>
          <span className="text-navi font-bold text-base">
            Premium research and data designed to boost portfolio performance
            and manage risk.
          </span>
        </div>

        <CardFive
          type="right"
          icn="/pic1.jpg"
          title="Core Equity Analysis"
          subtitle="Access a holistic perspective on global trends, sectors, and companies."
          mainText="Harness the power of our in-depth Fundamental Equity Research to build portfolios with confidence and uncover trading opportunities. Our qualitative coverage includes over 1,600 companies, while our quantitative research spans more than 15,000 global firms. We also manage 15 stock and ETF model portfolios, along with 5 ESG-focused models—some backed by performance histories of up to 24 years."
          href="/"
        />
        <CardFive
          type="left"
          icn="/pic2.jpg"
          title="Accounting Risk Research"
          subtitle="Comprehend the impact of financial reporting by public companies."
          mainText="Leverage our Forensic Accounting Research to uncover alpha opportunities and protect your portfolio from costly setbacks. With comprehensive coverage, we identify companies with weak financial reporting, poor operational metrics, and governance concerns, helping you stay ahead of emerging risks."
          href="/"
        />
        <CardFive
          type="right"
          icn="/pic3.jpg"
          title="Comprehensive Global ETF Data & Analysis"
          subtitle="Key data and insights to guide you through the ETF universe."
          mainText="Unlock valuable insights into the global ETF market with our comprehensive ETF data and analysis. Effortlessly track fund flows and uncover new product and investment opportunities using our specialized ETF holdings database and proprietary classification system, which includes nearly 100 detailed categories."
          href="/"
        />
        <CardFive
          type="left"
          icn="/pic4.jpg"
          title="Quantitative Research"
          subtitle="Empowering you with the confidence to navigate any market cycle."
          mainText="Gain the confidence to navigate any market cycle with our proven, data-driven Quantitative Research. Built on supply and demand principles, it evaluates the internal strength of markets, sectors, industries, and individual securities."
          href="/"
        />
        <CardFive
          type="right"
          icn="/pic5.jpg"
          title="Policy and Regulatory Research"
          subtitle="Uncover risks and opportunities shaped by public policy."
          mainText="Evaluate and measure investment opportunities and risks stemming from market-moving public policy and legal events that influence financial markets, including legislative, regulatory, judicial, and political changes at all levels of government."
          href="/"
        />
      </div>
    </Container>
  );
};

export default SectionFive;
