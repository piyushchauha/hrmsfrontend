import React, { useEffect, useState } from 'react'
import { Button, Modal, ModalBody } from 'react-bootstrap';
import { useNavigate, useParams } from 'react-router-dom';
// import CarriageOutwardreturnform from '../carriageoutwardreturn/Form';
import CarriageInwardreturnform from './Form';
import { carrinretService } from './carriageinwardReturnService';
import { stockService } from '../Stock/StockService';
import { productService } from '../product/ProductService';

function AddCarriageinwardreturn() {
  const navigate = useNavigate();
  const { id } = useParams();

  const [FormData, setFormData] = useState({
    id: Date.now(), ProductID: '', inwardReturnQty: ''
  })

  function HandleSave() {
    let inwardqty = stockService.getInwardQuantity(FormData.ProductID);
    let updatedinwardqty = inwardqty - Number(FormData.inwardReturnQty);
    let product = productService.GetById(Number(FormData.ProductID));

    if (id === "add") {
      carrinretService.Add(FormData);
      stockService.Add(
        Number(FormData.ProductID),
        product.ProductName,
        updatedinwardqty,
        stockService.getOutwardQuantity(FormData.ProductID),

      );
    }
    else {
      carrinretService.Update(FormData);

      stockService.Update(
        Number(FormData.ProductID),
        updatedinwardqty,
        stockService.getOutwardQuantity(FormData.ProductID),

      );

    }
    navigate('../');
  }

  useEffect(() => {
    if (id !== "add") {
      const existing = carrinretService.GetById(Number(id));
      if (existing) {
        setFormData(existing);
      }
    }

  }, [id])
  return (
    <Modal className='modalcontainer' show={true} >
      <Modal.Header className='modalheader'>
        <div className="titleconatiner">
          <h1 className='headingstyle'>
            {id === 'add' ? 'Inward Details' : 'Edit Details'}
          </h1>
        </div>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className='svgstyle' onClick={() => navigate('../')}>
          <path d="M10.5859 12L2.79297 4.20706L4.20718 2.79285L12.0001 10.5857L19.793 2.79285L21.2072 4.20706L13.4143 12L21.2072 19.7928L19.793 21.2071L12.0001 13.4142L4.20718 21.2071L2.79297 19.7928L10.5859 12Z"></path></svg>
      </Modal.Header>

      <ModalBody>
        <CarriageInwardreturnform FormData={FormData} setFormData={setFormData} />
        <div className="davecont" >
          <Button variant="primary" onClick={HandleSave}>

            {id === 'add' ? 'Save' : 'Update'}
          </Button>
        </div>

      </ModalBody>

    </Modal >
  )
}

export default AddCarriageinwardreturn;