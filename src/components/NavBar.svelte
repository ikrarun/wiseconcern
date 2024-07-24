<script lang="ts">
  // @ts-ignore
  import Icon from "@iconify/svelte";
  export let title: string;
  let isSearchOpen: boolean = false;
  let background: string = "bg-black/70";
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
  });
  window.addEventListener("scroll", () => {
    if (window.scrollY > 0) {
      background = "bg-black";
    } else {
      background = "bg-black/70";
    }
  });
</script>

<div class="w-full fixed top-0 z-[900]">
  <div
    class="py-4 inline-flex w-full justify-between transition-all duration-700 ease-in-out {background} text-white"
  >
    <div class="inline-flex px-4 justify-between mx-auto w-full max-w-[900px]">
      <a href="/" class="text-2xl text-center">{title}</a>
      <div class="inline-flex items-center gap-4 justify-between">
        <!-- Large Screen Menu -->
        <form
          autocomplete="off"
          class="hidden sm:inline-flex font-semibold grow-0 gap-2 items-center justify-center bg-transparent border-2 border-white px-4 py-1 rounded-full"
          on:submit|preventDefault={handleFormSubmission}
        >
          <input
            type="text"
            class="bg-transparent outline-none ring-0"
            placeholder="Search"
            name="search"
          />
          <button type="submit">
            <Icon icon="mdi:magnify" />
          </button>
        </form>
        <span class="border rounded-md sm:flex bg-white" />

        <a href="/blogs" class="hidden sm:inline-flex">Blogs</a>
        <span class="border sm:flex rounded-md bg-white" />

        <a href="/about" class="hidden sm:inline-flex">About</a>
      </div>

      <!-- Small screen Menu starts here -->
      <button class="sm:hidden text-2xl" on:click={toggleIsSearchOpen}>
        <Icon icon={isSearchOpen ? "mdi:cross-circle" : "mdi:menu"} />
      </button>

      <!-- Small menu -->
      <div
        class="w-full {isSearchOpen
          ? 'flex flex-col top-0 left-0'
          : 'flex flex-col top-full left-0'} gap-4 transition-all -z-40 duration-700 sm:hidden backdrop-blur-xl backdrop-brightness-50 h-full fixed px-12 justify-center"
      >
        <!-- Forms -->
        <form
          autocomplete="off"
          class="inline-flex w-full font-semibold max-w-[500px] mx-auto gap-2 px-4 items-center justify-between bg-transparent border-2 border-white py-1 rounded-full"
          on:submit|preventDefault={handleFormSubmission}
        >
          <input
            type="text"
            class="bg-transparent grow outline-none ring-0"
            placeholder="Search"
            name="search"
          />
          <button type="submit">
            <Icon icon="mdi:magnify" />
          </button>
        </form>
        <span class="border mx-1 rounded-full bg-white" />
        <a href="/blogs" class="px-4">Blogs</a>
        <span class="border mx-1 rounded-full bg-white" />
        <a href="/about" class="px-4">About</a>
        <span class="border mx-1 rounded-full bg-white" />
      </div>
      <!-- SearchBar Ends -->
      <!-- Small screen menu ends here -->
    </div>
  </div>
</div>
