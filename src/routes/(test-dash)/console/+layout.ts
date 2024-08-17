import { Dependencies } from '$lib/constants';
import { api } from '$lib/stores/api';
import { isCloud } from '$lib/system';
import type { LayoutLoad } from './$types';

export const load: LayoutLoad = async ({ fetch, depends, parent }) => {
    await parent(); // ensure user is authenticated before proceeding

    depends(Dependencies.RUNTIMES);
    depends(Dependencies.SHELL_VARIABLES);

    // const { endpoint } = api.shell.client.config;
    // const versionPromise = fetch(`${endpoint}/health/version`, {
    //     headers: {}
    // }).then((response) => response.json() as { version?: string });

    // const [data, variables] = await Promise.all([versionPromise, variablesPromise]);
  
    // let plansInfo = new Map<Tier, Plan>();
    // if (isCloud) {
    //     const plansArray = await sdk.forConsole.billing.getPlansInfo();
    //     plansInfo = plansArray.plans.reduce((map, plan) => {
    //         map.set(plan.$id as Tier, plan);
    //         return map;
    //     }, new Map<Tier, Plan>());
    // }
    
    return {}
};

    