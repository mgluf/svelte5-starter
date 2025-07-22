<h1>hello</h1>

<style lang='scss'>
  @use "functions" as *;
  @use "tokens" as *;

  h1 {
    font-size: rs-desktop(25, 56);
    color: $color-accent;
    padding: sp(10);
  }
</style>
