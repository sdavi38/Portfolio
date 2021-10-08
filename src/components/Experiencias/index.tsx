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
          title="Dev Front-End"
          description="BootCamps realizados em diversas plataformas de desenvolvimento"
        />
        <ExperienciaItem
          year="2021"
          title="Dev Backend"
          description="BootCamps realizados em diversas plataformas de desenvolvimento"
        />
        <ExperienciaItem
          year="2021"
          title="Dev Front-end"
          description="BootCamps na realizados em diversas plataformas"
        />
      </section>
    </Container>
  );
}

export default Experiencias;
