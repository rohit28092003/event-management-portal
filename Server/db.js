const express = require("express");
const { MongoClient } = require("mongodb");

// Replace the uri string with your connection string.

const client = new MongoClient(process.env.URI);

function connect() {
    client.connect()
        .then(() => console.log('Connected Successfully To Database'))
        .catch(error => console.log('Failed to connect', error))
}
function disconnect() {
    client.close();
    console.log("DataBase Disconnecteed");
}
module.exports = { connect, disconnect };   