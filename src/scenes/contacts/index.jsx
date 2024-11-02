import React from 'react';
import {Box, useTheme} from "@mui/material";
import {tokens} from "../../theme.js";
import Header from "../../Header.jsx";
import {mockDataContacts} from "../../data/mockData.js";
import {GridToolbar} from "@mui/x-data-grid";

function Contacts(props) {
    const theme = useTheme();
    const colors = tokens();

    const columns = [
        { field: "id", headerName: "ID", flex: 0.5 },
        { field: "registrarId", headerName: "Registrar ID" },
        {
            field: "name",
            headerName: "Name",
            flex: 1,
            cellClassName: "name-column--cell",
        },
        {
            field: "age",
            headerName: "Age",
            type: "number",
            headerAlign: "left",
            align: "left",
        },
        {
            field: "phone",
            headerName: "Phone Number",
            flex: 1,
        },
        {
            field: "email",
            headerName: "Email",
            flex: 1,
        },
        {
            field: "address",
            headerName: "Address",
            flex: 1,
        },
        {
            field: "city",
            headerName: "City",
            flex: 1,
        },
        {
            field: "zipCode",
            headerName: "Zip Code",
            flex: 1,
        },
    ];


    return (
        <Box m="20px">
            <Header title="CONTACTS"
                    subtitle="List of Contacts for Future Reference"/>
            <Box  m="40px 0 0 0"
                  height="75vh"
                  sx={{
                      "& .MuiDataGrid-root": {
                          border: "none",
                      },
                      "& .MuiDataGrid-cell": {
                          borderBottom: "none",
                      },
                      "& .name-column--cell": {
                          color: colors.greenAccent[300],
                      },
                      "& .MuiDataGrid-columnHeaders": {
                          backgroundColor: colors.blueAccent[700],
                          borderBottom: "none",
                      },
                      "& .MuiDataGrid-virtualScroller": {
                          backgroundColor: colors.primary[400],
                      },
                      "& .MuiDataGrid-footerContainer": {
                          borderTop: "none",
                          backgroundColor: colors.blueAccent[700],
                      },
                      "& .MuiCheckbox-root": {
                          color: `${colors.greenAccent[200]} !important`,
                      },
                      "& .MuiDataGrid-toolbarContainer .MuiButton-text": {
                          color: `${colors.grey[100]} !important`,
                      },
                  }}>
                <DataGrid rows={mockDataContacts}
                columns={columns}
                components={{ ToolBar: GridToolbar}}/>

            </Box>
        </Box>
    );
}

export default Contacts;