<script lang="ts">
  import { onMount } from "svelte";

  // let x = writable([]);
  let res: any[] = []

  async function get() {
    const response = await fetch("/api/ann", {
      method: "GET",
      headers: {
        "content-type": "application/json",
      },
    });

    // console.log(await response.json())
    res = await response.json();

    // console.log(data);
    // res = data;
  }

  onMount(async () => {
    await get();
  });

  // onMount(() => {
  //   console.log(data);
  // });
</script>

<button on:click={get}>get</button>
<ul>
	{#each res as {id, remark}, index (id)}
		<li>{id} - {remark}</li>
	{/each}
</ul>
