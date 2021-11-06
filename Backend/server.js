const  express = require("express")
const app = express()
const port = 3002

app.get("/", (req, res)=>{
    const itemDescription = {"Brand":"Nike", "Size":"S", "Price":"£3.00"}
    res.send(JSON.stringify(itemDescription));
})

app.listen(port, ()=>{
    console.log(`Server connected! at http://localhost:${port}`)
})