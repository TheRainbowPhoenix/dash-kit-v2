<script lang="ts">
    import '$ui/global.css'

	import { page } from "$app/stores";
	import Sidebar from "$lib/elements/account/sidebar.svelte";
    import { base } from '$app/paths';

    export let breadcrumbs; 
    export let title = "Account";

    const onClickLogout = async () => {
        console.log("TODO: sign out")
    }

    const p = (path: string) => `${base}${path}`.replaceAll("//", "/")

    const sectionsWithHeaders: any[] = [
        {
            heading: 'Projects',
            key: 'projects',
            links: [
                {
                    isActive: $page.url.pathname === p(`/projects`),
                    label: 'All projects',
                    href: p('/projects'),
                    key: 'all-projects-item',
                },
            ],
        }, {
            heading: 'Account',
            key: 'account',
            links: [
              {
                isActive: $page.url.pathname === p(`/account/me`),
                icon: `${base}/img/user.svg`,
                label: 'Preferences',
                href: p(`/account/me`),
                key: `/account/me`,
              },
              {
                isActive: $page.url.pathname === p(`/account/tokens`),
                icon: `${base}/img/user.svg`,
                label: 'Access Tokens',
                href: p(`/account/tokens`),
                key: `/account/tokens`,
              },

              {
                isActive: $page.url.pathname === p(`/account/security`),
                icon: `${base}/img/user.svg`,
                label: 'Security',
                href: p(`/account/security`),
                key: `/account/security`,
              },
              {
                isActive: $page.url.pathname === p(`/account/audit`),
                icon: `/img/user.svg`,
                label: 'Audit Logs',
                href: p(`/account/audit`),
                key: `/account/audit`,
              },
            ],
          },     {
            key: 'logout-link',
            links: [
              {
                key: `logout`,
                icon: '/icons/feather/power.svg',
                label: 'Log out',
                href: undefined,
                onClick: onClickLogout,
              },
            ],
          },
    ]
</script>

<svelte:head>
    <meta name="description" content="Dashboard Studio" />
</svelte:head>


<div class="account">
    <div class="h-screen min-h-[0px] basis-0 flex-1">
        <Sidebar 
            title={title}
            hideSidebar={false}
            breadcrumbs={breadcrumbs}
            sections={sectionsWithHeaders}>
            <slot />
        </Sidebar>
    </div>
</div>
