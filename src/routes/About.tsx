export default function About() {
  return (
    <div>
      <h1>About</h1>
      <p>Welcome to <code>Josh's Cool App</code> which was made by me (Josh), and it is pretty cool if I do say so myself.</p>
      <p>Copyright &copy; { (new Date()).getFullYear() }&mdash;{ (new Date()).getFullYear() + 1234 } Josh. All rights reserved.</p>
    </div>
  );
}
