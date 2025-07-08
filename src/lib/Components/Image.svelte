<script>
  import parse from '@lib/helpers/path';
  import generatePicture from '@lib/helpers/generatePicture';

  export let className = '';
  export let picture = false;
  export let src;
  export let srcset;
  export let alt;
  export let title;
  export let loading;

  let pictureData;

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