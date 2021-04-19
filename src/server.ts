import express from "express";

const app = express();

app.get("/", (request, response) => {
    return response.json({
        message: "Hello world!"
    });
});

app.post("/user", (request, response) => {
    return response.json({
        message: "User created successfully!"
    });
});



app.listen(3333, () => console.log("Server is running on port 3333"));

