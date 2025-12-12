
class ProductService{
  Data:any=[]
 Add(data:any){
    let index=-1;
    for(let i=0;i<this.Data.length;i++){
        if(this.Data[i].id===data.id)
        {
            index=i;
            break;
        }
    }
    if(index!==-1){
        this.Data[index]=data
    }else{
        this.Data.push(data);
    }
        this.SetData();
    }

    GetData(){

        const stored=localStorage.getItem("ProductArr");
        if(stored){
            this.Data=JSON.parse(stored);
        }
        return this.Data;
    }

    SetData(){
        localStorage.setItem("ProductArr",JSON.stringify(this.Data));
    }

    Delete(emp:any){
        let index=-1;
        let Data=this.GetData();
        for(let i=0;i<Data.length;i++){
            if(Data[i].id===emp.id)
            index=i;
            break;
        }
        if(index!==-1){
            Data.splice(index,1);
        }
        this.SetData();
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

export const productService=new ProductService();

























//  Update(data: any) {
//     const index = this.Data.findIndex(x => x.id === data.id);

//     if (index !== -1) {
//       this.Data[index] = { ...this.Data[index], ...data };
//       this.SetData();
//       return true;
//     }

//     return false;
//   }

  