/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const publish = /* GraphQL */ `
  mutation Publish($message: String!, $name: String!) {
    publish(message: $message, name: $name) {
      message
      name
    }
  }
`;
export const publishFromBus = /* GraphQL */ `
  mutation PublishFromBus($message: String!, $name: String!) {
    publishFromBus(message: $message, name: $name) {
      message
      name
    }
  }
`;
export const unsubscribe = /* GraphQL */ `
  mutation Unsubscribe($name: String!) {
    unsubscribe(name: $name) {
      message
      name
    }
  }
`;
