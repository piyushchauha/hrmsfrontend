import { carriageinwardService } from "../../carriageinward/carriageInwardService";
import { carriageoutwardService } from "../../carriageoutward/carriageOutwardService";

class StockService {
  Data: any = []

  SetData() {
    localStorage.setItem("StockArr", JSON.stringify(this.Data))
  }

  GetData() {
    const stored = localStorage.getItem("StockArr")
    if (stored) {
      this.Data = JSON.parse(stored);
    }
    return this.Data;
  }

  getInwardQuantity(ProductID:any){
    const inwardArr=carriageinwardService.GetData();
    let total=0;
    for(let i=0;i<inwardArr.length;i++ ){
      if(inwardArr[i].ProductID===ProductID){
        total+=Number(inwardArr[i].InwardQuantity);
      }
    }
    return total;
  }


  getOutwardQuantity(ProductID:any){
    const outwardArr=carriageoutwardService.GetData();
    let total=0;
    for(let i=0;i<outwardArr.length;i++){
      if(outwardArr[i].ProductID===ProductID){
        total+=Number(outwardArr[i].OutwardQuantity);
      }
    }
    return total;
  }


  Add(ProductID: any, ProductName: any, InwardQty: any, OutwardQty: any) {
    this.GetData();

    let index = -1;
    for (let i = 0; i < this.Data.length; i++) {
      if (this.Data[i].ProductID === ProductID) {
        index = i;
        break;
      }
    }

    if (index === -1) {
      this.Data.push({
        ProductID,
        ProductName,
        InwardQuantity:InwardQty,
        OutwardQuantity:OutwardQty,
        Total: InwardQty-OutwardQty,
      })
    }
     else {
      this.Data[index].InwardQuantity= InwardQty;
      this.Data[index].OutwardQuantity= OutwardQty;
      this.Data[index].Total=this.Data[index].InwardQuantity-this.Data[index].OutwardQuantity;
    }

    this.SetData()
  }

 Update(ProductID: any ,InwardQty: any, OutwardQty: any) {
  this.GetData();
   let index = -1;
    for (let i = 0; i < this.Data.length; i++) {
      if (this.Data[i].ProductID === ProductID) {
        index = i;
        break;
      }
    }

    if (index !== -1) {
       this.Data[index].InwardQuantity= InwardQty;
      this.Data[index].OutwardQuantity= OutwardQty;
      this.Data[index].Total=this.Data[index].InwardQuantity-this.Data[index].OutwardQuantity;

    }
this.SetData();
 }
}

export const stockService = new StockService()































































