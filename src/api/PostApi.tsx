import { GraphQLClient, gql } from 'graphql-request'
import { Post } from "./Types";

const client = new GraphQLClient('http://localhost:8080/graphql')

async function createPost(name: string): Promise<Post> {
    const query = `
     mutation MyMutation { 
        createPost(name: "${name}") {
             id
             categoryId
             header
             content
             view
            }
        }
    `;

    const data = await client.request(query);
    debugger;
    return (data as Post);
}

export { createPost };

