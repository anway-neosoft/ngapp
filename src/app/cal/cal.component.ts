import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cal',
  templateUrl: './cal.component.html',
  styleUrls: ['./cal.component.css']
})
export class CalComponent implements OnInit {
	public num:string = '';
	public oldNum:number = 0;
	public flags = {add:false,sub:false,mul:false,div:false};
	public state:boolean = false;
  constructor() { }

  append_num(digit:string){
  	this.num = ""+this.num + digit;
  }
  decimal(){
  	
  	if(this.num.indexOf('.')==-1){
  		this.num = this.num + '.';
  	}
  }
 
  res(operation:string){
    var total = 0;
  	if(operation!= undefined && this.state == false){
  		this.oldNum = parseFloat(this.num);
  		this.num = '';
  		this.state =true;
  	}else{
  		if(this.flags.add){
  			total = parseFloat(this.num) + this.oldNum;
        this.num = total.toString();
  			this.flags.add =false;
  		}

  		if(this.flags.sub){
  			total = this.oldNum -parseFloat(this.num);
        this.num = total.toString();
  			this.flags.sub =false;
  		}

  		if(this.flags.mul){
  			total = parseFloat(this.num) * this.oldNum;
        this.num = total.toString();
  			this.flags.mul =false;
  		}

  		if(this.flags.div){
  			total = this.oldNum/parseFloat(this.num);
        this.num = total.toString();
  			this.flags.div =false;
  		}
  		this.oldNum = 0;
  		this.state = false;

  	}
  	if(operation!=''){
  		this.flags[operation] = true;
  	}
  
  }
  clr(){
  	this.num = '';
  	this.oldNum = 0;
  	this.flags = {add:false,sub:false,mul:false,div:false};
	this.state= false;
  }


  ngOnInit() {
  }

}
