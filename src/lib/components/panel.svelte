
<div class="bg-surface-100 rounded-md border shadow-sm overflow-hidden mb-8">
    
    {#if $$slots.title}
        <div class="bg-surface-100 border-b border-default flex items-center px-6 py-4">
            <slot name="title" />
        </div>
    {/if}

    <slot />

    {#if $$slots.footer}
        <div class="bg-surface-100 border-t border-default">
            <div class="flex h-12 items-center px-6">
                <slot name="footer" />
            </div>
        </div>
    {/if}
</div>