import styled from "styled-components/native";
import { observer } from "mobx-react-lite";
import Layout from "../app/features/layout/Layout";
import Link from "next/link";
import NavbarComponent from "../app/common/navbar";
import Modal from "react-modal";
import { useRouter } from "next/router";
import Rates from "../app/features/rates/rates";

Modal.setAppElement("#__next");

interface IStyle {
  ishover?: boolean;
}
const LayoutIndex = styled.View`
  background-color: ${({ theme }) => theme.delete};
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: auto;
`;

const Text = styled.Text`
  font-size: 2.6rem;
  background-color: ${(props: IStyle) => (props.ishover ? "purple" : "#39f")};
  cursor: pointer;
  color: ${({ theme }) => theme.primary};
`;

const currencies = ["CAD", "USD", "GBP", "MXN", "AUD", "EUR", "NOK"];

const index = () => {
  const router = useRouter();
  return (
    <Layout>
      <Modal
        isOpen={!!router.query.currencyCode}
        onRequestClose={() => router.back()}
      >
        <Rates currencyCode={router.query.currencyCode} />
      </Modal>
      <NavbarComponent />
      <LayoutIndex>
        <ul>
          {currencies.map((res, index) => (
            <li style={{ marginTop: "40rem" }} key={index}>
              <Link
                href={`?currencyCode=${res}`}
                as={`/currency/${res}`}
                passHref
              >
                <Text>{res}</Text>
              </Link>
            </li>
          ))}
        </ul>
      </LayoutIndex>
    </Layout>
  );
};
export default observer(index);
