<script lang="ts">
	import { AccountLayout } from "$lib/layouts";
    import { base } from '$app/paths';

    const p = (path: string) => `${base}${path}`.replaceAll("//", "/")

    let projects = [{
        name: "prj1"
    }, {
        name: "prj2"
    }, {
        name: "prj3"
    }]
</script>

<svelte:head>
    <title>Preferences ~ Dashboard</title>
</svelte:head>

<AccountLayout breadcrumbs={[
    {
      key: `dashboard-projects`,
      label: 'Projects',
    },
  ]}>
    
    <svelte:fragment>
        <div class="flex items-center justify-between">
            <div>
                <h3>My Projects</h3>
                <button>New Project</button>
                <button>New Organization</button>
            </div>
            <!-- <FormHeader
              title="Account audit logs"
              description="View the audit log trail of actions made from your account"
            /> -->
          </div>
          <!-- <AuditLogs /> -->
           <pre>TODO: Projects List</pre>
           <ul>
               {#each projects as project (project.name)}
                    <li>
                        <a href={p(`/project/${project.name}`)}>View {project.name}</a>
                    </li>
               {/each}
           </ul>
    </svelte:fragment>
    
</AccountLayout>