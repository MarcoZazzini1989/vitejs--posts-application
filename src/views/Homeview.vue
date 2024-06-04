<script setup>
import {ref} from 'vue'

import Postitem from '../components/Postitem.vue';
import MyWrapper from '../components/MyWrapper.vue';
import { usePostsStore} from '../stores/posts';

const postStore = usePostsStore()

</script>


<template>
    <div v-for="post in postStore.posts" :key="post.id">
        <MyWrapper>
            <Postitem :post="post"  @get-id="(id) => {console.log(id)}" ></Postitem>
        </MyWrapper>
        
    </div>
  
    
</template>




<style lang="scss" scoped>
.header {
  background: #fff;
  padding: 1rem 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  div {
    display: flex;
    align-items: center;
    gap: 10px;
    span {
      animation: spin 1s linear infinite;
    }
  }
  button {
    color: #fff;
    background: #1e40af;
    padding: 4px 15px;
    border-radius: 5px;
    &:hover {
      background: #0ea5e9;
    }
  }
}

.error {
  margin: 2rem;
  background: #f87171;
  color: #fff;
  text-align: center;
  padding: 1rem;
  border-radius: 10px;
}

@keyframes spin {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}
</style>