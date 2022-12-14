import gql from 'graphql-tag';

export default gql`
  query findUserByEmailAndPassword($email: String!, $password: String!) {
    findUserByEmailAndPassword(email: $email, password: $password) {
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
      deletedAt
    }
  }
`;
