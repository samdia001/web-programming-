import { database } from '../models/db.mjs'

export const databaseController = {}

databaseController.connectDatabase = async () => {
  try {
    await database.connectDatabase()
  } catch (err) {
    console.log('Error connecting to MongoDB', err)
  }
}
