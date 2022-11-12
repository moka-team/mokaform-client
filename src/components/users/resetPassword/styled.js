import styled from "styled-components";

const TimeMessage = styled.p`
  margin-left: 7px;
  margin-top: 1px;
  font-size: small;
  font-weight: 600;
  color: #0064ff;
  &.ok {
    color: #0064ff;
  }
  &.error {
    color: #ff2727;
  }
`;

const TextMessage = styled.p`
  margin-top: 1px;
  font-size: small;
  color: #0064ff;
  &.ok {
    color: #0064ff;
  }
  &.error {
    color: #ff2727;
  }
`;

export { TimeMessage, TextMessage };
