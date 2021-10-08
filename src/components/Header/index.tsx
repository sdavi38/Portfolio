import {
  AiOutlineTwitter,
  AiOutlineGithub,
  AiFillLinkedin
} from 'react-icons/ai';

import NavLink from './NavLink';
import { Container, NavBar } from './styles';

export default function Header() {
  function handleRedirect(url: string) {
    window.open(url);
  }
  return (
    <Container>
      <section>
        <p>Siga-nos</p>
        <AiOutlineTwitter
          onClick={() => handleRedirect('https://twitter.com')}
        />
        <AiOutlineGithub
          onClick={() => handleRedirect('https://github.com/sdavi38')}
        />
        <AiFillLinkedin
          onClick={() =>
            handleRedirect(
              'https://www.linkedin.com/in/david-bernardo-silva-551936ba/'
            )
          }
        />
      </section>
      <NavBar>
        <ul>
          <NavLink title="Home" path="/" />
          <NavLink title="Projetos" path="/projetos" includes />
        </ul>
      </NavBar>
    </Container>
  );
}
