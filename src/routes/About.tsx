import { useSelector, useDispatch } from 'react-redux';

export default function About() {
  const count = useSelector((state: any) => state.cheeseCounter.value);

  let cheeseCountMessageElement = (
    count > 0 ?
      <p>You have cheesed {count} time{count > 1 ? 's' : ''}.</p>
      :
      <p>You have not cheesed yet. Sadge</p>
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
