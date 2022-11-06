import NavForDash from './NavForDash';
//import { SearchOutlined } from '@ant-design/icons';
import Container from 'react-bootstrap/Container'; 
import http from "../Config";
import 'antd/dist/antd.css';
import React, {  useState, useEffect } from 'react';
//import Highlighter from 'react-highlight-words';
import { useForm } from "react-hook-form";
import { Form,Col,Row,Button,Table, Modal} from "react-bootstrap";
import { Popconfirm, message,Empty,Spin} from "antd";
const Faqs = () => {
  
  const [loading, setloading] = useState(false);
  const [modalShow, setModalShow] = useState(false);
  const [data, setData] = useState([]);
  const [seldata, setseldata] = useState({});
  const { register,control, handleSubmit,reset } = useForm();
  const onSubmit = (data) => {
      if(data.name === '') data.name = seldata.name;
      if(data.email === '') data.email = seldata.email;
      if(data.phone === '') data.phone = seldata.phone;
      if(data.subject === '') data.subject = seldata.subject;
      if(data.message === '') data.message = seldata.message;
      onUpdate(data);
      reset();
      setModalShow(false);
  };

  const onUpdate = (data) => {
    console.log(data);
      http.put('/contact/update-contact/' + seldata._id, data)
      .then((res) => {
        console.log('contact updated' + res)
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
    const endpoint = "contact/get-contact";
    http.get(endpoint, { headers })
      .then((response) => {
        debugger
        setloading(false);
        setData(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };



  function EditModal(props) {
    const center = {
      justifyContent: `center !important`
    }
    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="EditModalTitle"
        backdrop="static"
        keyboard={false}
        centered
      >
          <Modal.Header style={center}>
            <Modal.Title style={center} id="EditModal" >Contact Details<h5 style={{fontSize: 10,color: `red`}}>*Fill only those Fileds you want to update</h5></Modal.Title>
          </Modal.Header>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Modal.Body>
            <Row>
              <Col lg={12} md={12} sm={12} >
             <Form.Group className="mb-3" controlId="formName">
              <Form.Label>Name</Form.Label>
              <Form.Control  placeholder={seldata.name} {...register("name")} />
            </Form.Group>             
            <Form.Group className="mb-3" controlId="formEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control  placeholder={seldata.email} {...register("email")} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formEmail">
              <Form.Label>Phone #</Form.Label>
              <Form.Control  placeholder={seldata.phone} {...register("phone")} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formEmail">
              <Form.Label>Subject</Form.Label>
              <Form.Control  placeholder={seldata.subject} {...register("subject")} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formCnic">
              <Form.Label>Messages</Form.Label>
              <Form.Control  placeholder={seldata.message} {...register("message")} />
            </Form.Group>
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
  function confirm(e) {
    http
      .delete("/contact/delete-contact/" + e._id)
      .then((res) => {
        message.success("Delete Successfulyy!!!");
        getData();
      })
      .catch((error) => {
        message.error(error.message);
        console.log(error);
      });
    
  }

  function cancel(e) {
    message.error("contact not Deleted!");
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
        <Spin spinning={loading}  tip="Loading Contacts data..." size="large">
       <section>
         <div
           className="site-layout-background"
           style={{ padding: 24, minHeight: 360 }}
         >
           <section className="mb-2">
             <Row>
               <h3>Contact Data:</h3>
             </Row>
           </section>
           <section>
             {data ? (
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
                     <th>Email</th>
                     <th>Phone #</th>
                     <th>Subject</th>
                     <th>Message</th>
                     <th>Edit</th>
                     <th>Delete</th>
                   </tr>
                 </thead>
                 <tbody>
                   {data.map(function (item, i) {
                     return (
                       <tr key={i}>
                         <td>{i+1}</td>
                         <td>{item.name}</td>
                         <td>{item.email}</td>
                         <td>{item.phone}</td>
                         <td>{item.subject}</td>
                         <td>{item.message}</td>
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
                             title="Are you sure to delete this Account?"
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
                 <EditModal
                   data = {seldata}
                   show={modalShow}
                   control={control}
                   onHide={() => setModalShow(false)}
                 />
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

export default Faqs
