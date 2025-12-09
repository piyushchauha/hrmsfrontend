class CustomerService{
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
        }else{
        this.Data.push(data);
        }
        this.setData();
    }

    GetData(){
        const stored=localStorage.getItem("CustomerArr");
        if(stored){
            this.Data=JSON.parse(stored);
        }
        return this.Data;
    }

     setData(){
        localStorage.setItem("CustomerArr",JSON.stringify(this.Data));
    }

    
  Delete(employee: any) {
    let index = -1;
    let Data=this.GetData();
    for (let i = 0; i < Data.length; i++) {
      if (Data[i].id === employee.id) {
        index = i;
        break;
      }
    }

    if (index !== -1) {
      Data.splice(index, 1);
    }
this.setData()
  }
   
   GetById(emp:any){
    let index=-1;
    let Data=this.GetData();
    for(let i=0;i<Data.length;i++){
        if(Data[i].id===emp){
            index=i;
            break;
        }
    }
   if(index!==-1){
    return Data[index];
   }
   }
}

export const customerservice=new CustomerService();