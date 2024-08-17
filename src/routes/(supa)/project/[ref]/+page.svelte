<script lang="ts">
	import { AccountLayout } from "$lib/layouts";
    import { base } from '$app/paths';

    const p = (path: string) => `${base}${path}`.replaceAll("//", "/")

    export let data;
</script>

<svelte:head>
    <title>Preferences ~ Dashboard</title>
</svelte:head>

<AccountLayout breadcrumbs={[
    {
      key: `dashboard-audit-log`,
      label: data.name,
    },
  ]}>
    
    <svelte:fragment>
        <div class="w-full mx-auto mt-4 space-y-6 p-4 max-w-7xl">
                <div>
                    <h1 class="text-3xl">{data.name}</h1>
                </div>
              <br/>
                <h3>Welcome to your new project</h3>
                <p>Your project has been deployed on its own instance, with its own API all set up and ready to use.</p>

                <div>
                    <ul>
                        <li>
                            <a href={p(`/project/${data.name}/advisors/performance`)}>Performance Advisors</a>
                        </li>
                        <li>
                            <a href={p(`/project/${data.name}/advisors/security`)}>Security Advisors</a>    
                        </li>
                    </ul>
                    
                    
                </div>
          <!-- <AuditLogs /> -->
          <pre>TODO: Project details</pre>
          <ul>
              {#each data.projects as project (project.name)}
                   <li>
                       <a href={p(`/project/${project.name}`)}>View {project.name}</a>
                   </li>
              {/each}
          </ul> 
        </div>
    </svelte:fragment>
    
</AccountLayout>