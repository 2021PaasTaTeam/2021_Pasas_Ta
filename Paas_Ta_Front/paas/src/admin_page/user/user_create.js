import { Create, SimpleForm, TextInput,SaveButton } from 'react-admin';
import React, { useState } from 'react';
import axios from 'axios';

function UserCreate(props) {
    const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [address, setAddress] = useState("");

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
  const onClickSignUp = () => {
    console.log('click login')
    console.log('ID : ', email)
    console.log('PW : ', password)
    console.log('NAME : ', name)
    console.log('ADD : ', address)
    let data = JSON.stringify({
      'password': password,
      'email': email,
      'name': name,
      'address': address
    })
    axios.post('http://localhost:8080/user', data, {
      headers: {
        'Content-type': 'application/json; charset=utf-8',
      }
    })
      .then(res => {
        console.log(res.data.name)
        if (res.data.email === undefined) {
          // id 일치하지 않는 경우 userId = undefined, msg = '입력하신 id 가 일치하지 않습니다.'
          alert('이미 등록된 이메일 계정입니다.')
        }
        else {
          alert('회원가입이 완료되었습니다.')
        }
      })
      .catch()
  }

    return(
    <Create title="Create a User" {...props} 
    >
        <SimpleForm save={onClickSignUp}>
        <TextInput disabled source="id"/>
            <TextInput source="name" value={name} onChange={onNameHandler}/>
            <TextInput source="email" value={email} onChange={onEmailHandler}/>
            <TextInput source="password" value={password} onChange={onPasswordHandler}/>
            <TextInput source="address" value={address} onChange={onAddressHandler}/>
            <TextInput source="type" />
        </SimpleForm>
    </Create>
);
}
export default UserCreate;