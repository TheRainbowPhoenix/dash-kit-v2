<script lang="ts">
	import { AccountLayout } from "$lib/layouts";
</script>

<svelte:head>
    <title>Preferences ~ Dashboard</title>
</svelte:head>

<AccountLayout breadcrumbs={[
    {
      key: `dashboard-account-tokens`,
      label: 'Access Tokens',
    },
  ]}>
    
    <svelte:fragment>
      <div className="1xl:px-28 mx-auto flex flex-col px-5 pt-6 pb-14 lg:px-16 xl:px-24 2xl:px-32">
        <div className="flex items-center justify-between">
          <div>
            <h3>Access Tokens</h3>
            <!-- <FormHeader
              title="Access Tokens"
              description="Personal access tokens can be used with our Management API or CLI."
            /> -->
          </div>
          <div className="flex items-center space-x-4 mb-6">
            <div className="flex items-center space-x-2">
              <a target="_blank" rel="noreferrer" data-size="tiny" type="button" class="relative justify-center cursor-pointer inline-flex items-center space-x-2 text-center font-regular ease-out duration-200 rounded-md outline-none transition-all outline-0 focus-visible:outline-4 focus-visible:outline-offset-1 border text-foreground bg-alternative dark:bg-muted hover:bg-selection border-strong hover:border-stronger focus-visible:outline-brand-600 data-[state=open]:bg-selection data-[state=open]:outline-brand-600 data-[state=open]:border-button-hover text-xs px-2.5 py-1 h-[26px]" href="https://supabase.com/docs/reference/api/introduction">
                <div class="[&amp;_svg]:h-[14px] [&amp;_svg]:w-[14px] text-foreground-muted">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="sbui-icon">
                    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                    <polyline points="15 3 21 3 21 9"></polyline>
                    <line x1="10" y1="14" x2="21" y2="3"></line>
                  </svg>
                </div>
                <span class="truncate">API Docs</span>
              </a>

              <a target="_blank" rel="noreferrer" data-size="tiny" type="button" class="relative justify-center cursor-pointer inline-flex items-center space-x-2 text-center font-regular ease-out duration-200 rounded-md outline-none transition-all outline-0 focus-visible:outline-4 focus-visible:outline-offset-1 border text-foreground bg-alternative dark:bg-muted hover:bg-selection border-strong hover:border-stronger focus-visible:outline-brand-600 data-[state=open]:bg-selection data-[state=open]:outline-brand-600 data-[state=open]:border-button-hover text-xs px-2.5 py-1 h-[26px]" href="https://supabase.com/docs/reference/cli/start"><div class="[&amp;_svg]:h-[14px] [&amp;_svg]:w-[14px] text-foreground-muted">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="sbui-icon"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line>
                </svg>
              </div>
              <span class="truncate">CLI docs</span></a>
            </div>
            <!-- <NewAccessTokenButton onCreateToken={setNewToken} /> -->
            <div class="container max-w-7xl">
              <div class="flex justify-between">
                <div class="flex items-center">
                  <button data-size="tiny" type="button" class="relative justify-center cursor-pointer inline-flex items-center space-x-2 text-center font-regular ease-out duration-200 rounded-md outline-none transition-all outline-0 focus-visible:outline-4 focus-visible:outline-offset-1 border bg-brand-400 dark:bg-brand-500 hover:bg-brand/80 dark:hover:bg-brand/50 text-foreground border-brand-500/75 dark:border-brand/30 hover:border-brand-600 dark:hover:border-brand focus-visible:outline-brand-600 data-[state=open]:bg-brand-400/80 dark:data-[state=open]:bg-brand-500/80 data-[state=open]:outline-brand-600 text-xs py-1 h-[26px] rounded-r-none px-3">
                    <span class="truncate">Generate new token</span>
                  </button>
                  <button data-size="tiny" type="button" class="relative justify-center cursor-pointer inline-flex items-center space-x-2 text-center font-regular ease-out duration-200 rounded-md outline-none transition-all outline-0 focus-visible:outline-4 focus-visible:outline-offset-1 border bg-brand-400 dark:bg-brand-500 hover:bg-brand/80 dark:hover:bg-brand/50 text-foreground border-brand-500/75 dark:border-brand/30 hover:border-brand-600 dark:hover:border-brand focus-visible:outline-brand-600 data-[state=open]:bg-brand-400/80 dark:data-[state=open]:bg-brand-500/80 data-[state=open]:outline-brand-600 text-xs h-[26px] rounded-l-none px-[4px] py-[5px]" id="radix-:r17:" aria-haspopup="menu" aria-expanded="false" data-state="closed">
                    <div class="[&amp;_svg]:h-[14px] [&amp;_svg]:w-[14px] text-brand-600">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chevron-down "><path d="m6 9 6 6 6-6"></path>
                      </svg>
                    </div>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-between">
          <!-- <Alert
            withIcon
            className="mb-6 w-full"
            variant="warning"
            title="Personal access tokens can be used to control your whole account and use features added in the future. Be careful when sharing them!"
          /> -->
          <div class=" relative rounded-md border py-4 px-6 flex space-x-4 items-start  bg-amber-200 border-amber-700 mb-6 w-full"><div class="text-amber-900"><svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="sbui-icon"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path><line x1="12" y1="9" x2="12" y2="13"></line><line x1="12" y1="17" x2="12.01" y2="17"></line></svg></div><div class="flex flex-1 items-center justify-between"><div><h3 class="text-amber-1200 block text-sm font-normal mb-1">Personal access tokens can be used to control your whole account and use features added in the future. Be careful when sharing them!</h3><div class="text-xs text-amber-1100"></div></div></div></div>
        </div>
        <div className="space-y-4">
          <!-- {newToken && <NewTokenBanner token={newToken} />}
          <AccessTokenList /> -->
          <div><div class="table-container"><table class="table"><thead><tr><th class="p-3 px-4 text-left">Token</th><th class="p-3 px-4 text-left">Name</th><th class="p-3 px-4 text-left">Created</th><th class="p-3 px-4 text-left"></th></tr></thead><tbody><tr class=""><td class="p-3 py-12 text-center" colspan="5"><p class="text-foreground-light">You do not have any tokens created yet</p></td></tr></tbody></table></div></div>
        </div>
      </div>
    </svelte:fragment>
    
</AccountLayout>