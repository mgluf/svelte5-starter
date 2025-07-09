<script>
  // import Image from '@lib/Components/Image.svelte';
  let { data } = $props();
</script>

<div class="kit-carousel-slide-content">
  <!-- <Image src={data}/> -->
   {@html data}
</div>

<style lang="scss">
  // .kit-carousel-slide-content {

  // }
</style>