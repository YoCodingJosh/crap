import logo from '../logo.svg';
import styles from '../App.module.css';

import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';

export default function Home() {
  const renderTooltip = (props: any) => (
    <Tooltip id="button-tooltip" {...props}>
      At the expense of your data. Don't actually do this.
    </Tooltip>
  );

  return (
    <div>
      <header className={styles.App_header}>
        <img src={logo} className={styles.App_logo} alt="React logo goes brrr" />
        <p>
          Run <code>sudo rm -rf / --no-preserve-root</code> and you will get more RAM for <OverlayTrigger placement="bottom" overlay={renderTooltip}><i>free*</i></OverlayTrigger>!
        </p>
        <a
          className={styles.App_link}
          href="https://create-react-app.dev/"
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => { window.location.assign('https://www.youtube.com/watch?v=dQw4w9WgXcQ'); }}
        >
          Made with Create React App
        </a>
      </header>
    </div>
  );
}
