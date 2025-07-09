<script>
  let { active = false, onClick = () => {} } = $props();
</script>

<button
  click={onClick}
  class="kit-carousel-dot-wrapper"
  aria-label="carousel-dot"
>
  <div class="kit-carousel-dot embla__dot" class:active></div>
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
      background-color: #454545;
    }
  }
</style>
