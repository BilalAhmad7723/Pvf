import React, { useState,useEffect } from 'react';
import { FormControl,Input,FormHelperText,InputLabel } from '@mui/material';
import { Button, Container } from 'react-bootstrap';
import http from '../Config'
import { message } from 'antd';
// import Comments from './CommentsDataApi'
const CommentSection = () => {
	const [question, setquestion] = useState('');
const[answer_written,setanswer] =useState('');
const[finalArray,setfinalArray] =useState([]);

const success = (msg) => {
	message.success(msg);
  };
  const error1 = (msg) => {
	message.error(msg);
  };

const PostAns = (com) => {
	var getJson = localStorage.getItem('Registered')
    if(getJson){
		var options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
        var today  = new Date();
        let arrayName = JSON.parse(getJson);
		let Ansdata = {
			quesid:com.quesid,
			quesname:com.quesname,
			ques:com.ques,
			quesdate:com.quesdate,
			ansid:arrayName.user,
			ansname:arrayName.name,
			ans:answer_written,
			ansdate:today.toLocaleDateString("en-US", options)
		}
		debugger
		http.put('/faq/update-faq/'+com._id, Ansdata)
		.then((res) => {   
			debugger;
			success(res.message);
			setquestion('')
			getData();
		}).catch((error) => {
		  console.log(error)
		})
    }
	else {
		error1("Please Login First To Upload a New Question");
	}
}
const handlepost = () => {
	var getJson = localStorage.getItem('Registered')
    if(getJson){
		var options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
        var today  = new Date();
        let arrayName = JSON.parse(getJson);
		let data = {
			quesid:arrayName.user,
			quesname:arrayName.name,
			ques:question,
			quesdate:today.toLocaleDateString("en-US", options),
			ansid:"",
			ansname:"",
			ans:"",
			ansdate:""
		}
		http.post('/faq/add-faq/', data)
		.then((res) => {   
			success(res.message);

			getData()
		}).catch((error) => {
		  console.log(error)
		})
    }
	else {
		error1("Please Login First To Upload a New Question")
	}
}
let total = finalArray.length; 
useEffect(() => {
	getData();
  }, []);
 
  const getData = () => {
	const headers = { "Content-Type": "application/json" };
	const endpoint = "/faq/get-faq";
	http.get(endpoint, { headers })
	  .then((response) => {
		setfinalArray( response.data)
	  })
	  .catch((error) => {
		error1('Question not saved!!!')
	  });
  };
return (
<Container> 
<FormControl fullWidth sx={{ m: 1 }} variant="standard">
            <InputLabel htmlFor="my-input">Question</InputLabel>
            <Input id="my-input" aria-describedby="my-helper-text" onChange={(event) => setquestion(event.target.value)}/>
            <FormHelperText id="my-helper-text">Post Any Question.</FormHelperText>
            </FormControl>
			<Button variant="outline-success" onClick={handlepost} style={{float:`right`}}>Post a Question</Button>
<h5 className="comments-title m-4">{total} Comments</h5> 
<div className=" m-4">
{ finalArray.length > 0 ?
finalArray.map((curElem)=>{
return (    
<div className="clear" id="comment-list">
<div className="comments-area" id="comments">
<div className="clearfix m-b20">
<ol className="comment-list">
	<li className="comment">
		<div className="comment-body">
			<div className="comment-author vcard"> 
			<img  className="avatar photo" src="images/defaultuser.png" alt=""/> 
			<cite className="fn">{curElem.quesname}</cite> 
			</div>
			<div className="comment-meta"> 
			<a href="#">{curElem.quesdate.toLocaleString('de-DE', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}</a> </div>
			<p>  {curElem.ques}</p>
		</div>
		
<ol className="children">
{curElem.ans === '' ? <> <textarea className="form-control" placeholder='Reply' rows='4'   value={answer_written} onChange={(event) => {setanswer(event.target.value)}}  style={{width:`100%`,marginBottom:10}}> </textarea> <Button variant="outline-success" onClick={() => {PostAns(curElem)}} style={{float:`right`}}>Post</Button></>  : 
<li className="comment odd parent">
<div className="comment-body">
<div className="comment-author vcard">
<img  className="avatar photo" src="images/defaultuser.png" alt=""/>
<cite className="fn">{curElem.ansname}</cite>   </div>
<div className="comment-meta"> 
<a href="#">{curElem.ansdate}</a> </div>

<p> {curElem.ans}</p>
</div> </li> }
 </ol> </li> </ol>


</div>
</div>
</div>
)
}) : "No Question Available"

}
</div>
{/* <div className='m-4' >
<div className="clear" id="comment-list">
<div className="comments-area" id="comments">
<div className="clearfix m-b20">

<div className="comment-respond" id="respond">
<h4 className="comment-reply-title" id="reply-title">Leave a Reply </h4>
<form className="comment-form" id="commentform" method="post">
<p className="comment-form-author">
<label for="author">Name <span className="required">*</span></label>
<input type="text" value="" name="Author"  placeholder="Author" id="author"/>
</p>
<p className="comment-form-email">
<label for="email">Email <span className="required">*</span></label>
<input type="text" value="" placeholder="Email" name="email" id="email"/>
</p>
<p className="comment-form-url">
<label for="url">Website</label>
<input type="text"  value=""  placeholder="Website"  name="url" id="url"/>
</p>
<p className="comment-form-comment">
<label for="comment">Comment</label>
<textarea rows="8" name="comment" placeholder="Comment" id="comment"></textarea>
</p>
<p className="form-submit">
<input type="submit" value="Submit Comment" className="submit" id="submit" name="submit"/>
</p>
</form>
</div>
</div>
</div>
</div>
    </div> */}
</Container>
  )
}

export default CommentSection
