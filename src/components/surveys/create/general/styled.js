import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  min-height: 100vh;
`;

export const Container2 = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;
export const Wrapper = styled.div`
  position: relative;
  width: 300px;
  height: 150px;
`;

export const DefaultImage = styled.div`
  position: absolute;
  background-color: gray;
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const Image = styled.img`
  position: absolute;
  background-color: gray;
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const UploadBtn = styled.label`
  cursor: pointer;
  z-index: 3;
  margin-top: -30px;
`;
