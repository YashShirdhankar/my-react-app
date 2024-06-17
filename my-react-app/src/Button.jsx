
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

  



  return(<div class="button-container">
    <button class="button-3d">
      <div class="button-top">
        <span class="material-icons">❮</span>
      </div>
      <div class="button-bottom"></div>
      <div class="button-base"></div>
    </button>
    <button class="button-3d">
      <div class="button-top">
        <span class="material-icons">❯</span>
      </div>
      <div class="button-bottom"></div>
      <div class="button-base"></div>
    </button>
  </div>
  

);
  

}

export default Button