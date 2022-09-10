import gql from 'graphql-tag';

export default gql`
  query ($email: String!, $password: String!) {
    user(query: { email: $email, password: $password }) {
      _id
      firstName
      lastName
      email
      doc
      password
      birthday
      profileId
      createdAt
      updatedAt
      deletedAt {
        isDeleted
      }
    }
  }
`;
