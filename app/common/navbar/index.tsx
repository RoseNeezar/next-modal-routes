import styled from "styled-components/native";
import Link from "next/link";

const NavBar = styled.View`
  height: 5rem;
  background-color: ${({ theme }) => theme.edit};
`;
const Text = styled.Text`
  font-size: 1.6rem;
  color: #fff;
`;

const NavbarComponent = () => {
  return (
    <NavBar>
      <Link href="/" passHref>
        <Text>Go Back</Text>
      </Link>
    </NavBar>
  );
};

export default NavbarComponent;
