class StockService{
  Data:any=[]
   
    SetData(){

        localStorage.setItem("StockArr",JSON.stringify(this.Data))

    }

     GetData(){
        const stored=localStorage.getItem("StockArr");

        if(stored){
            this.Data=JSON.parse(stored);
        }
    return this.Data;
    }

    Add(ProductID:any,ProductName:any,InwardQty:any,OutwardQty:any){
        this.GetData();
        let index=0;
        for(let i=0;i<this.Data.length;i++){
           index=i;
           break;
        }

        if(index!==-1){
        this.Data.push({
            ProductID,
            ProductName,
            InwardQuantity:InwardQty,
            OutwardQuantity:OutwardQty,
            Total:InwardQty-OutwardQty,
        })
    }else{
        this.Data[index].InwardQuantity+=InwardQty;
        this.Data[index].OutwardQuantity+=OutwardQty;
        this.Data[index].Total=this.Data[index].InwardQuantity-this.Data[index].OutwardQuantity;
    }
    this.SetData();
}
}

export const stockService=new StockService();