import React from "react";
import {GoogleLogin} from "@react-oauth/google";

// export default function GoogleLoginBtn({onGoogleLogin}){
//     const onSuccess = async(response) => {
//         const { googleId, profileObj : { email, name } } = response;
        
//         await onGoogleLogin ();
//     };

//     const onFailure = (error) => {
//         console.log(error);
//     }

//     return(
//         <div>
//             <GoogleLogin
//                 clientId={clientId}
//                 responseType={"id_token"}
//                 onSuccess={onSuccess}
//                 onFailure={onFailure}/>
//         </div>
//     )
// }
// import React from "react";
// import {GoogleLogin} from "@react-oauth/google";

const clientId = "684003937579-6rfgja2i7b3hd99dhlc95vo2ljk6tuos.apps.googleusercontent.com"

function GoogleLoginButton() {
    const onSuccess = (res) => {
        console.log("LOGIN SUCESS! Current user: ", res);
    }

    const onFailure = (res) => {
        console.log("LOGIN FAILED! res: ", res);
    }

    return(
        <div id="signInButton">
            <GoogleLogin
                clientId={clientId}
                buttonTest="Login"
                onSuccess={onSuccess}
                onFailure={onFailure}
                cookiePolicy={'single_host_origin'}
                isSignedIn={true}
            />
        </div>
    )
}
export default GoogleLoginButton;


// import {GoogleLogin} from "@react-oauth/google";
// import {GoogleOAuthProvider} from "@react-oauth/google";

// const GoogleLoginButton = () => {
//     const clientId = "684003937579-6rfgja2i7b3hd99dhlc95vo2ljk6tuos.apps.googleusercontent.com"

//     return (
//         <>
//             <GoogleOAuthProvider clientId={clientId}>
//                 <GoogleLogin
//                     onSuccess={(res) => {
//                         console.log(res);
//                     }}
//                     onFailure={(err) => {
//                         console.log(err);
//                     }}
//                 />
//             </GoogleOAuthProvider>
//         </>
//     );
// };

// export default GoogleLoginButton

