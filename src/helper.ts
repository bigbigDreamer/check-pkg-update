import {execSync} from 'node:child_process';
import {request} from 'undici';
import registryUrl from 'registry-url';

const standardHeaders: Record<string, string> = {
    accept: 'application/vnd.npm.install-v1+json; q=1.0, application/json; q=0.8, */*',
};

export async function checkForLatestVersion(pkgName: string): Promise<string> {
    return request(`${registryUrl()}/${pkgName}`, {method: 'GET', headers: standardHeaders}).then(async response => response.body.json()).then(response => response?.['dist-tags']?.latest as string).catch(() => execSync(`npm view ${pkgName} version`).toString().trim());
}
