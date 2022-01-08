import PropTypes from 'prop-types';
import { Button } from './GoBackButton.styled';

const GoBackButton = ({ onBack }) => (
  <Button type="button" onClick={onBack}>
    Go back
  </Button>
);

GoBackButton.propTypes = {
  onBack: PropTypes.func.isRequired,
};

export default GoBackButton;
