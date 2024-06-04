const tpyeDefs =`
type User {
  _id: ID
  username: String
  email: String
  bookCount: Int
  savedBooks: [Book]
}

type Book {
  _id: ID
  authors: [String]
  description: String
  bookId: String
  image: String
  link: String
  title: String
}

type Auth {
  token: ID!
  user: User
}

type Query {
  me: User
}

type Mutation {
  login(email: String!, password: String!): Auth
  addUser(username: String!, email: String!, password: String!): Auth
  savedBook(authors: [String], description: String, title: String, bookId: String, image: String, link: String): User
  removeBook(bookId: String!): User
}
`;

module.exports = typeDefs;