import { useEffect, useState } from "react";
import axios from "axios";

function Curd() {
    const [Detail, userDetail] = useState([])
    const [Edit, setEdit] = useState(-1)
    const [button, updateButton] = useState('Save')
    const [newData, setNewData] = useState([])
    const [Data, setData] = useState({
        Name: '',
        Email: '',
        Password: '',
        userId: '',
        date: '',
    })
    const handleChange = (e) => {
        e.preventDefault();

        setData({ ...Data, [e.target.name]: e.target.value })
    }
    useEffect(() => {
        (axios.get('https://fakestoreapi.com/carts')
            .then(res =>  {
                userDetail(res.data)
            }))
    }, [])

    const handleADD=()=>{
        
        axios.post('https://fakestoreapi.com/carts',{
            method: 'POST',
            body:JSON.stringify(Data)
        }).then(res=>
            userDetail[res.data]
          )
    }
     const handleUpdate=()=>{
       axios.put('https://fakestoreapi.com/carts',{
           method: 'PUT',                                    
           body:JSON.stringify()
         }).then(res=>{
            userDetail(res.data)
          })
    }
    const handleDelete=()=>{
        // e.preventDefault();
        axios.delete('https://fakestoreapi.com/carts/6',{
            method:"DELETE"
        })
            .then(res=>console.log(res.data))
    }
    // console.log(Data)
    const handleSubmit = (e) => {
        e.preventDefault();
        if (button === 'Update') {
            const newList = Detail.map((row, i) => {
                if (Edit == i) {
                    return row = Data;
                } else {
                    return row;
                }

            })
            userDetail(newList)
            updateButton('Save')
            setData({
                Name: '',
                Email: '',
                Password: '',
                userId: '',
                date: '',
            })

        } else if (button === 'Save') {

            handleADD()
            userDetail([...Detail, Data])
            setData({
                Name: '',
                Email: '',
                Password: '',
                userId: '',
                date: '',
                products: '',

            })
        }
    }
    function Delete(i,id) {
        const newArry = [...Detail]
        newArry.splice(i, 1)
        console.log(newArry)
        userDetail(newArry)
        handleDelete(id)
    }
    function Update(value, i) {

        setData({
            Name: value.Name,
            Email: value.Email,
            Password: value.Password,
            userId: value.userId,
            date: value.date,
            products: value.products,
        })
        updateButton('Update')
        setEdit(i)
        handleUpdate()
        //console.log(Edit)
    }

    return (
        <div className="">

            <div className="container ">
                <div className="row">
                    <div className="col-md-4">
                        <form onSubmit={handleSubmit}>
                            <label>Name:</label>
                            <input type="text"
                                name="Name"
                                value={Data.Name}
                                onChange={handleChange}
                                placeholder="Enter Name" />

                            <br></br>
                            <br></br>
                            <label>Email:</label>
                            <input type="email"
                                name="Email"
                                value={Data.Email}
                                onChange={handleChange}
                                placeholder="Enter Email" />

                            <br></br>
                            <br></br>
                            <label>Password:</label>
                            <input type="text"
                                name="Password"
                                value={Data.Password}
                                onChange={handleChange}
                                placeholder="Enter password" />
                            <br /><br />


                            <label>UserId:</label>
                            <input type="text"
                                name="userId"
                                value={Data.userId}
                                onChange={handleChange}
                                placeholder="Enter userId" />
                            <br /><br />

                            <label>Date:</label>
                            <input type="text"
                                name="date"
                                value={Data.date}
                                onChange={handleChange}
                                placeholder="Enter date" />
                            <br /><br />

                            <label>Product:</label>
                            <input type="text"
                                name="products"
                                value={Data.products}
                                onChange={handleChange}
                                placeholder="Enter date" />


                            <br /><br /><button type="submit" className="btn bg-primary">{button}</button>
                        </form>
                    </div>
                    <div className="col-md-8">
                        <table className="table table-hover">
                            <thead>
                                <tr>
                                    <th>Name</th>
                                    <th>Email</th>
                                    <th>Password</th>
                                    <th>userId</th>
                                    <th>Date</th>
                                    <th>products</th>

                                </tr>
                            </thead>
                            <tbody>
                                {Detail?.map((item, index) => (


                                    <tr key={index}>
                                        <td>{item.Name}</td>
                                        <td>{item.Email}</td>
                                        <td>{item.Password}</td>
                                        <td>{item.userId}</td>
                                        <td>{item.date}</td>
                                        {/* <td>{item.products.products}</td> */}


                                        <td><button className="btn bg-primary" onClick={() => Update(item, index)}>Update</button></td>
                                        <td><button className="btn bg-danger" onClick={() => Delete(index,item.id)}>Delete</button></td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default Curd;