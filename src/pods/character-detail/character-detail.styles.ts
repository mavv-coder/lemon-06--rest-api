import { css } from 'emotion';

export const mainContainer = css`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const link = css`
  text-decoration: none;
`;

export const goBackButton = css`
  background-color: #ff8887;
  &:hover {
    background-color: #c35355;
  }
`;
