import ConditionalRendering from './examples/ConditionalRendering';
import ListRendering from './examples/ListRendering';
import FilteredList from './examples/FilteredList';

function App() {
  return (
    <div style={{ maxWidth: '800px', margin: '0 auto', padding: '2rem' }}>
      <h1>Conditional Rendering & Lists</h1>
      <ConditionalRendering />
      <hr style={{ margin: '2rem 0' }} />
      <ListRendering />
      <hr style={{ margin: '2rem 0' }} />
      <FilteredList />
    </div>
  );
}

export default App;