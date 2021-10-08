/* eslint-disable react/jsx-no-comment-textnodes */

import { Container, TextContainer, InfosContainer, CodeItem } from './styles';
import picture from '../../assets/avatar.png';

function HomeHero() {
  return (
    <Container data-aos="fade-up">
      <img src={picture} alt="Minha foto" />
      <div>
        <TextContainer>
          <h1>Olá</h1>
          <h2>Me chamo David</h2>
        </TextContainer>
        <InfosContainer>
          <CodeItem data-aos="zoom-in">
            <span className="comment">//Minha apresentação</span>
            <span className="purple">Infos</span> {'\u007B'}
            <div>
              Nome: <span className="blue">David,</span>
            </div>
            <div>
              Sobrenome: <span className="blue">Bernardo</span>
            </div>
            <div>
              Idade: <span className="blue">38</span>
            </div>
            {'\u007D'}
          </CodeItem>
          <CodeItem data-aos="zoom-in">
            <span className="purple">Formação</span> {'\u007B'}
            <div>
              Técnico: <span className="blue">Desenvolvedor de Sietemas,</span>
            </div>
            <div>
              Bacharel: <span className="blue">Adminstração de Empresas</span>
            </div>
            <div>
              Estudando:
              <span className="blue">ReactJs, NextJs, NodeJS</span>
            </div>
            {'\u007D'}
          </CodeItem>
        </InfosContainer>
      </div>
    </Container>
  );
}
export default HomeHero;
