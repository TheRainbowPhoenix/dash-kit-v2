<script lang="ts">
	import SectionWithHeaders from "$lib/components/account/section-with-headers.svelte";
	import SidebarItem from "$lib/components/account/sidebar-item.svelte";
	import LayoutHeader from "../layout-header.svelte";

    export let title: string
    export let breadcrumbs: any[]
    export let sections: any[] = [];
    let subitems: any[] = []
    let subitemsParentKey: number = 0;
    export let hideSidebar: boolean = false;

    let noContent = !sections;
</script>


<div class="flex h-full">
    {#if !hideSidebar && !noContent}
      <div
        id="with-sidebar"
        class='h-full bg-dash-sidebar hide-scrollbar w-64 overflow-auto border-r border-default'
      >
        {#if title}
          <div class="mb-2">
            <div class="flex h-12 max-h-12 items-center border-b px-6 border-default">
              <h4 class="mb-0 text-lg truncate" title={title}>
                {title}
              </h4>
            </div>
          </div>
        {/if}
        <!-- {header && header} -->
        <slot name="header" />
        <div class="-mt-1">
            <nav aria-label="Sidebar" aria-orientation="vertical" aria-labelledby="options-menu">
          <!-- <Menu> -->
            <slot name="custom-sidebar-content"/>
            {#each sections as section}
                {#if section.heading}
                    <SectionWithHeaders
                        section={section}
                        subitems={subitems}
                        subitemsParentKey={subitemsParentKey}
                    />
                {:else}
                    <div class="border-b py-5 px-6 border-default">
                        {#key section.key}
                            <SidebarItem
                                links={section.links}
                                subitems={subitems}
                                subitemsParentKey={subitemsParentKey}
                            />
                        {/key}
                    </div>
                {/if}
            {/each}
          <!-- </Menu> -->
            </nav>
        </div>
      </div>
    {/if}
    <div class="flex flex-1 flex-col">
        <LayoutHeader breadcrumbs={breadcrumbs} />
      <div class="flex-1 flex-grow overflow-y-auto">
        <slot />
      </div>
    </div>
  </div>