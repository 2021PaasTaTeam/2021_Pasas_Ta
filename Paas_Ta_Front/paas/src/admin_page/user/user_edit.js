import { Edit, SimpleForm, TextField, TextInput } from 'react-admin';
import React, { useState } from 'react';
import axios from 'axios';

function UserEdit(props) {
    const [id, setId] = useState("");
    const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [address, setAddress] = useState("");
  const [type, setType] = useState("");

  const onIdHandler = (event) => {
    setId(event.currentTarget.value);
  }
  const onTypeHandler = (event) => {
    setType(event.currentTarget.value);
  }

  const onEmailHandler = (event) => {
    setEmail(event.currentTarget.value);
  }

  const onNameHandler = (event) => {
    setName(event.currentTarget.value);
  }

  const onPasswordHandler = (event) => {
    setPassword(event.currentTarget.value)
  }
  const onAddressHandler = (event) => {
    setAddress(event.currentTarget.value)
  }
  const onClickModify = () => {
    let data = JSON.stringify({
      'password': password,
      'name': name,
      'address': address
    })
    axios.post('https://onnuriservice.paas-ta.org/user/' + id, data, {
      headers: {
        'Content-type': 'application/json; charset=utf-8',
      }
    })
      .then(res => {
        //console.log(res.data.name)
        alert('회원 정보가 수정되었습니다.')
        window.location.replace("/admin#/")
      })
      .catch()
  }

    return(
        <Edit title={'User'} {...props}>
        <SimpleForm save={onClickModify} >
            <TextField disabled source="id" value={id} onChange={onIdHandler} />
            <TextInput source="name" value={name} onChange={onNameHandler}/>
            <TextInput source="email" value={email} onChange={onEmailHandler}/>
            <TextInput source="password" value={password} onChange={onPasswordHandler}/>
            <TextInput source="address" value={address} onChange={onAddressHandler}/>
            <TextInput source="type" value={type} onChange={onTypeHandler}/>
        </SimpleForm>
    </Edit>
);
}
export default UserEdit;