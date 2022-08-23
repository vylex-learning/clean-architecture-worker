import gql from 'graphql-tag';

export default gql`
  mutation createContact($contact: ContactInput!) {
    createContact(data: $contact) {
      fullName
      email
      message
      createdAt
    }
  }
`;
