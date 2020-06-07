const MongoClient = require('mongodb').MongoClient;
const {
  DB_USER,
  DB_PASSWD,
  DB_PORT,
  DB_NAME
} = process.env

const uri = `mongodb+srv://${DB_USER}:${DB_PASSWD}@cluster0-kix2f.mongodb.net/${DB_NAME}?retryWrites=true&w=majority`;
let conection
const conect = async () =>{
  if(conection){
    return conection
  }
  try {
    const client = await MongoClient.connect(uri,{
      useNewUrlParser:true,
      useUnifiedTopology: true,
    })
    conection = client.db(DB_NAME)
  } catch (error) {
    console.log(error);
    process.exit(1)
  }
    return conection
  

} 
module.exports = conect