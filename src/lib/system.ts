export enum Mode {
    CLOUD = 'cloud',
    SELF_HOSTED = 'self-hosted'
}

export const VARS = {
    API_ENDPOINT: import.meta.env?.VITE_API_ENDPOINT?.toString() as string | undefined,
    DEPLOY_MODE: import.meta.env?.VITE_DEPLOY_MODE?.toString() as string | undefined
};

export const ENV = {
    DEV: import.meta.env.DEV,
    PROD: import.meta.env.PROD,
    PREVIEW: import.meta.env?.VERCEL === '1',
    TEST: !!import.meta.env?.VITEST
};

export const MODE = VARS.DEPLOY_MODE === Mode.CLOUD ? Mode.CLOUD : Mode.SELF_HOSTED;
export const isCloud = MODE === Mode.CLOUD;
export const isSelfHosted = MODE !== Mode.CLOUD;
