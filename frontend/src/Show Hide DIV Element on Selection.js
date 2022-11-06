import React , {  useState} from "react";
import {  Container } from 'react-bootstrap';
import Select from 'react-select';

function Selectdropdown() {
  const [showhide, setShowhide]=useState('');
  const [selectedOption, setSelectedOption] = useState([]);
  const [data, setData] = useState([]);
  
  const handleshowhide=(event)=>{
    let arr = [];
    universities.forEach(element => {
      if(element.code === event.code){
        arr.push(element)
      }
    });
    console.log(arr);
    setSelectedOption(arr);
   }
    
	const countries = [
		{ value: 'Canada', label: 'Canada', code:1 },
		{ value: 'England', label: 'England',code:2 },
		{ value: 'Australia', label: 'Australia',code:3 },
		{ value: 'Pakistan', label: 'Pakistan',code:4 },
		{ value: 'Turkey', label: 'Turkey',code:5 },
		];

   const universities = [
		{ value: 'University of Toronto', label: 'University of Toronto' ,code:1 },
		{ value: 'University Of British Columbia', label: 'University Of British Columbia',code:1 },
		{ value: 'University of Alberta', label: 'University of Alberta',code:1 },
		{ value: 'University of Waterloo', label: 'University of Waterloo',code:1 },
		{ value: 'Western University', label: 'Western University',code:1 },
    { value: 'University of Oxford', label: 'University of Oxford',code:2},
    { value: 'Anglia Ruskin University', label: 'Anglia Ruskin University',code:2},
    { value: 'University of Cambridge', label: 'University of Cambridge',code:2},
    { value: 'University College London', label: 'University College London',code:2},
    { value: 'University of London', label: 'University of London',code:2},
    { value: 'Monash University', label: 'Monash University',code:3},
    { value: 'University of Melbourne', label: 'University of Melbourne',code:3},
    { value: 'University of Sydney', label: 'University of Sydney',code:3},
    { value: 'University Of New South Wales', label: 'University Of New South Wales',code:3},
    { value: 'Australian National University', label: 'Australian National University',code:3},
    { value: 'University of Lahore', label: 'University of Lahore',code:4},
    { value: 'University Of Punjab', label: 'University Of Punjab',code:4},
    { value: 'COMSATS University Islamabad', label: 'COMSATS University Islamabad',code:4},
    { value: 'University of Engi8neering and Technology', label: 'University of Engineering and Technology',code:4},
    { value: 'Quaid-i-Azam University', label: 'Quaid-i-Azam University',code:4},
    { value: 'Istanbul University', label: 'Istanbul University',code:5},
    { value: 'Ankara University', label: 'Ankara University',code:5},
    { value: 'Marmara University', label: 'Marmara University',code:5},
    { value: 'Istanbul Aydin University', label: 'Istanbul Aydin University',code:5},
    { value: 'Anadolu University', label: 'Anadolu University',code:5}
  
  ];

  return (
    <React.Fragment>
      <Container>
          <div className="row fthight">    
           
           <div className="col-sm-6">
           <h4 className="mt-3">Show Hide DIV Element on Selection option in ReactJs</h4>
          
           <Select className='col-6 text-dark'
        onChange={handleshowhide}
        options={countries}
        />
        <Select className='col-6 text-dark'
        onChange={data}
        options={selectedOption}
        />
           </div>  
          </div>
          </Container>
    </React.Fragment>
  );
}
export default Selectdropdown;