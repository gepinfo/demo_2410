import { Request, Response } from 'express';
import { studentdataService } from '../service/studentdataService';
import { CustomLogger } from '../config/Logger'
let studentdata = new studentdataService();

export class studentdataController {
    
    constructor() { }
    
    public Delete(req: Request, res: Response) {
    new CustomLogger().guidLog(req);
    
    studentdata.Delete(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into studentdataController.ts: Delete');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from studentdataController.ts: Delete');
    })}
public Update(req: Request, res: Response) {
    new CustomLogger().guidLog(req);
    
    studentdata.Update(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into studentdataController.ts: Update');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from studentdataController.ts: Update');
    })}
public GetAllValues(req: Request, res: Response) {
    new CustomLogger().guidLog(req);
    
    studentdata.GetAllValues(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into studentdataController.ts: GetAllValues');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from studentdataController.ts: GetAllValues');
    })}
public Create(req: Request, res: Response) {
    new CustomLogger().guidLog(req);
    
    studentdata.Create(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into studentdataController.ts: Create');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from studentdataController.ts: Create');
    })}
public GetNounCreatedBy(req: Request, res: Response) {
    new CustomLogger().guidLog(req);
    
    studentdata.GetNounCreatedBy(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into studentdataController.ts: GetNounCreatedBy');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from studentdataController.ts: GetNounCreatedBy');
    })}


}