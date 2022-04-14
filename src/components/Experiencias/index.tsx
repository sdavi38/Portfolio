import SectionTitle from '../SectionTitle';
import ExperienciaItem from './ExperienciaItem';
import { Container } from './styles';

function Experiencias() {
  return (
    <Container>
      <SectionTitle title="02 Anos" description="de experiência" />

      <section>
        <ExperienciaItem
          year="2018"
          title="Desenvolvedor de Sistemas"
          description="Fundamentos de redes de computadores, Banco de Dados, Desenvolvimento  Web, Mobile Linguagem de programação..."
        />
        <ExperienciaItem
          year="2020"
          title="Back End"
          description="Node.JS desenvolvendo uma aplicação com banco de dados relacional, Postgres"
        />
        <ExperienciaItem
          year="2021"
          title="Frotend"
          description="Mobile e Web desenvolvendo aplicação com Expo, NextJs, Vercel"
        />
        <ExperienciaItem
          year="2022"
          title="Carrefour Web Developer"
          description="BootCamps realizado na Dio com 104hs de conteúdo"
        />
      </section>
    </Container>
  );
}

export default Experiencias;
