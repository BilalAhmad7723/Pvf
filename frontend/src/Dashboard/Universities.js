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

const Universities = () => {
 // const dispatch = useDispatch();
 const [loading, setloading] = useState(false);
 const [modalShow, setModalShow] = useState(false);
 const [modalShow1, setModalShow1] = useState(false);;
 const [seldata, setseldata] = useState({});
 const [finaldata, setfinaldata] = useState();
 const {control, register, handleSubmit,reset  } = useForm();
 const onSubmit = (data) => { 
   if(data.name === '') data.name = seldata.name;
   if(data.tuition === '') data.tuition = seldata.tuition;
   if(data.logo === '') data.logo = seldata.logo;
   if(data.gpa === '') data.gpa = seldata.gpa;
   if(data.avg_salary === '') data.avg_salary = seldata.avg_salary;
   if(data.rank === '') data.rank = seldata.rank;
   if(data.country_name === '') data.country_name = seldata.country_name;
   if(data.code === '') data.code = seldata.code;
   if(data.url === '') data.url = seldata.url;
   if(data.slug === '') data.slug = seldata.slug;
   if(data.total_students === '') data.total_students = seldata.total_students;
   if(data.address === '') data.address = seldata.address;
   if(data.living_expenses === '') data.living_expenses = seldata.living_expenses;
   setModalShow(false);
   onUpdate(data);
   reset();
 };
 const onAdd = (data) => { 
  if(data.name === '') {
    message.error("Name Must be Required!!");
    return;
  }
  if(data.code === ''){
    message.error("Please Enter Country Code Must be Required!!");
    return;
  }
  setModalShow(false);
  create(data);
  //reset();
};
const create = (data) => {
     http.post('/uni/add-university/', data)
     .then((res) => {
       console.log('University has been Added' + res); 
       console.log(register);        
       getData();
     }).catch((error) => {
       console.log(error)
     })
 }
 const onUpdate = (data) => {
     http.put('/uni/update-university/' + seldata._id, data)
     .then((res) => {
       console.log('University has been updated' + res); 
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
   const endpoint = "/uni/get-university";
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
           <Modal.Title id="EditModal">View/Update University <h5 style={{fontSize: 10,color: `red`}}>*Fill only those Fileds you want to update</h5></Modal.Title>
         </Modal.Header>
       </Badge.Ribbon>
       <form onSubmit={handleSubmit(onSubmit)}>
         <Modal.Body>
           <Row>
             <Col lg={6} sm={6} className="mb-3">
             <Form.Label>Name</Form.Label>
               <Form.Control placeholder={props.data.name} type="text" {...register("name")} />
             </Col>
             <Col lg={6} sm={6} className="mb-3">
             <Form.Label>Slug</Form.Label>
               <Form.Control placeholder={props.data.slug} type="text" {...register("slug")} />
             </Col>
           </Row>
           <Row>
             <Col lg={6} sm={6} className="mb-3">
             <Form.Label>Tution Fee</Form.Label>
               <Form.Control placeholder={props.data.tuition} type="text" {...register("tuition")} />
             </Col>
             <Col lg={6} sm={6} className="mb-3">
             <Form.Label>Total Students</Form.Label>
               <Form.Control placeholder={props.data.total_students} type="text" {...register("total_students")} />
             </Col>
           </Row>
           <Row>
             <Col lg={6} sm={6} className="mb-3">
               <Form.Label>URL</Form.Label>
               <Form.Control placeholder={props.data.url} type="text" {...register("url")} />
             </Col>
             <Col lg={6} sm={6} className="mb-3">
             <Form.Label>University Code</Form.Label>
               <Form.Control placeholder={props.data.code} type="text" {...register("code")} />
             </Col>
           </Row>
           <Row>
             <Col lg={6} sm={6} className="mb-3">
             <Form.Label>Rank</Form.Label>
               <Form.Control placeholder={props.data.rank} type="text" {...register("rank")} />
             </Col>
             <Col lg={6} sm={6} className="mb-3">
             <Form.Label>Required GPA</Form.Label>
               <Form.Control placeholder={props.data.gpa} type="text" {...register("gpa")} />
             </Col>
           </Row>
           <Row>
             <Col lg={6} sm={6} className="mb-3">
             <Form.Label>Country Name</Form.Label>
               <Form.Control  placeholder={props.data.country_name} type="text" {...register("country_name")} />
             </Col>
             <Col lg={6} sm={6} className="mb-3">
             <Form.Label>URL</Form.Label>
               <Form.Control  placeholder={props.data.avg_salary} type="text" {...register("avg_salary")} />
             </Col>
           </Row>
           <Row>
             <Col lg={6} sm={6} className="mb-3">
             <Form.Label>Online Logo URL</Form.Label>
               <Form.Control  placeholder={props.data.logo} type="text" {...register("logo")} />
             </Col>
             <Col lg={6} sm={6} className="mb-3">
             <Form.Label>Living Expense</Form.Label>
               <Form.Control  placeholder={props.data.living_expenses} type="text" {...register("living_expenses")} />
             </Col>
           </Row>
           <Row>
             <Col lg={12} sm={12} className="mb-3">
             <Form.Label>Address</Form.Label>
               <Form.Control  placeholder={props.data.address} type="text" {...register("address")} />
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
          <Modal.Title id="AddModel">Add University <h5 style={{fontSize: 10,color: `red`}}>*Fill University Data</h5></Modal.Title>
        </Modal.Header>
      </Badge.Ribbon>
      <form onSubmit={handleSubmit(onAdd)}>
        <Modal.Body>
          <Row>
            <Col lg={6} sm={6} className="mb-3">
            <Form.Label>Name</Form.Label>
              <Form.Control type="text" {...register("name")} required />
            </Col>
            <Col lg={6} sm={6} className="mb-3">
            <Form.Label>Slug</Form.Label>
              <Form.Control  type="text" {...register("slug")} required/>
            </Col>
          </Row>
          <Row>
            <Col lg={6} sm={6} className="mb-3">
            <Form.Label>Tution Fee</Form.Label>
              <Form.Control  type="text" {...register("tuition")} required/>
            </Col>
            <Col lg={6} sm={6} className="mb-3">
            <Form.Label>Total Students</Form.Label>
              <Form.Control  type="text" {...register("total_students")} required/>
            </Col>
          </Row>
          <Row>
            <Col lg={6} sm={6} className="mb-3">
              <Form.Label>URL</Form.Label>
              <Form.Control type="text" {...register("url")} required/>
            </Col>
            <Col lg={6} sm={6} className="mb-3">
            <Form.Label>University Code</Form.Label>
              <Form.Control  type="text" {...register("code")} required/>
            </Col>
          </Row>
          <Row>
            <Col lg={6} sm={6} className="mb-3">
            <Form.Label>Rank</Form.Label>
              <Form.Control  type="text" {...register("rank")} required/>
            </Col>
            <Col lg={6} sm={6} className="mb-3">
            <Form.Label>Required GPA</Form.Label>
              <Form.Control  type="text" {...register("gpa")} required/>
            </Col>
          </Row>
          <Row>
            <Col lg={6} sm={6} className="mb-3">
            <Form.Label>Country Name</Form.Label>
              <Form.Control type="text" {...register("country_name")} required/>
            </Col>
            <Col lg={6} sm={6} className="mb-3">
            <Form.Label>Avg salary</Form.Label>
              <Form.Control type="text" {...register("avg_salary")}  required  />
            </Col>
          </Row>
          <Row>
            <Col lg={6} sm={6} className="mb-3">
            <Form.Label>Online Logo URL</Form.Label>
              <Form.Control type="text" {...register("logo")} required/>
            </Col>
            <Col lg={6} sm={6} className="mb-3">
            <Form.Label>Living Expense</Form.Label>
              <Form.Control  type="text" {...register("living_expenses")} required/>
            </Col>
          </Row>
          <Row>
            <Col lg={12} sm={12} className="mb-3">
            <Form.Label>Address</Form.Label>
              <Form.Control type="text" {...register("address")} required/>
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
        <Spin spinning={loading}  tip="Loading Universities..." size="large">
       <section>
         <div
           className="site-layout-background"
           style={{ padding: 24, minHeight: 360 }}
         >
           <section className="mb-2">
             <Row>
               <h3 className='col'>Universities:</h3>
             <Button className="col-2" style={{float:"right",width:'20px'}} variant="outline-primary" size="sm" onClick={() => {setModalShow1(true); }} > Add University </Button>
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
                     <th>Name</th>
                     <th>Tution Fee</th>
                     <th>T.Students</th>
                     <th>Web URL</th>
                     <th>Rank</th>
                     <th>Country Code</th>
                     <th>Country</th>
                     <th>Edit</th>
                     <th>Delete</th>
                   </tr>
                 </thead>
                 <tbody>
                   {finaldata.map(function (item, i) {
                     return (
                       <tr key={i}>
                         <td>{i+1}</td>
                         <td>{item.name}</td>
                         <td>{item.tuition}</td>
                         <td>{item.total_students}</td>
                         <td>{item.url}</td>
                         <td>{item.rank}</td>
                         <td>{item.code}</td>
                         <td>{item.country_name}</td>
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

export default Universities
