import React from 'react';
import {Box} from "@mui/material";
import Header from "../../Header.jsx";
import PieChart from "../../components/PieChart.jsx";

function Pie(props) {
    return (
        <Box m="20px">
            <Header title="Pie Chart" subtitle="Simple Pie Chart"/>
            <Box height="75vh">
                <PieChart />
            </Box>

        </Box>
    );
}

export default Pie;