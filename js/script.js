const { createApp } = Vue

createApp({
    data() {
      return {
        message: `Titolo con vue!`,
        image: `https://www.geekandjob.com/uploads/wiki/f236a1aa005ef9a93041f294749e86d1.png`
      }
    }
  }).mount('#app')