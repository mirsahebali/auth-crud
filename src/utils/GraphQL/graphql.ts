import { gql } from 'graphql-request';
export const query = gql`
query data($slug: String!) {
   post(where: {slug: $slug}) {
     id
     title
     content
    slug
   }
 }
`;
export const removePost = gql`
mutation deletion($slug: String!) {
  deletePost(where: {slug: $slug}) {
    slug
  }
}
`

export const updatePost = gql`
  mutation UpdatePost($slug: String!, $title: String!, $content: String!) {
    updatePost(slug: $slug, title: $title, content: $content) {
      id
      title
      content
      slug
    }
  }
`;