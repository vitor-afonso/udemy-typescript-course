// 4 - importação de componentes
import Destructuring from './components/Destructuring';
import FirstComponent from './components/FirstComponent';
// 4 - destruturação de props
import SecondComponent from './components/SecondComponent';
// 6 - useState
import State from './components/State';

function App() {
  // 1 - variaveis
  const name: string = 'Casemiro';
  const age: number = 50;
  const isWorking: boolean = true;

  // 2 - funções
  const userGreeting = (name: string): string => {
    return `Olá, ${name}!`;
  };

  return (
    <div className='App'>
      <h1>React com TS</h1>
      <h2>Nome: {name}</h2>
      <p>Idade: {age}</p>
      {isWorking && <p>Está trabalhando no momento</p>}
      <h3>{userGreeting(name)}</h3>
      <FirstComponent />
      <SecondComponent name='Segundo' />
      <Destructuring title='Primeiro post' content='Manxi lomba na catchupa' commentsQty={12} tags={['catchupa', 'cabo verde']} />
      <Destructuring title='Segundo post' content='Pirão com frango' commentsQty={5} tags={['pirão', 'angola']} />
      <State />
    </div>
  );
}

export default App;
