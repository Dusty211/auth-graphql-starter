const graphql = require('graphql');
const {
    GraphQLObjectType,
    GraphQLString
} = graphql;

const UserType = new GraphQLObject({
    name: 'UserType',
    fields: {
        email: { type: GraphQLString }
    }
});

module.exports = UserType;