import { nanoid } from 'nanoid';
import { Input, Label, Container } from './Filter.styled';
import PropTypes from 'prop-types';

const filterInputId = nanoid();

export const Filter = ({ onChange, filter }) => {
  return (
    <Container>
      <Label htmlFor={filterInputId}>Find</Label>
      <Input
        id={filterInputId}
        onChange={e => onChange(e.target.value)}
        type="text"
        value={filter}
      />
    </Container>
  );
};

Filter.propTypes = {
  onChange: PropTypes.func.isRequired,
  filter: PropTypes.string.isRequired,
};
