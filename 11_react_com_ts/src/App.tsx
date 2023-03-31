// 4 - importação de componentes
import FirstComponent from './components/FirstComponent';
// 5 - destruturação de props
import SecondComponent from './components/SecondComponent';
import Destructuring, { Category } from './components/Destructuring';
// 6 - useState
import State from './components/State';

import { createContext } from 'react';

// 8 - type

type TextOrNull = string | null;

type fixed = 'isto' | 'ou' | 'aquilo';

// 9 - context

interface IAppContext {
  language: string;
  framework: string;
  projects: number;
}

export const AppContext = createContext<IAppContext | null>(null);

function App() {
  // 1 - variaveis
  const name: string = 'Casemiro';
  const age: number = 50;
  const isWorking: boolean = true;

  // 2 - funções
  const userGreeting = (name: string): string => {
    return `Olá, ${name}!`;
  };

  // 8 - type

  const myText: TextOrNull = 'Some random text';

  let anotherText: TextOrNull = null;

  //anotherText = 'another random text';

  const testingFixed: fixed = 'isto';

  // const testingFixed2: fixed = 'asd';

  // 9 - context

  const contextValue: IAppContext = {
    language: 'JavaScript',
    framework: 'Express',
    projects: 5,
  };

  return (
    <AppContext.Provider value={contextValue}>
      <div className='App'>
        <h1>React com TS</h1>
        <h2>Nome: {name}</h2>
        <p>Idade: {age}</p>
        {isWorking && <p>Está trabalhando no momento</p>}
        <h3>{userGreeting(name)}</h3>
        <FirstComponent />
        <SecondComponent name='Segundo' />
        <Destructuring title='Primeiro post' content='Manxi lomba na catchupa' commentsQty={12} tags={['catchupa', 'cabo verde']} category={Category.TS} />
        <Destructuring title='Segundo post' content='Pirão com frango' commentsQty={5} tags={['pirão', 'angola']} category={Category.JS} />
        <State />
        {myText && <p>{myText}</p>}
        {anotherText && <p>{anotherText}</p>}
      </div>
    </AppContext.Provider>
  );
}

export default App;
