import { css } from 'emotion';

export const characterList = css`
  padding: 0;
  border-top: 1px solid #ccc;
`;

export const listItem = css`
  border-bottom: 1px solid #ccc;
  &:last-of-type {
    border-bottom: none;
  }
`;

export const detailLink = css`
  position: relative;
  display: inline-block;
  width: 2.7rem;
  height: 2.7rem;
  margin-top: 0.3rem;
  border-radius: 50%;
  background-color: #ccc;
  transition: all 0.1s ease-in-out;
  &:hover {
    background-color: #999;
  }
`;

export const detailIcon = css`
  position: absolute;
  top: 0.6rem;
  right: 0.6rem;
  color: black;
`;
