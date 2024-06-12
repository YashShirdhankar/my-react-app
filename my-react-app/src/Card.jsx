import yash from "./assets/yash.jpeg"
function Card(){

  

  return(
    
    <div className="card">
      <img className="card-image" src={yash} alt="profile picture"></img>
      <h2 className="card-title">Yash</h2>
      <p className="card-text"> I name going to be a coder</p>
    </div>
    
  );
}

export default Card