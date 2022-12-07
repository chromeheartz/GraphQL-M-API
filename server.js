import { ApolloServer, gql } from "apollo-server";
import fetch from "node-fetch";

let tweets = [
  {
    id: "1",
    text: "first one",
    userId: "2",
  },
  {
    id: "2",
    text: "second one",
    userId: "1",
  },
];

let users = [
  {
    id: "1",
    firstName: "bucky",
    lastName: "barnes",
  },
  {
    id: "2",
    firstName: "nico",
    lastName: "nomad",
  },
];

const typeDefs = gql`
  type User {
    id: ID!
    firstName: String!
    lastName: String!
    """
    Is the sum of firstName + lastName as a string
    """
    fullName: String!
  }
  """
  Tweet object represents a resource for a Tweet
  """
  type Tweet {
    id: ID!
    text: String!
    author: User
  }
  type Query {
    allMovies: [Movie!]!
    allUsers: [User!]!
    allTweets: [Tweet!]!
    tweet(id: ID!): Tweet
    ping: String!
    movie(id: String!): Movie 
  }
  type Mutation {
    postTweet(text: String!, userId: ID!): Tweet!
    """
    Deletes a Tweet if found, else returns false
    """
    deleteTweet(id: ID!): Boolean!
  }
  type Movie {
    id: Int!
    url: String
    imdb_code: String!
    title: String!
    title_english: String!
    title_long: String!
    slug: String!
    year: Int!
    rating: Float!
    runtime: Float!
    genres: [String]!
    summary: String
    description_full: String!
    synopsis: String
    yt_trailer_code: String!
    language: String!
    mpa_rating: String!
    background_image: String!
    background_image_original: String!
    small_cover_image: String!
    medium_cover_image: String!
    large_cover_image: String!
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
      console.log("allUsers called");
      return users;
    },
    allMovies() {
      return fetch("https://yts.mx/api/v2/list_movies.json")
      .then(res => res.json())
      .then(json => json.data.movies)
    },
    movie(_, {id}) {
      return fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
      .then(res => res.json())
      .then(json => json.data.movie)
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
        userId,
      };
      tweets.push(newTweet);
      return newTweet;
    },
    deleteTweet(_, { id }) {
      const tweet = tweets.find(tweet => tweet.id === id);
      if (!tweet) return false;
      tweets = tweets.filter(tweet => tweet.id !== id);
      return true;
    },
  },
  User: {
    // 아무것도 하지않을때랑 같음
    // firstName({ firstName }) {
    //   return firstName
    // },
    fullName({ firstName, lastName }, args) {
      console.log("fullName called");
      return `${firstName} ${lastName}`;
    },
  },
  Tweet: {
    author({ userId }) {
      return users.find(user => user.id === userId);
    },
  },
};
const server = new ApolloServer({ typeDefs, resolvers });

server.listen().then(({ url }) => {
  console.log(`Running on ${url}`);
});
