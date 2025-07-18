<script>
  import emblaCarouselSvelte from 'embla-carousel-svelte';
  import Autoplay from 'embla-carousel-autoplay';

  import Slide from './Slide.svelte';
  import Arrow from './Arrow.svelte';
  import Dot from './Dot.svelte';

  let {
    slides = [],
    arrows = false,
    dots = false,
    autoplay = false,
    dynamicArrows = false,
    options = { loop: true }
  } = $props();

  let embla;
  let plugins = [];
  let currentSlideIndex = $state(0);
  let hidePrevArrow = $state(false);
  let hideNextArrow = $state(false);

  if (autoplay === true) {
    plugins.push(Autoplay({}));
  }

 function onInit(event) {
    embla = event.detail;

    if (dots === true) {
      embla.on('select', updateDots);
      updateDots();
    }

    if (dynamicArrows === true && options.loop === false) {
      embla.on('select', updateArrows);
      updateArrows();
      window.addEventListener('resize', updateArrows);
    }
  }

  function updateArrows() {
    if (!embla || options.loop === true) {
      hidePrevArrow = false;
      hideNextArrow = false;
      return;
    }

    const selectedIndex = embla.selectedScrollSnap();
    const lastIndex = embla.scrollSnapList().length - 1;

    hidePrevArrow = selectedIndex === 0;
    hideNextArrow = selectedIndex === lastIndex;
  }

  function updateDots() {
    if (embla) {
      currentSlideIndex = embla.selectedScrollSnap();
    }
  }

  function setSlide(index) {
    if (embla) embla.scrollTo(index);
  }

  function scrollPrev() {
    if (embla) embla.scrollPrev();
  }

  function scrollNext() {
    if (embla) embla.scrollNext();
  }
</script>

<div
  class="carousel"
  use:emblaCarouselSvelte={{
    options: {
      ...options,
      container: `.carousel-container`,
      slides: `.carousel-slide`,
    },
    plugins,
  }}
  onemblaInit={onInit}
>
  <!-- Track: Handles scrolling behavior -->
  <div class="carousel-track">
    <!-- Container: Manages slide flex layout -->
    <div class="carousel-container">
      {#each slides as slide}
        <div class="carousel-slide">
          <Slide data={slide} />
        </div>
      {/each}
    </div>
  </div>

  {#if arrows}
    <div class="carousel-buttons">
      <button
        class="carousel-button carousel-button-prev"
        click={scrollPrev}
        class:hide={hidePrevArrow}
      >
        <Arrow />
      </button>
      <button
        class="carousel-button carousel-button-next"
        click={scrollNext}
        class:hide={hideNextArrow}
      >
        <Arrow />
      </button>
    </div>
  {/if}

  {#if dots}
    <div class="carousel-indicators">
      {#each slides as dot, i}
      <div>
        <Dot
          onClick={() => setSlide(i)}
          active={i === currentSlideIndex}
        />
      </div>
      {/each}
    </div>
  {/if}
</div>

<style lang="scss">
@use 'mixins' as *;
@use 'tokens' as *;

/* ========================================= */
/* Core Carousel Wrapper */
/* ========================================= */

.carousel {
  width: 100%;
  position: relative;
}

/* ========================================= */
/* Slide Track - Controls Overflow */
/* ========================================= */

.carousel-track {
  position: relative;
  overflow: hidden;
  width: 100%;
}

/* ========================================= */
/* Slide Container - manage slide layout */
/* ========================================= */

.carousel-container {
  display: flex;
  min-width: 100%;
  will-change: transform; /* Smooth scrolling */
}

/* ========================================= */
/* Individual Slide */
/* ========================================= */

.carousel-slide {
  flex: 0 0 100%;
  min-width: 0;
  max-width: 100%;
  display: block;
  width: 100%;
}

/* ========================================= */
/* Button Navigation (Prev/Next) */
/* ========================================= */

.carousel-buttons {
  position: absolute;
  z-index: 1;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  pointer-events: none; // Allows swipe gestures behind buttons

  button {
    pointer-events: all; // Ensures buttons are clickable

    &:nth-of-type(2) {
      transform: rotate(180deg); // Rotates next button
    }
  }
}

.carousel-button {
  // Arrow icon color
  color: gray;
  padding: 0;
  background-color: transparent;
  border: none;
  width: sp(40);

  @include bp(lg, down) {
    width: rs-mobile(32, 40);
  }

  // Arrow background color
  :global(.carousel-button-arrow-circle) {
    fill: white;
    opacity: 0.5;
  }

  &:focus-visible {
    outline: 2px solid black !important;
  }

  &:focus {
    outline: none !important;
  }

  &.hide {
    opacity: 0;
    pointer-events: none;
  }
}

/* ========================================= */
/* Dot Indicators                            */
/* ========================================= */

.carousel-indicators {
  display: flex;
  width: 100%;
  padding: 10px;
  align-items: center;
  justify-content: center;
}
</style>