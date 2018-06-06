import { h } from 'hyperapp'
import Loading from '../components/Loading'
import './Home.scss'

const Home = ({ state, actions }) => () => (
  <div class="home">
    <h1>Rectangle Loading</h1>
    <h2><a href="https://github.com/explooosion/rectangle-loading" target="_blank" >Github</a></h2>
    <h3>Remain:</h3>
    <button id="btnNormal" type="button" >Normal</button>
    <button id="btnReversal" type="button" >Reversal</button>
    <div class="skill">
      <Loading />
    </div>
  </div>
)

export default Home