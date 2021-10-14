import React from 'react';
import { Link} from 'react-router-dom';

function Recurso (){
    return(
        <div className="cont-recurso">

            <Link to ="/usuarios">
            <div className = 'view-recurso'>
                <br/>
                <img src="https://res.cloudinary.com/dc7uyfv94/image/upload/v1634236549/user-icon_xgdshj.svg" alt="user image" className="dash-icons">
                </img>
                <h2> Usuarios </h2>
            </div>  
            </Link>
            
            <Link to ="/productos">
            <div className = 'view-recurso'>
                <br/>
                <img src="https://res.cloudinary.com/dc7uyfv94/image/upload/v1634236549/skate-icon_sgkame.svg" alt="products" className="dash-icons">
                </img>
                <h2> Productos </h2>
            </div>
            </Link>
            <Link to ="/categorias">
            <div className = 'view-recurso'>
                <br/>
                <img src="https://res.cloudinary.com/dc7uyfv94/image/upload/v1634236549/category-icon_tb0kxl.svg" alt="categories" className="dash-icons">
                </img>
                <h2> Categorías </h2>
            </div>
            </Link>
        </div>
        
    )
}
export default Recurso;