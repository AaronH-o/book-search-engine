const typeDefs =`
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

input BookToSave {
  authors: [String]
  description: String
  bookId: String
  image: String
  link: String
  title: String
}

type Mutation {
  login(email: String!, password: String!): Auth
  addUser(username: String!, email: String!, password: String!): Auth
  saveBook(bookInput: BookToSave!): User
  removeBook(bookId: String!): User
}
`;

module.exports = typeDefs;