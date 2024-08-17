<script lang="ts">
	import { AccountLayout } from "$lib/layouts";
</script>

<svelte:head>
    <title>Preferences ~ Dashboard</title>
</svelte:head>

<AccountLayout breadcrumbs={[
    {
      key: `dashboard-settings`,
      label: 'Security',
    },
  ]}>
    
    <svelte:fragment>
        <div class="flex items-center justify-between">
          <div>
            <h3>Multi-factor authentication</h3>
            <p>Add an additional layer of security to your account by requiring more than just a password to sign in.</p>
          </div>
            <!-- <FormHeader
              title="Account audit logs"
              description="View the audit log trail of actions made from your account"
            /> -->
          </div>
          <!-- <AuditLogs /> -->
           <pre>Generate one-time passwords via authenticator apps like 1Password, Authy, etc. as a second factor to verify your identity during sign-in.</pre>
    </svelte:fragment>
    
</AccountLayout>