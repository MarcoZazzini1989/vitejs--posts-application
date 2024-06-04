import { defineStore } from 'pinia'

export const usePostsStore = defineStore('posts-store', {
    
    state() {
      return {
        posts: [
            {
              id: 1,
              title: "This great book!",
              body: "tellus integer feugiat scelerisque varius morbi enim nunc faucibus a pellentesque sit",
              author: "Sarah Doe",
              created_at: "11/06/2023",
              is_saved: false
            },
            {
              id: 2,
              title: "Coding is fun!?",
              body: "tellus integer feugiat scelerisque varius morbi enim nunc faucibus a pellentesque sit",
              author: "Jon Doe",
              created_at: "06/04/2023",
              is_saved: false
            },
            {
              id: 3,
              title: "Vue js VS React",
              body: "tellus integer feugiat scelerisque varius morbi enim nunc faucibus a pellentesque sit",
              author: "Jon Doe",
              created_at: "12/30/2022",
              is_saved: false
            },
            {
              id: 4,
              title: "Video games",
              body: "tellus integer feugiat scelerisque varius morbi enim nunc faucibus a pellentesque sit",
              author: "Jon Doe",
              created_at: "05/01/2023",
              is_saved: false
            }
          ],
   
        loading: true,
        errMsg: ''
      }}
    })