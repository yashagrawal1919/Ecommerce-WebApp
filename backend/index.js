import 'dotenv/config'
import connectDB from './db'
import { app } from './app'

const PORT = process.env.NODE_SERVER_PORT || 4000

    ; (async () => {
        try {
            await connectDB();
            app.listen(PORT, () => {
                console.log(`Server running on port ${PORT}`)
            })
        } catch (err) {
            console.log("MONGO db connection failed !!! ", err);
        }
    })()