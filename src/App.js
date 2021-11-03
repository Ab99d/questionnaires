import { HashRouter as Router,
  Route } from 'react-router-dom'
import BrandIdentityQuestionnaire from './BrandIdentityQuestionnaire'
import BrandIdentityQuestionnaireAR from './BrandIdentityQuestionnaireAR';
import WebQuestionnaire from './pages/WebQuestionnaire'
import WebQuestionnaireAR from './pages/WebQuestionnaireAR'

function App() {
  return (
    <div className="App">
      <Router>
        <div className="App">
          <Route exact path="/" component={BrandIdentityQuestionnaire} />
          <Route path="/ar" component={BrandIdentityQuestionnaireAR} />
          <Route path="/web" component={WebQuestionnaire} />
          <Route path="/ar/web" component={WebQuestionnaireAR} />
        </div>
      </Router>
    </div>
  );
}

export default App;
