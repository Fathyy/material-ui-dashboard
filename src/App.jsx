import React, {useState} from 'react';
import Dashboard from "./scenes/dashboard/index.jsx";
import { ThemeProvider } from '@mui/material/styles';
import Pie from "./scenes/pie/index.jsx";
import Team from "./scenes/team/team.jsx";
import Contacts from "./scenes/contacts/index.jsx";
import Invoices from "./scenes/invoices/index.jsx";
import Form from "./scenes/form/index.jsx";
import Bar from "./scenes/bar/index.jsx";
import Line from "./scenes/line/index.jsx";
import FAQ from "./scenes/faq/index.jsx";
 import {Routes, Route } from "react-router-dom";
 import Sidebar from "./scenes/global/Sidebar.jsx";
import {CssBaseline} from "@mui/material";
import TopBar from "./scenes/global/Topbar.jsx";
import {ColorModeContext, useMode} from "./theme.js";
import GeographyChart from "./components/GeographyChart.jsx";
import Calender from "./scenes/calender/Calender.jsx";
import Geography from "./scenes/geography/index.jsx";

const App = () => {
    const [theme, colorMode] = useMode();
    const [isSidebar, setIsSidebar] = useState(true);
    return (
        <ColorModeContext.Provider value={colorMode}>
            <ThemeProvider theme={theme}>
                <CssBaseline />
                <div className="app">
                    <Sidebar isSidebar={isSidebar}/>
                    <main className="content">
                        <TopBar isSidebar={isSidebar}/>
                        <Routes>
                            <Route path="/" element={<Dashboard />} />
                            <Route path="/team" element={<Team />} />
                            <Route path="/contacts" element={<Contacts />} />
                            <Route path="/invoices" element={<Invoices />} />
                            <Route path="/form" element={<Form />} />

                            <Route path="/bar" element={<Bar />} />
                            <Route path="/pie" element={<Pie />} />
                            <Route path="/line" element={<Line />} />
                            <Route path="/faq" element={<FAQ />} />
                            <Route path="/calendar" element={<Calender />} />
                            <Route path="/geography" element={<Geography />} />
                        </Routes>
                    </main>
                </div>
            </ThemeProvider>
        </ColorModeContext.Provider>
    );
};

export default App;