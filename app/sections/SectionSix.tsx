import React from "react";
import { Container, CardFour } from "@/components/index";

const SectionSix = () => {
  return (
    <Container bgColor="bg-bg-bage">
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-3 justify-center py-24 px-8 ">
        <CardFour
          pict="/card61.png"
          title="Cloud-Based Solutions"
          mainText="Our hosted enterprise web solutions provide users with access to our insights and data through various platforms, including MarketScope Advisor, Accounting Lens, Lowry OnDemand, and FUNDynamix."
        />
        <CardFour
          pict="/card62.png"
          title="APIs"
          mainText="Seamless integration of 7HC content via our award-winning Research-as-a-Service (RaaS) API into your portals enables the development of tailored tools and applications across your organization."
        />
        <CardFour
          pict="/card63.png"
          title="Data Feeds"
          mainText="Effortlessly integrate 7HC content into your internal workflows, processes, and platforms via a daily data feed. We support multiple file formats, including PDF, XML, TXT, and RIXML v2.5."
        />
        <CardFour
          pict="/card64.png"
          title="Financial Platforms"
          mainText="Access 7HC content through strategic partnerships and integrations with leading third-party financial platforms such as Bloomberg, FactSet, and Refinitiv."
        />
      </div>
    </Container>
  );
};

export default SectionSix;
