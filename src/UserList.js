import React, { useState } from "react";
import styles from "./userStyle.css";
import { useSelector } from "react-redux";
import { deleteUser,setSelectedUser } from "./Slice/Slice";
import { useDispatch } from "react-redux";
import UpdateList from "./UpdateList";

const UserList = () => {
  const [modalShow,setModalShow] = useState(false);
  const { userData } = useSelector((state) => state.list);
  console.log(userData, "userData");
  const dispatch = useDispatch();
  const deleteButton = (data) => {
    dispatch(deleteUser(data));
  };
  const updateButton = (data)=>{
 setModalShow(true);
 dispatch(setSelectedUser(data))
  }
  return (
    <div>
      <table>
        <tr className={styles.table}>
          <th>S.No</th>
          <th>Name</th>
          <th>E-mail</th>
          <th>City</th>
          <th>Actions</th>
        </tr>
        {userData.map((data, index) => (
          <>
            <tr>
              <td>{index + 1}</td>
              <td>{data.name}</td>
              <td>{data.email}</td>
              <td>{data.city}</td>
              <td>
                <button onClick={() => deleteButton(data)}>Delete</button>

                <button
                  onClick={()=>updateButton(data)}
                >
                  Update
                </button>
              </td>
            </tr>
          </>
        ))}
      </table>
      <UpdateList
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </div>
  );
};

export default UserList;
