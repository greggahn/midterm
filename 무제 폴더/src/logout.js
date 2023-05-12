import React from "react";
import {GoogleLogin} from "@react-oauth/google";
import { googleLogout } from "@react-oauth/google";
const clientId = "684003937579-6rfgja2i7b3hd99dhlc95vo2ljk6tuos.apps.googleusercontent.com"


function GoogleLogoutButton() {
    const onSuccess = (res) => {
        console.log("LOGOUT SUCESS!", res);
    }


    return(
        <div id="signOutButton">
            <GoogleLogin
                clientId={clientId}
                buttonTest={"Logout"}
                onSuccess={onSuccess}
            />
        </div>
    )
}
export default GoogleLogoutButton;
