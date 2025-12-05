import React from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "./HomePage";
import BookingPage from "./BookingPage";

const Main = () => {
    return (
        <main className="site-main" id="content">
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/booking" element={<BookingPage />} />
            </Routes>
        </main>
    );
};

export default Main;