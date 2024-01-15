import React, { useState } from "react";
import styled from "styled-components";
import CalculatorSlider from "./CalculatorSlider";
import Modal from "./Modal";

export default function SimulateCredit() {
  const [totalAmount, setTotalAmount] = useState(19500);
  const [term, setTerm] = useState(16);
  const [isModalOpen, setModalOpen] = useState(false);
  const [modalText, setModalText] = useState();

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };
  const handleModal = (text) => {
    setModalText(text);
    openModal();
  };

  return (
    <>
      <Container>
        <InnerContainer>
          <Title>Simulá tu crédito</Title>
          <SliderContainer>
            <CalculatorSlider
              title={"MONTO TOTAL"}
              min={5000}
              max={50000}
              currency={true}
              value={totalAmount}
              onUpdateValue={setTotalAmount}
            />
            <CalculatorSlider
              title={"PLAZO"}
              min={3}
              max={24}
              value={term}
              onUpdateValue={setTerm}
            />
          </SliderContainer>
          <MonthlyPaymentTotal>
            <span style={{ fontSize: "12px" }}>CUOTA FIJA POR MES</span>
            <TotalNumber>$ {(totalAmount / term).toFixed(2)}</TotalNumber>
          </MonthlyPaymentTotal>
          <FlexRow>
            <ObtainCreditBtn
              onClick={() => handleModal("¡Crédito solicitado con éxito!")}
            >
              OBTENÉ CRÉDITO
            </ObtainCreditBtn>
            <DetailsBtn
              onClick={() =>
                handleModal(
                  `Tiene que abonar cuotas mensuales de $${(
                    totalAmount / term
                  ).toFixed(2)} por un total de ${term} meses.`
                )
              }
            >
              VER DETALLE DE CUOTAS
            </DetailsBtn>
          </FlexRow>
        </InnerContainer>
      </Container>
      <div>
        <Modal isOpen={isModalOpen} onClose={closeModal}>
          <ModalText>{modalText}</ModalText>
        </Modal>
      </div>
    </>
  );
}

const Container = styled.div`
  background: ${(props) => props.theme.primaryAccent};
  width: 500px;
  height: 500px;
  padding: 48px 48px 0 48px;
  display: flex;
  box-shadow: 1px 1px 20px #ffffff1a;
`;

const InnerContainer = styled.div`
  background: linear-gradient(
    ${(props) => props.theme.primary} 0%,
    ${(props) => props.theme.primary} 90%,
    transparent 100%
  );
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 12px 40px;
`;
const Title = styled.h1`
  font-size: 20px;
  margin-bottom: 36px;
`;
const MonthlyPaymentTotal = styled.div`
  background: ${(props) => props.theme.primaryDark};
  padding: 4px 16px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-weight: bold;
  width: 100%;
`;
const TotalNumber = styled.span`
  font-size: 24px;
`;
const FlexRow = styled.div`
  display: flex;
  justify-content: start;
  width: 100%;
  gap: 8px;
`;
const ObtainCreditBtn = styled.button`
  background-color: ${(props) => props.theme.secondary};
  border-radius: 0;
  flex: 2;
  font-weight: bold;
`;
const DetailsBtn = styled.button`
  background-color: ${(props) => props.theme.primaryAccent};
  border-radius: 0;
  flex: 1;
  font-size: 9px;
  padding: 0px 0;
  font-weight: 700;
  padding: 4px;
`;

const SliderContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 36px;
  margin-bottom: 40px;
`;
const ModalText = styled.div`
  color: black;
`;
