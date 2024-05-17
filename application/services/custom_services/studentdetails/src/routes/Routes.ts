import { Request, Response, NextFunction } from "express";
import { studentdataController } from '../controller/studentdataController';


export class Routes {
    private studentdata: studentdataController = new studentdataController();
    
    public routes(app): void {
          app.route('/health/entity-service').get((req: Request, res: Response) => {
            res.status(200).send({
                status: 'up'
            })
        })
        app.route('/studentdata/:id').delete(this.studentdata.Delete);
app.route('/studentdata').put(this.studentdata.Update);
app.route('/studentdata').get(this.studentdata.GetAllValues);
app.route('/studentdata').post(this.studentdata.Create);
app.route('/studentdata/userid/created_by').get(this.studentdata.GetNounCreatedBy);
     }

}