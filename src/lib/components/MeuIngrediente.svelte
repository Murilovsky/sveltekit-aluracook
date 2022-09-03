<script lang="ts">
	import {fade,scale} from 'svelte/transition'
	import { minhaLista } from "$lib/stores/minhaLista";

	export let ingrediente: string;
	import Tag from "./diversos/Tag.svelte";

	function remover() {
		minhaLista.removeIngrediente(ingrediente);
	}
</script>

<div class="meu-ingrediente-container" in:scale out:fade={{duration:200}}>
	<Tag ativa>
		<button class="close" on:click={remover} />
		{ingrediente}
	</Tag>
	<span class="remover" on:click={remover}>Remover</span>
</div>

<style>
	.meu-ingrediente-container {
		position: relative;
	}

	.close {
		background-image: url("/icones/close.svg");
		height: 10px;
		width: 10px;
		cursor: pointer;

		position: absolute;
		top: 4px;
		right: 4px;
	}

	.remover {
		line-height: 24px;
		font-size: 0.875rem;
		color: var(--laranja);
		cursor: pointer;
	}
</style>
