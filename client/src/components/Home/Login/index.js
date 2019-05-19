import React from "react";
import "./style.css";
import { Modal, Button, TextInput } from 'react-materialize';

const openStyle = {
  zIndex: 1003,
  display: "block",
  opacity: 1,
  top: "10%",
  transform: "scaleX(1) scaleY(1)"
}

const Login = props => {
  const { handleLoginClose } = props;
  const { open } = props;
  const style = open ? openStyle : {}
  return (
    <Modal header="Existing Users Sign In" syle={style} onClick={handleLoginClose} trigger={<Button />}>
      <TextInput icon="accoun-circle" label="User Name" />
      <TextInput icon="lock" label="Password" />

    </Modal>

  );
}

export default Login;

// {/* <div class="modal modal1" id="login" style={style}>
//         <div class="modal-content">
//           <h2>Existing Users Sign In</h2>
//           <div class="row">
//             <form class="col s12">
//               <div class="row">
//                 <div class="input-field col s12">
//                   <i class="material-icons prefix">account_circle</i>
//                   <input id="user_name_login" type="text" class="validate"/>
//                   <label for="user_name">User Name</label>
//                 </div>
//               </div>
//               <div class="row">
//                 <div class="input-field col s12">
//                   <i class="material-icons prefix">lock</i>
//                   <input id="password_login" type="password" class="validate"/>
//                   <label for="password">Password</label>
//                 </div>
//               </div>
//             </form>
//           </div>
//         </div>
      
//         <div class="left-align" id="modal-footer">
//           <a href="#" id="login_submit" class="modal-close btn amber accent-4">Log In</a>
//           <a href="#" id="login_close" onClick={handleLoginClose} class="modal-close btn amber accent-4">Close</a>
//         </div>
//       </div> */}