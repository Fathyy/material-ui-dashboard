import React, {useState} from 'react';
import {Avatar, Box, Button, IconButton, TextField, useMediaQuery} from "@mui/material";
import * as yup from "yup";
import {Formik} from "formik";
import Header from "../../Header.jsx";
import AddAPhotoIcon from '@mui/icons-material/AddAPhoto';

function Profile(props) {
    const isNonMobile = useMediaQuery('(min-width: 600px)');

    const [avatarImage, setAvatarImage ] =useState(null);

    const handleAvatarChange = (e, setFieldValue) => {
        const file = event.target.files[0];
        if(file) {
            const imageUrl = URL.createObjectURL(file);
            setAvatarImage(imageUrl);
            setFieldValue('avatar', file)
        }
    }

    const handleFormSubmit = (values, { resetForm }) => {
        const formData = new FormData();
        formData.append('name', values.name);
        formData.append('email', values.email);
        formData.append('location', values.location);
        formData.append('phone', values.phone);
        if (values.avatar) {
            formData.append('avatar', values.avatar);
        }

        console.log('Form Values:', values);
        console.log('FormData entries:', Object.fromEntries(formData));
    }

    const handleReset = (resetForm) => {
        resetForm();
        setAvatarImage(null);
    }

    // Phone number regex validation pattern
    const phoneRegExp = /^((\+[1-9]{1,4}[ -]?)|(\([0-9]{2,3}\)[ -]?)|([0-9]{2,4})[ -]?)*?[0-9]{3,4}[ -]?[0-9]{3,4}$/;
    // Validation schema using Yup
    const profileSchema = yup.object().shape({
        name: yup.string().required("Name is required"),
        email: yup.string()
            .email("Invalid email address")
            .required("Email is required"),
        location: yup.string().required("Location is required"),
        phone: yup.string()
            .matches(phoneRegExp, "Phone number is not valid")
            .required("Phone number is required"),
        avatar: yup.mixed(),
    });

    // initial form values
    const initialValues = {
        name: "",
        email: "",
        location: "",
        phone: "",
        avatar: null,
    };

    return (
        <Box m="20px">
            <Header title="PROFILE" subtitle="Manage Your Profile Information" />

            <Formik
                onSubmit={handleFormSubmit}
                initialValues={initialValues}
                validationSchema={profileSchema}
            >
                {({
                      values,
                      errors,
                      touched,
                      handleBlur,
                      handleChange,
                      handleSubmit,
                      setFieldValue,
                      resetForm,
                  }) => (
                    <form onSubmit={handleSubmit}>
                        {/*Avatar Upload section*/}
                        <Box
                            display="flex"
                            justifyContent="center"
                            alignItems="center"
                            mb="30px"
                        >
                            <Box position="relative">
                                <Avatar
                                    src={avatarImage}
                                    sx={{
                                        width: 120,
                                        height: 120,
                                        border: '2px solid #1976d2',
                                    }}
                                />
                                <IconButton
                                    sx={{
                                        position: 'absolute',
                                        bottom: 0,
                                        right: 0,
                                        backgroundColor: 'white',
                                        '&:hover': { backgroundColor: '#f5f5f5' },
                                    }}
                                    component="label"
                                >
                                    <input
                                        hidden
                                        accept="image/*"
                                        type="file"
                                        onChange={(e) => handleAvatarChange(e, setFieldValue)}
                                    />
                                    <AddAPhotoIcon />
                                </IconButton>
                            </Box>
                        </Box>

                        {/*Form fields*/}
                        <Box
                            display="grid"
                            gap="30px"
                            gridTemplateColumns="repeat(4, minmax(0, 1fr))"
                            sx={{
                                "& > div": { gridColumn: isNonMobile ? undefined : "span 4" },
                            }}
                        >
                            <TextField
                                fullWidth
                                variant="filled"
                                type="text"
                                label="Full Name"
                                onBlur={handleBlur}
                                onChange={handleChange}
                                value={values.name}
                                name="name"
                                error={!!touched.name && !!errors.name}
                                helperText={touched.name && errors.name}
                                sx={{ gridColumn: "span 4" }}
                            />

                            <TextField
                                fullWidth
                                variant="filled"
                                type="text"
                                label="Email"
                                onBlur={handleBlur}
                                onChange={handleChange}
                                value={values.email}
                                name="email"
                                error={!!touched.email && !!errors.email}
                                helperText={touched.email && errors.email}
                                sx={{ gridColumn: "span 4" }}
                            />

                            <TextField
                                fullWidth
                                variant="filled"
                                type="text"
                                label="Location"
                                onBlur={handleBlur}
                                onChange={handleChange}
                                value={values.location}
                                name="location"
                                error={!!touched.location && !!errors.location}
                                helperText={touched.location && errors.location}
                                sx={{ gridColumn: "span 4" }}
                            />

                            <TextField
                                fullWidth
                                variant="filled"
                                type="text"
                                label="Phone Number"
                                onBlur={handleBlur}
                                onChange={handleChange}
                                value={values.phone}
                                name="phone"
                                error={!!touched.phone && !!errors.phone}
                                helperText={touched.phone && errors.phone}
                                sx={{ gridColumn: "span 4" }}
                            />
                        </Box>

                        {/* Buttons */}
                        <Box display="flex" justifyContent="end" gap="20px" mt="20px">
                            <Button
                                type="button"
                                color="error"
                                variant="contained"
                                onClick={() => handleReset(resetForm)}
                            >
                                Reset
                            </Button>
                            <Button type="submit" color="secondary" variant="contained">
                                Update Profile
                            </Button>
                        </Box>
                    </form>
                )}
            </Formik>
        </Box>
    );
}

export default Profile;