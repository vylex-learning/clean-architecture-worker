import gql from 'graphql-tag';

export default gql`
  query allContacts {
    allContacts {
      data {
        fulltName
        email
        message
        createdAt
      }
    }
  }
`;
