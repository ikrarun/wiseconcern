<script lang="ts">
  import Icon from "@iconify/svelte";
  export let title: string;

  let isMenuOpen: boolean = false;
  let isSearhPage: boolean = window.location.pathname === "/search";
  const toggleMenuOpen = () => {
    isMenuOpen = !isMenuOpen;
  };

  $: {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }
</script>

<div
  class="w-full flex fixed transition-all bg-amber-400 text-black duration-100 ease-in-out left-0 right-0 top-0 z-[500] items-center mx-auto justify-center"
>
  <div
    class="inline-flex z-[500] justify-between max-w-[900px] px-4 items-center w-full py-2"
  >
    <button
      aria-label="menu"
      class="z-[500]"
      on:click|preventDefault={toggleMenuOpen}
    >
      {#if isMenuOpen}
        <Icon icon="mdi:close" class="text-xl" />
      {:else}
        <Icon icon="mdi:menu" class="text-xl" />
      {/if}</button
    >

    <a
      href="/"
      aria-label="Go to Home"
      class="font-black z-[500] text-3xl uppercase">{title}</a
    >

    <a
      aria-label="Open Search Page"
      href="/search"
      class="{isSearhPage
        ? 'invisible cursor-not-allowed select-none'
        : ''} z-[500]"><Icon icon="mdi:magnify" class="text-xl z-[500]" /></a
    >
  </div>

  <!-- Nav Menu -->
  <div
    class="fixed left-0 uppercase -z-50 right-0 items-center justify-center flex flex-col {isMenuOpen
      ? 'top-0'
      : '-top-full'} px-8 h-full bg-amber-400 text-black transition-all duration-700 ease-in-out"
  >
    <div
      class="flex flex-col w-full max-w-[380px] mx-auto justify-center items-center"
    >
      <a aria-label="Go to Home" href="/" class="text-xl">Home</a>
      <span class="rounded-full my-2 bg-black/30 w-2/3 h-0.5" />
      <a aria-label="Go to Blogs" href="/blogs" class="text-xl">Blogs</a>
      <span class="rounded-full my-2 bg-black/30 w-2/3 h-0.5" />
      <a aria-label="Go to About" href="/about" class="text-xl">About</a>
      <span class="rounded-full my-2 bg-black/30 w-2/3 h-0.5" />
    </div>
  </div>
</div>
