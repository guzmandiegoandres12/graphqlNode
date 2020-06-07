const conectionDb = require('../lib/db')
const {ObjectID} = require('mongodb')

module.exports={
  createCourse: async (root,{ input }) => {
    try {
      const defaults = {
        theacher: "",
        topic:""
      }
      const conection =await conectionDb()
      const course = await  conection.collection('courses').insertOne({...defaults,...input})
      input._id=course.insertedId
    } catch (error) {
      console.log(error);
      process.exit(1)
    }
    return input
  }
}