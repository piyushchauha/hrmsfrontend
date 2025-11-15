 class EmployeeService{

    Data:any = [];


    Add(data:any){
        let index=-1;
        for(let i=0;i<this.Data.length;i++){
            if(this.Data[i].id===data.id){
                index=i;
                break;
            }
        }
    if (index !== -1) {
      this.Data[index] = data;
    } else {
        this.Data.push(data);
    }
    }
    getData(){
        return this.Data;
    }
    
    delete(employee: any) {

        let index = -1; 

       for (let i = 0; i < this.Data.length; i++) {
          if (this.Data[i].id === employee.id) {
            index = i;
              break; 
         }
        }

        if (index !== -1) {
            this.Data.splice(index, 1);
        }
    }

   getById(employee: number) {
    let index=-1;
    for(let i=0;i<this.Data.length;i++){
        if(this.Data[i].id===employee){
            index=i;
            break;
        }
    }
    if(index!==-1){
        return this.Data[index];
    }
}

}
export const _employeeService = new EmployeeService();

