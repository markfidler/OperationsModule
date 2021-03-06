import {
  GraphQLString,
  GraphQLInt,
  GraphQLInputObjectType,
  GraphQLBoolean,
  GraphQLNonNull
} from 'graphql';

const Type = new GraphQLInputObjectType({
  name: 'CloneInput',
  description: 'Payload for clone input',
  fields: () => ({
    teamId: { type: new GraphQLNonNull(GraphQLString) },
    botId: { type: new GraphQLNonNull(GraphQLString) },
    mode: { type: GraphQLString },
    resumeExecution: { type: GraphQLBoolean },
    beginDatetime: { type: GraphQLInt },
    endDatetime: { type: GraphQLInt },
    waitTime: { type: GraphQLInt },
    runAsTeam: { type: GraphQLBoolean },
    startYear: { type: GraphQLInt },
    endYear: { type: GraphQLInt },
    month: { type: GraphQLInt },
    interval: { type: GraphQLInt },
    processName: { type: new GraphQLNonNull(GraphQLString) },
    botType: { type: new GraphQLNonNull(GraphQLString) }
    })
});

export default Type;
