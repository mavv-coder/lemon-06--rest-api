import { css } from 'emotion';

export const flexContainer = css`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

export const btnContainer = css`
  flex: 1;
  margin-right: 2rem;

  &:last-of-type {
    margin-right: 0;
  }
`;

export const collectionContainer = css`
  padding: 1rem;
  background-color: #eee;
`;
