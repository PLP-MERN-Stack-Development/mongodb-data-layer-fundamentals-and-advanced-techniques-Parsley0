const { MongoClient } = require('mongodb');
require('dotenv').config();
const uri = 'mongodb://localhost:27017';
const dbName = 'plp_bookstore';
const collectionName = 'books';

const client = new MongoClient(uri);

async function runQueries() {
  try {
    await client.connect();
    console.log('Connected to MongoDB');
    const db = client.db(dbName);
    const books = db.collection(collectionName);

    // BASIC QUERIES
    // 1. Find all books:
   const allBooks = await books.find().toArray();
   console.log('All Books:', allBooks);
    
    // 2. Find books by a specific author:
    const orwellBooks = await books.find({ author: "George Orwell" }).toArray();
   console.log('Books by George Orwell:', orwellBooks);
    
    // 3. Find books published after 1950:
   const booksAfter1950 = await books.find({ published_year: { $gt: 1950 } }).toArray();
    console.log('Books published after 1950:', booksAfter1950);
    
    // 4. Find books in a specific genre:
   const fictionBooks = await books.find({ genre: "Fiction" }).toArray();
    console.log('Fiction Books:', fictionBooks);
    

    // 5. Find in-stock books:
    const inStockBooks = await books.find({ in_stock: true }).toArray();
    console.log('In-stock Books:', inStockBooks);
   
    

    // 6. Update the price of a specific book:
    const updateResult = await books.updateOne(
      { title: "To Kill a Mockingbird" }, 
      { $set: { price: 19.99 } } 
    );
    console.log('Update Result:', updateResult);

    // 7. Delete a book by its title:
    const deleteResult = await books.deleteOne(
      { title: "Wuthering Heights" } 
    );
    console.log('Delete Result:', deleteResult);
    
    // ADVANCED QUERIES
    
    // 8. Find books that are both in stock and published after 2010:
    const filter = { in_stock: true, published_year: { $gt: 2010 } };
    
    const booksFiltered = await books
    .find(filter)
    .toArray();
    console.log('Books in stock & published after 2010:', booksFiltered);
    // 9. Projection, sorting, and pagination for ALL books
    const allProjection = { title: 1, author: 1, price: 1, _id: 0 };
    
    
    // Ascending sort by price (all books)
    const allBooksAsc = await books
    .find({})
    .project(allProjection)
    .sort({ price: 1 })
    .toArray();
    console.log('All books sorted by price ascending:', allBooksAsc);
    
    // Descending sort by price (all books)
    const allBooksDesc = await books
    .find({})
    .project(allProjection)
    .sort({ price: -1 })
    .toArray();
    console.log('All books sorted by price descending:', allBooksDesc);
    
    
    // Pagination: 5 books per page, example for page 2 (all books)
    const page = 2;
    const pageSize = 5;
    const allBooksPage = await books
    .find({})
    .project(allProjection)
    .sort({ price: 1 })
    .skip((page - 1) * pageSize)
    .limit(pageSize)
    .toArray();
    console.log(`All books - Page ${page} (5 books per page, price ascending):`, allBooksPage);
    
    
    //AGGREGATION QUERIES
    // 10. Aggregation: Average price of books by genre
    const avgPriceByGenre = await books.aggregate([
        { $group: { _id: "$genre", averagePrice: { $avg: "$price" } } }
    ]).toArray();
    console.log('Average price of books by genre:', avgPriceByGenre);
    // 11. Aggregation: Author with the most books
    const topAuthor = await books.aggregate([
        { $group: { _id: "$author", count: { $sum: 1 } } },
        { $sort: { count: -1 } },
        { $limit: 1 }
    ]).toArray();
    console.log('Author with the most books:', topAuthor);
    // 12. Aggregation: Group books by publication decade and count them
    const booksByDecade = await books.aggregate([
        {
            $group: {
                _id: {
                    $concat: [
                        { $toString: { $multiply: [ { $floor: { $divide: ["$published_year", 10] } }, 10 ] } },
                        "s"
                    ]
                },
                count: { $sum: 1 }
            }
        }
    ]).toArray();
    console.log('Books grouped by publication decade:', booksByDecade);
    
    // 13. Create an index on the title field for faster searches
    await books.createIndex({ title: 1 });
    console.log('Index created on title field.');
    // 14. Create a compound index on author and published_year
    await books.createIndex({ author: 1, published_year: 1 });
    console.log('Compound index created on author and published_year.');
    
   
   // 15. Use explain() to demonstrate performance improvement
   // Before index (run this before creating the index for comparison)
    //const explainBefore = await books.find({ title: "1984" }).explain("executionStats");
    //console.log('Explain output before index:', explainBefore);
   
    // After index
    const explainAfter = await books.find({ title: "1984" }).explain("executionStats");
    console.log('Explain output after index:', explainAfter);
    
    
    // Compound index explain
    const compoundExplain = await books.find({ author: "George Orwell", published_year: 1949 }).explain("executionStats");
    console.log('Explain output for compound index:', compoundExplain);
    
  } catch (err) {
    console.error('Error occurred:', err);
  } finally {
    await client.close();
    console.log('Connection closed');
  }
}
runQueries();

