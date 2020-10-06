import { css } from 'emotion';

export const listItem = css`
  border-bottom: 1px solid #ccc;
  &:last-of-type {
    border-bottom: none;
  }
`;

export const residentList = css`
  border-bottom: 1px solid #ccc;
`;

export const residentItem = css`
  color: #616161;
`;

export const residentTitle = css`
  font-size: 1rem;
  width: max-content;
  margin: 1rem 0 0 1rem;
  padding-bottom: 0.2rem;
  color: #616161;
  border-bottom: 1px solid #ff8887;
`;
