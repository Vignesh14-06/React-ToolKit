import { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useSelector } from 'react-redux';
import { useDispatch } from "react-redux";
import { updateUser } from './Slice/Slice';


const UpdateList = (props) => {
    const [input, setInput] = useState({
        name: "",
        email: "",
        city: "",
      });
      const [id,setId] = useState(0);
      const {selectedUser} = useSelector((state)=> state.list)
  const dispatch = useDispatch();


      useEffect (()=>{
        if(Object.keys(selectedUser).length !== 0){
         setInput({
            name:selectedUser.name,
            email:selectedUser.email,
            city:selectedUser.city
         })
         setId(selectedUser.id)
        }
      },[selectedUser])

 
    const handleChange = (e) => {
        const { name, value } = e.target;
        setInput({ ...input, [name]: value });
      };

      const onUpdate = ()=> {
        props.onHide()
        dispatch(updateUser({id:id,name:input.name,email:input.email,city:input.city}))
        
    }
  return (
    <div>
      <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Updata User Details
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
      <form
        style={{ display: "flex", flexDirection: "column" }}
      >
        <div>
      <label>Name:</label>
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={input.name}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>EmailId:</label>
          <input
            type="text"
            name="email"
            placeholder="email"
            value={input.email}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>City:</label>
          <input
            type="text"
            name="city"
            placeholder="City"
            value={input.city}
            onChange={handleChange}
          />
          </div>
          </form>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={()=>onUpdate()}>Update</Button>
      </Modal.Footer>
    </Modal>
    </div>
  )
}

export default UpdateList
