<script>
  export let active = false;
  export let onClick = () => {};
</script>

<button on:click={onClick} class="kit-carousel-dot-wrapper ">
  <div class="kit-carousel-dot embla__dot" class:active />
</button>

<style lang="scss">
  .kit-carousel-dot-wrapper {
    background-color: transparent;
    border: none;
    padding: sp(5);
  }
  .kit-carousel-dot {
    width: sp(14);
    height: sp(14);
    border-radius: 50%;
    border: 2px solid gray;

    &.active {
      background-color: #4a4a4a;
    }
  }
</style>