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
const Appointments = () => {
  
  const [loading, setloading] = useState(false);
  const [modalShow, setModalShow] = useState(false);
  const [data, setData] = useState([]);
  const [seldata, setseldata] = useState({});
  const { register,control, handleSubmit,reset } = useForm();
  const onSubmit = (data) => {
      if(data.name === '') data.name = seldata.name;
      if(data.father === '') data.father = seldata.father;
      if(data.email === '') data.email = seldata.email;
      if(data.doc === '') data.doc = seldata.doc;
      if(data.amount === '') data.doc = seldata.amount;
      var options = {
        year: "numeric",
        month: "2-digit",
        day: "numeric"
    };
      data.doc = new Date(data.doc).toLocaleDateString("en", options);
      onUpdate(data);
      reset();
      setModalShow(false);
  };

  const onUpdate = (data) => {
      http.put('/appointment/update-appointment/' + seldata._id, data)
      .then((res) => {
        console.log('contact appointment' + res);
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
    const endpoint = "appointment/get-appointment";
    http.get(endpoint, { headers })
      .then((response) => {
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
              <Form.Label>Father </Form.Label>
              <Form.Control  placeholder={seldata.father} {...register("father")} />
            </Form.Group>            
            <Form.Group className="mb-3" controlId="formEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control  placeholder={seldata.email} {...register("email")} />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formEmail">
              <Form.Label>Appoinment Date: {seldata.doc}</Form.Label>
              <Form.Control  type='date' placeholder={seldata.doc} {...register("doc")} />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formEmail">
              <Form.Label>Amount: {seldata.amount}</Form.Label>
              <Form.Control  type='text' placeholder={seldata.amount} {...register("amount")} />
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
      .delete("/appointment/delete-appointment/" + e._id)
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
        <Spin spinning={loading}  tip="Loading Appointment data..." size="large">
       <section>
         <div
           className="site-layout-background"
           style={{ padding: 24, minHeight: 360 }}
         >
           <section className="mb-2">
             <Row>
               <h3>Appointment Data:</h3>
             </Row>
           </section>
           <section>
             {data.length > 0 ? (
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
                     <th>Father Name</th>
                     <th>Email</th>
                     <th>Amount</th>
                     <th>Date</th>
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
                         <td>{item.father}</td>
                         <td>{item.email}</td>
                         <td>{item.amount}</td>
                         <td>{item.doc}</td>
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

export default Appointments

