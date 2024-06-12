import PropTypes from 'prop-types'
function Students(props){

  return(
    <div className="student">
      <p>Name: {props.name}</p>
      <p>Age: {props.age}</p>
      <p>Student: {props.isstudent ? "yes":"no" } </p>
      


    </div>
    
  )
}
Students.protoType ={
  name: PropTypes.string,
  age: PropTypes.number,
  isstudent: PropTypes.bool,

}
Students.defaultProps = {
  name: "Guest",
  age: 0,
  isstudent:false,


}
export default Students