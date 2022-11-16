import { useSelector } from 'react-redux';

export default function About() {
  const count = useSelector((state: any) => state.cheeseCounter.value);

  let cheeseCountMessageElement = (
    count > 0 ?
      <p>You have cheesed {count} time{count > 1 ? 's' : ''}. <img src="https://cdn.frankerfacez.com/emoticon/243789/2" alt="Pepega"></img></p>
      :
      <p>You have not cheesed yet. <img src="https://cdn.frankerfacez.com/emoticon/425196/2" alt="Sadge"></img></p>
  );

  return (
    <div>
      <h1>About</h1>
      <p>Welcome to <code>Josh's Cool App</code> which was made by me (Josh), and it is pretty cool if I do say so myself.</p>
      {cheeseCountMessageElement}
      <p>Copyright &copy; { (new Date()).getFullYear() }&mdash;{ (new Date()).getFullYear() + 1234 } Josh. All rights reserved.</p>
    </div>
  );
}
