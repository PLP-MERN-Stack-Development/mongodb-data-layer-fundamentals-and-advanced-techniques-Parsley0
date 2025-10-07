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

