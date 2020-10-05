import { css } from 'emotion';

export const flexContainer = css`
  margin-top: 2rem;
  margin-bottom: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Pagtext = css`
  margin: 0 3rem;
`;

export const iconBtn = css`
  display: inline-block;
  height: 3rem;
  width: 3rem;
  position: relative;
  background-color: #009a84;
  &:hover {
    background-color: #006553;
  }
  &:first-of-type {
  }
`;

export const prevIcon = css`
  position: absolute;
  left: 1rem;
  color: white;
`;

export const nextIcon = css`
  color: white;
`;
