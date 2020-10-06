import { css } from 'emotion';

export const locationList = css`
  border-top: 1px solid #ccc;
  padding: 0;
`;

export const listItem = css`
  border-bottom: 1px solid #ccc;
  &:last-of-type {
    border-bottom: none;
  }
`;
