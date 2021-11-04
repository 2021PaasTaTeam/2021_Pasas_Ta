import * as React from "react";
import { List, Datagrid, Edit, Create, SimpleForm, DateField, TextField, EditButton, TextInput, DateInput } from 'react-admin';
import BookIcon from '@material-ui/icons/Book';
export const ItemIcon = BookIcon;

const postFilters = [
    <TextInput label="Search" source="q" alwaysOn />,
];

export const ItemList = (props) => (
    <List {...props} filters={postFilters} >
        <Datagrid>
            <TextField source="itemId" />
            <TextField source="name" />
            <TextField source="content" />
            <TextField source="registration_date" />
            <TextField source="modification_date" />
            <TextField source="storeFileName" />
            <TextField source="price" />
            <TextField source="stockQuantity" />
            <EditButton basePath="/item" />
        </Datagrid>
    </List>
);

const PostTitle = ({ record }) => {
    return <span>Post {record ? `"${record.title}"` : ''}</span>;
};

export const ItemEdit = (props) => (
    <Edit title={<PostTitle />} {...props}>
        <SimpleForm>
        <TextField source="itemId" />
            <TextInput source="name" />
            <TextInput source="content" />
            <TextField source="registration_date" />
            <TextField source="modification_date" />
            <TextInput source="storeFileName" />
            <TextInput source="price" />
            <TextInput source="stockQuantity" />
        </SimpleForm>
    </Edit>
);

export const ItemCreate = (props) => (
    <Create title="Create a Post" {...props}>
        <SimpleForm>
        <TextInput source="itemId" />
            <TextInput source="name" />
            <TextInput source="content" />
            <DateInput source="registration_date" />
            <DateInput source="modification_date" />
            <TextInput source="storeFileName" />
            <TextInput source="price" />
            <TextInput source="stockQuantity" />
        </SimpleForm>
    </Create>
);