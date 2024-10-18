import { useNavigate, useRouteError } from "react-router-dom";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";

export const Error = () => {
  const error = useRouteError();
  const navigate = useNavigate();

  const handleGoBack = () => {

  if (window.history.length > 1) {
    navigate(-1);
  } else {
    navigate("/");
  }

  };
  const handleGoHome = () => {
    navigate("/");
  };
  if ((error as any).status === 404) {
    return (
      <section className="flex flex-col items-center w-full min-h-screen py-10 bg-gray-100">
        <div id="error-text" className="text-center">
          <figure className="mb-4">
            <img
              src="https://cdn.dribbble.com/users/722246/screenshots/3066818/404-page.gif"
              alt="404 page"
              className="mx-auto"
            />
          </figure>
          <p className="text-lg text-gray-700">
            The page you were looking for could not be found
          </p>
          <p className="text-gray-500 mt-2">... Back to previous page</p>
        </div>
        <ButtonGroup variant="outlined" color="primary" orientation='horizontal'>
          <Button variant="outlined" color="primary" onClick={handleGoBack}>
            Go Back
          </Button>
          <Button variant="outlined" color="primary" onClick={handleGoHome}>
            Go Home
          </Button>
        </ButtonGroup>
      </section>
    );
  }
  return <h1> The page you are looking does not exist</h1>;
};
