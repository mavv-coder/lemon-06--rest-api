import { css } from 'emotion';

export const quoteContainer = css`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 50rem;
  padding: 2rem;
  color: white;
  background-color: #999;
  border-bottom-left-radius: 1rem;
  border-bottom-right-radius: 1rem;
`;

export const quote = css`
  margin: 0;
  font-size: 1.2rem;
  font-style: italic;
`;

export const editButton = css`
  width: 2.7rem;
  height: 2.7rem;
  margin-left: 1rem;
  border-radius: 50%;
  background-color: #eee;
  transition: all 0.1s ease-in-out;
  &:hover {
    background-color: #ccc;
  }
  &:disabled {
    background-color: #ccc;
  }
`;

export const editIcon = css`
  position: absolute;
  top: 0.6rem;
  right: 0.6rem;
  color: #455073;
`;

export const addIcon = css`
  position: absolute;
  top: 0.6rem;
  right: 0.6rem;
  color: #009a84;
  &:disabled {
    color: #999;
  }
`;

export const disabledIcon = css`
  position: absolute;
  top: 0.6rem;
  right: 0.6rem;
  color: #999;
`;

export const deleteIcon = css`
  position: absolute;
  top: 0.6rem;
  right: 0.6rem;
  color: #c35355;
`;

export const iconContainer = css`
  display: flex;
  align-items: center;
`;

export const updateInput = css`
  width: 100%;
  padding: 0.1rem 1rem;
  font-style: italic;
  color: #455073;
  background-color: white;
  border-radius: 0.5rem;
`;
