<template>
  <div
     class="entry-container mb-3 pointer p-2"
     @click="$router.push({ name:'entry', params: {id:10}})"
  >
  <div class="entry-title d-flex">
    <span class="text-success fs-5 fw-bold">15</span>
    <span class="mx-1 fs-5">Julio</span>
    <span class="mx-2 fw-light">2021, jueves</span>

  </div>

  <div class="entry-description">
    Ipsum cillum sit nisi et nostrud ex. Sit sit exercitation in nostrud cupidatat elit in eiusmod laboris pariatur sint. Duis magna do aute pariatur consequat. Eiusmod commodo eiusmod incididunt cupidatat officia culpa laboris proident officia tempor.

  </div>

  </div>
</template>



<style lang="scss" scoped>
.entry-container {
    border-bottom: 1px splid #2c3e50 ;
    transition: 0.2s all ease-in;

    &:hover {
        background-color: lighten($color: grey, $amount: 45);
        transition: 0.2s all ease-in;

    }
}
.entry-description {
    font-size: 12px ;
}

</style>