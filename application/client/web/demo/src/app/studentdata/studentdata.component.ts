import { Component, OnInit, ViewChild } from '@angular/core';
import { StudentdataService } from './studentdata.service';





@Component({
  selector: 'app-studentdata',
  templateUrl: './studentdata.component.html',
  styleUrls: ['./studentdata.component.scss'],
})

export class StudentdataComponent implements OnInit {
    public studentdata:any = {
        created_date: '',
        created_by: '',
        last_modified_by: '',
        last_modified_date: '',
        name: '',
        age: '',
        cls: '',
    }




    constructor (
        private studentdataService: StudentdataService,
    ) { }

    ngOnInit() {
        this.studentdata.created_by = sessionStorage.getItem('email') || ''; 
        


    
    }



  modalpopup: boolean = false;
  Updatemodalpopup: boolean = false;
  show:any = -999;
  deleteshow:any;



  openModal() {
    this.modalpopup = true;
  }

  updateModelPopup(){
    this.Updatemodalpopup = true;
  }

  deleteShow(index:any){
    this.deleteshow = index;
  }

  deleteConfirm(data:any){
    this.Delete(data.id);
    this.deleteshow = -999
  }

}





