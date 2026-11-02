import TitleSection from "@/components/common/TitleSection";
import DetailsChart from "@/features/DetailsChart/DetailsChart";
import ProductsTable from "@/features/ProductsTable/ProductsTable";
import QuickOverview from "@/features/QuickOverview/QuickOverview";
import Summaries from "@/features/Summaries/Summaries";
import { useState } from "react";
import { useNavigate } from "react-router";

function Home() {
  const [isRedirecting, setIsRedirecting] = useState(false);
  const navigate = useNavigate();

  const toggle = () => {
    setIsRedirecting(!isRedirecting);
  };

  const CTAButton = () => {
    const clickHandler = () => {
      toggle();
      navigate("/products");
    };

    return (
      <button
        onClick={clickHandler}
        className="select-none primary-bg px-4 py-2 text-sm rounded-md cursor-pointer hover:opacity-90 text-white"
      >
        {isRedirecting ? "درحال انتقال...." : " ایجاد محصول"}
      </button>
    );
  };

  return (
    <>
      {/* eslint-disable-next-line react-hooks/static-components */}
      <TitleSection title="داشبورد" buttons={<CTAButton />} />
      <Summaries />
      <div className="mt-20 pb-10 space-y-10">
        <DetailsChart />
        <ProductsTable />
        <QuickOverview />
      </div>
    </>
  );
}

export default Home;
