import './App.css';
import Book from './components/book/Book'
import {data} from './Books'


function App() {


  return (
    <section className="bookList">
      {data.map((b,i)=>{
        return  <Book key={i} book={b} />
      })}

    </section>
  );
}

export default App;
