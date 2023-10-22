import styled from "styled-components";

export const PageContainer = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  padding: 32px 0;
  display: ${(props) => (props.row ? "flex" : "")};
`;
