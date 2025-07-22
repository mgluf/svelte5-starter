<div class="main">
  <code class="hed">svelte5 starter</code>
  <ul>
    <li>
      <code>@use "styles"</code> included in:
      <code>routes/+layout.svelte</code>
    </li>
  </ul>

  <code class="sub-hed">Available SCSS Modules</code>
  <ul>
    <li>
      <code>@use "functions"</code>
    </li>
    <li>
      <code>@use "tokens"</code>
    </li>
    <li>
      <code>@use "mixins"</code>
    </li>
  </ul>

  <code class="sub-hed">Components</code>
  <ul>
    <li>
      <code>$lib/components/Image.svelte</code>
    </li>
    <li>
      <code>$lib/components/carousel/Carousel.svelte</code>
    </li>
  </ul>
</div>

<style lang="scss">
  @use "functions" as *;
  @use "tokens" as *;

  .main {
    padding: sp(10);
  }

  .hed {
    font-size: rs-desktop(25, 56);
    font-weight: 600;
    color: $color-accent;
  }

  .sub-hed {
    color: white;
    font-size: rs-desktop(16, 22);
  }

  code {
    color: $color-accent;
  }
</style>
