import gql from 'graphql-tag';

export default gql`
  query findUserByEmail($email: String!) {
    findUserByEmail(email: $email) {
      firstName
      email
      password
    }
  }
`;
