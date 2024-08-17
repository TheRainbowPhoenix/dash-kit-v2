<script lang="ts">
	import SidebarItem from "./sidebar-item.svelte";

    export let section: any = {};
    export let subitems: any[] = [];
    export let subitemsParentKey: number = 0;
</script>

<div class="border-b py-5 px-6 border-default">
    {#key section.key}
        {#if section.heading}
            <!-- {section.heading && <Menu.Group title={section.heading} />} -->
            <div class="flex space-x-3 mb-2 font-normal">
                <span class="text-sm text-foreground-lighter w-full">{section.heading}</span>
            </div>
        {/if}

        {#if section.versionLabel}
            <div class="mb-1 px-3">
                {section.versionLabel}
                <!-- <Badge variant="warning">{section.versionLabel}</Badge> -->
            </div>
        {/if}
        
        <SidebarItem
            links={section.links}
            subitems={subitems}
            subitemsParentKey={subitemsParentKey}
        />
    {/key}
    
</div>