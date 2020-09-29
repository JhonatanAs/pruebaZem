import { Component, OnInit } from '@angular/core';
import { Item } from 'src/app/models/item';
import { DataServiceService } from '../../services/data-service.service';
import {DialogService} from 'primeng/dynamicdialog';
import {DynamicDialogRef} from 'primeng/dynamicdialog';
import { ConfirmationService, MessageService } from 'primeng/api';
import { SaveEditDialogComponent } from '../save-edit-dialog/save-edit-dialog.component';


@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.css'],
  providers:[DialogService]
})
export class PrincipalComponent implements OnInit {
  item :Item;
  items: Item[];

  first = 0;

  rows = 5;

  

  constructor(private data_service: DataServiceService,public dialogService: DialogService,
    private messageService: MessageService,private confirmationService: ConfirmationService ) { }
     
  selectedItem:Item;

  ngOnInit() {
      this.data_service.get_data_url().subscribe(
        res => {
          if(res){
            
            this.items = res.result.items;
            console.log(this.items);
            
          }
          
        }
      );

  }

  next() {
      this.first = this.first + this.rows;
  }

  prev() {
      this.first = this.first - this.rows;
  }

  reset() {
      this.first = 0;
  }

  isLastPage(): boolean {
      return this.items ? this.first === (this.items.length - this.rows): true;
  }

  isFirstPage(): boolean {
      return this.items ? this.first === 0 : true;
  }

  editItem(item:Item){
    const ref = this.dialogService.open(SaveEditDialogComponent, {
			header: 'Edit Item',
      width: '20%',
      
			data: {
        item: item,
        index : this.items.indexOf(item)
				
			}
		});

		ref.onClose.subscribe((e_item: any) => {
      
			if (e_item) {
        
        this.edit(e_item.item,e_item.index);
       // this.items = [...this.items];
        
      }
      
		});
  }
  
  addItem() {
		
		const ref = this.dialogService.open(SaveEditDialogComponent, {
			header: 'New Item',
      width: '400px',
      
			data: {
				item: {
          title: "",
         _about:"",
         accessURL:""
        },
				
			}
		});

		ref.onClose.subscribe((item: any) => {
      
			if (item) {
        
        this.items.push(item.item);
        this.items = [...this.items];
        
      }
      
		});
  }
  deleteItem(item: Item) {
    console.log("con");
    this.confirmationService.confirm({
        message: 'Are you sure you want to delete ' + item.title + '?',
        header: 'Confirm',
        icon: 'pi pi-exclamation-triangle',
        accept: () => {
            this.items = this.items.filter(val => val.title !== item.title);
            this.item = {};
            this.messageService.add({severity:'success', summary: 'Successful', detail: 'Item Deleted', life: 3000});
        }
    });
  }
  edit(itm, index ){
    this.items.forEach(element => {
      if(this.items.indexOf(element)== index){
        element.title = itm.title;
        element._about = itm._about;
        element.accessURL = itm.accessURL;
      }
    });
    this.messageService.add({key: 'tc', severity:'success', summary: 'Successful', detail: 'Item edited'});
  }
  
}
