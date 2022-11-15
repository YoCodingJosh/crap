import { Container } from 'react-bootstrap';

import { CheeseCounter } from '../features/cheeseCounter';

export default function Main() {
  return (
    <Container>
      <h1>Cheese <img src="https://cdn.frankerfacez.com/emoticon/109777/2" alt="FeelsGoodMan" /></h1>
      <CheeseCounter />
    </Container>
  );
}
