<script lang="ts">
	import Titulo from "$lib/components/Titulo.svelte";
	import receitas from "$lib/json/receitas.json";
	import Receita from "$lib/components/Receita.svelte";
	import { minhaLista } from "$lib/stores/minhaLista";
	import LinkTag from "$lib/components/diversos/LinkTag.svelte";

	$: receitasFiltradas = receitas.filter((receita) =>
		receita.ingredientes.every((ingrediente) =>
			$minhaLista.includes(ingrediente)
		)
	);
</script>

<svelte:head>
	<title>Receitas</title>
</svelte:head>

<main>
	<Titulo tag="h3">Receitas</Titulo>

	<div class="info">
		<p class="verde">Resultados encontrados: {receitasFiltradas.length}</p>

		{#if receitasFiltradas.length !== 0}
			<p>
				Veja as opções de receitas que encontramos com os ingredientes que
				você tem por aí!
			</p>
		{:else}
			<p>Nenhuma receita encontrada com estes ingredientes 😢</p>
		{/if}
	</div>
	{#if receitasFiltradas.length !== 0}
		<ul class="receitas">
			{#each receitasFiltradas as receita (receita.nome)}
				<Receita {receita} />
			{/each}
		</ul>
	{/if}

	<div class="botao-voltar">
		<LinkTag href="">Editar Lista</LinkTag>
	</div>
</main>

<style>
	.info {
		margin-bottom: 3.375rem;
	}

	.info > p {
		line-height: 2rem;
	}

	.info > p.verde {
		color: var(--verde);
	}

	.receitas {
		text-align: start;
		margin-bottom: 3.75rem;

		display: flex;
		flex-wrap: wrap;
		justify-content: center;
		gap: 1.5rem;
	}
	.botao-voltar {
		display: flex;
		justify-content: center;
	}
</style>
