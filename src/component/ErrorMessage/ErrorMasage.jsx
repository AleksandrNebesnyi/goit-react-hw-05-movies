import PropTypes from 'prop-types';
// import { Message } from './ErrorMassage.styled';
import { toast } from 'react-toastify';

function ErrorMessage({ message }) {
  const customId = 'custom-id-yes';
  return toast.error(`${message}`, {
    position: 'top-center',
    autoClose: 3000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    toastId: customId,
  });
}

ErrorMessage.propTypes = {
  message: PropTypes.string,
};

export default ErrorMessage;
