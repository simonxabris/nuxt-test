<template>
  <div>
    <p>Username:</p>
    <p>{{ user.name }}</p>
  </div>
</template>

<script>
export default {
  asyncData(ctx) {
    console.log('ctx: ', ctx);
    return { user: ctx.payload }
  }
}
</script>
