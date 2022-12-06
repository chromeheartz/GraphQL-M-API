import { ApolloServer, gql } from "apollo-server";

let tweets = [
  {
    id: "1",
    text: "first one",
  },
  {
    id: "2",
    text: "second one",
  },
];

let users = [
  {
    id: "1",
    firstName: "bucky",
    lastName: "barnes"
  },
  {
    id: "2",
    firstName: "nico",
    lastName: "nomad"
  }
]

const typeDefs = gql`
  type User {
    id: ID!
    firstName: String!
    lastName: String!
    fullName: String!
  }
  type Tweet {
    id: ID!
    text: String!
    author: User
  }
  type Query {
    allUsers: [User!]!
    allTweets: [Tweet!]!
    tweet(id: ID!): Tweet
    ping: String!
  }
  type Mutation {
    postTweet(text: String!, userId: ID!): Tweet!
    deleteTweet(id: ID!): Boolean!
  }
`;

const resolvers = {
  Query: {
    allTweets() {
      return tweets;
    },
    tweet(_, { id }) {
      // console.log(id)
      return tweets.find(tweet => tweet.id === id);
    },
    allUsers() {
      console.log('allUsers called')
      return users
    },
    ping() {
      return "Pong";
    },
  },
  Mutation: {
    postTweet(_, { text, userId }) {
      // 그냥 javascript로 database를 구현한것 뿐
      const newTweet = {
        id: tweets.length + 1,
        text,
      };
      tweets.push(newTweet);
      return newTweet
    },
    deleteTweet(_, { id }) {
      const tweet = tweets.find(tweet => tweet.id === id)
      if (!tweet) return false;
      tweets = tweets.filter(tweet => tweet.id !== id)
      return true;
    }
  },
  User: {
    fullName({firstName, lastName}, args) {
      console.log('fullName called')
      return `${firstName} ${lastName}`
    }
  }
};
const server = new ApolloServer({ typeDefs, resolvers });

server.listen().then(({ url }) => {
  console.log(`Running on ${url}`);
});
