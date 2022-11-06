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

const Comments = () => {
 // const dispatch = useDispatch();
 const [loading, setloading] = useState(false);
 const [modalShow, setModalShow] = useState(false);
 const [modalShow1, setModalShow1] = useState(false);;
 const [seldata, setseldata] = useState({});
 const [finaldata, setfinaldata] = useState();
 const {control, register, handleSubmit,reset  } = useForm();
 const onSubmit = (data) => { 
   if(data.image === '') data.image = seldata.image;
   if(data.title === '') data.title = seldata.title;
   if(data.postDate === '') data.postDate = seldata.postDate;
   if(data.postBy === '') data.postBy = seldata.postBy;
   setModalShow(false);
   onUpdate(data);
   reset();
 };
 const onAdd = (data) => { 
  if(data.image === '') {
    message.error("Image Must be Required!!");
    return;
  }
  if(data.title === ''){
    message.error("Title Must be Required!!");
    return;
  }
  if(data.detail === ''){
    message.error("Detail of Blog Must be Required!!");
    return;
  }
//   data.question = [{
//     name: "Admin", 
//     id: 1,
//     ques: "How To Apply for Abroad Study??",
//     date: new Date()
// }];
// data.answer =  [{
//   name: "Arslan", 
//   id: 1,
//   ans: "Use Our System find & match universitites accroding to your interest on a single platform.",
//   date: new Date()
// }]
  setModalShow1(false);
  create(data);
  //reset();
};
const create = (data) => {
     http.post('/blog/add-blog/', data)
     .then((res) => {
       console.log('Blog has been Added' + res);         
       getData();
     }).catch((error) => {
       console.log(error)
     })
 }
 const onUpdate = (data) => {
     http.put('/blog/update-blog/' + seldata._id, data)
     .then((res) => {
       console.log('Blog has been updated' + res);        
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
   const endpoint = "/blog/get-blog";
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
           <Modal.Title id="EditModal">View/Update Blog <h5 style={{fontSize: 10,color: `red`}}>*Fill only those Fileds you want to update</h5></Modal.Title>
         </Modal.Header>
       </Badge.Ribbon>
       <form onSubmit={handleSubmit(onSubmit)}>
         <Modal.Body>
           <Row>
             <Col lg={12} sm={12} className="mb-3">
             <Form.Label>Image</Form.Label>
               <Form.Control placeholder={props.data.image} type="text" {...register("image")} />
             </Col>
             </Row>
             <Row>
             <Col lg={12} sm={12} className="mb-3">
             <Form.Label>Title</Form.Label>
               <Form.Control placeholder={props.data.title} type="text" {...register("title")} />
             </Col>
           </Row>
           <Row>
             <Col lg={6} sm={6} className="mb-3">
             <Form.Label>Post Date</Form.Label>
               <Form.Control placeholder={props.data.postDate} type="text" {...register("postDate")} />
             </Col>
             <Col lg={6} sm={6} className="mb-3">
             <Form.Label>Post By</Form.Label>
               <Form.Control placeholder={props.data.postBy} type="text" {...register("postBy")} />
             </Col>
           </Row>
           <Row>
            <Col lg={12} sm={12} className="mb-3">
            <Form.Label>Short Details</Form.Label>
              <textarea class="form-control" id="addBlogDetails"  placeholder={props.data.sdetail} {...register("sdetail")} rows="2"></textarea>
            </Col>
            <Col lg={12} sm={12} className="mb-3">
            <Form.Label>Long Details</Form.Label>
              <textarea class="form-control" id="addBlogDetails"  placeholder={props.data.ldetail} {...register("ldetail")} rows="4"></textarea>
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
          <Modal.Title id="AddModel">Add Blog <h5 style={{fontSize: 10,color: `red`}}>*Fill Blog Data</h5></Modal.Title>
        </Modal.Header>
      </Badge.Ribbon>
      <form onSubmit={handleSubmit(onAdd)}>
        <Modal.Body>
          <Row>
            <Col lg={12} sm={12} className="mb-3">
            <Form.Label>Image</Form.Label>
              <Form.Control type="text" {...register("image")} required />
            </Col>
            </Row>
            <Row>
            <Col lg={12} sm={12} className="mb-3">
            <Form.Label>Title</Form.Label>
              <Form.Control  type="text" {...register("title")} required/>
            </Col>
          </Row>
          <Row>
            <Col lg={6} sm={6} className="mb-3">
            <Form.Label>Posted By</Form.Label>
              <Form.Control  type="text" {...register("postBy")} required/>
            </Col>
            <Col lg={6} sm={6} className="mb-3">
            <Form.Label>Post Date</Form.Label>
              <Form.Control  type="date" {...register("postDate")} required/>
            </Col>
          </Row>
          <Row>
            <Col lg={12} sm={12} className="mb-3">
            <Form.Label>Short Details</Form.Label>
              <textarea class="form-control" id="addBlogDetails" {...register("sdetail")} required rows="2"></textarea>
            </Col>
            <Col lg={12} sm={12} className="mb-3">
            <Form.Label>Long Details</Form.Label>
              <textarea class="form-control" id="addBlogDetails" {...register("ldetail")} required rows="4"></textarea>
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
     .delete("/blog/delete-blog/" + e._id)
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
        <Spin spinning={loading}  tip="Loading Blogs..." size="large">
       <section>
         <div
           className="site-layout-background"
           style={{ padding: 24, minHeight: 360 }}
         >
           <section className="mb-2">
             <Row>
               <h3 className='col'>Blog:</h3>
             <Button className="col-2" style={{float:"right",width:'20px'}} variant="outline-primary" size="sm" onClick={() => {setModalShow1(true); }} > Add Blog </Button>
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
                     <th>Title</th>
                     <th>ImageURL</th>
                     <th>Post By</th>
                     <th>Post Date</th>
                     <th>Short Detail</th>
                     <th>Full Detail</th>
                     <th>Edit</th>
                     <th>Delete</th>
                   </tr>
                 </thead>
                 <tbody>
                   {finaldata.map(function (item, i) {
                     return (
                       <tr key={i}>
                         <td>{i+1}</td>
                         <td>{item.title}</td>
                         <td>{item.image}</td>
                         <td>{item.postBy}</td>
                         <td>{item.postDate}</td>
                         <td>{item.sdetail}</td>
                         <td>{item.ldetail}</td>
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

export default Comments
