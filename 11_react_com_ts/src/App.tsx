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
      {userGreeting(name)}
    </div>
  );
}

export default App;
