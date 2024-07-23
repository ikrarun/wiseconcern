<script lang="ts">
  // @ts-ignore
  import Icon from "@iconify/svelte";
  export let title: string;
  let isSearchOpen: boolean = false;
  let background: string = "bg-black/50";
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
      background = "bg-black/50";
    }
  });
</script>

<div class="w-full fixed top-0 z-[900]">
  <div
    class="py-4 inline-flex w-full justify-between transition-all duration-700 ease-in-out {background} text-white"
  >
    <div class="inline-flex px-4 justify-between mx-auto w-full max-w-[900px]">
      <a href="/" class="text-2xl text-center">{title}</a>

      <!-- Large Screen Menu -->
      <form
        autocomplete="off"
        class="hidden sm:inline-flex grow-0 gap-2 items-center justify-center bg-transparent border border-white px-4 py-1 rounded-full"
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

      <!-- Small screen Menu starts here -->
      <button class="sm:hidden text-2xl" on:click={toggleIsSearchOpen}>
        <Icon icon={isSearchOpen ? "mdi:cross-circle" : "mdi:menu"} />
      </button>

      <!-- Small menu -->
      <div
        class="w-full {isSearchOpen
          ? 'flex top-0 left-0'
          : 'flex top-full left-0'} transition-all -z-40 duration-700 sm:hidden backdrop-blur-xl backdrop-brightness-50 h-full fixed px-12 items-center justify-center"
      >
        <!-- Forms -->
        <form
          autocomplete="off"
          class="inline-flex w-full max-w-[500px] mx-auto gap-2 px-4 items-center justify-between bg-transparent border border-white py-1 rounded-full"
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
      </div>
      <!-- SearchBar Ends -->
      <!-- Small screen menu ends here -->
    </div>
  </div>
</div>
