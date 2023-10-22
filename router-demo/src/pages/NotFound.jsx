import React from "react";
import { PageContainer } from "../styles/PageContainer";
import { useNavigate } from "react-router-dom";
export default function NotFound() {
  const navigate = useNavigate();
  return (
    <PageContainer>
      404
      <button onClick={() => navigate("/")}>홈</button>
    </PageContainer>
  );
}
