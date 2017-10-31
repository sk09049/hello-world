import {Component} from '@angular/core';
@Component({
  selector: 'app-tree',
  template: `<tree-root [nodes]="nodes"></tree-root>
  

  <button (click)="construct()">Click</button>
  `
})
export class TreeComponent {

     obj=[
{"id":1,"name":"RRbranch","orgid":"001001000000000","orglevel":"R"},
{"id":2,"name":"DDnorthbranch1","orgid":"001001001000000","orglevel":"D"},
{"id":3,"name":"AAnorthbranch12","orgid":"001001001001000","orglevel":"A"},
{"id":4,"name":"BBnorthchild1","orgid":"001001001001001","orglevel":"B"},
{"id":10,"name":"BBnorthchild2","orgid":"001001001001002","orglevel":"B"},
{"id":9,"name":"RRbranch2","orgid":"001002000000000","orglevel":"R"},
{"id":5,"name":"DDchild1","orgid":"001002001000000","orglevel":"D"},
{"id":6,"name":"RRbranch3","orgid":"001003000000000","orglevel":"R"},
{"id":7,"name":"DDchild2d","orgid":"001002002000000","orglevel":"D"},
{"id":11,"name":"AAchild2","orgid":"001002002001000","orglevel":"A"},
{"id":12,"name":"AAchild2","orgid":"001002002002000","orglevel":"A"},
{"id":13,"name":"BBchild2","orgid":"001002002002001","orglevel":"B"},

];

 mainar=[];
 construct  (){
for(var i=0;i<this.obj.length;i++){
if(this.obj[i].orglevel === 'R'){
let objtop = {
id : '',
name : '',
children : []
};
var orgid=this.obj[i].orgid.substring(0,6);
for(var j=0;j<this.obj.length;j++){
if(this.obj[j].orgid.substring(0,6) === orgid && this.obj[j].orglevel === 'D'){
let objnew = {
id : '',
name : '',
children : []
};
let orgidlvld=this.obj[j].orgid.substring(0,9);
for(var k=0;k<this.obj.length;k++){
if(orgidlvld === this.obj[k].orgid.substring(0,9) && this.obj[k].orglevel === 'A') {
let objofA = {
id : '',
name : '',
children : []
}
let orgidlvldB =this.obj[k].orgid.substring(0,12);
console.log(orgidlvldB);
for(var l=0;l<this.obj.length;l++){
if(orgidlvldB === this.obj[l].orgid.substring(0,12) && this.obj[l].orglevel === 'B'){
    console.log(true);
let objOfb ={
  id : '',
name : '',
children : []  
}
objOfb.id=''+this.obj[l].id;
objOfb.name=''+this.obj[l].name;
objofA.children.push(objOfb);
}
}

objofA.id = ''+this.obj[k].id;
objofA.name = ''+this.obj[k].name;
objnew.children.push(objofA);
}

 
}

objnew.id=''+this.obj[j].id;
objnew.name = this.obj[j].name;
objtop.children.push(objnew);
}
}
objtop.id=''+this.obj[i].id;
objtop.name=this.obj[i].name;

this.mainar.push(objtop);


}


}

console.log(this.mainar);

this.nodes =this.mainar;
 }



  nodes = [
    {
      id: 1,
      name: 'root1',
      children: [
        { id: 2, name: 'child1' },
        { id: 3, name: 'child2' }
      ]
    },
    {
      id: 4,
      name: 'root2',
      children: [
        { id: 5, name: 'child2.1' },
        {
          id: 6,
          name: 'child2.2',
          children: [
            { id: 7, name: 'subsub' }
          ]
        }
      ]
    }
  ];
}