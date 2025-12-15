// import { carriageinwardService } from "../../carriageinward/carriageInwardService";
import { carriageoutwardService } from "../../carriageoutward/carriageOutwardService";
import { carriageinwardService } from "../carriageinward/carriageInwardService";
import { carrinretService } from "../carriageinwardreturn/carriageinwardReturnService";
import { carroutretService } from "../carriageoutwardreturn/carriageoutwardReturnService";

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

    getInwardReturnQuantity(ProductID:any){
    const inwardRetArr=carrinretService.GetData();
    let totalinw=0;
    for(let i=0;i<inwardRetArr.length;i++ ){
                    // console.log(ProductID);
                    // console.log(inwardRetArr[i].ProductID);
      if(Number(inwardRetArr[i].ProductID)===ProductID){
        // console.log("matched ProductID",inwardRetArr[i].ProductID);
        totalinw+=Number(inwardRetArr[i].inwardReturnQty);
      }
    }
    console.log("totalinw",totalinw);
    return totalinw;
  }
  // UpdateQuantity(ProductID:any,Updatedinqty:any,Updatedoutqty:any){
  //   this.GetData();
  //   let index=-1;
   
  //   for(let i=0;i<this.Data.length;i++){
  //     if(this.Data[i].ProductID===ProductID){
  //       index=i;
  //       break;
  //   }
  // }
  //   if(index!==-1){
  //     this.Data[index].InwardQuantity=Updatedinqty;
  //     this.Data[index].OutwardQuantity=Updatedoutqty;

  //   }
  // }

  getOutwardQuantity(ProductID:any){
    const outwardRetArr=carriageoutwardService.GetData();
    console.log("outwardRetArr",outwardRetArr);
    let total=0;
    for(let i=0;i<outwardRetArr.length;i++){
      
      if(outwardRetArr[i].ProductID===ProductID){
        total+=Number(outwardRetArr[i].OutwardQuantity);
      }
    }
    console.log("total",total);;
    return total;
  }
 getOutwardReturnQuantity(ProductID:any){
    const outwardRetArr=carroutretService.GetData();
    let totalout=0;
    for(let i=0;i<outwardRetArr.length;i++){
      if(Number(outwardRetArr[i].ProductID)===ProductID){
        totalout+=Number(outwardRetArr[i].outwardReturnQty);
      }
    }
        console.log("totalout",totalout);;

    return totalout;
  }

  Add(ProductID: any, ProductName: any, InwardQty: any, OutwardQty: any) {
    this.GetData();
  
// let inw=carrinretService.GetByProductId(ProductID);
//     let out=carroutretService.GetByProductId(ProductID);
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
    //  let totalinw=0;
    //   let totalout=0; 
    //     let preInwardReturnQty = inw ? inw.inwardReturnQty : 0;
    //       totalinw=totalinw+preInwardReturnQty;
       
    // let preOutwardReturnQty = out ? out.outwardReturnQty : 0;
    //        totalout=totalout+preOutwardReturnQty;

    
      this.Data[index].InwardQuantity= InwardQty-this.getInwardReturnQuantity(ProductID);
      this.Data[index].OutwardQuantity= OutwardQty-this.getOutwardReturnQuantity(ProductID);
      this.Data[index].Total=this.Data[index].InwardQuantity-this.Data[index].OutwardQuantity;
    }

    this.SetData()
  }

 Update(ProductID: any ,InwardQty: any, OutwardQty: any) {
  this.GetData();
  //  let inw=carrinretService.GetByProductId(ProductID);
  //   let out=carroutretService.GetByProductId(ProductID);

   let index = -1;
    for (let i = 0; i < this.Data.length; i++) {
      if (this.Data[i].ProductID === ProductID) {
        index = i;
        break;
      }
    }

    if (index !== -1) {
    //   let totalinw=0;
    //   let totalout=0;
    //   let preInwardReturnQty = inw ? inw.inwardReturnQty : 0;
    //   totalinw=totalinw+preInwardReturnQty
    // let preOutwardReturnQty = out ? out.outwardReturnQty : 0;
    //       totalout=totalout+preOutwardReturnQty

        // console.log("yuyuyuy",preInwardReturnQty,preOutwardReturnQty);

       this.Data[index].InwardQuantity= InwardQty-this.getInwardReturnQuantity(ProductID);
      this.Data[index].OutwardQuantity= OutwardQty-this.getOutwardReturnQuantity(ProductID);
      this.Data[index].Total=this.Data[index].InwardQuantity-this.Data[index].OutwardQuantity;

    }
this.SetData();
 }

 
}

export const stockService = new StockService();












