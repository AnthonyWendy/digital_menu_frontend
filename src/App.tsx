import { Card } from './components/card/card'
import './App.css'
import { FoodData } from './interface/FoodData'

function App() {
  const data: FoodData[] = []

  return (
    <>
    <div className='container'>
      <h1>Cardápio</h1>
      <div className='card-grid'>
        {data.map(food =>
          <Card
            price={food.price}
            title={food.title}
            image={food.image}
          />)}
      </div>
    </div>

    </>
  )
}

export default App
