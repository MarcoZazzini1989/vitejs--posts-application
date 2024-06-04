<script setup>
import { usePostsStore} from '../stores/posts';

const postStore = usePostsStore()

defineProps({
  post : {
    type : Object,
    required : true
  }
})

const emit = defineEmits(['get-id'])

const getId = (id)=> {
    emit('get-id', id )
}

</script>



<template>
    <div>
        <button  @click="getId(post.id)">Click</button>
        <div class="header">
            <span>Written by {{ post.author }} on {{ post.created_at }}</span>
            <div>
               <button @click="postStore.deletePost(post.id)" class="del material-icon">delete</button>
               <button  @click="postStore.savePost(post.id)" class="save material-icon">
                {{ post.is_saved ? 'saved' : 'save' }}</button>
            </div>
        </div>
        <h1>{{ post.title }}</h1>
        <p>{{ post.body }}</p>
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