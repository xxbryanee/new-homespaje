import {Header} from './componentes/Header';
import { MainArticle } from './componentes/MainArticle';
import { NewContainer } from './componentes/NewContainer';
import { ArticlesContainer } from './componentes/ArticlesContainer';

function App() {
  

  return (
    <main className="px-4 pt-6">
      <Header />


      <div className='sm:flex sm:gap-8'>
         <MainArticle />
         <NewContainer/>
      </div>
      <ArticlesContainer />
     
      
       
    </main>
  )
}

export default App
