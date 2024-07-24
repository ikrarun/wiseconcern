<script lang="ts">
  // @ts-ignore
  import Icon from "@iconify/svelte";
  export let title: string;
  let isSearchOpen: boolean = false;
  let isMenuOpen: boolean = false;
  let textColor: string = "text-black";
  const toggleIsSearchOpen = () => {
    isSearchOpen = !isSearchOpen;
  };
  const handleFormSubmission = (e: Event) => {
    const formData = new FormData(e.target as HTMLFormElement);
    console.log(formData.get("search"));
    window.location.href = `/blogs/${formData.get("search")}`;
  };

  window.addEventListener("resize", () => {
    isSearchOpen = false;
    isMenuOpen = false;
  });
  const toggleMenuOpen = () => {
    isMenuOpen = !isMenuOpen;
  };

  $: {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
      textColor = "text-white"; // Disable scrolling on the body when isMenuOpen is true
    } else {
      document.body.style.overflow = "";
      textColor = "text-black";
    } // Reset overflow style when isMenuOpen is false
  }
</script>

<div
  class="w-full flex fixed transition-all bg-white {textColor} duration-100 ease-in-out left-0 right-0 top-0 z-[500] items-center mx-auto justify-center"
>
  <div
    class="inline-flex justify-between max-w-[900px] px-4 items-center w-full py-2"
  >
    <button class="" on:click|preventDefault={toggleMenuOpen}>
      {#if isMenuOpen}
        <Icon icon="mdi:close" class="text-xl" />
      {:else}
        <Icon icon="mdi:menu" class="text-xl" />
      {/if}</button
    >

    <a href="/" class="font-black text-3xl uppercase">{title}</a>
    <!-- 
  
    <nav class="hidden sm:inline-flex gap-8 text-lg uppercase">
      <a href="/blogs">Blogs</a>
      <a href="/about">About</a>
    </nav> -->

    <button on:click|preventDefault={toggleIsSearchOpen}
      ><Icon icon="mdi:magnify" class="text-xl" /></button
    >
  </div>

  <!-- SearchBar -->
  <div
    class="{isSearchOpen
      ? 'flex'
      : 'hidden'} flex-col z-[500] gap-4 p-8 justify-center items-center w-full h-fit bg-black fixed top-0 left-0 right-0 transition-all duration-300 ease-in-out"
  >
    <form
      on:submit|preventDefault={handleFormSubmission}
      class="w-full max-w-[900px] z-[500] inline-flex items-center outline border-2 border-white rounded-full px-8 py-3 justify-center"
    >
      <input
        type="text"
        name="search"
        placeholder="What are you looking for?"
        class="grow bg-transparent outline-none ring-0 text-white"
      />
      <button
        type="submit"
        class="inline-flex items-center justify-center gap-2 text-white"
      >
        <Icon icon="mdi:magnify" class="text-xl" />
        <span>Search</span>
      </button>
    </form>
    <button
      on:click|preventDefault={toggleIsSearchOpen}
      class="inline-flex items-center justify-center z-[500] gap-2 text-white"
    >
      <Icon icon="mdi:close" class="text-xl" />
      <span>Close</span>
    </button>
  </div>

  <!-- Nav Menu -->
  <div
    class="fixed left-0 uppercase -z-50 right-0 items-center justify-center flex flex-col {isMenuOpen
      ? 'top-0'
      : '-top-full'} px-8 h-full bg-blue-700 text-white transition-all duration-700 ease-in-out"
  >
    <a href="/" class="text-xl">Home</a>
    <span class="rounded-full my-2 bg-white/30 w-2/3 h-0.5" />
    <a href="/blogs" class="text-xl">Blogs</a>
    <span class="rounded-full my-2 bg-white/30 w-2/3 h-0.5" />
    <a href="/about" class="text-xl">About</a>
    <span class="rounded-full my-2 bg-white/30 w-2/3 h-0.5" />
  </div>
</div>

<style>
  @import url("https://fonts.googleapis.com/css2?family=Gabarito:wght@400..900&display=swap");
  div {
    font-family: "Gabarito", sans-serif;
    font-optical-sizing: auto;
    font-style: normal;
  }
</style>
