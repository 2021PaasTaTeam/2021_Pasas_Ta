import * as React from "react";
import { List, Datagrid, Edit, Create, SimpleForm, DateField, TextField, EditButton, TextInput, DateInput } from 'react-admin';
import BookIcon from '@material-ui/icons/Book';
export const OrderIcon = BookIcon;

const postFilters = [
    <TextInput label="Search" source="q" alwaysOn />,
];

export const OrderList = (props) => (
    <List {...props} filters={postFilters} >
        <Datagrid>
            <TextField source="orderId" />
            <TextField source="userName" />
            <TextField source="orderDate" />
            <TextField source="orderStatus" />
            <TextField source="orderItems" />
            <EditButton basePath="/order" />
        </Datagrid>
    </List>
);

const PostTitle = ({ record }) => {
    return <span>Post {record ? `"${record.title}"` : ''}</span>;
};

export const OrderEdit = (props) => (
    <Edit title={<PostTitle />} {...props}>
        <SimpleForm>
        <TextField source="orderId" />
            <TextField source="userName" />
            <TextField source="orderDate" />
            <TextInput source="orderStatus" />
            <TextInput source="orderItems" />
        </SimpleForm>
    </Edit>
);

export const OrderCreate = (props) => (
    <Create title="Create a Post" {...props}>
        <SimpleForm>
        <TextInput source="itemId" />
            <TextInput source="userName" />
            <DateInput source="orderDate" />
            <TextInput source="orderStatus" />
            <TextInput source="orderItems" />
        </SimpleForm>
    </Create>
);