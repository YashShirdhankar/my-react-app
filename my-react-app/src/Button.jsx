
function Button(){
  let count=0;


  const handleClick = (e) => e.target.textContent = "ouch";
  

  const styles = {
    backgroundcolor: "hsl(39, 100%, 50%)",
    color: "green",
    padding: "10px 20px",
    borderradius: "20px",
    border: "none",
    cursor: "pointer",
  }

  



  return(<button onDoubleClick={(e) => handleClick(e)}style={styles}>click me </button>)
}

export default Button