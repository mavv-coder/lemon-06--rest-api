import { css } from 'emotion';

export const flexContainer = css`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

export const collectionContainer = css`
  flex: 1;
  margin-right: 2rem;
  padding: 1rem;
  background-color: #eee;
  &:last-of-type {
    margin-right: 0;
  }
`;
