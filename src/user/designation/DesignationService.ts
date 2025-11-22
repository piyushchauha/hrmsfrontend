class DesignationService{
    Data:any=[];

    AddData(data:any){
        let index=-1;
        for(let i=0;i<this.Data.length;i++){
            if(this.Data[i].id===data.id){
                index=i;
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

    GetData(){
       const stored= localStorage.getItem("Designation");
       if(stored){
        this.Data=JSON.parse(stored);
       }
       return this.Data;
    }

   

    SetData(){
        localStorage.setItem("Designation",JSON.stringify(this.Data));
    }

    getDesignationData(){
        this.GetData();
        return this.Data;
    }
    delete(manager:any){
        let index=-1;
        for(let i=0;i<this.Data.length;i++){
            if(this.Data[i].id===manager.id){
                index=i;
                break;
            }
        }
        if(index!==-1){
            this.Data.splice(index,1);
        }
        this.SetData();
    }
    getDataById(id:any){
        let index=-1;
        let Data=this.GetData();
        for(let i=0;i<Data.length;i++){
            if(Data[i].id===id){
                index=i;
                break;
            }
        }
        if(index!==-1){
            return this.Data[index];
        }
    }

}

export const designationservice=new DesignationService();

