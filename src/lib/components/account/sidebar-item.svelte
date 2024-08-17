<script lang="ts">
    export let links: any[];
    export let subitems: any[];
    export let subitemsParentKey: number = 0;
</script>

<ul class="space-y-1">
    {#each links as link, i (`${link.key}-${i}-sidebarItem`)}

        <a class="block" href={link.href}>
            <span class="group flex max-w-full cursor-pointer items-center space-x-2 border-default py-1 font-normal outline-none ring-foreground focus-visible:z-10 focus-visible:ring-1 group-hover:border-foreground-muted">
                <span title="All projects" class="w-full truncate text-sm text-foreground-light transition group-hover:text-foreground">{link.label}</span>
            </span>
        </a>

    {/each}
</ul>
