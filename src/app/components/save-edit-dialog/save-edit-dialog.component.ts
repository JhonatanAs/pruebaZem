import { Component, OnInit } from '@angular/core';
import { Item } from 'src/app/models/item';
import { DynamicDialogConfig, DynamicDialogRef } from 'primeng/dynamicdialog';
import { DataServiceService } from '../../services/data-service.service';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-save-edit-dialog',
  templateUrl: './save-edit-dialog.component.html',
  styleUrls: ['./save-edit-dialog.component.css']
})
export class SaveEditDialogComponent implements OnInit {

  item : Item ;
  visible = true;
  save: boolean;
  config_data : Item;
  index: number;
 
  constructor(public ref: DynamicDialogRef, public config: DynamicDialogConfig,
    private messageService:MessageService) {
    this.config_data = config.data.item;
    
   }

  ngOnInit(): void {
    this.item = {
			_about: this.config_data._about,
			accessURL: this.config_data.accessURL,
			title: this.config.data.item.title
    };
    this.index = this.config.data.index;
    this.save=false;
  }

  hideDialog() {
    
    this.ref.close();
  }
  saveItem(){
    this.save=true;
    if(this.item.title.length ==0  || this.item.accessURL.length==0 || this.item._about.length==0){
      this.messageService.add({key: 'tc', severity:'error', summary: 'Error', detail: 'All fields are required'});
    }
    else{
      
      let res_close= {
        item :this.item,
        index:this.index
      }
      
      this.ref.close(res_close);
      
    }
  }
}
