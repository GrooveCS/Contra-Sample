import { GraphQLObjectType, GraphQLSchema, GraphQLString } from "graphql";

export const schema = new GraphQLSchema({
  query: new GraphQLObjectType({
    name: "Query",
    fields: () => ({
      hello: {
        type: GraphQLString,
        resolve: async (_root, _args, ctx) => {
          const { hello } = await ctx.db.get(`SELECT 'world' AS hello`);
          return hello;
        }
      }
    })
  })
});
