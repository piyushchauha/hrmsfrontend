class LeaveService{
    Data:any=[];

    // Add Data function
    Add(data:any){
let index=-1;
for(let i=0;i<this.Data.length;i++){
    if(this.Data[i].id===data.id){
        index=i;
        break;
    }
}
    if(index!==-1){
        this.Data[index]=data
    }
    else{
this.Data.push(data);
    }

        
        this.setData();
    }

    // Display data function
    // DisplayData(){
    //             this.getData();

    //     return this.Data;
    // }


    // function to set the value to localstorage
    setData(){
        localStorage.setItem("LeaveArr",JSON.stringify(this.Data));
        // this.deleteData();
    }

    // function to get the value from localstorage
    getData(){
        const storedleave=localStorage.getItem("LeaveArr");
        if(storedleave){
            this.Data=JSON.parse(storedleave);
        }
        return this.Data;
    }


    // function to delete the localstorage
    deleteData(){
        localStorage.removeItem("LeaveArr");
    }

    // function to get data by id
    getById(empid:number){
        let index=-1;
        let Data=this.getData();
        for(let i=0;i<Data.length;i++){
            if(Data[i].id===empid){
                index=i;
                break;
            }
        }
        if(index!==-1){
            return Data[index]
        }

    }

  
    //function to delete data by id

     deleteById(emp:any){
        let index=-1;
        let Data=this.getData();

        for(let i=0;i<Data.length;i++){


            if(Data[i].id===emp.id){
            index=i;
            break;
            }
        }
     if(index!==-1){
        Data.splice(index,1);
     }
this.setData();
    }






// DeleteDate(date: any) {
//         let updatedData = this.Data.map((leave:any) => {
//             leave.Days = leave.Days.filter((day: any) => day.Date !== date);
//             return leave;
//         });

//         this.Data = updatedData;
//         this.setData(); 
//     }
}


export const leaveservice=new LeaveService();