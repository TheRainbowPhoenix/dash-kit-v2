<script lang="ts">
	import { AccountLayout } from "$lib/layouts";
</script>

<svelte:head>
    <title>Preferences ~ Dashboard</title>
</svelte:head>

<AccountLayout breadcrumbs={[
    {
      key: `dashboard-audit-log`,
      label: 'Audit Logs',
    },
  ]}>
    
    <svelte:fragment>
        <div class="flex items-center justify-between">
            <div>
                <h3>Account audit logs</h3>
                <p>View the audit log trail of actions made from your account</p>
            </div>
            <!-- <FormHeader
              title="Account audit logs"
              description="View the audit log trail of actions made from your account"
            /> -->
          </div>
          <!-- <AuditLogs /> -->
           <pre>TODO: AuditLogs here</pre>
    </svelte:fragment>
    
</AccountLayout>