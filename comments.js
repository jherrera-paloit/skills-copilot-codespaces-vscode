// Create web server
// 1. Create a web server
// 2. Create a route for the path /comments
// 3. Return a JSON object with the following data:
// {
//     comments: [
//         {
//             id: 1,
//             body: "This is a comment"
//         },
//         {
//             id: 2,
//             body: "This is another comment"
//         }
//     ]
// }

// 1. Create a web server
const express = require('express');
const app = express();

// 2. Create a route for the path /comments
app.get('/comments', (req, res) => {
    // 3. Return a JSON object with the following data
    res.json({
        comments: [
            {
                id: 1,
                body: "This is a comment"
            },
            {
                id: 2,
                body: "This is another comment"
            }
        ]
    });
});

// Start the server
app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});

// Test the server by running the following command in the terminal:
// curl http://localhost:3000/comments

// Output:
// {"comments":[{"id":1,"body":"This is a comment"},{"id":2,"body":"This is another comment"}]}