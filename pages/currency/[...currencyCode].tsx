import { useRouter } from "next/router";
import Layout from "../../app/features/layout/Layout";
import NavbarComponent from "../../app/common/navbar";
import Rates from "../../app/features/rates/rates";

const currencyCode = () => {
  const router = useRouter();
  const { currencyCode } = router.query;

  return (
    <Layout>
      <NavbarComponent />
      <Rates currencyCode={currencyCode} />
    </Layout>
  );
};

export default currencyCode;
