// import { stockService } from "../Stock/StockService";

class CarriageInward{
Data:any=[]

Add(data:any){
    let index=-1;
    for(let i=0;i<this.Data.length;i++){
        if(this.Data[i].id===data.id){
            index=i;
            break;
        }
    }
    if(index!==-1){
        this.Data[index]=data;
    }
    else{
    this.Data.push(data);
    }
    this.SetData();

}

SetData(){
    localStorage.setItem("carriageInwardArr",JSON.stringify(this.Data));
}
GetData(){

    const stored=localStorage.getItem("carriageInwardArr");
    if(stored){
        this.Data=JSON.parse(stored);
    }
    return this.Data;
}

Delete(pro:any){
    let index=-1
    let Data=this.Data;

    for(let i=0;i<Data.length;i++){
        if(this.Data[i].id===pro.id){
            index=i;
            break;
        }
    }
    if(index!==-1){
        Data.splice(index,1);
    }
    this.SetData();
    
    
}
GetById(ID:any){
    let index=-1;
    let Data=this.Data;

    for(let i=0;i<Data.length;i++){
        if(this.Data[i].id===ID){
            index=i;
            break;
        }
    }
    if(index!==-1){
        return Data[index];
    }
}
Update(data:any){
    let index=-1;
    let Data=this.Data;
    for(let i=0;i<Data.length;i++){
        if(Data[i].id===data.id){
            index=i;
            break;
        }
    }
    if(index!==-1){
        Data[index]={...Data[index],...data};
        this.SetData();
    }
}




}

export const carriageinwardService=new CarriageInward();