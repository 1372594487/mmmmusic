
import Carousel from './Carousel/index.vue'
import item from "./Carousel/item.vue";
let GtqUI = {
  install: function (Vue) {
    Vue.component(Carousel.name, Carousel);
    Vue.component(item.name, item);
  }
};
export default GtqUI;

