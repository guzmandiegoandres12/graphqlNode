const conectionDb = require('../lib/db')
const {ObjectID} = require('mongodb')

module.exports =  {
  getCourses:async() => {
    try {
      const conection =await conectionDb()
      const courses = await  conection.collection('courses').find({}).toArray()
      return courses
    } catch (error) {
      console.log(error);
      process.exit(1)
    }
  },
  getCourse: async (root, {id}) => {
    
    try {
      const conection =await conectionDb()
      const courses = await  conection.collection('courses').findOne({_id:ObjectID(id)})
      return courses
    } catch (error) {
      console.log(error);
      process.exit(1)
    }
  },
}