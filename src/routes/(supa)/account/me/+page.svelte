<script lang="ts">
	import { AccountLayout } from "$lib/layouts";
	import AccountInformation from "$lib/elements/account/information.svelte";

    let profile = {}
</script>

<svelte:head>
    <title>Preferences ~ Dashboard</title>
</svelte:head>

<AccountLayout breadcrumbs={[
    {
      key: `dashboard-settings`,
      label: 'Preferences',
    },
  ]}>
    
    <svelte:fragment>
        <article class="max-w-4xl p-4">
            <!-- isLoading -->
            <!-- isError -->
            <section>
                <AccountInformation profile={profile} />
            </section>

        </article>
    </svelte:fragment>
    
</AccountLayout>