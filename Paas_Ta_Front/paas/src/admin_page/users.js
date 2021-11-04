import * as React from "react";
import { List, Datagrid, Edit, Create, SimpleForm, DateField, TextField, EditButton, TextInput, DateInput } from 'react-admin';
import BookIcon from '@material-ui/icons/Book';
export const UserIcon = BookIcon;

export const UserList = (props) => (
    <List {...props}>
        <Datagrid>
            <TextField source="id" />
            <TextField source="name" />
            <TextField source="email" />
            <TextField source="address" />
            <TextField source="type" />
            <EditButton basePath="/user" />
        </Datagrid>
    </List>
);

const PostTitle = ({ record }) => {
    return <span>Post {record ? `"${record.title}"` : ''}</span>;
};

export const UserEdit = (props) => (
    <Edit title={<PostTitle />} {...props}>
        <SimpleForm>
            <TextField disabled source="id" />
            <TextInput source="name" />
            <TextInput source="email" />
            <TextInput source="type" />
            <TextInput source="address" />
        </SimpleForm>
    </Edit>
);

export const UserCreate = (props) => (
    <Create title="Create a Post" {...props}>
        <SimpleForm>
        <TextInput disabled source="id" />
            <TextInput source="name" />
            <TextInput source="email" />
            <TextInput source="type" />
            <TextInput source="address" />
        </SimpleForm>
    </Create>
);