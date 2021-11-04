import * as React from "react";
import { List, downloadCSV, Datagrid, Edit, Create, SimpleForm, DateField, TextField, EditButton, TextInput, DateInput } from 'react-admin';
import BookIcon from '@material-ui/icons/Book';
import jsonExport from 'jsonexport/dist';
export const UserIcon = BookIcon;

const exporter = posts => {
    const postsForExport = posts.map(post => {
        const { backlinks, author, ...postForExport } = post; // omit backlinks and author
        postForExport.name = post.name; // add a field
        return postForExport;
    });
    jsonExport(postsForExport, {
        headers: ['id', 'name', 'email', 'address', 'type'] // order fields in the export
    }, (err, csv) => {
        downloadCSV(csv, 'user'); // download as 'posts.csv` file
    });
};

const postFilters = [
    <TextInput label="Search" source="q" alwaysOn />,
];

export const UserList = (props) => (
    <List {...props} filters={postFilters} exporter={exporter} >
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