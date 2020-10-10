import { gql } from 'graphql-request';

export const characterQuery = (id: string) => {
  return gql`
    query {
    character(id: "${id}"){
        id
        name
        image
        species
        origin {
        name
        }
        location{
        name
        }
        gender
        status
    }	
  }`;
};
