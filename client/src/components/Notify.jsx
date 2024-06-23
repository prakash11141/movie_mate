import { Alert } from "react-bootstrap";
export const Notify = ({ variant = "danger", message }) => {
  return (
    <>
      <Alert vaiant={variant}>{message}</Alert>
    </>
  );
};
