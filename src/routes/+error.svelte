<script>
    import { page } from "$app/stores";
    import Titulo from "$lib/components/Titulo.svelte";
</script>

<Titulo tag="h1">
    {$page.status}
</Titulo>

<h1>
    A página {$page.url.pathname} não existe
</h1>

<style>
    h1 {
        margin-top: 3rem;
    }
</style>
