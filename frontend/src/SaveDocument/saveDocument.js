import React from 'react'
import Navbar from '../Navbar/Navbar';
import Footer from '../Homepage/Footer';
import LOM1 from '../assets/images/save-document/LOM.pdf';
import EuroPass from '../assets/images/save-document/EuroPass CV.pdf'
import LOMTUM from '../assets/images/save-document/LOM TUM.pdf'
import LOR from '../assets/images/save-document/LOR.pdf'
import SOR from '../assets/images/save-document/SOP.pdf'
import { List,Avatar} from 'antd';
import {
    FileMarkdownTwoTone 
} from '@ant-design/icons';

function SaveDocument() {

    const data = [
        {
          title: 'EuroPass CV',
          des:'EuroPass CV you Can Download it by clicking on It',
          file:EuroPass
        },
        {
          title: 'LOM TUM',
          des:'LOM TUM you Can Download it by clicking on It',
          file:LOMTUM
        },
        {
          title: 'LOM',
          des:'LOM',
          file:LOM1
        },
        {
          title: 'LOR',
          des:'LOR you Can Download it by clicking on It',
          file:LOR
        },
        {
            title: 'SOR',
            des:'SOR you Can Download it by clicking on It',
            file:SOR
          }
      ];
  return (
    <>
     <Navbar/>
     <div className="page-content bg-white">
    <div className="page-banner ovbl-dark" style={{ backgroundImage: "url(" + require('../assets/images/banner/banner1.jpg') + ")"}}>
        <div className="container">
            <div className="page-banner-entry">
                <h1 className="text-white">Documents</h1>
             </div>
        </div>
    </div>
    <div className="breadcrumb-row">
        <div className="container">
            <ul className="list-inline">
                <li><a href="#">Home</a></li>
                <li>Save Document</li>
            </ul>
        </div>
    </div>
    <div className="content-block">
        <div className="section-area">
            <div className="container" style={{marginTop: `10px`}}>
            <h3 style={{color:` #3f189a`}}>Document Files By Clicking on it.</h3>{"\n"}
                <div className="ttr-blog-grid-3 row" id="masonry">
                <List itemLayout="horizontal" dataSource={data}
                    renderItem={item => (
                    <List.Item>
                        <List.Item.Meta
                        avatar={ <Avatar style={{margin:`10px`}} icon={ <FileMarkdownTwoTone /> }/>}
                        title={<a href={item.file}>{item.title}</a>}
                        description={item.des}
                        />
                    </List.Item>
                    )} />
                </div>
            </div>
        </div>
    </div>
    <Footer/>
   
</div>
    </>
  )
}

export default SaveDocument