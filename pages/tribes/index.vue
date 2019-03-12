<template>
  <div>
    <ul>
      <li v-for="(tribe, index) in tribes" :key="index">
        <p>Name: {{ tribe.name }}</p>
        <p>Leaders:</p>
        <p v-for="(leaders, leader_index) in tribe.leaders" :key="leader_index">{{ leaders.name }}</p>
      </li>
    </ul>
  </div>
</template>


<script>
export default {
  asyncData(ctx) {
    console.log('ctx: ', ctx);
    if (ctx.payload) {
      console.log('tribes from payload: ', ctx.payload);
      return { tribes: ctx.payload }
    }
    return import('../../mocks/tribes.json').then(tribes => {
      console.log('tribes from import: ', tribes);
      return { tribes }
    })
  }
}
</script>
