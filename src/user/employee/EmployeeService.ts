class EmployeeService {
  Data: any = [];

  Add(data: any) {
    let index = -1;
    for (let i = 0; i < this.Data.length; i++) {
      if (this.Data[i].id === data.id) {
        index = i;
        break;
      }
    }
    if (index !== -1) {
      this.Data[index] = data;
    } else {
      this.Data.push(data);
    }
this.setData()
  }
  getData() {
            // localStorage.setItem("EmployeeArr", JSON.stringify(EmployeeArr));
  const storedemployee = localStorage.getItem("EmployeeArr");
        if (storedemployee) {
           this.Data = JSON.parse(storedemployee);
        }
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
this.setData()
  }

setData(){
    localStorage.setItem("EmployeeArr",JSON.stringify(this.Data));

}

  getById(empid: number) {
    let index = -1;
    let Data =this.getData();
    for (let i = 0; i < Data.length; i++) {
      if (Data[i].id === empid) {
        index = i;
        break;
      }
    }
    if (index !== -1) {
      return Data[index];
    }
  }
}
export const _employeeService = new EmployeeService();
