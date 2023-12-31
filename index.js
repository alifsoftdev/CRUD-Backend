const express = require('express')
const app = express()
const port = 3000

const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://alifsoftdev:mongodb123456@cluster0.z2thmws.mongodb.net/?retryWrites=true&w=majority";

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();

    const profileCollection = client.db("Profile").collection("friendList")

    app.get("/api/v1/friendlist",async(req,res)=>{
        const result = await profileCollection.find().toArray()
        res.send(result)
    })
    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    // Ensures that the client will close when you finish/error
    //await client.close();
  }
}
run().catch(console.dir);

app.get('/', (req, res) => {
  res.send('<h1>Hello India</h1>')
})
app.get('/login',(req,res)=>{
    res.send("Login page")
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

//array of object : [{}]

// Document of Collection : [{}]

//friendList