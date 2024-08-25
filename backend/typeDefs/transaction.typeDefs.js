const transactionTypeDef = `#graphql
    type Transaction {
        id: ID!
        userId: ID!
        description: String!
        paymentType: String!
        category: String!
        amount: Float!
        location: String!
        date: String!
    }

    type Query {
        transactions: [Transaction!]
        transaction(transactionId: ID!): Transaction
    }

    type Mutation {
        createTransaction(input: CreateTransactionInput): Transaction!
        updateTransaction(input: UpdateTransactionInput): Transaction!
        deleteTransaction(input: DeleteTransactionInput): Transaction
    }

    input CreateTransactionInput {
        userId: ID!
        description: String!
        paymentType: String!
        category: String!
        amount: Float!
        location: String!
        date: String!
    }

    input UpdateTransactionInput {
        id: ID!
        userId: ID
        description: String
        paymentType: String
        category: String
        amount: Float
        location: String
        date: String
    }

    input DeleteTransactionInput {
        id: ID!
    }
`;

export default transactionTypeDef;
