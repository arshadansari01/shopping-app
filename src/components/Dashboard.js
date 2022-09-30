import React, { useEffect, useState } from "react";
import './Dashboard.css';

function Dashboard() {

    function logout() {
        document.cookie = "userId=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
        window.location.href = "/";
    }


    return <React.Fragment>
        <div className="profilePage">
            <div className="profilePageHeader">
                <div> <h1>My Profile</h1></div>
                <div className="logout">
                    <input className="button" type="button" value="Logout" onClick={logout} />
                </div>

            </div>
        </div>

    </React.Fragment >



}

export default Dashboard;

