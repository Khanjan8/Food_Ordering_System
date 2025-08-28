<<<<<<< HEAD
import { AppState, Auth0Provider } from "@auth0/auth0-react";
import { useNavigate } from "react-router-dom";
=======
import { AppState, Auth0Provider, User } from "@auth0/auth0-react";
>>>>>>> a22d48b3e81942e9dd2e35385802a6d7ba870e2b

type Props = {
  children: React.ReactNode;
};

const Auth0ProviderWithNavigate = ({ children }: Props) => {
<<<<<<< HEAD
  const navigate = useNavigate();

  const domain = import.meta.env.VITE_AUTH0_DOMAIN;
  const clientId = import.meta.env.VITE_AUTH0_CLIENT_ID;
  const redirectUri = import.meta.env.VITE_AUTH0_CALLBACK_URL;
  const audience = import.meta.env.VITE_AUTH0_AUDIENCE;

  if (!domain || !clientId || !redirectUri || !audience) {
    throw new Error("unable to initialise auth");
  }

  const onRedirectCallback = (appState?: AppState) => {
    navigate(appState?.returnTo || "/auth-callback");
=======
  
  const domain = import.meta.env.VITE_AUTH0_DOMAIN;
  const clientId = import.meta.env.VITE_AUTH0_CLIENT_ID;
  const redirectUri = import.meta.env.VITE_AUTH0_CALLBACK_URL;

  if (!domain || !clientId || !redirectUri ) {
    throw new Error("unable to initialise auth");
  }

  const onRedirectCallback = (appState?: AppState, user?: User) => {
    console.log("USER",user);
>>>>>>> a22d48b3e81942e9dd2e35385802a6d7ba870e2b
  };

  return (
    <Auth0Provider
      domain={domain}
      clientId={clientId}
      authorizationParams={{
        redirect_uri: redirectUri,
<<<<<<< HEAD
        audience,
=======
>>>>>>> a22d48b3e81942e9dd2e35385802a6d7ba870e2b
      }}
      onRedirectCallback={onRedirectCallback}
    >
      {children}
    </Auth0Provider>
  );
};

<<<<<<< HEAD
export default Auth0ProviderWithNavigate;
=======
export default Auth0ProviderWithNavigate;
>>>>>>> a22d48b3e81942e9dd2e35385802a6d7ba870e2b
