import { css } from 'emotion';

export const buttonLink = css`
  position: relative;
  display: inline-block;
  height: 2.7rem;
  width: 2.7rem;
  margin-top: 0.3rem;
  border-radius: 50%;
  background-color: #ccc;
  transition: all 0.1s ease-in-out;
  &:hover {
    background-color: #999;
  }
  &:disabled {
    background-color: #ccc;
  }
`;

export const buttonIcon = css`
  position: absolute;
  top: 0.6rem;
  right: 0.6rem;
  color: black;
`;

export const disabledIcon = css`
  position: absolute;
  top: 0.6rem;
  right: 0.6rem;
  color: #999;
`;
