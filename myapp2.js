const express = require('express');
const app= express();
const port = 3001;
//array of student JSON details
let students = [
{regno:'2021ICT1',name:'Bavan',age:23,course:'IT',gender:'male'},
{regno:'2021ICT2',name:'Gayan',age:22,course:'IT',gender:'male'},
{regno:'2021ICT3',name:'Kalani',age:20,course:'IT',gender:'female'},
{regno:'2021ICT4',name:'Nihal',age:21,course:'IT',gender:'male'},
{regno:'2021ICT5',name:'Sai',age:22,course:'IT',gender:'male'},
{regno:'2021ICT6',name:'Amala',age:23,course:'IT',gender:'female'}
];

app.get('/stu',(req,res)=>{
    res.send(students);
});
/*app.get('/stu/:id',(req,res)=>{
    const id=req.params.id
    //console.log(id)
    const result = students.find(student=>student.regno == id);
    res.send(result);
});
*/
app.listen(port,()=>{
    console.log(`Server is running on ${port}`);
})