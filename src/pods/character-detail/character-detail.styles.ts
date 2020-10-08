import { css } from 'emotion';

export const mainContainer = css`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const buttonLink = css`
  position: relative;
  display: inline-block;
  margin-left: 1rem;
  height: 2.7rem;
  width: 2.7rem;
  background-color: #eee;
  border-radius: 50%;
  transition: all 0.1s ease-in-out;
  &:hover {
    background-color: #ccc;
  }
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

export const card = css`
  display: flex;
  justify-content: space-between;
  margin-top: 2rem;
  padding: 2rem;
  width: 50rem;
  height: min-content;
  background-color: #eee;
  border-top-left-radius: 1rem;
  border-top-right-radius: 1rem;
`;

export const buttonIcon = css`
  position: absolute;
  top: 0.6rem;
  right: 0.6rem;
  color: #455073;
`;

export const textContainer = css`
  margin-left: 2rem;
  padding-left: 2rem;
  border-left: 1px solid #ccc;
  width: 100%;
`;

export const characterName = css`
  margin: 0;
  font-size: 1.4rem;
  font-weight: 400;
`;

export const image = css`
  border-radius: 1rem;
`;

export const cardContainer = css`
  width: 300px;
  margin: 0 auto;
`;

export const quote = css`
  margin: 0;
  font-size: 1.2rem;
  font-style: italic;
`;

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

export const iconContainer = css`
  display: flex;
  align-items: center;
`;

export const inputSearch = css`
  width: 100%;
  color: #455073;
  font-style: italic;
  padding: 0.1rem 1rem;
  border-radius: 0.5rem;
  background-color: white;
`;

export const updateButton = css`
  margin-left: 1rem;
  background-color: #eee;
  &:hover {
    background-color: #ccc;
  }
`;
