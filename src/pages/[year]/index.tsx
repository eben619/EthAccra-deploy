"use client"

import EthAccra2023 from "@/components/2023/main";
import { useParams, useRouter } from "next/navigation";

type ValidYears = "2023" | "2024";

const EthAccraTemplate = () => {
  const params = useParams();
  const router = useRouter();

  const pageViews = {
    "2023": <EthAccra2023 />,
  };

  const returnView = () => {
    const year: ValidYears = params?.year as ValidYears;
    // return pageViews[year || '2024'];
    return pageViews['2023']
  };

  const redirectToHome = () => {
    return router.push("/");
  };

  return <>{returnView() || <></>}</>;
};

export default EthAccraTemplate;
