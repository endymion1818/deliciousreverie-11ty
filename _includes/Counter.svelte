<script context="module">
  export const frontMatter = {
    hydrate: "eager",
  };
</script>

<script>
	let count = 0;

	function handleClick() {
		count += 1;
	}
</script>

<button on:click={handleClick}>
	Clicked {count} {count === 1 ? 'time' : 'times'}
</button>
