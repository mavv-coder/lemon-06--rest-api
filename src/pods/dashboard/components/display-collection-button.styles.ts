import { css } from 'emotion';

export const btnContainer = css`
  width: 100%;
  display: flex;
  justify-content: center;
  margin-bottom: 2rem;
`;

export const showBtn = css`
  background-color: #009a84;
  &:hover {
    background-color: #006553;
  }
`;

export const hideBtn = css`
  background-color: #ff8887;
  &:hover {
    background-color: #c35355;
  }
`;
