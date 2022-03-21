<script>
  let count = 0;

  function add() {
    count += 1;
  }
</script>

<p>You've clicked the button {count} times</p>
<button on:click={add}>Add one</button>
