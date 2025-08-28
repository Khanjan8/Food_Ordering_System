import { useAuth0 } from "@auth0/auth0-react";
import { Button } from "./ui/button";
import UsernameMenu from "./UsernameMenu";
<<<<<<< HEAD
import { Link } from "react-router-dom";

const MainNav = () => {
  const { loginWithRedirect, isAuthenticated } = useAuth0();
=======

const MainNav = () => {
  const { loginWithRedirect , isAuthenticated} = useAuth0();
>>>>>>> a22d48b3e81942e9dd2e35385802a6d7ba870e2b

  return (
    <span className="flex space-x-2 items-center">
      {isAuthenticated ? (
<<<<<<< HEAD
        <>
          <Link to="/order-status" className="font-bold hover:text-orange-500">
            Order Status
          </Link>
          <UsernameMenu />
        </>
=======
        <UsernameMenu/>
>>>>>>> a22d48b3e81942e9dd2e35385802a6d7ba870e2b
      ) : (
        <Button
          variant="ghost"
          className="font-bold hover:text-orange-500 hover:bg-white"
          onClick={async () => await loginWithRedirect()}
<<<<<<< HEAD
        >
=======
          >
>>>>>>> a22d48b3e81942e9dd2e35385802a6d7ba870e2b
          Log In
        </Button>
      )}
    </span>
  );
};

<<<<<<< HEAD
export default MainNav;
=======
export default MainNav;
>>>>>>> a22d48b3e81942e9dd2e35385802a6d7ba870e2b
