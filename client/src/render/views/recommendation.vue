<template>
  <div>
    <!-- <img src="../assets/img/1.jpg"
         alt=""> -->
    <gtq-carousel>
      <carousel-item v-for="({img_name},index) in carData"
                     :key="`${img_name+ index}`">
        <img :src="'@/render/assets/img/'+img_name"
             alt="">
      </carousel-item>
      <carousel-item></carousel-item>
    </gtq-carousel>
    <h1>个性推荐</h1>
    <h1>个性推荐</h1>
    <h1>个性推荐</h1>
    <h1>个性推荐</h1>
    <h1>个性推荐</h1>
    <h1>个性推荐</h1>
    <h1>个性推荐</h1>
    <h1>个性推荐</h1>
    <h1>个性推荐</h1>
    <h1>个性推荐</h1>
    <h1>个性推荐</h1>
    <h1>个性推荐</h1>
    <h1>个性推荐</h1>
    <h1>个性推荐</h1>
    <h1>个性推荐</h1>
    <h1>个性推荐</h1>
    <h1>个性推荐</h1>
    <h1>个性推荐</h1>
    <h1>个性推荐</h1>
    <h1>个性推荐</h1>
    <h1>个性推荐</h1>
    <h1>个性推荐</h1>
    <h1>个性推荐</h1>
    <h1>个性推荐</h1>
    <h1>个性推荐</h1>
    <h1>个性推荐</h1>
    <h1>个性推荐</h1>
    <h1>个性推荐</h1>
    <h1>个性推荐</h1>
    <h1>个性推荐</h1>
    <h1>个性推荐</h1>
    <h1>个性推荐</h1>
    <h1>个性推荐</h1>
    <h1>个性推荐</h1>
    <h1>个性推荐</h1>
    <h1>个性推荐</h1>
    <h1>个性推荐</h1>
    <h1>个性推荐</h1>
    <h1>个性推荐</h1>
    <h1>个性推荐</h1>
    <h1>个性推荐</h1>
    <h1>个性推荐</h1>
    <h1>个性推荐</h1>
    <h1>个性推荐</h1>
    <h1>个性推荐</h1>
    <h1>个性推荐</h1>
    <h1>个性推荐</h1>
    <h1>个性推荐</h1>
    <h1>个性推荐</h1>
    <h1>个性推荐</h1>
    <h1>个性推荐</h1>
    <h1>个性推荐</h1>
    <h1>个性推荐</h1>
    <h1>个性推荐</h1>
    <h1>个性推荐</h1>
    <h1>个性推荐</h1>
    <h1>个性推荐</h1>
    <h1>个性推荐</h1>
    <h1>个性推荐</h1>
    <h1>个性推荐</h1>
    <h1>个性推荐</h1>
    <h1>个性推荐</h1>
    <h1>个性推荐</h1>
    <h1>个性推荐</h1>
    <h1>个性推荐</h1>
    <h1>个性推荐</h1>
    <h1>个性推荐</h1>
  </div>
</template>

<script>
import carData from '@/render/data/carousel.js'
export default {
  name: 'recommendation',
  setup () {
    console.log(carData
    );
    return {
      carData
    }
  }
}
</script>

<style>
</style>