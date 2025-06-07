import { Container, Copyrights, BottomMenu, Logo } from "@/app/components";

const Footer = () => {
  return (
    <Container bgColor="bg-main-orange">
      <div className="flex flex-col gap-5 py-5 px-8">
        <div className="flex flex-col items-center lg:items-start lg:flex-row justify-center lg:justify-between">
          <Logo className="w-32 h-32" type="secondary" />

          <div className="flex flex-col mx-auto w-full h-full gap-2 py-8 lg:block hidden">
            <div className="text-xl text-white font-bold text-right">
              Translating Numbers into Strategy
            </div>
            <div className="my-auto h-full text-center">
              <hr className="h-px py-0.5 bg-white border-0 " />
            </div>
          </div>
        </div>
        <BottomMenu />
        <Copyrights />
      </div>
    </Container>
  );
};

export default Footer;
