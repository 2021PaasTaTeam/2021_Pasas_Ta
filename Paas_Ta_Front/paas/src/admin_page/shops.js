import * as React from "react";
import { List, Datagrid, Edit, Create, SimpleForm, DateField, TextField, EditButton, TextInput, DateInput } from 'react-admin';
import BookIcon from '@material-ui/icons/Book';
export const ShopIcon = BookIcon;

export const ShopList = (props) => (
    <List {...props}>
        <Datagrid>
            <TextField source="shopId" />
            <TextField source="email" />
            <TextField source="name" />
            <TextField source="phone" />
            <TextField source="image.uploadFileName" />
            <TextField source="image.storeFileName" />
            <TextField source="bussinessType" />
            <TextField source="region" />
            <TextField source="address" />
            <TextField source="userType" />
            <EditButton basePath="/shop" />
        </Datagrid>
    </List>
);

const PostTitle = ({ record }) => {
    return <span>Post {record ? `"${record.title}"` : ''}</span>;
};

export const ShopEdit = (props) => (
    <Edit title={<PostTitle />} {...props}>
        <SimpleForm>
            <TextField source="shopId" />
            <TextInput source="email" />
            <TextInput source="name" />
            <TextInput source="phone" />
            <TextInput source="image.uploadFileName" />
            <TextInput source="image.storeFileName" />
            <TextInput source="bussinessType" />
            <TextInput source="region" />
            <TextInput source="address" />
            <TextInput source="userType" />
        </SimpleForm>
    </Edit>
);

export const ShopCreate = (props) => (
    <Create title="Create a Post" {...props}>
        <SimpleForm>
        <TextInput source="shopId" />
            <TextInput source="email" />
            <TextInput source="name" />
            <TextInput source="phone" />
            <TextInput source="image.uploadFileName" />
            <TextInput source="image.storeFileName" />
            <TextInput source="bussinessType" />
            <TextInput source="region" />
            <TextInput source="address" />
            <TextInput source="userType" />
        </SimpleForm>
    </Create>
);