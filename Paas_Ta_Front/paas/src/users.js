import * as React from "react";
import { List, Datagrid, Edit, Create, SimpleForm, DateField, TextField, EditButton, TextInput, DateInput } from 'react-admin';
import BookIcon from '@material-ui/icons/Book';
export const PostIcon = BookIcon;

export const PostList = (props) => (
    <List {...props}>
        <Datagrid>
            <TextField source="id" />
            <TextField source="name" />
            <TextField source="email" />
            <TextField source="address" />
            <TextField source="type" />
            {/* <EditButton basePath="/users" /> */}
        </Datagrid>
    </List>
);

// const PostTitle = ({ record }) => {
//     return <span>Post {record ? `"${record.title}"` : ''}</span>;
// };

// export const PostEdit = (props) => (
//     <Edit title={<PostTitle />} {...props}>
//         <SimpleForm>
//             <TextInput disabled source="id" />
//             <TextInput source="name" />
//             <DateField source="email" />
//             <TextField source="type" />
//             <TextField source="address" />
//             {/* <TextInput source="teaser" options={{ multiline: true }} />
//             <TextInput multiline source="body" />
//             <DateInput label="Publication date" source="published_at" />
//             <TextInput source="average_note" />
//             <TextInput disabled label="Nb views" source="views" /> */}
//         </SimpleForm>
//     </Edit>
// );

// export const PostCreate = (props) => (
//     <Create title="Create a Post" {...props}>
//         <SimpleForm>
//             <TextInput source="title" />
//             <TextInput source="teaser" options={{ multiline: true }} />
//             <TextInput multiline source="body" />
//             <TextInput label="Publication date" source="published_at" />
//             <TextInput source="average_note" />
//         </SimpleForm>
//     </Create>
// );