const path = require(`path`);

// Base file name (Basename)
console.log(path.basename(__filename));

// Directory name
console.log(path.dirname(__filename));

// File extension
console.log(path.extname(__filename));

// Create path object
console.log(path.parse(__filename).base);

// Concatenate paths, this works really well when you have issues with delimiters
//../test/hello.html
console.log(path.join(__dirname, "test", "hello.html"));
