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
    }
    getDesignationData(){
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
    }
    getDataById(id:any){
        let index=-1;
        for(let i=0;i<this.Data.length;i++){
            if(this.Data[i].id===id){
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

