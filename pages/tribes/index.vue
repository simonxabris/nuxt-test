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
import axios from 'axios';

export default {
  async asyncData(ctx) {
    console.log('ctx: ', ctx);
    if (ctx.payload) {
      console.log('tribes from payload: ', ctx.payload);
      return { tribes: ctx.payload }
    }
    console.log('axios request');
    let res;
    try {
      res = await axios.get('https://tribe-mock.herokuapp.com/tribes');
      console.log('response: ', res.data);
    } catch (error) {
      console.log('error: ', error);
    }
    return { tribes: res.data };
  }
}
</script>
