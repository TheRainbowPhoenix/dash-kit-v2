<script lang="ts">
    export let breadcrumbs: any[]
</script>

<div
	class="flex h-12 max-h-12 min-h-12 items-center justify-between py-2 px-5 bg-dash-sidebar border-b border-default"
>
	<div class="-ml-2 flex items-center text-sm">
        {#each breadcrumbs as breadcrumb, i (breadcrumb.key)}
            {#if i > 0}
                <span class="text-border-stronger"><svg viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" fill="none" shape-rendering="geometricPrecision"><path d="M16 3.549L7.12 20.600"></path></svg></span>
            {/if}

            <a
            
                class="text-gray-1100 block px-2 py-1 text-xs leading-5 focus:bg-gray-100 focus:text-gray-900 focus:outline-none"
                >{breadcrumb.label}</a
            >
            
        {/each}
	</div>
	<div class="flex items-center gap-x-2">
		<span
			class="relative justify-center cursor-pointer inline-flex items-center space-x-2 text-center font-regular ease-out duration-200 rounded-md outline-none transition-all outline-0 focus-visible:outline-4 focus-visible:outline-offset-1 border text-foreground bg-transparent border-strong hover:border-foreground-muted focus-visible:outline-border-strong data-[state=open]:border-stronger data-[state=open]:outline-border-strong text-xs px-2.5 py-1 h-[26px] hidden md:flex"
			data-size="tiny"
			type="button"
			aria-haspopup="dialog"
			aria-expanded="false"
			aria-controls="radix-:R39kd9m:"
			data-state="closed"><span class="truncate">Feedback</span></span
		><button
			data-size="tiny"
			type="button"
			class="relative justify-center cursor-pointer inline-flex items-center space-x-2 text-center font-regular ease-out duration-200 rounded-md outline-none transition-all outline-0 focus-visible:outline-4 focus-visible:outline-offset-1 border text-foreground hover:bg-surface-300 shadow-none focus-visible:outline-border-strong data-[state=open]:bg-surface-300 data-[state=open]:outline-border-strong border-transparent text-xs py-1 h-[26px] group px-1"
			aria-haspopup="dialog"
			aria-expanded="false"
			aria-controls="radix-:R59kd9m:"
			data-state="closed"
		>
			<!-- -->
			<div class="[&amp;_svg]:h-[14px] [&amp;_svg]:w-[14px] text-foreground-muted">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					width="18"
					height="18"
					viewBox="0 0 24 24"
					fill="none"
					stroke="currentColor"
					stroke-width="1.5"
					stroke-linecap="round"
					stroke-linejoin="round"
					class="lucide lucide-inbox transition group-hover:text-foreground text-foreground-light"
					><polyline points="22 12 16 12 14 15 10 15 8 12 2 12"></polyline><path
						d="M5.45 5.11 2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z"
					></path></svg
				>
			</div></button
		>
		<div
			class="relative flex items-center"
			data-state="closed"
			type="button"
			aria-haspopup="dialog"
			aria-expanded="false"
			aria-controls="radix-:R79kd9m:"
		>
			<button
				data-size="tiny"
				type="button"
				id="help-popover-button"
				class="relative justify-center cursor-pointer inline-flex items-center space-x-2 text-center font-regular ease-out duration-200 rounded-md outline-none transition-all outline-0 focus-visible:outline-4 focus-visible:outline-offset-1 border text-foreground hover:bg-surface-300 shadow-none focus-visible:outline-border-strong data-[state=open]:bg-surface-300 data-[state=open]:outline-border-strong border-transparent text-xs py-1 h-[26px] px-1"
				><div class="[&amp;_svg]:h-[14px] [&amp;_svg]:w-[14px] text-foreground-muted">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="16"
						height="16"
						viewBox="0 0 24 24"
						fill="none"
						stroke="currentColor"
						stroke-width="1.5"
						stroke-linecap="round"
						stroke-linejoin="round"
						class="sbui-icon text-foreground-light"
						><circle cx="12" cy="12" r="10"></circle><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"
						></path><line x1="12" y1="17" x2="12.01" y2="17"></line></svg
					>
				</div>
				<!-- -->
			</button>
		</div>
	</div>
</div>
