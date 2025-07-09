<script>
  import parse from '@lib/helpers/path';
  import generatePicture from '@lib/helpers/generatePicture';

  let {
    className = '',
    picture = false,
    src = null,
    srcset = null,
    alt = null,
    title = null,
    loading = null
  } = $props()

  let pictureData = $state(null);

  if(picture) {
    pictureData = generatePicture(src);
  }
</script>

{#if picture && !srcset}
  <picture>
    {#each pictureData.sources as source}
      <source {...source}>
    {/each}
    <img {...pictureData.img} class={className} {alt} {title} {loading}>
  </picture>
{:else}
  <img src={src} class={className} {alt} {title} {loading} {srcset}>
{/if}

<style>
  img {
    display: block;
    width: 100%;
  }
</style>