

function googleAuth() {
    if (!client.auth.isLoggedIn) {
        const credential = new GoogleRedirectCredential();
        client.auth.loginWithRedirect(credential);
    }
}