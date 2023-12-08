import express from 'express'; // Step 1
import { createServer } from 'node:http'; // Step 2
import path from 'path'; //Step 2
import {Server} from 'socket.io'; // Step 3
// Step 7
import sqlite3 from 'sqlite3'; 
import { open } from 'sqlite';

//open the database file
const db = await open({
    filename: 'chat.db',
    driver: sqlite3.Database
});

// Create our 'messages' table (you can ignore the 'client_offset' column for now)
await db.exec(`
    CREATE TABLE IF NOT EXISTS messages (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        client_offset TEXT UNIQUE,
        content TEXT
    );
`)
// End of step 7

const app = express(); // Step 1
const server = createServer(app); // Step 1
const io = new Server(server);


app.get('/', (req, res) => { // Step 1
    // res.sendFile(new URL('./index.html', import.meta.url).pathname); // This didn't work for some reason (file not found)
    const filePath = path.resolve('./index.html'); // Step 2
    res.sendFile(filePath); // Step 2
});

io.on('connection', (socket) => { // Step 3
    console.log('a user connected');
    socket.on('disconnect', () => {
        console.log('user disconnect');
    });
    socket.on('chat message', async (msg, clientOffset, callback) => { // Step 4
        // socket.broadcast.emit('chat message', msg); // Broadcast the message to all connected clients except the sender
        
        //Step 7
        let result;
        try {
            // store the message in the database
            result = await db.run('INSERT INTO messages (content, client_offsest) VALUES (?,?)', msg, clientOffset);
        } catch (e) {
            if (e.errno === 19 /*SQLITE_CONSTRIANT */) {
                // the message was already inserted, so we notify the client
                callback();
            } else {
                // nothing to do, just let the client retry
            }
            return;
        }
            // TODO handle the failure
        io.emit('chat message', msg, result.lastID);
        callback();
        // console.log("Error writing to database.")
        return;
        //Step 7 ends here
        // io.emit('chat message', msg, result.lastID); // Send the message to all connected clients including the sender
        //result.lastID parameter was added at Step 7
        if (!socket.recovered) {
            // if the connection state recovery was not successful
            try {
                await db.each('SELECT id, content FROM messages WHERE id > ?',
                  [socket.handshake.auth.serverOffset || 0],
                  (_err, row) => {
                    socket.emit('chat message', row.content, row.id);
                  }
                )
              } catch (e) {
                // something went wrong
                console.log("Couldn't recover old messages")
              }
            }
    });
})

server.listen(3000, () => { // Step 1
    console.log('server running at http://localhost:3000');
})