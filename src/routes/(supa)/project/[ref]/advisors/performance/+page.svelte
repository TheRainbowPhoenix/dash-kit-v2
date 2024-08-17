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
    },{
      key: `project-advisors`,
      label: "Advisors",
    },{
      key: `advisors-performance`,
      label: "Performance",
    },
  ]}>
    
    <svelte:fragment>
        <div class="w-full mx-auto mt-4 space-y-6 p-4 max-w-7xl">
                <div>
                    <h1 class="text-3xl">Performance for {data.name}</h1>
                </div>
              <br/>
              <p>TODO</p>

                <div>
                    <a href={p(`/project/${data.name}`)}>Back to Project</a>
                </div>
                
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