import * as mongoose from 'mongoose';
import studentdataModel from '../models/daomodels/studentdata';
import * as generate from 'nanoid/generate';
import * as dictionary from 'nanoid-dictionary';
import { CustomLogger } from '../config/Logger'




export class studentdataDao {
    private studentdata = studentdataModel;

    

    constructor() { }
    
    public async Delete(studentdataId, callback){
    
    new CustomLogger().showLogger('info', 'Enter into studentdataDao.ts: Delete');

    

    
    
    
    this.studentdata.findByIdAndRemove(studentdataId).then((result)	=>
     
             	{

        new CustomLogger().showLogger('info', 'Exit from studentdataDao.ts: Delete');

        

        
        
        callback(result);
}).catch((error)=>{
callback(error);
});}
public async Update(studentdataData, callback){
    
    new CustomLogger().showLogger('info', 'Enter into studentdataDao.ts: Update');

    

    
    
    
    this.studentdata.findOneAndUpdate({ _id: studentdataData._id }, studentdataData, { new: true }).then((result)	=>
     
             	{

        new CustomLogger().showLogger('info', 'Exit from studentdataDao.ts: Update');

        

        
        
        callback(result);
}).catch((error)=>{
callback(error);
});}
public async GetAllValues(callback){
    
    new CustomLogger().showLogger('info', 'Enter into studentdataDao.ts: GetAllValues');

    

    
    
    
    this.studentdata.find().then((result)	=>
     
             	{

        new CustomLogger().showLogger('info', 'Exit from studentdataDao.ts: GetAllValues');

        

        
        
        callback(result);
}).catch((error)=>{
callback(error);
});}
public async Create(studentdataData, callback){
    
    new CustomLogger().showLogger('info', 'Enter into studentdataDao.ts: Create');

    let temp = new studentdataModel(studentdataData);

    
    
    
    temp.save().then((result)	=>
     
             	{

        new CustomLogger().showLogger('info', 'Exit from studentdataDao.ts: Create');

        

        
        
        callback(result);
}).catch((error)=>{
callback(error);
});}
public async GetNounCreatedBy(studentdataData, callback){
    
    new CustomLogger().showLogger('info', 'Enter into studentdataDao.ts: GetNounCreatedBy');

    

    
    
    
    this.studentdata.aggregate(([
                        { $match: { $and: [{ created_by: studentdataData.created_by }] } }
                    ])).then((result)	=>
     
             	{

        new CustomLogger().showLogger('info', 'Exit from studentdataDao.ts: GetNounCreatedBy');

        

        
        
        callback(result);
}).catch((error)=>{
callback(error);
});}


}