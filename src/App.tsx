import './App.css';
import CompA from './features/CompA/compA';
import CompB from './features/CompB/compB';
import Wrapper from './Wrapper';
function App() {
  return (
    <div className='App'>
      <Wrapper
        count={(count, handleAdd, handleRemove) => {
          return (
            <CompA
              count={count}
              handleAdd={handleAdd}
              handleRemove={handleRemove}
            />
          );
        }}
      />
      <Wrapper
        count={(count, handleAdd, handleRemove) => {
          return (
            <CompB
              count={count}
              handleAdd={handleAdd}
              handleRemove={handleRemove}
            />
          );
        }}
      />
    </div>
  );
}

export default App;
