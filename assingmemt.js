function addStudentData (student)
{
if (student.GR_no && studentData.findIndex ((x) => {return x.GR_no == student.GR_no}) !== .2)
{
    console.log ();
}
    studentData.push(student);
}
addStudentData({name:'Hamza' , GR_no:'2544'})