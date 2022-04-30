import './App.css';
import SearchBar from './components/SearchBar';
import ListMovies from './components/ListMovies';
import DetailsMovie from './components/DetailsMovie';
import AppContext from './AppContext';


function App(props) {


  return (
    <AppContext>
       <div class="container">
          <div class="row">
            <div class="col-sm-4">
               <SearchBar/>
               <ListMovies/>
            </div>
            <div class="col-sm-8">
               <DetailsMovie/>
            </div>
          </div>
        </div>
    </AppContext>
 
  );
}

export default App;
