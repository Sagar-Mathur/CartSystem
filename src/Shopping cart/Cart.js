import { Container } from "react-bootstrap";
import bootstrap from "bootstrap";
import { Row } from "react-bootstrap";
import { Col } from "react-bootstrap";
import { useState } from "react";
import '../App.css';
import e from "cors";

function Cart() {
    const [search,setSearch]=useState('')
    const itemname = ['Chicken Burgur', 'Aloo tikki', 'Cheese Burgur', 'Crispy Burgur', 'Double Aloo tikki', 'Veggie Burger', 'Mushroom Swiss Burger', 'BBQ Bacon Burger', 'Classic Cheeseburger'];
    const item_img = ['burgur-1.png'];
    const item_price = [300]
    const Searchbar = (e) => {
        setSearch(e.target.value)
        showlist(e)
        console.log(search)
    }
   
    const filteredData = itemname.filter(item =>
        item.toLowerCase().startsWith(search.toLowerCase())
      );
     
      console.log(filteredData)
     function showlist(e){
         var id=document.getElementById('suggest')  
        if(e.target.value !== ''){
            id.style.display='block'; 
        }else if(e.target.value == ''){
            id.style.display='none';  

        }
     }
    return (

        <div className="container" style={{ marginTop: "15px" }}>
            <div className="row" style={{ marginLeft: "0px" }}>
                <div style={{ marginTop: '50px' }}>
                    <input type="search" className="search-box" placeholder="Search here..." name="search" value={search}  onChange={Searchbar}
                    />

                    <ul className="sugestion-list" id="suggest" >
                    {filteredData.map((i,index)=>(

                        <li style={{listStyleType:'none'}} key={index}>{i}</li>
                    ))}
                    </ul>

                </div>
                {itemname.map((item, index) => (
                    <div key={index} className="items col-md-3 card" style={{ marginLeft: '40px', marginTop: '20px' }}>
                        <img className="card-img" src="burgur-1.png" />
                        <div className="card-body">
                            <h3 className="card-title">{item}</h3>
                            <p className="card-text">lets get the correct item to you it here</p>
                            <button className="btn btn-primary active" >Buy Now</button>
                        </div>
                    </div>
                ))}
            </div>

        </div>
    )
}


export default Cart;