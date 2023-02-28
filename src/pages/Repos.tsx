import {client} from "@/client"
import { gql } from "@apollo/client";

export const GET_REPOSITORY = gql`
  query getRepository($username: String!, $repository: String!) {
    repository(name: $repository, owner: $username) {
      url
      name
      description
    }
  }
`;
export async function getStaticProps() {
          const { data } = await client.query({
            query: GET_REPOSITORY,
            variables: {
              username: "mirsahebali",
              repository: "focace",
            },
          });
        
          return {
            props: {
              data,
            },
          };
        }

export default function Repos({data}: any) {

          console.log(data);
          
          return ( <div>
          </div> );
}
