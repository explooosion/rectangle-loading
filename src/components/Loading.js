import { h } from 'hyperapp'
import './Loading.scss'

const Loading = ({ state, actions }) => () => (
  <div class="pie">
    <div class="clip1">
      <div class="slice1"></div>
    </div>
    <div class="clip2">
      <div class="slice2"></div>
    </div>
    <div class="status"></div>
  </div>
)

export default Loading