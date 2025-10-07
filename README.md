<<<<<<< HEAD
# PLP Bookstore MongoDB Scripts

## Overview

This project contains Node.js scripts to perform various MongoDB operations on a bookstore database, including querying, updating, deleting, aggregation, indexing, and performance analysis.

## Prerequisites

- **Node.js** installed on your machine
- **MongoDB** running locally (`mongodb://localhost:27017`)
- A database named `plp_bookstore` with a collection named `books`
- The required npm packages installed (`mongodb`, `dotenv`)

## Setup

1. **Clone or download this repository.**
2. **Install dependencies:**

   ```
   npm install mongodb dotenv
   ```

3. **Configure environment variables (optional):**
   - Create a `.env` file if you want to override the default MongoDB URI.

## Running the Script

1. Make sure your MongoDB server is running.
2. Run the script using Node.js:

   ```
   node queries.js
   ```

3. The script will:
   - Connect to your MongoDB database
   - Run various queries and aggregations
   - Create indexes and show performance improvements
   - Output results to the console

## Script Features

- **Basic Queries:** Find books, filter by author, genre, year, and stock status.
- **Update/Delete:** Update book price and delete by title.
- **Advanced Queries:** Projection, sorting, and pagination.
- **Aggregation:** Average price by genre, top author, books grouped by decade.
- **Indexing:** Create single and compound indexes, and use `explain()` for performance analysis.

## Notes

- Edit `queries.js` to change query parameters as needed.
- For best results, ensure your `books` collection has relevant sample data.













=======
# MongoDB Fundamentals - Week 1

## Setup Instructions

Before you begin this assignment, please make sure you have the following installed:

1. **MongoDB Community Edition** - [Installation Guide](https://www.mongodb.com/docs/manual/administration/install-community/)
2. **MongoDB Shell (mongosh)** - This is included with MongoDB Community Edition
3. **Node.js** - [Download here](https://nodejs.org/)

### Node.js Package Setup

Once you have Node.js installed, run the following commands in your assignment directory:

```bash
# Initialize a package.json file
npm init -y

# Install the MongoDB Node.js driver
npm install mongodb
```

## Assignment Overview

This week focuses on MongoDB fundamentals including:
- Creating and connecting to MongoDB databases
- CRUD operations (Create, Read, Update, Delete)
- MongoDB queries and filters
- Aggregation pipelines
- Indexing for performance

## Submission

Complete all the exercises in this assignment and push your code to GitHub using the provided GitHub Classroom link.

## Getting Started

1. Accept the GitHub Classroom assignment invitation
2. Clone your personal repository that was created by GitHub Classroom
3. Install MongoDB locally or set up a MongoDB Atlas account
4. Run the provided `insert_books.js` script to populate your database
5. Complete the tasks in the assignment document

## Files Included

- `Week1-Assignment.md`: Detailed assignment instructions
- `insert_books.js`: Script to populate your MongoDB database with sample book data

## Requirements

- Node.js (v18 or higher)
- MongoDB (local installation or Atlas account)
- MongoDB Shell (mongosh) or MongoDB Compass

## Resources

- [MongoDB Documentation](https://docs.mongodb.com/)
- [MongoDB University](https://university.mongodb.com/)
- [MongoDB Node.js Driver](https://mongodb.github.io/node-mongodb-native/) 
>>>>>>> 0fcd1a6b59e5934a6c57cfca568ccf5922ad1d48
