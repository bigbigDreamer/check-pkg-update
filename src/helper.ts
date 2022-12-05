import { request } from "undici";
import registryUrl from 'registry-url';
import { execSync } from 'child_process';

const standardHeaders = {
    accept: 'application/vnd.npm.install-v1+json; q=1.0, application/json; q=0.8, */*',
}

export function checkForLatestVersion(pkgName: string) {
    return request(`${registryUrl()}/${pkgName}`, { method: 'GET', headers: standardHeaders }).then(res => res.body.json()).then(res => res?.['dist-tags']?.latest).catch(() => execSync(`npm view ${pkgName} version`).toString().trim() )
}
