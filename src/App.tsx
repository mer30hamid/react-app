import EffectBasics from './examples/EffectBasics';
import DocumentTitle from './examples/DocumentTitle';
import Timer from './examples/Timer';
import WindowEvents from './examples/WindowEvents';
import LocalStorageExample from './examples/LocalStorageExample';

function App() {
  return (
    <div>
      <EffectBasics />
      <hr style={{ margin: '2rem' }} />
      <DocumentTitle />
      <hr style={{ margin: '2rem' }} />
      <Timer />
      <hr style={{ margin: '2rem' }} />
      <WindowEvents />
      <hr style={{ margin: '2rem' }} />
      <LocalStorageExample />
    </div>
  );
}

export default App;