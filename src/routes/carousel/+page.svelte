<script>
  import Carousel from "@lib/carousel/Carousel.svelte";

  const slides = [
    "https://picsum.photos/id/1/200",
    "https://picsum.photos/id/2/200",
    "https://picsum.photos/id/3/200",
    "https://picsum.photos/id/4/200",
  ]

</script>

<Carousel autoplay={true} dots={true}>
  <svelte:fragment slot="slides">
    {#each slides as src}
      <img src={src} alt="slide" />
    {/each}
  </svelte:fragment>

  <div slot="dots">
    <div style="color: red;">•</div>
  </div>
</Carousel>