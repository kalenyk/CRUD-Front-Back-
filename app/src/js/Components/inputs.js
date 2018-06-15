import React from "react";
import TextField from "material-ui/TextField";
import Dropzone from "react-dropzone";

export const renderInput = ({input, label,className,  meta: {touched, error}}) => (
    <div>
        <TextField hintText={label} errorText={touched && error } underlineShow={false} className={className}  {...input}/>
    </div>
);

export const renderDropzoneInput = (field) => {
    const files = field.input.value;
    return (
        <div className="new-product__dropzone">
            <Dropzone
                name={field.name}
                onDrop={( filesToUpload, e ) => field.input.onChange(filesToUpload)}
            >
                <div>Try dropping some image files here</div>
            </Dropzone>
            {field.meta.touched &&
            field.meta.error &&
            <span className="error">{field.meta.error}</span>}
            {files && Array.isArray(files) && (
                <ul>
                    { files.map((file, i) => <li key={i}>{file.name}</li>) }
                </ul>
            )}
        </div>
    );
};