import SectionTitle from '../SectionTitle';
import Form from './Form';
import { Container } from './styles';

function FormContato() {
  return (
    <Container>
      <SectionTitle
        title={
          <>
            Fale comigo,
            <br />
            agora !
          </>
        }
        description={
          <>
            Preencha o formulário abaixo que
            <br />
            irei retornar.
          </>
        }
      />

      <Form />
    </Container>
  );
}

export default FormContato;
