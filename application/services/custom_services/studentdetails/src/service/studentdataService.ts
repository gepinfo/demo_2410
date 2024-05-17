import { Request, Response } from 'express';
import {studentdataDao} from '../dao/studentdataDao';
import { CustomLogger } from '../config/Logger';
import * as jwt from 'jsonwebtoken';











let studentdata = new studentdataDao();

export class studentdataService {
    
    constructor() { }
    
    public  Delete(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into studentdataService.ts: Delete')
     let  studentdataId = req.params.id;
     studentdata.Delete(studentdataId,(response)=>{
             new CustomLogger().showLogger('info', 'Exit from studentdataService.ts: Delete')
             
             
            callback(response);

         });
    }
    
public  Update(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into studentdataService.ts: Update')
     let  studentdataData = req.body;
     studentdata.Update(studentdataData,(response)=>{
             new CustomLogger().showLogger('info', 'Exit from studentdataService.ts: Update')
             
             
            callback(response);

         });
    }
    
public  GetAllValues(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into studentdataService.ts: GetAllValues')
     
     studentdata.GetAllValues((response)=>{
             new CustomLogger().showLogger('info', 'Exit from studentdataService.ts: GetAllValues')
             
             
            callback(response);

         });
    }
    
public  Create(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into studentdataService.ts: Create')
     let  studentdataData = req.body;
     studentdata.Create(studentdataData,(response)=>{
             new CustomLogger().showLogger('info', 'Exit from studentdataService.ts: Create')
             
             
            callback(response);

         });
    }
    
public  GetNounCreatedBy(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into studentdataService.ts: GetNounCreatedBy')
     let  studentdataData = { created_by: req.query.createdby };
     studentdata.GetNounCreatedBy(studentdataData,(response)=>{
             new CustomLogger().showLogger('info', 'Exit from studentdataService.ts: GetNounCreatedBy')
             
             
            callback(response);

         });
    }
    
    
    
    
}