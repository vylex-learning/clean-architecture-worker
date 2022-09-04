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
      userRole
      createdAt
      updatedAt
      deletedAt
    }
  }
`;
