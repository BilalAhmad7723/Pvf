
import NavForDash from './NavForDash';
import { React, useState, useEffect } from "react";
import http from "../Config";
//import { connect} from 'react-redux';
import { useForm } from "react-hook-form";
import { Form,Col,Row,Container,Button,Table, Modal} from "react-bootstrap";
import { Popconfirm, message, Badge ,Empty,Spin} from "antd";

const Students = () => {


  const [loading, setloading] = useState(false);
  const [modalShow, setModalShow] = useState(false);
  const [data, setData] = useState([]);
  const [seldata, setseldata] = useState({});
  const { register,control, handleSubmit,reset } = useForm();
  const onSubmit = (data) => {
      if(data.email === '') data.email = seldata.email;
      if(data.cnic === '') data.cnic = seldata.cnic;
      if(data.name === '') data.name = seldata.name;
      if(data.father === '') data.father = seldata.father;
      if(data.edu === '') data.edu = seldata.edu;
      if(data.user === '') data.user = seldata.user;
      if(data.password === '') data.password = seldata.password;
      if(data.address === '') data.address = seldata.address;
      if(data.status === '') data.status = seldata.status;
      onUpdate(data);
      reset();
      setModalShow(false);
  };

  const onUpdate = (data) => {
    console.log(data);
      http.put('/student/update-student/' + seldata._id, data)
      .then((res) => {
        console.log('Student updated' + res)
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
    const endpoint = "student/get_student";
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
            <Modal.Title style={center} id="EditModal" >Student Details<h5 style={{fontSize: 10,color: `red`}}>*Fill only those Fileds you want to update</h5></Modal.Title>
          </Modal.Header>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Modal.Body>
            <Row>
              <Col lg={6} md={6} sm={6} >
             <Form.Group className="mb-3" controlId="formName">
              <Form.Label>Name</Form.Label>
              <Form.Control  placeholder={seldata.name} {...register("name")} />
            </Form.Group>             
            <Form.Group className="mb-3" controlId="formuser">
              <Form.Label>User Name</Form.Label>
              <Form.Control  placeholder={seldata.user} {...register("user")} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formuser">
              <Form.Label>Password</Form.Label>
              <Form.Control  placeholder={seldata.password} {...register("password")} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formEducation">
              <Form.Label>Education</Form.Label>
              <Form.Control  placeholder={seldata.edu} {...register("edu")} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formCount">
              <Form.Label>status</Form.Label>
              <Form.Control placeholder={seldata.status} readOnly {...register("status")} />
            </Form.Group>
              </Col>
              <Col lg={6} md={6} sm={6} >
              <Form.Group className="mb-3" controlId="formFatherName">
              <Form.Label>Father Name</Form.Label>
              <Form.Control  placeholder={seldata.father} {...register("father")} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control  placeholder={seldata.email} {...register("email")} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formCnic">
              <Form.Label>Cnic</Form.Label>
              <Form.Control  placeholder={seldata.cnic} {...register("cnic")} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formCnic">
              <Form.Label>address</Form.Label>
              <Form.Control  placeholder={seldata.address} {...register("address")} />
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
      .delete("/student/delete-student/" + e._id)
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
    message.error("Candiate not Deleted!");
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
        <Spin spinning={loading}  tip="Loading Students..." size="large">
       <section>
         <div
           className="site-layout-background"
           style={{ padding: 24, minHeight: 360 }}
         >
           <section className="mb-2">
             <Row>
               <h3>Students:</h3>
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
                     <th>Father</th>
                     <th>User Name</th>
                     <th>Password</th>
                     <th>CNIC</th>
                     <th>Education</th>
                     <th>Email</th>
                     <th>Address</th>
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
                         <td>{item.user}</td>
                         <td>{item.password}</td>
                         <td>{item.cnic}</td>
                         <td>{item.edu}</td>
                         <td>{item.email}</td>
                         <td>{item.address}</td>
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

export default Students
