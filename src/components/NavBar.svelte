<script lang="ts">
  import Icon from "@iconify/svelte";

  export let title: string;
  let isSearchOpen: boolean = false;
  let isMenuOpen: boolean = false;

  const toggleIsSearchOpen = () => {
    isSearchOpen = !isSearchOpen;
  };
  const handleFormSubmission = (e: Event) => {
    console.log("triggered");
    const formData = new FormData(e.target as HTMLFormElement);
    console.log(formData.get("search"));
    window.location.href = `/blogs/${formData.get("search")}`;
  };

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
    <button class="z-[500]" on:click|preventDefault={toggleMenuOpen}>
      {#if isMenuOpen}
        <Icon icon="mdi:close" class="text-xl" />
      {:else}
        <Icon icon="mdi:menu" class="text-xl" />
      {/if}</button
    >

    <a href="/" class="font-black z-[500] text-3xl uppercase">{title}</a>

    <button on:click|preventDefault={toggleIsSearchOpen} class="z-[500]"
      ><Icon icon="mdi:magnify" class="text-xl z-[500]" /></button
    >
  </div>

  <!-- SearchBar -->
  <div
    class="{isSearchOpen
      ? 'flex'
      : 'hidden'} flex-col z-[900] gap-4 p-8 justify-center items-center w-full h-fit bg-black fixed top-0 left-0 right-0 transition-all duration-300 ease-in-out"
  >
    <form
      class="w-full max-w-[900px] z-[900] inline-flex items-center outline border-2 border-white rounded-full px-8 py-3 justify-center"
      on:submit|preventDefault={handleFormSubmission}
    >
      <div class="flex flex-col gap-2">
        <input
          type="text"
          name="search"
          placeholder="What are you looking for?"
          class="grow bg-transparent outline-none ring-0 z-[900] text-white"
        />
      </div>
      <button
        type="submit"
        class="inline-flex items-center justify-center z-[900] gap-2 text-white"
      >
        <Icon icon="mdi:magnify" class="text-xl" />
        <span>Search</span>
      </button>
    </form>

    <button
      class="inline-flex items-center bg-white rounded-full px-4 py-2 text-black justify-center z-[900] gap-2"
      on:click|preventDefault={toggleIsSearchOpen}
    >
      <Icon icon="mdi:close" class="text-xl" />
      <span>Close</span>
    </button>
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
      <a href="/" class="text-xl">Home</a>
      <span class="rounded-full my-2 bg-black/30 w-2/3 h-0.5" />
      <a href="/blogs" class="text-xl">Blogs</a>
      <span class="rounded-full my-2 bg-black/30 w-2/3 h-0.5" />
      <a href="/about" class="text-xl">About</a>
      <span class="rounded-full my-2 bg-black/30 w-2/3 h-0.5" />
    </div>
  </div>
</div>
