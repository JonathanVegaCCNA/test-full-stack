export const msalConfig = {
    auth: {
        clientId: "ecf44dce-b922-4b30-acd0-48fe73081246",
        authority: "https://login.microsoftonline.com/eb36d020-2c35-44de-bc7a-554cc979b26d", // This is a URL (e.g. https://login.microsoftonline.com/{your tenant ID})
        redirectUri: "http://localhost:3000"//"https://ko-devops-portal.azurewebsites.net",
    },
    cache: {
        cacheLocation: "sessionStorage", // This configures where your cache will be stored
        storeAuthStateInCookie: false, // Set this to "true" if you are having issues on IE11 or Edge
    }
};

// Add scopes here for ID token to be used at Microsoft identity platform endpoints.
export const loginRequest = {
    scopes: ["User.Read", "openid"]
};

// Add the endpoints here for Microsoft Graph API services you'd like to use.
export const graphConfig = {
    graphMeEndpoint: "https://graph.microsoft.com"
};