<script context="module" lang="ts">
  import cssText from "data-text:~style.css";
  import type { PlasmoCSConfig } from "plasmo";

  export const config: PlasmoCSConfig = {
    matches: ["*://localhost:*/*"],
    // all_frames: true,
  };

  export const getStyle = () => {
    const style = document.createElement("style");
    style.textContent = cssText;
    return style;
  };

  console.log(
    "You may find that having is not so pleasing a thing as wanting. This is not logical, but it is often true."
  );
</script>

<script>
  let innerWidth = window.innerWidth;
  let visible = true;
</script>

<svelte:window
  on:resize={() => {
    visible = true;
    console.log(innerWidth);
  }}
  bind:innerWidth
/>
{#key { visible }}
  {#if visible}
    <div
      class="fixed z-[9999] space-x-2 group bottom-10 ease-out duration-300 flex items-center w-auto px-2 py-2 text-black text-xs dark:text-gray-200 -translate-x-1/2 border rounded shadow-[#404040_2px_2px] border-neutral-700 dark:border-neutral-300 shadow-3xl backdrop-blur-lg bg-white/90 dark:bg-neutral-900 left-1/2"
    >
      <div
        class="px-1.5 py-px text-white font-bold bg-red-600 sm:bg-amber-700 md:bg-emerald-600 lg:bg-sky-600 xl:bg-blue-600 2xl:bg-indigo-600 rounded-sm"
      >
        <span class="inline-block sm:hidden">XS</span>
        <span class="hidden sm:inline-block md:hidden">SM</span>
        <span class="hidden md:inline-block lg:hidden">MD</span>
        <span class="hidden lg:inline-block xl:hidden">LG</span>
        <span class="hidden max-2xl:xl:inline-block">XL</span>
        <span class="hidden 2xl:inline-block">2XL</span>
      </div>
      <span
        class="px-2 py-1 text-black dark:text-white hidden group-hover:block"
        ><span />{innerWidth}px</span
      >
      <button
        on:click={() => {
          visible = false;
        }}
        class="items-center justify-center w-3 h-3 text-neutral-900 hidden group-hover:flex rounded-full transition-colors cursor-pointer dark:text-neutral-300 hover:text-red-700"
      >
        <svg
          class="w-3 h-3"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="3"
          stroke="currentColor"
          ><path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M6 18L18 6M6 6l12 12"
          /></svg
        >
      </button>
    </div>
  {/if}
{/key}

<!-- <span class="bg-lime-500">Every living thing wants to survive</span> -->

<style>
</style>
