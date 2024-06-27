const socketIo = require("socket.io");
const { CORS_ORIGIN } = require("../constants");
const { updateLike } = require("../routes/ctxtVoc");
let CORS_ORIGINS = CORS_ORIGIN.split(' ');

function connectSocket(server) {
    const io = socketIo(server, {
        pingTimeout: 600000,
        cors: {
            origin: CORS_ORIGINS
        }
    })

    io.on("connection", (socket) => {
        socket.on("setup", (userId) => { 
            socket.join(userId);
            socket.emit("connected");
        })
        
        socket.on("joinVocab", (data) => { 
            const { ctxId } = data;
            console.log("joinVocab", ctxId);
            socket.join(ctxId);
        })

        socket.on("leaveVocab", (data) => { 
            const { ctxId } = data;
            socket.leave(ctxId);
        })
        
        socket.on("updateVocabData", async (data) => { 
            const { ctxId } = data;
            socket.broadcast.to(ctxId).emit("updateVocabDataComplete",data);

            try{
                await updateLike(data);
            } catch (err) { 
                // throw error autoSaveException
            }
        })
    })
}

module.exports = { connectSocket }