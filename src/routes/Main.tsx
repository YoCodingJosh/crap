import { Container } from 'react-bootstrap';

import { CheeseCounter } from '../features/cheeseCounter';

export default function Main() {
  return (
    <Container>
      <h1>Cheese</h1>
      <CheeseCounter />
    </Container>
  );
}
