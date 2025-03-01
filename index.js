

const { MongoClient } = require('mongodb');

async function main() {
    const uri = "mongodb+srv://bgoff4:Ragwmgcrg2912*1@doggierescue.tadp4.mongodb.net/?retryWrites=true&w=majority&appName=DoggieRescue";    
 const client = new MongoClient(uri);

    try {
        await client.connect();
        console.log("Connected to MongoDB");
        // Add your database operations here
    } catch (e) {
        console.error(e);
    } finally {
        await client.close();
    }
}

main().catch(console.error);

