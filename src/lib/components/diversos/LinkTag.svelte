<script lang="ts">

export let href:String
export let desabilitado:boolean = false
import Tag from "./Tag.svelte";

</script>
<a href="/{href}">
    <Tag ativa={true} tamanho={"lg"} desabilitado={desabilitado}>
    <slot></slot>
    </Tag>
  </a>