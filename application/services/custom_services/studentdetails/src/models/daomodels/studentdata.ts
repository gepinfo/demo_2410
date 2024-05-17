
import * as mongoose from 'mongoose';


const Schema = mongoose.Schema;

export const studentdataSchema = new Schema({
   created_date: { type: Date, default: Date.now },
   created_by: { type: String },
   last_modified_by: { type: String },
   last_modified_date: { type: Date, default: Date.now },
   name: { type: String },
   age: { type: Number },
   cls: { type: String }
})

const studentdataModel = mongoose.model('studentdata', studentdataSchema, 'studentdata');
export default studentdataModel;
