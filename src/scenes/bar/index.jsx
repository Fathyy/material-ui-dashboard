import React from 'react';
import {Box} from "@mui/material";
import Header from "../../Header.jsx";
import BarChart from "../../components/BarChart.jsx";

function Bar(props) {
    return (
        <Box m="20px">
            <Header title="Bar Chart" subtitle="Simple Bar Chart" />
            <Box height="75vh">
                <BarChart />
            </Box>
        </Box>
    );
}

export default Bar;