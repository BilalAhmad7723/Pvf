import NavForDash from './NavForDash';
//import { SearchOutlined } from '@ant-design/icons';
import Container from 'react-bootstrap/Container'; 
import http from "../Config";
import 'antd/dist/antd.css';
import React, {  useState, useEffect } from 'react';
//import Highlighter from 'react-highlight-words';
import { useForm } from "react-hook-form";
import { Form,Col,Row,Button,Table, Modal} from "react-bootstrap";
import { Popconfirm, message, Badge ,Empty,Spin} from "antd";

const Country = () => {
 // const dispatch = useDispatch();
 const [loading, setloading] = useState(false);
 const [modalShow, setModalShow] = useState(false);
 const [modalShow1, setModalShow1] = useState(false);;
 const [seldata, setseldata] = useState({});
 const [finaldata, setfinaldata] = useState();
 const {control, register, handleSubmit,reset  } = useForm();
 const onSubmit = (data) => { 
   if(data.code === '') data.code = seldata.code;
   if(data.label === '') data.label = seldata.label;
   if(data.value === '') data.value = seldata.value;
   setModalShow(false);
   onUpdate(data);
   reset();
 };
 const onAdd = (data) => { 
  if(data.label === '') {
    message.error("label Must be Required!!");
    return;
  }
  if(data.code === ''){
    message.error("Please Enter Country Code Must be Required!!");
    return;
  }
  if(data.value === ''){
    message.error("Value must be Required!!");
    return;
  }
  setModalShow(false);
  create(data);
  //reset();
};
const create = (data) => {
     http.post('/uni/add-country/', data)
     .then((res) => {
       console.log('Country has been Added' + res); 
       console.log(register);        
       getData();
     }).catch((error) => {
       console.log(error)
     })
 }
 const onUpdate = (data) => {
     http.put('/uni/update-country/' + seldata._id, data)
     .then((res) => {
       console.log('Country has been updated' + res); 
       console.log(register);        
       getData();
     }).catch((error) => {
       console.log(error)
     })
 }

 useEffect(() => {
   getData();
 }, []);

 const getData = () => {
   setloading(true);
   const headers = { "Content-Type": "application/json" };
   const endpoint = "/uni/get-country";
   http.get(endpoint, { headers })
     .then((response) => {
       setloading(false);
       setfinaldata( response.data)
     })
     .catch((error) => {
       console.log(error);
     });
 };

 function EditModal(props) {
   return (
     <Modal {...props} size="lg" aria-labelledby="contained-modal-title-vcenter" backdrop="static" keyboard={false} centered >
       <Badge.Ribbon  color="#008000" text={props.data.slug}>
         <Modal.Header>
           <Modal.Title id="EditModal">View/Update Country <h5 style={{fontSize: 10,color: `red`}}>*Fill only those Fileds you want to update</h5></Modal.Title>
         </Modal.Header>
       </Badge.Ribbon>
       <form onSubmit={handleSubmit(onSubmit)}>
         <Modal.Body>
           <Row>
             <Col lg={6} sm={6} className="mb-3">
             <Form.Label>Code</Form.Label>
               <Form.Control placeholder={props.data.code} type="text" {...register("code")} />
             </Col>
             <Col lg={6} sm={6} className="mb-3">
             <Form.Label>Label</Form.Label>
               <Form.Control placeholder={props.data.label} type="text" {...register("label")} />
             </Col>
             <Col lg={6} sm={6} className="mb-3">
             <Form.Label>Value</Form.Label>
               <Form.Control placeholder={props.data.value} type="text" {...register("value")} />
             </Col>
           </Row>
         </Modal.Body>
         <Modal.Footer style={{justifyContent : `center`}}>
           <Button style={{background:`#008000`,border: `#008000`}} type="submit">Update</Button>
           <Button style={{background:`#008000`,border: `#008000`}} onClick={props.onHide}>Close</Button>
         </Modal.Footer>
       </form>
     </Modal>
   );
 }


 function AddModal(props) {
  return (
    <Modal {...props} size="lg" aria-labelledby="contained-modal-title-vcenter" backdrop="static" keyboard={false} centered >
      <Badge.Ribbon  color="#008000" text="">
        <Modal.Header>
          <Modal.Title id="AddModel">Add Country <h5 style={{fontSize: 10,color: `red`}}>*Fill Country Data</h5></Modal.Title>
        </Modal.Header>
      </Badge.Ribbon>
      <form onSubmit={handleSubmit(onAdd)}>
        <Modal.Body>
          <Row>
            <Col lg={6} sm={6} className="mb-3">
            <Form.Label>Code</Form.Label>
              <Form.Control type="text" {...register("code")} required />
            </Col>
            <Col lg={6} sm={6} className="mb-3">
            <Form.Label>Label</Form.Label>
              <Form.Control  type="text" {...register("label")} required/>
            </Col>
          </Row>
          <Row>
            <Col lg={6} sm={6} className="mb-3">
            <Form.Label>Value</Form.Label>
              <Form.Control  type="text" {...register("value")} required/>
            </Col>

          </Row>
        </Modal.Body>
        <Modal.Footer style={{justifyContent : `center`}}>
          <Button style={{background:`#008000`,border: `#008000`}} type="submit">Add</Button>
          <Button style={{background:`#008000`,border: `#008000`}} onClick={props.onHide}>Close</Button>
        </Modal.Footer>
      </form>
    </Modal>
  );
}


 function confirm(e) {
   http
     .delete("/uni/delete-university/" + e._id)
     .then((res) => {
       getData();
     })
     .catch((error) => {
       console.log(error);
     });
   message.success("Delete Successfulyy!!!");
 }

 function cancel(e) {
   console.log(e);
   message.error("Click on No");
 }

 const TStyle = {
 textAlign: `center`, 
 verticalAlign: `middle`,
 cursor:`pointer`
 }

  return (
      <div>
      <NavForDash/>
      <Container fluid>
        <Spin spinning={loading}  tip="Loading Countries..." size="large">
       <section>
         <div
           className="site-layout-background"
           style={{ padding: 24, minHeight: 360 }}
         >
           <section className="mb-2">
             <Row>
               <h3 className='col'>Contrires:</h3>
             <Button className="col-2" style={{float:"right",width:'20px'}} variant="outline-primary" size="sm" onClick={() => {setModalShow1(true); }} > Add Country </Button>
             </Row>
           </section>
           <section>
             {finaldata ? (
               <Table
               style={TStyle}
                 striped
                 table-success="true"
                 bordered
                 hover
                 size="sm"
                 responsive
               >
                 <thead>
                   <tr>
                     <th>#</th>
                     <th>Code</th>
                     <th>Country Name</th>
                     <th>value</th>
                     <th>Edit</th>
                     <th>Delete</th>
                   </tr>
                 </thead>
                 <tbody>
                   {finaldata.map(function (item, i) {
                     return (
                       <tr key={i}>
                         <td>{i+1}</td>
                         <td>{item.code}</td>
                         <td>{item.label}</td>
                         <td>{item.value}</td>
                         <td>
                           <Button
                             variant="outline-success"
                             size="sm"
                             onClick={() => {
                               setModalShow(true);
                               setseldata(item);
                             }}
                           >
                             Edit
                           </Button>
                         </td>
                         <td>
                           <Popconfirm
                             title="Are you sure to delete this University?"
                             onConfirm={() => confirm(item)}
                             onCancel={cancel}
                             okText="Yes"
                             cancelText="No"
                           >
                             <Button variant="outline-danger" size="sm">
                               Delete
                             </Button>
                           </Popconfirm>
                         </td>
                       </tr>
                     );
                   })}
                 </tbody>
                 <EditModal data = {seldata} show={modalShow} control={control} onHide={() => setModalShow(false)} />
                 <AddModal show={modalShow1} control={control} onHide={() => setModalShow1(false)} />
               </Table>
             ) : (
               <Empty />
             )}
           </section>
         </div>
       </section>
       </Spin>
     </Container>
      </div>
  )
}

export default Country
