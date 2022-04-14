import {
  AiFillLinkedin,
  AiOutlineGithub,
  AiOutlineTwitter
} from 'react-icons/ai';
import { Container } from './styles';

function Footer() {
  function handleRedirect(url: string) {
    window.open(url);
  }

  function handleScrollTop() {
    window.scroll({
      top: 0,
      behavior: 'smooth'
    });
  }

  return (
    <Container>
      <div className="container">
        <button type="button" onClick={handleScrollTop}>
          Voltar ao topo
        </button>
        <section>
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
      </div>
    </Container>
  );
}

export default Footer;
